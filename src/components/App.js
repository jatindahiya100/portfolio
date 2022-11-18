import '../components/css/App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';

import Home from './Home';

function App() {
  var theme;

  if (typeof Storage !== "undefined") {
    // Yes! localStorage and sessionStorage support!
    if (localStorage.getItem("defaultTheme") !== null) {
      theme = localStorage.getItem("defaultTheme");
    } else {
      theme = 'light';
    }
  }
  else {
    console.log("// Sorry! No web storage support..");
  }
  const [defaultTheme, setTheme] = useState(theme);
  localStorage.setItem("defaultTheme", defaultTheme);

  window.addEventListener("load", function () {
    if (localStorage.getItem("defaultTheme") === 'light') {
      setTheme("light");
      document.body.classList = "bg-light";
    } else {
      setTheme("dark");
      document.body.classList = "bg-dark";
    }
  });

  // Dark Mode / Light Mode Function
  const toggleMode = () => {
    if (localStorage.getItem("defaultTheme") === 'light') {
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
