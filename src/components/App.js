import '../components/css/App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Home from './Home';
import Work from './Work';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  if (localStorage.getItem('defaultTheme') === null) {
    localStorage.setItem('defaultTheme', 'dark');
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
    <Router>
      <Navbar theme={defaultTheme} toogleTheme={toogleTheme} />
      <Routes>
        <Route path='/' element={<Home theme={defaultTheme} />} />
        <Route path='/work' element={<Work />} />
      </Routes>
      <Footer theme={defaultTheme} />
    </Router>
  );
}

export default App;
