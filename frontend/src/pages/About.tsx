import React from 'react'
import Master from '../components/Master'

import '../assets/css/about.css'

function About() {
  const onLoad = () => {}

  return (
    <Master onLoad={onLoad} strict={false}>
      Yo man !
    </Master>
  )
}

export default About
