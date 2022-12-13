import React from 'react'
import './css/Footer.css'
// import { Link } from "react-router-dom"


export default function Footer(props) {
  return (
    <footer>
      <div className={`newsletter-container`}>
        <div className="">
          <h3>Drop your email</h3> <br />
          <label htmlFor="">&amp; we'll get in touch soon</label>
        </div>
        <div className="">
          <form>
            <input type="email" placeholder='Email Address' />
            <button>Submit</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <h2>LOGO</h2>
        <div>
          <div className='join-me'>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
          <div className="copyright">Copyright &#169; 2022 Whitehell.Devops Inc. All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}
