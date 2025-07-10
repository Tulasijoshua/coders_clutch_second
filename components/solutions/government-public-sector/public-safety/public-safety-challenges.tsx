'use client';
import React from 'react'
import mobileAppImg from "@/public/assets/images/about/our-team7.jpg"
import Image from 'next/image'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';

function PublicSafetyChallenges() {
  return (
    <div className='w-full sm:py-20 py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex md:flex-row flex-col justify-between lg:gap-16 gap-8'>
            <div className='flex-1 '>
                <div className='xl:w-[80%] flex flex-col xl:gap-6 gap-3'>
                    <Typography
                        typo="header-3-semibold"
                        className='xl:!leading-snug'
                    >
                        Safety & Emergency Response Challenges
                    </Typography>
                    <ul className='rale list-disc list-inside text-base'>
                        <li>Fragmented communication across agencies</li>
                        <li>Delays in incident reporting and dispatch</li>
                        <li>Lack of situational awareness and field visibility</li>
                    </ul>
                    <Typography
                        typo="body-medium-regular"
                        className='rale !leading-relaxed'
                    >
                        Our public safety systems unify dispatch centers, mobile responders, and surveillance feeds—ensuring
                        fast, accurate, and data-informed emergency management.
                    </Typography>
                    <Button
                        variant="primary"
                        className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-8 lg:!px-16 md:!px-10 !px-8 !text-base font-semibold'
                    >
                        Our Challenges
                    </Button>
                </div>
            </div>
            <div className='flex-1  '>
                <div className='w-full xl:h-[500px] md:h-[400px] sm:h-[500px] xs:h-[400px] h-[300px]'>
                    <Image 
                        src={mobileAppImg}
                        alt='Mobile app image'
                        className='w-full h-full object-cover object-top rounded-md'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default PublicSafetyChallenges