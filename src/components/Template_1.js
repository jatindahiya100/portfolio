import React from 'react'
import './css/Template_1.css'
import { Link } from "react-router-dom"


export default function Template_1(props) {
    const handleClick = () => {
        if (props.myObj.linkTo != null) {
            window.open(props.myObj.linkTo);
        }
    };
    return (
        <div className={`grid center-grid-item bg-${props.myObj.theme}`}>
            <div className='grid-item'>
                <h1 className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`}>{props.myObj.h1} <span> {props.myObj.span} </span></h1>
                <p className={`text-xtra-${props.myObj.theme === 'light' ? 'light' : 'dark'}`}>{props.myObj.description}
                </p>
                <div className="social-links">
                    {
                        props.myObj.skills.map((skills, i) => {
                            return <Link className={`text-${props.myObj.theme === 'light' ? 'dark' : 'light'}`} key={i}>{skills}</Link>
                        })
                    }

                </div>
                <button onClick={handleClick}>{props.myObj.btnText} <ion-icon name={props.myObj.btnIcon}></ion-icon></button>
            </div>
            <div className='grid-item center-grid-item'>
                <figure>
                    <img onClick={handleClick} src={props.myObj.imgSrc} alt="" />
                    <figcaption className={`text-xtra-${props.myObj.theme === 'light' ? 'light' : 'dark'}`}>{props.myObj.figcaption}</figcaption>
                </figure>
            </div>
        </div>
    )
}
