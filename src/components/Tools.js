import React from 'react'
import EmailValidator from './EmailValidator';

export default function Tools(props) {
 
  return (
    <>
      <EmailValidator theme={props.theme} />
    </>
  )
}