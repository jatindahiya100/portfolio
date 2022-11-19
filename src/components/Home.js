import React from 'react'
import Template from './Template_1';
import collab from './img/Bookmarks-pana.svg'
import design from './img/Dashboard-pana.svg'
import freelancer from './img/freelancer.svg'
import ResumePhoto from './img/portrait.webp'
import resume from './img/resume.pdf';


export default function Home(props) {
    // Object For Resume Template to be passed as props
    let resumeObj = {
        theme: props.theme,
        h1: 'I’m Jatin Dahiya. I live in Sonipat City, where I',
        span: 'design the future.',
        description: 'I’ve loved making things for as long as I can remember, and wrote my first program when I was 12 years old, just two weeks after my father brought home the brand new DELL Latitude | E5410 that I taught myself to type on.',
        btnText: 'Download Resume',
        btnIcon: 'rocket',
        linkTo: resume,
        imgSrc: ResumePhoto
    }

    // Object For Home Template  to be passed as props
    let homeObj = {
        theme: props.theme,
        h1: 'Let’s collaborate to make something incredible.',
        span: 'Just like you',
        description: 'I provide integrated web design & development services. Innovative web solutions designed by experienced developers! I put the “kick” in kick-ass websites that look gorgeous no matter what device or browser visitors are using.',
        btnText: 'Hire Me',
        btnIcon: 'shield-checkmark',
        linkTo: 'https://www.upwork.com/workwith/jatindahiya',
        imgSrc: collab
    }

    // Object For Work Template to be passed as props
    let workObj = {
        theme: props.theme,
        h1: 'Elegant UI / UX design beyond just putting',
        span: 'pixels together',
        description: 'Custom web design can be the difference between a mediocre website and an awesome one. If you want your website to stand out from the competition, you need a stand-out design company.',
        btnText: 'View Designs',
        btnIcon: 'rocket',
        imgSrc: design
    }

    // Object For Freelancer Template to be passed as props
    let freelancerObj = {
        theme: props.theme,
        h1: '5 Star freelancer with 100% Job Success Score',
        span: 'On Upwok',
        description: 'Custom web design can be the difference between a mediocre website and an awesome one. If you want your website to stand out from the competition, you need a stand-out design company.',
        btnText: 'Upwork Profile',
        btnIcon: 'star',
        linkTo: 'https://www.upwork.com/freelancers/~012d6eb926a1f7a86a',
        imgSrc: freelancer
    }
    return (
        <>
            <Template myObj={resumeObj} />
            <Template myObj={homeObj} />
            <Template myObj={workObj} />
            <Template myObj={freelancerObj} />
        </>
    )
}
