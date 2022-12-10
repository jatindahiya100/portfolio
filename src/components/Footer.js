import React from 'react'
import './css/Footer.css'
import { Link } from "react-router-dom"


export default function Footer(props) {
  return (
    <>
      <footer className={`bg-${props.theme}`}>
        <div className="newsletter">
          <h2>Drop your email. We'll get in touch!</h2>
          <div>
            <input type="email" placeholder='Email Address' />
            <button>Subscribe</button>
          </div>
        </div>
        <ul>
          <label htmlFor="footer-title">Quick Links</label>
          <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/portfolio-react.js">Home <ion-icon name="home"></ion-icon></Link></li>
          <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/hire">Hire Me <ion-icon name="ribbon"></ion-icon></Link></li>
          <li><Link className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} to="/work">Work <ion-icon name="logo-react"></ion-icon></Link></li>
          <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="mailto:dahiya2704@gmail.com">Chat <ion-icon name="logo-google"></ion-icon></a></li>
        </ul>

        <ul>
          <label htmlFor="footer-title">Social Links</label>
          <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://github.com/jatindahiya100?tab=repositories" rel="noreferrer">Github <ion-icon name="logo-github"></ion-icon></a></li>
          <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://www.linkedin.com/in/jatin-dahiya-325b93200/" rel="noreferrer">Linkedin <ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="https://www.upwork.com/freelancers/~012d6eb926a1f7a86a">Upwork<ion-icon name="logo-paypal"></ion-icon></a></li>

        </ul>
      </footer>
      <div className="copyright">
        <label htmlFor="" className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>&#169; {new Date().getFullYear()} Whitehell DevOps. All rights reserved</label>
      </div>
    </>
  )
}
