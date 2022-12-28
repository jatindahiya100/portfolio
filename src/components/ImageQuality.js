import React, { useState } from 'react'
import '../css/EmailValidator.css'
import imagequality from '../img/imagequality.png'

export default function ImageQuality(props) {
    const demoResponse = {
        "score": 32,
        "description": "good"
    }
    const [defaultResponse, setResponse] = useState(demoResponse);
    const [inputUrl, setInputUrl] = useState('Paste Image Url');

    const handleChange = (event) => {
        setInputUrl(event.target.value);
    }

    const validateEmail = (e) => {

        if (inputUrl.length > 0 && inputUrl !== "Paste Image Url") {
            e.target.value = "Fetching...";
            var myHeaders = new Headers();
            myHeaders.append("apikey", "98MKUrNIvUGk1IbGc4Oa6Jw8q8pQ4TYS");

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };

            fetch("https://api.apilayer.com/image_quality/url?url=" + inputUrl, requestOptions)
                .then(response => response.json())
                .then(response =>
                    setResponse(response)
                )
                .catch(err => console.error(err));
        } else {
            alert("Enter Valid Url");
        }
    }

    return (
        <div className={`grid center-grid-item bg-${props.theme}`}>
            <div className="grid-item center-grid-item">
                <figure>
                    <img src={imagequality} alt="" />
                </figure>
            </div>
            <div className="grid-item">
                <h1 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>Image Quality Check <span>Try It Now</span></h1>
                <ul className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>
                You can use this service for: <br />
                    <li>Determining the best image of the product to display on the front page</li>
                    <li>Sort the products/listings based on the image quality score on your e-commerce site</li>
                    <li>Show only the high-quality images for adverts</li>
                    <li>Only permitting high-quality images for your listing/product</li>
                </ul>

                <form>
                    <input onChange={handleChange} className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} type="text" placeholder={inputUrl} />
                    <input className='primary-btn' type="button" value="Check Quality" onClick={validateEmail} />
                </form>
                <div className={`response bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
                    <table>
                        <tbody className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                            <tr>
                                <td>Score</td>
                                <td className={`${parseInt(defaultResponse["score"]) > 30 ? 'success' : 'error'}`}>
                                    {parseInt(defaultResponse["score"])}
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td className={`${parseInt(defaultResponse["score"]) > 30 ? 'success' : 'error'}`}>
                                    {defaultResponse["description"]}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}
