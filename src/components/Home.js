import React from 'react'
import './css/Home.css'
import collab from './img/collab.svg'
import design from './img/design.svg'


export default function Home(props) {
    return (
        <>
        <div className='home'>
            <div className="colm">
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
            <div className="colm">
                <img className='home-img' src={collab} alt="" />
            </div>
        </div>

        <div className='home'>
        <div className="colm">
                <img className='home-img' src={design} alt="" />
            </div>
            <div className="colm">
                <h1 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>Elegant <span>UI/UX design</span> beyond just putting pixels together.</h1>
                <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Custom web design can be the difference between a mediocre website and an awesome one. If you want your website to stand out from the competition, you need a stand-out design company.
                </p>
                <div className="social-links">
                    <a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-whatsapp"></ion-icon></a>
                    <a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-linkedin"></ion-icon></a>
                    <a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-github"></ion-icon></a>
                    <a className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/"><ion-icon name="logo-google"></ion-icon></a>
                </div>
                <button>Explore Designs <ion-icon name="shield-checkmark"></ion-icon></button>
            </div>
        </div>
        </>
    )
}
