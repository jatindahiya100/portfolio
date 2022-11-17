import React from 'react'
import logo from "./img/jatindahiya.png";
import "./css/Navbar.css"

export default function Navbar(props) {
  return (
    <div className={`navbar bg-${props.theme}`}>
      <img className='logo' src={logo} alt="" />

      <ul className="nav-menu">
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Home <ion-icon name="home"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Profile <ion-icon name="ribbon"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Portfolio <ion-icon name="logo-react"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Chat <ion-icon name="chatbubbles"></ion-icon></a></li>
      </ul>

      <div onClick={props.toggleMode} className={`toggle-theme-btn text-${props.theme === 'light' ? 'dark' : 'light'}`}>
        <ion-icon name="sunny-outline"></ion-icon>
      </div>
    </div>
  )
}
