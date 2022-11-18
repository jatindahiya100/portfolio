import React from 'react'
import Template from './Template_1';
import collab from './img/Bookmarks-pana.svg'
import design from './img/Dashboard-pana.svg'


export default function Home(props) {
    // Object For Template 1 to be passed as props
    let myObj1 = {
        theme: props.theme,
        h1: 'Let’s collaborate to make something incredible.',
        span: 'Just like you',
        description: 'I provide integrated web design & development services. Innovative web solutions designed by experienced developers! I put the “kick” in kick-ass websites that look gorgeous no matter what device or browser visitors are using.',
        btnText: 'Hire Me',
        btnIcon: 'shield-checkmark',
        imgSrc: collab
    }

    // Object For Template 1 to be passed as props
    let myObj2 = {
        theme: props.theme,
        h1: 'Elegant UI/UX design beyond just putting',
        span: 'pixels together',
        description: 'Custom web design can be the difference between a mediocre website and an awesome one. If you want your website to stand out from the competition, you need a stand-out design company.',
        btnText: 'View Designs',
        btnIcon: 'rocket',
        imgSrc: design
    }
    return (
        <>
            <Template myObj={myObj1} />
            <Template myObj={myObj2} />
        </>
    )
}
