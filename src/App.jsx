import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        
        {/* RULE 1: If URL is "/" (root), show HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* RULE 2: If URL is "/login", show LoginPage */}
        <Route path="/login" element={<LoginPage />} />

      </Routes>
      
    </div>
  );
}

// We export this function so 'main.jsx' can use it
export default App;