import React from 'react'
import './css/Footer.css'
import { Link } from "react-router-dom"


export default function Footer(props) {
  return (
    <footer className={`bg-${props.theme}`}>
      <ul>
        <label htmlFor="footer-title">Quick Links</label>
        <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/portfolio-react.js">Home <ion-icon name="home"></ion-icon></Link></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://www.upwork.com/workwith/jatindahiya">Hire Me <ion-icon name="ribbon"></ion-icon></a></li>
        <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/work">Work <ion-icon name="logo-react"></ion-icon></Link></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="mailto:jatindahiya100@gmail.com">Contact <ion-icon name="chatbubbles"></ion-icon></a></li>
      </ul>

      <ul>
        <label htmlFor="footer-title">Services</label>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">UI Mockups<ion-icon name="planet"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Web Design & Development <ion-icon name="code-slash"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Web Hosting <ion-icon name="cloud-done"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Consultancy <ion-icon name="analytics"></ion-icon></a></li>
      </ul>

      <ul>
        <label htmlFor="footer-title">Social Links</label>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://github.com/jatindahiya100?tab=repositories" rel="noreferrer">Github <ion-icon name="logo-github"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://www.linkedin.com/in/jatin-dahiya-325b93200/" rel="noreferrer">Linkedin <ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://wa.me/919485901109?text=[Hello Jatin, I Want to connect with you. This message is sent through your website link]">Whatsapp <ion-icon name="logo-whatsapp"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="mailto:jatindahiya100@gmail.com">Email <ion-icon name="logo-google"></ion-icon></a></li>
      </ul>
    </footer>
  )
}
