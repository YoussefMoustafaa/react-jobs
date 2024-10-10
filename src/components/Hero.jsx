import React from 'react'

const Hero = (props) => {
  return (
    <>
        <div id='hero'>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    </>
  )
}

export default Hero