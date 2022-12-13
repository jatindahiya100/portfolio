import React from 'react'
import { Link } from 'react-router-dom'
import './css/Footer.css'

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

      <div className="links">
        <ul>
          <li><Link to="/">Home <ion-icon name="home"></ion-icon></Link></li>
          <li><Link to="/work">Work <ion-icon name="logo-react"></ion-icon></Link></li>
          <li><Link to="/tools">Tools <ion-icon name="build"></ion-icon></Link></li>
          <li><Link to="/hire">Hire <ion-icon name="ribbon"></ion-icon></Link></li>
        </ul>
        <ul>
          <li><a href="/">FAQs <ion-icon name="help-circle"></ion-icon></a></li>
          <li><a href="/">Refund Policy <ion-icon name="refresh-circle"></ion-icon></a></li>
          <li><a href="/">Terms &amp; Conditions <ion-icon name="document"></ion-icon></a></li>
        </ul>
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
