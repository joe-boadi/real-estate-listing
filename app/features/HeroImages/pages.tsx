'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react';
import heroImage1 from '@/public/Estate_Images/iStock-.jpg'
import heroImage2 from '@/public/Estate_Images/State-of-Luxury-Real-Estate.jpeg'
import heroImage3 from '@/public/Estate_Images/own1.jpg'
import heroImage4 from '@/public/Estate_Images/iStock-.jpg'
import heroImage5 from '@/public/Estate_Images/luxury-residential-real-estate.png'
import heroImage6 from '@/public/Estate_Images/how-to-invest-in-real-estate-in-2024.webp'
import heroImage7 from '@/public/Estate_Images/real-estate-finance.jpg'
import heroImage8 from '@/public/Estate_Images/Real-estate-smartworld-1.png'
import heroImage9 from '@/public/Estate_Images/Masterfile.jpg'

const heroImage = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
    heroImage6,
    heroImage7,
    heroImage8,
    heroImage9,
] 

const HeroImages = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const containerWidth = scrollContainer.offsetWidth;
    const imagesWidth = heroImage.length * 640; // Assuming all images have a width of 640px

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        if (newPosition > imagesWidth - containerWidth) {
          return 0; // Reset the scroll position when reaching the end
        }
        return newPosition;
      });
    }, 10); // Adjust the scroll speed by changing the interval (in milliseconds)

    return () => clearInterval(scrollInterval);
  }, []);


    return (
        <div className="overflow-hidden" ref={scrollContainerRef}>
            <div
                className="flex"
                style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
                {heroImage.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-64 h-48 mt-16 p-3 m-2">
                        <Image
                        src={image}
                        alt={`Hero Image ${index + 1}`}
                        width={640}
                        height={480}
                        className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                ))}
                {heroImage.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-64 h-48 mt-16 p-3 m-2">
                        <Image
                        src={image}
                        alt={`Hero Image ${index + 1}`}
                        width={640}
                        height={480}
                        className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                ))}
                <div className="flex-shrink-0 w-64 h-48 mt-16 p-3 m-2">
                    <Image
                        src={heroImage[0]}
                        alt="Hero Image 1"
                        width={640}
                        height={480}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
} 

export default HeroImages;