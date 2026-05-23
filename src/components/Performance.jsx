import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'

import { performanceImages } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const Performance = () => {
    const sectionRef = useRef(null)

    const isMobile = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    useGSAP(() => {
        const ctx = gsap.context(() => {

            // =========================
            // TEXT ANIMATION
            // =========================
            gsap.to('.content p', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.content',
                    start: 'top 85%',
                },
            })

            if (isMobile) return

            // =========================
            // ELEMENTS
            // =========================
            const p1 = document.querySelector('#p1')
            const p2 = document.querySelector('#p2')
            const p3 = document.querySelector('#p3')
            const p4 = document.querySelector('#p4')
            const p5 = document.querySelector('#p5') // MACBOOK
            const p6 = document.querySelector('#p6')
            const p7 = document.querySelector('#p7')

            const images = [p1, p2, p3, p4, p6, p7]

            // =========================
            // INITIAL STATE
            // STACK ALL IMAGES ABOVE MACBOOK
            // =========================
            gsap.set(images, {
                left: '50%',
                top: '32%',
                xPercent: -50,
                yPercent: -50,
                scale: 0.5,
                zIndex: 30, // screens ABOVE laptop
            })

            // CENTER MACBOOK
            gsap.set(p5, {
                left: '50%',
                top: '55%',
                xPercent: -50,
                yPercent: -50,
                scale: 1,
                zIndex: 1, // laptop BELOW screens
            })

            // =========================
            // SHORT BLOOM ANIMATION
            // =========================
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,

                    // START when top hits center
                    start: 'top center',

                    // END quickly when center hits center
                    end: 'center center',

                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            })

            // =========================
            // FLOWER BLOOM EFFECT
            // =========================

            // TOP LEFT
            tl.to(
                p1,
                {
                    left: '8%',
                    top: '10%',
                    scale: 0.95,
                    ease: 'power2.out',
                },
                0
            )

            // TOP RIGHT
            tl.to(
                p2,
                {
                    left: '78%',
                    top: '8%',
                    scale: 0.95,
                    ease: 'power2.out',
                },
                0
            )

            // MID RIGHT
            tl.to(
                p3,
                {
                    left: '84%',
                    top: '42%',
                    scale: 1,
                    ease: 'power2.out',
                },
                0
            )

            // BOTTOM RIGHT
            tl.to(
                p4,
                {
                    left: '76%',
                    top: '82%',
                    scale: 0.9,
                    ease: 'power2.out',
                },
                0
            )

            // MID LEFT
            tl.to(
                p6,
                {
                    left: '6%',
                    top: '48%',
                    scale: 1,
                    ease: 'power2.out',
                },
                0
            )

            // BOTTOM LEFT
            tl.to(
                p7,
                {
                    left: '16%',
                    top: '84%',
                    scale: 0.9,
                    ease: 'power2.out',
                },
                0
            )

            // =========================
            // HERO MACBOOK SCALE
            // =========================
            tl.to(
                p5,
                {
                    scale: 1.18,
                    yPercent: -52,
                    ease: 'power3.out',
                },
                0
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [isMobile])

    return (
        <section id="performance" ref={sectionRef}>
            <h2>
                Next-level graphics
                <br />
                performance. Game on.
            </h2>

            <div className="wrapper">
                {performanceImages.map(({ id, src }) => (
                    <img
                        key={id}
                        id={id}
                        src={src}
                        alt={id}
                        className={`${id} performance-img`}
                    />
                ))}
            </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness
                    that keeps up with your imagination.
                    {' '}
                    <span className="text-white">
                        Gaming feels more immersive and realistic than ever.
                    </span>
                </p>
            </div>
        </section>
    )
}

export default Performance