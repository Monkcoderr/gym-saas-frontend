
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header/>
      <main style={{ padding: '20px', minHeight: '300px' }}>
       
        <Login />
      </main>
      <Footer/>
      
    </div>
  );
}

// We export this function so 'main.jsx' can use it
export default App;