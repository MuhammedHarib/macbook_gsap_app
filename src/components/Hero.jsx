import React from 'react'
import { useRef, useEffect } from 'react'


const Hero = () => {

    const videoref = React.useRef()
    React.useEffect(() => {
       if(videoref.current) videoref.current.playbackRate = 2;
    }, [])
  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="macbook title" />
        </div>
        <video ref={videoref} src="/videos/hero.mp4" autoPlay muted playsInline></video>
    </section>
  )
}

export default Hero