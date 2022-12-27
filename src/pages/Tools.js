import React from 'react'
import '../css/tools.css'
import gmailIcon from '../img/icons/gmail.png'
import keywordIcon from '../img/icons/keyword.png'
import youtubeIcon from '../img/icons/youtube.png'
import instagramIcon from '../img/icons/instagram.png'
import EmailValidator from '../components/EmailValidator';

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
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Validate any email address and decide whether you should block it or not.</p>
              <button className='secondary-btn'>Try it now</button>
            </div>
          </div>

          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={keywordIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Keyword Research</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Find out trending keywords that will help you rank your blog on google</p>
              <button className='secondary-btn'>Launching Soon</button>
            </div>
          </div>

          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={youtubeIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Youtube Title Generator</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Get AI generated youtube videos titles</p>
              <button className='secondary-btn'>Launching Soon</button>
            </div>
          </div>

          <div className={`tool bg-${props.theme === 'light' ? 'light' : 'slight-dark'}`}>
            <img src={instagramIcon} alt="" />
            <div className="aboutTool">
              <label className={`text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="toolName">Trending Instagram #Hashtags</label>
              <p className={`text-xtra-${props.theme === 'light' ? 'light' : 'dark'}`}>Target &amp; reach a larger audience by using trending hashtags in your posts.</p>
              <button className='secondary-btn'>Launching Soon</button>
            </div>
          </div>

        </div>
      </div>
      <EmailValidator theme={props.theme} />
    </div>
  )
}