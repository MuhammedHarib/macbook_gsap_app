import React from 'react'

const Showcase = () => {
  return (
    <section id='showcase'>
      <div className='media'>
        {/* Cleaned up the trailing space in the video src string too */}
        <video src="/videos/game.mp4" loop muted autoPlay playsInline></video>
        <div className="mask">
            <img src="/mask-logo.svg" alt="" />
        </div>
      </div>
      <div className="content">
          <div className="wrapper">
              <div className="lg:max-w-md">
                  {/* Content goes here */}
              </div>
          </div>
      </div>
    </section>
  )
}

export default Showcase