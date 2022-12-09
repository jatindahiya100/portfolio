import React from 'react'
import './css/Template_1.css'
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Template_1(props) {
    const handleClick = () => {
        window.open(props.myObj.linkTo);
    };
    return (
        <div className={`grid bg-${props.myObj.theme}`}>
            <div className='grid-item'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`}>{props.myObj.h1} <span> {props.myObj.span} </span></h1>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={`text-xtra-${props.myObj.theme === 'light' ? 'light' : 'dark'}`}>{props.myObj.description}
                </p>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="social-links">
                    {
                        props.myObj.skills.map((skills, i) => {
                            return <Link className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`} key={i}>{skills}</Link>
                        })
                    }

                </div>
                <button data-aos="fade-up" data-aos-anchor-placement="top-bottom" onClick={handleClick}>{props.myObj.btnText} <ion-icon name={props.myObj.btnIcon}></ion-icon></button>
            </div>
            <div className='grid-item'>
                <img  data-aos="fade-up" data-aos-anchor-placement="top-bottom" src={props.myObj.imgSrc} alt="" />
            </div>
        </div>
    )
}
