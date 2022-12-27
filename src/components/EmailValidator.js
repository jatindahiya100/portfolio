import React, { useState } from 'react'
import '../css/EmailValidator.css'
import email_validation from '../img/email_validation_api.png'

export default function EmailValidator(props) {
    const demoResponse = {
        "valid": true,
        "block": true,
        "disposable": false,
        "domain": "gmail.com",
        "text": "Looks okay",
        "reason": "Whitelisted",
        "risk": 8,
        "mx_host": "gmail-smtp-in.l.google.com",
        "possible_typo": [],
        "mx_ip": "172.253.115.26",
        "mx_info": "Using MX pointer gmail-smtp-in.l.google.com from DNS with priority: 5",
        "last_changed_at": "2020-04-14T20:33:28+02:00"
    }
    const [defaultResponse, setResponse] = useState(demoResponse);
    const [inputEmail, setinputEmail] = useState('john@example.com');

    const handleChange = (event) => {
        setinputEmail(event.target.value);
    }

    const validateEmail = (e) => {
        e.target.value = "Fetching...";
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f8bef181aemsha0a3b9003e00e4fp1a8db0jsna676ef08463e',
                'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
            }
        };

        fetch('https://mailcheck.p.rapidapi.com/?domain=' + inputEmail, options)
            .then(response => response.json())
            .then(response =>
                setResponse(response)
            )
            .catch(err => console.error(err));
    }

    return (
        <div className={`EmailValidator grid center-grid-item bg-${props.theme}`}>
            <div className="grid-item">
                <h1 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>Email Validation Tool <span>Try it yourself</span></h1>
                <form>
                    <input onChange={handleChange} className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} type="email" placeholder={inputEmail} />
                    <input type="button" value="Validate Email" onClick={validateEmail} />
                </form>
                <div className={`response bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
                    <table>
                        <tbody className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                            <tr>
                                <td>syntax</td>
                                <td>
                                    {defaultResponse["valid"] === true ? 'Valid' : 'Invalid'}
                                    <ion-icon name={`${defaultResponse["valid"] === true ? 'checkmark-circle-outline' : 'close-circle'}`}></ion-icon>
                                </td>
                            </tr>
                            <tr>
                                <td>Temporary Email</td>
                                <td>
                                    {defaultResponse["disposable"] === true ? 'Yes' : 'No'}
                                    <ion-icon name={`${defaultResponse["disposable"] === true ? 'checkmark-circle-outline' : 'close-circle'}`}></ion-icon>
                                </td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>
                                    {defaultResponse["text"]}
                                </td>
                            </tr>
                            <tr>
                                <td>Reason</td>
                                <td>
                                    {defaultResponse["reason"]}
                                </td>
                            </tr>
                            <tr>
                                <td>risk</td>
                                <td>
                                    {defaultResponse["risk"]}
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
