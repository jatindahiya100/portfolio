import React from 'react'
import Template from './Template_1';
import './css/Work.css'
import ResumePhoto from './img/portrait.webp'
import resume from './img/resume.pdf';

export default function Work(props) {

  // Object For Resume Template to be passed as props
  let rainfireObj = {
    theme: props.theme,
    h1: '1). Rainfire.in',
    span: '',
    description: '',
    btnText: 'View',
    btnIcon: 'rocket',
    linkTo: 'http://rainfire.in/',
    imgSrc: ResumePhoto
  }
  let jpLewisGroupObj = {
    theme: props.theme,
    h1: '2). JP LEWIS GROUP, LLC',
    span: '',
    description: '',
    btnText: 'View',
    btnIcon: 'rocket',
    linkTo: 'https://jplewisgroup.com/',
    imgSrc: ResumePhoto
  }
  let backlinksObj = {
    theme: props.theme,
    h1: '3). Backlinks Tracker',
    span: '',
    description: '',
    btnText: 'View',
    btnIcon: 'rocket',
    linkTo: resume,
    imgSrc: ResumePhoto
  }

  let pizzabookObj = {
    theme: props.theme,
    h1: '4). PizzaBook',
    span: '',
    description: '',
    btnText: 'View',
    btnIcon: 'rocket',
    linkTo: resume,
    imgSrc: ResumePhoto
  }
  let appointmentwaleObj = {
    theme: props.theme,
    h1: '5). AppointmentWale',
    span: '',
    description: '',
    btnText: 'View',
    btnIcon: 'rocket',
    linkTo: resume,
    imgSrc: ResumePhoto
  }
  
  


  return (
    <>
      <Template myObj={rainfireObj} />
      <Template myObj={jpLewisGroupObj} />
      <Template myObj={backlinksObj} />
      <Template myObj={pizzabookObj} />
      <Template myObj={appointmentwaleObj} />
    </>
  )
}
