import './App.css';
import { useState } from "react";
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import { ThemeContext } from './context/Context';



function App() {

  const [theme, setTheme] = useState("light");
  
  let style;

    if (theme === "dark") {
        style = { background: "black", color: "white" };
    }
    else if (theme === "light") {
        style = { background: "white", color: "black" };
    }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Router>
      <div style = {style} className="relative flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>

          <Route exact path="/about" element={<About/>}/>

          <Route path="*" element={<PageNotFound/>} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
