import '../components/css/App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';

import Home from './Home';

function App() {

  const detectCurrentTheme = () => {
    var setTheme;
    const theme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme === false) {
      setTheme = 'dark'
    } else {
      setTheme = 'light';
    }
    return setTheme;
  }



  var detectTheme = detectCurrentTheme();
  const [defaultTheme, setTheme] = useState(detectTheme);
  // Dark Mode / Light Mode Function
  const toggleMode = () => {
    if (defaultTheme === 'light') {
      setTheme("dark");
      document.body.classList = "bg-dark";
    } else {
      setTheme("light");
      document.body.classList = "bg-light";
    }
  }

  return (
    <>
      <Navbar theme={defaultTheme} toggleMode={toggleMode} />
      <Home theme={defaultTheme} />

    </>
  );
}

export default App;
