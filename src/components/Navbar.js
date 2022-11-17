import React from 'react'
import logo from "./img/jatindahiya.png";
import "./css/Navbar.css"

export default function Navbar(props) {

  const toggleMenu = () => {
    var menu = document.getElementsByClassName("nav-menu")[0];
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "inline-flex";
    } else {
      menu.style.display = "none";
    }
  }

  return (
    <div className={`navbar bg-${props.theme}`}>

      <img className='logo' src={logo} alt="" />

      <ul className="nav-menu">
        <li><a className={`text-${props.theme === 'light' ? 'light active' : 'light active'}`} href="/">Home <ion-icon name="home"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Profile <ion-icon name="ribbon"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Portfolio <ion-icon name="logo-react"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Chat <ion-icon name="chatbubbles"></ion-icon></a></li>
      </ul>



      <div className='nav-right-items'>

        <div onClick={toggleMenu} className="expand-menu">
          <ion-icon name="menu"></ion-icon>
        </div>

        <div onClick={props.toggleMode} className={`toggle-theme-btn bg-${props.theme === 'light' ? 'dark' : 'light'} text-${props.theme === 'light' ? 'light' : 'dark'}`}>
          <ion-icon name="sunny-outline"></ion-icon>
        </div>

      </div>
    </div>
  )
}
