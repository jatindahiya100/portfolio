import React from 'react'
import './css/Template_1.css'
import './css/EmailValidator.css'
import email_validation from './img/email_validation_api.png'
// setTimeout(() => {
//     fetch('https://api.emailvalidation.io/v1/info?email=support@emailvalidation.io', {
//         headers: {
//             apikey: 'process.env.REACT_APP_API_KEY'
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         });
// }, 3000);

var arr = {
    "email": "support@emailvalidation.io",
    "user": "support",
    "domain": "emailvalidation.io",
    "smtp_check": true,
    "mx_found": true,
    "did_you_mean": "",
    "role": true,
    "disposable": false,
    "score": 0.64,
    "free": false,
    "format_valid": true,
    "catch_all": true
}

export default function EmailValidator(props) {

    return (
        <div className={`EmailValidator grid center-grid-item bg-${props.theme}`}>
            <div className="grid-item">
                <h1 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>Email Validation Tool <span>Try it yourself</span></h1>
                <form>
                    <input className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} type="email" placeholder='Email Address' />
                    <button>Validate Email</button>
                </form>
                <div className={`response bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
                    <table>
                        <tbody className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                            <tr>
                                <td>Email</td>
                                <td>
                                    {arr["email"]}<ion-icon name={`${arr["smtp_check"] === true ? 'checkmark-circle-outline' : 'close-circle'}`}></ion-icon>
                                </td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>{arr["user"]}</td>
                            </tr>
                            <tr>
                                <td>domain</td>
                                <td>{arr["domain"]}</td>
                            </tr>
                            <tr>
                                <td>SMTP Check</td>
                                <td>
                                    <ion-icon name={`${arr["smtp_check"] === true ? 'checkmark-circle-outline' : 'close-circle'}`}></ion-icon>
                                </td>
                            </tr>
                            <tr>
                                <td>disposable</td>
                                <td>
                                    <ion-icon name={`${arr["disposable"] === true ? 'checkmark-circle-outline' : 'close-circle'}`}></ion-icon>
                                </td>
                            </tr>
                            <tr>
                                <td>Free</td>
                                <td>
                                    <ion-icon name={`${arr["free"] === true ? 'checkmark-circle-outline' : 'close-circle'}`}></ion-icon>
                                </td>
                            </tr>
                            <tr>
                                <td>Valid Format</td>
                                <td>
                                    <ion-icon name={`${arr["format_valid"] === true ? 'checkmark-circle-outline' : 'close-circle'}`}></ion-icon>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
