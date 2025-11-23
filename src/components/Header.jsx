// 1. Import Link
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '10px', background: '#eee' }}>
      <nav>
        {/* 2. Use Link instead of 'a' tags */}
        {/* BAD: <a href="/">Home</a> */}
        
        {/* GOOD: */}
        <Link to="/" style={{ margin: '10px' }}>Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;