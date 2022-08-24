import { useState } from 'react';
import Alert from './component/Alert'
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  document.body.style.overflowX="hidden";
  document.body.style.overflowY="scroll"

  const [mode, setMode] = useState("navbar-light bg-light");

  const handleMode = () => {
    if (mode === "navbar-light bg-light") {
      setMode("navbar-dark bg-dark");
      document.body.style.backgroundColor = '#042743';
      
      showAlert("Dark mode has been enabled", "suceess")
    }
    else {
      setMode("navbar-light bg-light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "suceess")
    }

  }

  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2500);

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" home="Home" mode={mode} handleMode={handleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm heading="Try TextUtils - Word Counter, Characters Counter,
          Remove Extra spaces" mode={mode} showAlert={showAlert} />} />
          <Route exact path='/about' element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
