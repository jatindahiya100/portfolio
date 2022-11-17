import '../components/css/App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Home from './Home';

function App() {

  const toggleMode = () => {
    if (defaultTheme === 'light') {
      setTheme("dark");
    } else {
      setTheme("light");
    }

  }
  const [defaultTheme, setTheme] = useState("light");

  return (
    <>
    <Navbar theme={defaultTheme} toggleMode={toggleMode} />
    <Home/>
    </>
  );
}

export default App;
