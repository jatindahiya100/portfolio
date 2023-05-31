import React from 'react'
import Template from '../components/Template_1';
import ResumePhoto from '../img/1.svg'
import collab from '../img/2.svg'
import design from '../img/3.svg'
import freelancer from '../img/4.svg'
import resume from '../img/resume.pdf';


export default function Home(props) {
    // Array of objects
    const dataToBePopulated = [
        {
            theme: props.theme,
            h1: 'I’m Jatin Dahiya. I live in Sonipat City, where I',
            span: 'design the future.',
            description: 'I’ve loved making things for as long as I can remember, and wrote my first program when I was 12 years old, just two weeks after my father brought home the brand new DELL Latitude | E5410 that I taught myself to type on.',
            skills: [],
            btnText: 'Download Resume',
            btnIcon: 'rocket',
            linkTo: resume,
            imgSrc: ResumePhoto
        },
        {
            theme: props.theme,
            h1: 'Let’s collaborate to make something incredible.',
            span: 'Just like you',
            description: 'I provide integrated web design & development services. Innovative web solutions designed by experienced developers! I put the “kick” in kick-ass websites that look gorgeous no matter what device or browser visitors are using.',
            skills: [],
            btnText: 'Hire Me',
            btnIcon: 'shield-checkmark',
            linkTo: 'https://www.upwork.com/workwith/jatindahiya',
            imgSrc: collab
        },
        {
            theme: props.theme,
            h1: 'Elegant UI / UX design beyond just putting',
            span: 'pixels together',
            description: 'Custom web design can be the difference between a mediocre website and an awesome one. If you want your website to stand out from the competition, you need a stand-out design company.',
            skills: [],
            btnText: 'View Designs',
            btnIcon: 'rocket',
            imgSrc: design
        },
        {
            theme: props.theme,
            h1: 'Successfully Delivered Over 10+ Projects Worth $2.5k+',
            span: 'On Upwok',
            description: 'I have a proven track record of successfully delivering more than 10 projects, amounting to a total value of $2.5k+. With a focus on quality and meeting client expectations, I consistently achieve project milestones and deliver tangible results within budget.',
            skills: [],
            btnText: 'Upwork Profile',
            btnIcon: 'star',
            linkTo: 'https://www.upwork.com/freelancers/~012d6eb926a1f7a86a',
            imgSrc: freelancer
        }
    ]

    return (
        <>
            <Template myObj={dataToBePopulated[0]} />
            <Template myObj={dataToBePopulated[1]} />
            <Template myObj={dataToBePopulated[2]} />
            <Template myObj={dataToBePopulated[3]} />
        </>
    )
}
