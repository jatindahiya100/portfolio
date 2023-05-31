import React from 'react'
import Template from '../components/Template_1';
import launch from '../img/launch-amico.svg'



export default function Hire(props) {
    const dataToBePopulated = [
        {
            theme: props.theme,
            h1: 'Get me @',
            span: '$15/hour',
            description: 'Web design is not about making a website—it’s about making an investment in your organization. Successful web design takes into account more than just aesthetics… It’s a reflection of you, your company, and your vision.',
            skills: ["React.js", "Node.js", "HTML5", "CSS", "Javascript", "jQuery", "PHP", "MYSQL", "Web Design", "Web Development", "Hosting", "Domain Registration", "Wordpress", "Website Builders", "Full Stack Development"],
            btnText: 'Hire Me On Upwork',
            btnIcon: 'link',
            linkTo: 'https://www.upwork.com/freelancers/~012d6eb926a1f7a86a',
            imgSrc: launch
        }
    ]
    
    return (
        <Template myObj={dataToBePopulated[0]} />
    )
}
