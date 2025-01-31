"use client";

import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

function HeroSection() {

    const imageref = useRef();

    useEffect(() => {
        const imageElement = imageref.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const thresholdvalue = 100;
            if (scrollPosition > thresholdvalue) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");

            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <div className='pb-20 px-4'>
            <div className='container mx-auto text-center'>
                <h1 className='text-5xl md:text-8xl lg:text-[104px] pb6
                gradient-title'>Manage your finance <br></br> with Intelligence</h1>
                <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto '>An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.</p>
                <div className='flex space-x-4 justify-center'>
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button size="lg" className="px-8" variant="outline">
                            Watch demo
                        </Button>
                    </Link>
                </div>
                <div className='hero-image-wrapper'>
                    <div ref={imageref} className='hero-image'>
                        <Image src="/banner.jpeg" priority width={1280} height={720} alt='Dashboard Preview'
                            className='rounded-lg shadow-2xl border mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection