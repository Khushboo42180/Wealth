"use client";

import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

const HeroSection = () => {
    const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
                Smarter Choices <br /> Stronger Wallet
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get personalized financial insights, track every rupee, and 
                save more without the stress. Your AI finance partner is here.
            </p>
            <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                <Button size="lg" className="px-8">
                    Start Managing
                    </Button>
                </Link>
                <Link href="/dashboard">
                <Button size="lg" variant='outline' className="px-8">
                    How It Works
                    </Button>
                </Link>
            </div>
            <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
                <Image 
               src="/banner (1).jpeg"
                width={12800}
                height={720}
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl border mx-auto"
                priority
                />
            </div>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;