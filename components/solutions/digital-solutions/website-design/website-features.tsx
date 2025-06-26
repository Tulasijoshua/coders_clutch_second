'use client';
import Typography from '@/components/shared/typography'
import { website_features } from '@/constant';
import React, { useEffect, useState } from 'react'

function WebsiteFeatures() {
    const [featureText, setFeatureText] = useState('What you get');
    const featureOptions = ['online shop', 'portfolio', 'landing', 'magazine'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsVisible(false);
          
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % featureOptions.length);
            setFeatureText(featureOptions[currentIndex]);
            setIsVisible(true);
          }, 500);
        }, 2000);
    
        return () => clearInterval(interval);
    }, [currentIndex, featureOptions.length]);
  return (
    <div className='w-full'>
        <section className='rale w-full py-12 flex flex-col justify-center items-center gap-6 text-white bg-app-primary-deep'>
            <div className='max-container xl:w-[60%] sm:w-[80%] w-[90%] mx-auto flex flex-col items-center xl:gap-8 gap-4'>
                <div className='flex flex-col items-center'>
                    <Typography
                        typo="header-1-semibold"
                        className='!font-bold'
                    >
                        Website features |  
                    </Typography>
                    <Typography
                        typo="header-1-semibold"
                        className={`!font-bold transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {featureText}
                    </Typography> 
                </div>
                <Typography
                    typo="body-medium-medium"
                    className='text-center !leading-relaxed'
                >
                    We execute every website design project using best practices. The following features and addons will be 
                    included in the design for your website. Deliverables are exactly as per the scope of the project.
                </Typography>
            </div>
        </section>
        <section className='w-full pt-10 pb-16 bg-app-gray-bg'>
            <div className='rale max-container 2xl:w-[75%] lg:w-[85%] w-[90%] mx-auto grid md:grid-cols-3 xs:grid-cols-2 gap-2'>
                {website_features.map(data => (
                    <Typography
                        key={data}
                        typo="body-large-semibold"
                    >
                        {data}
                    </Typography>
                ))}
            </div>
        </section>
    </div>
  )
}

export default WebsiteFeatures