import React from 'react'
import '../css/designs.css'
import design1 from '../img/design1.png'
import design2 from '../img/design2.png'
import design3 from '../img/design3.png'
import design4 from '../img/design4.png'

export default function Designs() {
    return (
        <div className='my_designs_container'>
            <div className="design_wrapper">
                <h3>Web Designs</h3><br />
                <div className="design_grid">
                    <div className="design">
                        <img src={design1} alt="" />
                    </div>
                    <div className="design">
                        <img src={design2} alt="" />
                    </div>
                    <div className="design">
                        <img src={design3} alt="" />
                    </div>
                    <div className="design">
                        <img src={design4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
