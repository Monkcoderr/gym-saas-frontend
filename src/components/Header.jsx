import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the hook

function Header() {
  const { user, logout } = useAuth(); // Get user and logout function

  return (
    <header style={{ padding: '20px', background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <h3>Gym SaaS Manager</h3>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        
        {/* CONDITIONAL RENDERING */}
        {user ? (
          <>
            <span style={{ marginRight: '10px', fontWeight: 'bold' }}>Hi, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
export default Header;