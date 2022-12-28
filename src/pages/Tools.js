import React from 'react'
import '../css/tools.css'
import gmailIcon from '../img/icons/gmail.png'
import keywordIcon from '../img/icons/keyword.png'
import EmailValidator from '../components/EmailValidator';
import ImageQuality from '../components/ImageQuality';

export default function Tools(props) {

  return (
    <div className={`toolsComponent bg-${props.theme}`}>
      <div className="toolsHolder">
        <h1 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>My Tools</h1>
        <div className="toolsLayout">
          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={gmailIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Email Validation</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Validate any email address and decide whether you should block it or not.</p>
              <button className='secondary-btn'>Use Tool</button>
            </div>
          </div>

          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={keywordIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Image Quality Assesment</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Determining the best image of the product to display on the front page</p>
              <button className='secondary-btn'>Use Tool</button>
            </div>
          </div>
        </div>
      </div>
      <div className="use-tool">
        <EmailValidator theme={props.theme} />
        <ImageQuality theme={props.theme}/>
      </div>
    </div>
  )
}