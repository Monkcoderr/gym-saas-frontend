function Header() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <nav>
        <h3>Gym SaaS Manager</h3>
        {/* We will make these links work later */}
        <a href="#" style={{ marginRight: '10px' }}>Home</a>
        <a href="#">Login</a>
      </nav>
    </header>
  );
}

export default Header;