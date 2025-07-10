'use client';
import React from 'react'
import mobileAppImg from "@/public/assets/images/about/our-team7.jpg"
import Image from 'next/image'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';

function SmartGovernanceChallenge() {
  return (
    <div className='w-full sm:py-20 py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex md:flex-row flex-col justify-between lg:gap-16 gap-8'>
            <div className='flex-1 '>
                <div className='xl:w-[80%] flex flex-col xl:gap-6 gap-3'>
                    <Typography
                        typo="header-3-semibold"
                        className='xl:!leading-snug'
                    >
                        Modern Governance Challenges
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='rale !leading-relaxed'
                    >
                        Public institutions around the world struggle with: - Paper-based, time-consuming administrative
                        processes - Limited access to citizen services in rural areas - Lack of public trust and low civic
                        participation
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='rale !leading-relaxed'
                    >
                        Our Smart Governance platform reimagines public administration—putting citizens at the center
                        through accessible, secure, and efficient digital infrastructure.
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

export default SmartGovernanceChallenge