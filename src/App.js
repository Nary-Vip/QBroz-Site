import './App.css';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}/>

          <Route path="/about" element={<About/>}/>
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
