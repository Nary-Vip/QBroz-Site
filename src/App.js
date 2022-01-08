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
import ContactUs from './components/ContactUs';
import ServiceIterator from './components/ServiceIterator';
import WritingsIterator from "./components/WritingsIterator";


function App() {

  const [theme, setTheme] = useState("light");
  
  let style;

    if (theme === "dark") {
        style = { background: "#171717", color: "#dfd8fd", transition:"0.3s ease-out" };
    }
    else if (theme === "light") {
        style = { background: "white", color: "#666565", transition:"0.4s ease-in-out" };
    }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <Router>
      <div>
      <div style = {style} className="relative flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>

          <Route exact path="/about" element={<About/>}/>

          <Route path="/contactus" element={<ContactUs/>}/>

          <Route path="/services" element={<ServiceIterator/>}/>

          <Route path="/writings" element={<WritingsIterator/>}/>

          <Route path="*" element={<PageNotFound/>} />

        </Routes>
        
      </div>
        <Footer />
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
