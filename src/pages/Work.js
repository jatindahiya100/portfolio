import React from 'react'
import Template from '../components/Template_1';
import Compressor from '../img/Compressor-io.png'
import SideBird from '../img/Sidebird-Twitter-fanbase-builder.png'
import ClearBit from '../img/Clearbit.png'
import JPLewis from '../img/JP-Lewis-Group.png'
import customDashboardUI from '../img/customDashboardUI.png'

export default function Work(props) {

  // Array of objects
  const dataToBePopulated = [
    {
      theme: props.theme,
      h1: '1). compressor.io',
      span: 'Compress Images',
      description: 'Sidebird.io was to create a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they aare busy or inactive.',
      skills: ["React", "Next.js", "Node.js", "Payment Gateway Integration"],
      btnText: 'Visit Site',
      btnIcon: 'link',
      linkTo: 'https://compressor.io/',
      imgSrc: Compressor
    },
    {
      theme: props.theme,
      h1: '2). SideBird',
      span: 'The Future Twitter',
      description: 'Sidebird.io is a unique Twitter tool that enables passive growth through smart retweet automations. The emphasis was on providing non-spammy retweets to help users grow their Twitter presence even when they are busy or inactive.',
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS"],
      btnText: 'Visit Site',
      btnIcon: 'link',
      linkTo: 'https://www.sidebird.io/',
      imgSrc: SideBird
    },
    {
      theme: props.theme,
      h1: '3). Clearbit',
      span: '',
      description: 'Clearbit is a leading provider of B2B data intelligence, empowering go-to-market teams with robust company, contact, and IP information. Their comprehensive dataset, gathered from diverse sources, helps businesses enhance their targeting, personalization, and outreach strategies. With APIs and integrations, Clearbit enables seamless integration of their data into existing platforms, offering go-to-market teams a valuable resource for effective decision-making and customer engagement.',
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS"],
      btnText: 'Visit Site',
      btnIcon: 'link',
      linkTo: 'https://clearbit.com/',
      imgSrc: ClearBit
    },
    {
      theme: props.theme,
      h1: '4). JP LEWIS GROUP, LLC',
      span: 'Landing Page',
      description: 'Designed, Developed, and hosted a landing page for an international cleint:  "James Lewis Group LLC". The deliverables were a simple and elegant landing page built with pure HTML, CSS, Javascript.',
      skills: ["HTML", "CSS", "Javascript", "Responsive Web Design", "GoDaddy Hosting"],
      btnText: 'Visit Site',
      btnIcon: 'link',
      linkTo: 'https://jplewisgroup.com/',
      imgSrc: JPLewis
    },
    {
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
  ]

  return (
    <>
      <Template myObj={dataToBePopulated[0]} />
      <Template myObj={dataToBePopulated[1]} />
      <Template myObj={dataToBePopulated[2]} />
      <Template myObj={dataToBePopulated[3]} />
      <Template myObj={dataToBePopulated[4]} />
    </>
  )
}
