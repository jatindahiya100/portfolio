import React from 'react'
import { Link } from 'react-router-dom'
import './css/Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Footer(props) {
  return (
    <footer className={`bg-${props.theme === 'light' ? 'dark' : 'extra-dark'}`}>
      <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" className={`newsletter-container bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
        <div className="">
          <h3 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>Drop Your Email</h3>
          <label htmlFor="" className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>&amp; We'll Catch You Soon</label>
        </div>
        <div className="">
          <form>
            <input className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} type="email" placeholder='Email Address' />
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
