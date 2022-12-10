import '../components/css/App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Home from './Home';
import Work from './Work';
import Hire from './Hire';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './ScrollToTop';

function App() {
  if (localStorage.getItem('defaultTheme') === null) {
    localStorage.setItem('defaultTheme', 'light');
  }

  const [defaultTheme, setTheme] = useState(localStorage.getItem('defaultTheme'));
  localStorage.setItem('defaultTheme', defaultTheme);
  if (defaultTheme === 'dark') {
    document.body.classList = "bg-dark";
  } else {
    document.body.classList = "bg-light";
  }

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
      <ScrollToTop />
      <Navbar theme={defaultTheme} toogleTheme={toogleTheme} />
      <Routes>
        <Route path='/portfolio-react.js' element={<Home theme={defaultTheme} />} />
        <Route path='/work' element={<Work theme={defaultTheme} />} />
        <Route path='/hire' element={<Hire theme={defaultTheme} />} />
      </Routes>
      <Footer theme={defaultTheme} />
    </Router>
  );
}
// https://www.upwork.com/workwith/jatindahiya

export default App;
