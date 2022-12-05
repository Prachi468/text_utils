import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";

function App() {

  const [darkMode, setdarkMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,

    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    if (darkMode === 'light') {
      setdarkMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode is enabled', 'success');
    }
    else {
      setdarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');

    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar Title="TextUtils" aboutText="About" mode={darkMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          <Routes>
            <Route path="/" element={< TextForm heading="Enter the text to analyze " showAlert={showAlert} mode={darkMode} />} />
          </Routes>
          <Routes>
            <Route path="/TextForm" element={< TextForm heading="Enter the text to analyze " showAlert={showAlert} mode={darkMode} />} />
          </Routes>
          {/* <Routes>
            <Route path="/About" element={<About />} />
          </Routes> */}
      </BrowserRouter>
    </>
  );
}
export default App;


