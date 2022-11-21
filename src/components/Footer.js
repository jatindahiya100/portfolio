import React from 'react'
import './css/Footer.css'

export default function Footer(props) {
  return (
    <footer className={`bg-${props.theme}`}>
      <ul>
        <label htmlFor="footer-title">Quick Links</label>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Home <ion-icon name="home"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Hire Me <ion-icon name="ribbon"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Work <ion-icon name="logo-react"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Contact <ion-icon name="chatbubbles"></ion-icon></a></li>
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
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://github.com/jatindahiya100" target="_blank">Github <ion-icon name="logo-github"></ion-icon></a></li>
        <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://www.linkedin.com/in/jatin-dahiya-325b93200/" target="_blank">Linkedin <ion-icon name="logo-linkedin"></ion-icon></a></li>
        {/* <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Whatsapp <ion-icon name="logo-whatsapp"></ion-icon></a></li> */}
        {/* <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/">Email <ion-icon name="logo-google"></ion-icon></a></li> */}
      </ul>
    </footer>
  )
}
