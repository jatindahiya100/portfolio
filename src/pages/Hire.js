import React from 'react'
import Template from '../components/Template_1';
import launch from '../img/launch-amico.svg'



export default function Hire(props) {
    let hireObj = {
        theme: props.theme,
        h1: 'Get me @',
        span: '$10/hour',
        description: 'Web design is not about making a website—it’s about making an investment in your organization. Successful web design takes into account more than just aesthetics… It’s a reflection of you, your company, and your vision.',
        skills: ["HTML", "CSS", "Javascript", "PHP", "MYSQL","React.js","Web Design", "Web Development", "Hosting", "Domain Registration", "Wordpress", "Shopify", "Full Stack Development"],
        btnText: 'Hire Me On Upwork',
        btnIcon: 'link',
        linkTo: 'https://www.upwork.com/freelancers/~012d6eb926a1f7a86a',
        imgSrc: launch
    }
    return (
        <Template myObj={hireObj} />
    )
}
