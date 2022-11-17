import React from 'react'
import './css/Home.css'
import homeImage from './img/portrait.webp'

export default function Home() {
    return (
            <div className='home'>
                <div className="colm">
                    <h1 className='text-dark'>Elegant UI/UX design beyond just putting pixels together.</h1>
                    <p className='text-xtra-light'>I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.

                    </p>
                </div>
                <div className="colm">
                    <img className='home-img' src={homeImage} alt="" />
                </div>
            </div>
    )
}
