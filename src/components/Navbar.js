import React from 'react'
import logo from "./img/jatindahiya.png";
import "./css/Navbar.css"

export default function Navbar(props) {

  const handleClick = (event) => {
    event.preventDefault();
   

  }

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

      <ul className={`nav-menu bg-${props.theme}`}>
        <li><a onClick={handleClick} className={`text-${props.theme === 'light' ? 'light' : 'light'} active`} href="/">Home <ion-icon name="home"></ion-icon></a></li>
        <li><a onClick={handleClick} className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Hire Me <ion-icon name="ribbon"></ion-icon></a></li>
        <li><a onClick={handleClick} className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Work <ion-icon name="logo-react"></ion-icon></a></li>
        <li><a onClick={handleClick} className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Chat <ion-icon name="chatbubbles"></ion-icon></a></li>
      </ul>



      <div className='nav-right-items'>

        <div onClick={toggleMenu} className={`expand-menu text-${props.theme === 'light' ? 'dark' : 'light'}`}>
          <ion-icon name="menu"></ion-icon>
        </div>

        <div onClick={props.toogleTheme} className={`toggle-theme-btn text-${props.theme === 'light' ? 'light' : 'yellow rotation'} bg-${props.theme === 'light' ? 'dark' : 'dark'}`}>
          <ion-icon name={props.theme === 'light' ? 'moon' : 'sunny-outline'}></ion-icon>
        </div>

      </div>
    </div>
  )
}
