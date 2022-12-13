import React from 'react'
import './css/Template_1.css'
import './css/EmailValidator.css'
import email_validation from './img/email_validation_api.png'





export default function EmailValidator(props) {
    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log(API_KEY)

    const ValidateEmail = (e) => {
        e.preventDefault();

        // fetch('https://api.emailvalidation.io/v1/info?email=support@emailvalidation.io', {
        //     headers: {
        //         apikey: process.env.REACT_APP_API_KEY,
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     });
    }

    return (
        <div className={`EmailValidator grid center-grid-item bg-${props.theme}`}>
            <div className="grid-item">
                <h1 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>Email Validation Tool <span>Try it yourself</span></h1>
                <form>
                    <input className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} type="email" placeholder='Email Address' />
                    <button onClick={ValidateEmail}>Validate Email</button>
                </form>
                <div className={`response bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>

                </div>
            </div>

            <div className="grid-item center-grid-item">
                <figure>
                    <img src={email_validation} alt="" />
                </figure>
            </div>

        </div>
    )
}
