import React, { useState } from 'react'
import logo from "./img/jatindahiya.png"
import "./css/Navbar.css"
import { Link, NavLink } from "react-router-dom"

export default function Navbar(props) {

  const [openMenu, closeMenu] = useState("menu");


  const toggleMenu = () => {
    var menu = document.getElementsByClassName("nav-menu")[0];
    if (menu.style.display === "none" || menu.style.display === "") {
      closeMenu("close-circle-outline")
      menu.style.display = "inline-flex";
    } else {
      menu.style.display = "none";
      closeMenu("menu")
    }
  }

  return (
    <div className={`navbar bg-${props.theme}`}>

      <Link to="/portfolio-react.js"><img className='logo' src={logo} alt="" /></Link>

      <ul className="nav-menu">
        <li><NavLink className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/portfolio-react.js">Home <ion-icon name="home"></ion-icon></NavLink></li>
        <li><NavLink className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/work">Work <ion-icon name="logo-react"></ion-icon></NavLink></li>
        <li><NavLink className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/hire">Hire Me <ion-icon name="ribbon"></ion-icon></NavLink></li>
        {/* <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="tel:+919485901109">Contact <ion-icon name="call"></ion-icon></a></li> */}
      </ul>



      <div className='nav-right-items'>

        <div onClick={toggleMenu} className={`expand-menu text-${props.theme === 'light' ? 'dark' : 'light'}`}>
          <ion-icon name={`${openMenu}`}></ion-icon>
        </div>

        <div onClick={props.toogleTheme} className={`toggle-theme-btn text-${props.theme === 'light' ? 'light' : 'yellow rotation'} bg-${props.theme === 'light' ? 'dark' : 'dark'}`}>
          <ion-icon name={props.theme === 'light' ? 'moon' : 'sunny-outline'}></ion-icon>
        </div>

      </div>
    </div>
  )
}
