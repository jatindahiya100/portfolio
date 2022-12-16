import React from 'react'
import './css/tools.css'
import gmailIcon from './img/icons/gmail.png'
import calculatorIcon from './img/icons/calculator.png'
import keywordIcon from './img/icons/keyword.png'
import youtubeIcon from './img/icons/youtube.png'
import instagramIcon from './img/icons/instagram.png'
import EmailValidator from './EmailValidator';

export default function Tools(props) {

  return (
    <div className={`toolsComponent bg-${props.theme}`}>
      <div className="toolsHolder">
        <h1 className={`text-${props.theme === 'light' ? 'dark' : 'light'}`}>SEO Tools</h1>
        <div className="toolsLayout">
          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={gmailIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Email Validation</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maiores.</p>
              <button>Try it now</button>
            </div>
          </div>


          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={calculatorIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Calculator</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maiores.</p>
              <button>Launching Soon</button>
            </div>
          </div>


          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={keywordIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Keyword Research</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maiores.</p>
              <button>Launching Soon</button>
            </div>
          </div>

          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={youtubeIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Youtube Keywords Planner</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maiores.</p>
              <button>Launching Soon</button>
            </div>
          </div>

          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={instagramIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Instagram Hastags</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, maiores.</p>
              <button>Launching Soon</button>
            </div>
          </div>

        </div>
      </div>
      <EmailValidator theme={props.theme} />
    </div>
  )
}