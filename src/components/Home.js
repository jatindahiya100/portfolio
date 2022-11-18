import React from 'react'
import Template from './Template_1';

export default function Home(props) {
    // Object For Template 1 to be passed as props
    let myObj = {
        theme: props.theme,
        h1: 'Let’s collaborate to make something incredible.',
        span: 'Just like you',
        description: 'We provide integrated web design & development services. Innovative web solutions designed by experienced developers! We put the “kick” in kick-ass websites that look gorgeous no matter what device or browser visitors are using.',
        btnText: 'Work With Me'
    }
    return (
        <Template myObj={myObj} />
    )
}
