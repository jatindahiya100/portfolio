import React, { useState } from 'react'
import logo from "./img/jatindahiya.png"
import "./css/Navbar.css"
import { Link, NavLink } from "react-router-dom"

export default function Navbar(props) {

  const [mobileMenuState, setMobileMenuState] = useState(false);

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 800) {
      var menu = document.querySelector(".navbar ul");
      menu.className = "nav-menu";
      setMobileMenuState(false);
    }
  })

  const toggleMenu = () => {
    var menu = document.querySelector(".navbar ul");
    if (menu.className === "nav-menu") {
      menu.className = "mobile-menu"
      setMobileMenuState(true);
    } else {
      menu.className = "nav-menu";
      setMobileMenuState(false);
    }
  }
  const handleClick = () => {
    var menu = document.querySelector(".navbar ul");
    menu.className = "nav-menu";
    setMobileMenuState(false);
  }

  return (
    <div className={`navbar bg-${props.theme}`}>

      <Link to="/"><img className='logo' src={logo} alt="" /></Link>

      <ul className="nav-menu">
        <li><NavLink onClick={handleClick} className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/">Home <ion-icon name="home"></ion-icon></NavLink></li>
        <li><NavLink onClick={handleClick} className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/work">Work <ion-icon name="logo-react"></ion-icon></NavLink></li>
        <li><NavLink onClick={handleClick} className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/tools">Tools <ion-icon name="build"></ion-icon></NavLink></li>
        <li><NavLink onClick={handleClick} className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/hire">Hire Me <ion-icon name="ribbon"></ion-icon></NavLink></li>
        {/* <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="tel:+919485901109">Contact <ion-icon name="call"></ion-icon></a></li> */}
      </ul>



      <div className='nav-right-items'>

        <div onClick={toggleMenu} className={`expand-menu text-${props.theme === 'light' ? 'dark' : 'light'}`}>
          <ion-icon name={`${mobileMenuState === false ? "menu" : "close-circle-outline"}`}></ion-icon>
        </div>

        <div onClick={props.toogleTheme} className={`toggle-theme-btn text-${props.theme === 'light' ? 'light' : 'yellow rotation'} bg-${props.theme === 'light' ? 'dark' : 'dark'}`}>
          <ion-icon name={props.theme === 'light' ? 'moon' : 'sunny-outline'}></ion-icon>
        </div>

      </div>
    </div>
  )
}
