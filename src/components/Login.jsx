import { useState } from 'react'; // 1. Import the hook
import { useNavigate } from 'react-router-dom';

// function Login() {
//   // 2. Create State
//   // 'email' is the current value. 'setEmail' is the function to update it.
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // 3. The Submit Handler
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Stop the page from reloading!
//     console.log('Login Submitted:', { email, password });
//     alert(`Login attempted with: ${email}`);
//   };

//   return (
//     <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '10px' }}>
//           <label>Email: </label>
//           <input
//             type="email"
//             // 4. Two-way binding (Controlled Component)
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email"
//             style={{ padding: '5px' }}
//           />
//         </div>

//         <div style={{ marginBottom: '10px' }}>
//           <label>Password: </label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             style={{ padding: '5px' }}
//           />
//         </div>

//         <button type="submit" style={{ padding: '5px 10px' }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }



function Login() {
  const [email, setEmail] = useState('');
  
  // 2. Initialize the hook
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ... (Assume we checked the password and it was correct) ...
    console.log("Login Success!");

    // 3. Force the user to go to the Home page
    navigate('/'); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;

