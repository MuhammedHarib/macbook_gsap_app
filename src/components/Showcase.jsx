import { useGSAP } from '@gsap/react';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap';



const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
   useGSAP(() => {

    if (!isTablet) {

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#showcase',
                start: 'top top',

                // SHORTER SCROLL DISTANCE
                end: '+=120%',

                scrub: 0.5,
                pin: true,
                anticipatePin: 1,
            }
        })

        // MASK SCALE
        timeline.to('.mask img', {
            scale: 1.15,
            ease: 'none'
        })

        // CONTENT APPEARS BEFORE FIRST ENDS
        .to('.content', {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            duration: 0.6
        }, '-=0.35') // overlap animation
    }

}, [isTablet])
    return (
        <section id='showcase'>
            <div className='media'>
                <video src="/videos/game.mp4" loop muted autoPlay playsInline></video>
                <div className="mask">
                    <img src="/mask-logo.svg" alt="" />
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket chip</h2>

                        <div className='space-y-5 mt-7 pe-10'>
                            <p>
                                introducing {''}

                                <span className='text-white'>
                                    M4 , the next generation of Apple silicon
                                </span>
                                .M4 powers
                            </p>
                            <p>
                                It dilivers up to 15% faster CPU performance, up to 30% faster GPU performance, and up to 40% faster machine learning tasks compared to the previous generation. Whether you're editing high-resolution videos, playing graphics-intensive games, or running complex simulations, M4 handles it all with ease.
                            </p>
                            <p>A brand new  engine delivers an unprecedented level of performance and efficiency.</p>
                            <p className='text-primary' > learn more  about Apple intelligence</p>
                        </div>

                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-5">
                            <p>upto</p>
                            <h3> 4x faster</h3>
                            <p>Pro rendering performance than M2</p>
                        </div>

                        <div className="space-y-5">
                            <p>upto</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Showcase