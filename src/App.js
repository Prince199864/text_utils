import './App.css';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  window.onload = () => {
    if (mode === 'light') {
      // document.body.style.backgroundColor = "#d7d6cf";
      document.body.style.backgroundColor = "#accbed";
    }
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("success", "Dark Mode has been enabled");
    }
    else {
      setMode('light');
      // document.body.style.backgroundColor = "#d7d6cf";
      document.body.style.backgroundColor = "#accbed";
      showAlert("success", "Light Mode has been enabled");
    }
  }

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <Router>
      <Navbar homeText={'TextUtils'} aboutText={'About Us'} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4" style={{ minHeight: '50vh'}}>
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<AboutUs mode={mode} />} />
        </Routes>
      </div>
      <Footer mode={mode} />
    </Router>
  );
}

export default App;
