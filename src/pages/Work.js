import React from 'react'
import Template from '../components/Template_1';
import Rainfire from '../img/MacBook-Pro-Rainfire.png'
import Backlinks from '../img/Backlinks-Tracker.png'
import JPLewis from '../img/JP-Lewis-Group.png'
import pizzaBook from '../img/PizzaBook-Home.png'
import customDashboardUI from '../img/customDashboardUI.png'
import Appointmentwale from '../img/Appointmentwale.png'
import Alternativehealthline from '../img/Alternative-Healthline.png'

export default function Work(props) {

  // Object For Resume Template to be passed as props
  let rainfireObj = {
    theme: props.theme,
    h1: '1). Rainfire.in',
    span: 'Online Store',
    description: 'Project Summary: Rainfire.in is an online selling store designed & developed by me for my non-Upwork client. This a full stack project built from scratch with HTML, CSS, Javascript, jQuery, and PHP with AJAX and MYSQL.',
    skills: ["HTML", "CSS", "Javascript", "jQuery", "PHP With Ajax", "MYSQL", "Hosting"],
    btnText: 'Visit Site',
    btnIcon: 'link',
    linkTo: 'http://rainfire.in/',
    imgSrc: Rainfire,
    figcaption: "MacBook Pro"
  }
  let jpLewisGroupObj = {
    theme: props.theme,
    h1: '2). JP LEWIS GROUP, LLC',
    span: 'Landing Page',
    description: 'Designed, Developed, and hosted a landing page for an international cleint:  "James Lewis Group LLC". The deliverables were a simple and elegant landing page built with pure HTML, CSS, Javascript.',
    skills: ["HTML", "CSS", "Javascript", "Responsive Web Design", "GoDaddy Hosting"],
    btnText: 'Visit Site',
    btnIcon: 'link',
    linkTo: 'https://jplewisgroup.com/',
    imgSrc: JPLewis
  }
  let backlinksObj = {
    theme: props.theme,
    h1: '3). Backlinks Tracker',
    span: 'Tool',
    description: 'Backlinks Tracker is Free SEO Tool that can be used by Digital marketers and bloggers. This tool helps you find out how many backlinks your domain have. This tool provides you with different metrics like total backlinks, DoFollow links, NoFollow links, total domains reffering to your domain, total number of pages that points to your domain.',
    skills: ["HTML", "CSS", "Javascript", "API Integration"],
    btnText: 'Visit Site',
    btnIcon: 'link',
    linkTo: 'https://jatindahiya100.github.io/backlinks-tracker/',
    imgSrc: Backlinks
  }

  let pizzabookObj = {
    theme: props.theme,
    h1: '4). PizzaBook',
    span: '-A Food Order Web App',
    description: 'A Food ordering web app with add to cart and Custom Admin Panel for managing and tracking of orders',
    skills: ["HTML", "CSS", "Javascript", "Add to Cart"],
    btnText: 'Source Code',
    btnIcon: 'logo-github',
    linkTo: 'https://github.com/jatindahiya100/pizzaBook',
    imgSrc: pizzaBook
  }

  let customDahboardObj = {
    theme: props.theme,
    h1: '5). Custom Dashboard UI',
    span: 'Upwork',
    description: 'Client Name: Faizy Jamal. Location: United States (Richmond). Project Summary: Designed and Developed a user-friendly, responsive and eye astounding custom dashboard for his website',
    skills: ["HTML", "CSS", "Javascript", "UI / UX Design", "Responsive Web Design"],
    btnText: 'Source Code',
    btnIcon: 'logo-github',
    linkTo: 'https://github.com/jatindahiya100/faizy',
    imgSrc: customDashboardUI
  }

  let appointmentwaleObj = {
    theme: props.theme,
    h1: '6). E-Appointment',
    span: 'Booking System',
    description: 'A web portal for salons where their visitors can have schedule appointments and track its live status so that they can visit the respective salon on time',
    skills: ["HTML", "CSS", "Javascript", "jQuery", "PHP", "MYSQL"],
    btnText: 'Source Code',
    btnIcon: 'logo-github',
    linkTo: 'https://github.com/jatindahiya100/appointment',
    imgSrc: Appointmentwale
  }

  let alternativehealthline = {
    theme: props.theme,
    h1: '7). Wordpress',
    span: 'Health Blog',
    description: 'www.alternativehealthline.com is a wordpress health blog designed, developed, hosted and maintained by me',
    skills: ["Wordpress"],
    btnText: 'Visit Site',
    btnIcon: 'link',
    linkTo: 'https://alternativehealthline.com/',
    imgSrc: Alternativehealthline
  }




  return (
    <>
      <Template myObj={rainfireObj} />
      <Template myObj={jpLewisGroupObj} />
      <Template myObj={backlinksObj} />
      <Template myObj={pizzabookObj} />
      <Template myObj={customDahboardObj} />
      <Template myObj={appointmentwaleObj} />
      <Template myObj={alternativehealthline} />
    </>
  )
}
