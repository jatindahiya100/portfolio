import React from 'react'
import Template from './Template_1';
import productNameGenerator from './img/productnamegenerator.svg'

export default function Tools(props) {
  let hireObj = {
    theme: props.theme,
    h1: 'AI Based Product Name Generator Powered By',
    span: 'Open AI',
    description: "Create product names from examples words. Product description: A home milkshake maker Seed words: fast, healthy, compact. Product names: HomeShaker, Fit Shaker, QuickShake, Shake Maker",
    skills: ["Open AI API", "Product Name Generator", "Engine: text-davinci-003"],
    btnText: 'Launching Soon',
    btnIcon: 'eye',
    imgSrc: productNameGenerator
  }
  return (
    <>
      <Template myObj={hireObj} />
    </>
  )
}