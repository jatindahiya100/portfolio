import React from 'react'
import './css/Home.css'
import collab from './img/collab.svg'


export default function Home(props) {
    return (
        <div className='grid'>
            <div className='grid-item'>
                <h1 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>Let’s collaborate to make something incredible. <span>Just like you</span></h1>
                <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>We provide integrated web design & development services. Innovative web solutions designed by experienced developers! We put the “kick” in kick-ass websites that look gorgeous no matter what device or browser visitors are using.
                </p>
                <div className="social-links">
                    <a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-whatsapp"></ion-icon></a>
                    <a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-github"></ion-icon></a>
                    <a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-google"></ion-icon></a>
                </div>
                <button>Work With Me <ion-icon name="shield-checkmark"></ion-icon></button>
            </div>
            <div className='grid-item'>
                <img className='home-img' src={collab} alt="" />
            </div>
        </div>
    )
}
