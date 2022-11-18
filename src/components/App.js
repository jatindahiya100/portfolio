import '../components/css/App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';

import Home from './Home';

function App() {
  if (localStorage.getItem('defaultTheme') === null) {
    localStorage.setItem('defaultTheme', 'light');
  }

  const [defaultTheme, setTheme] = useState(localStorage.getItem('defaultTheme'));
  localStorage.setItem('defaultTheme', defaultTheme);

  // Dark Mode / Light Mode Function
  const toogleTheme = () => {
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
      <Navbar theme={defaultTheme} toogleTheme={toogleTheme} />
      <Home theme={defaultTheme} />

    </>
  );
}

export default App;
