import React from 'react'
import Template from './Template_1';
import hireme_light from './img/hireme-light.gif'
import hireme_dark from './img/hireme-dark.gif'



export default function Hire(props) {
    let hireObj = {
        theme: props.theme,
        h1: 'Get me @',
        span: '$10/hour',
        description: 'Web design is not about making a website—it’s about making an investment in your organization. Successful web design takes into account more than just aesthetics… It’s a reflection of you, your company, and your vision.',
        skills: ["Web Design", "Web Development", "Hosting", "Domain Registration", "Wordpress", "Shopify", "Full Stack Development", "HTML", "CSS", "Javascript", "PHP", "MYSQL"],
        btnText: 'Hire Me On Upwork',
        btnIcon: 'link',
        linkTo: 'https://www.upwork.com/freelancers/~012d6eb926a1f7a86a',
        imgSrc: props.theme === 'light' ? hireme_light : hireme_dark
    }
    return (
        <Template myObj={hireObj} />
    )
}
