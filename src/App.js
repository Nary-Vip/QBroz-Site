import './App.css';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar/>
      <LandingPage/>
      <Services/>
    </div>
  );
}

export default App;
