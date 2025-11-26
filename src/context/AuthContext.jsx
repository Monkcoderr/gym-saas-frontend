import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [members, setMembers] = useState([]);
  const { user } = useAuth(); // Get the logged-in user (with token)
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Security Check: If no user, kick them out!
    if (!user) {
      navigate('/login');
      return;
    }

    // 2. Define the fetch function
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/members', {
          headers: {
            // THE MOST IMPORTANT LINE: Attach the token!
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setMembers(data); // Save the members to state
        } else {
          console.error('Failed to fetch members');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMembers();
  }, [user, navigate]); // Run this whenever 'user' changes

  return (
    <div>
      <h1>Gym Dashboard</h1>
      <p>Welcome, {user && user.name}</p>

      {members.length === 0 ? (
        <p>No members found. Start adding some!</p>
      ) : (
        <ul>
          {/* Loop through members and display them */}
          {members.map((member) => (
            <li 
              key={member._id} 
              style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}
            >
              <strong>{member.name}</strong> - {member.email} <br />
              <small>Plan: {member.membershipPlan}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;