'use client';
import React from 'react'
import mobileAppImg from "@/public/assets/images/about/our-team7.jpg"
import Image from 'next/image'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';

function DigitalHealthChallenge() {
  return (
    <div className='w-full sm:py-20 py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex md:flex-row flex-col justify-between lg:gap-16 gap-8'>
            <div className='flex-1 '>
                <div className='xl:w-[80%] flex flex-col xl:gap-6 gap-3'>
                    <Typography
                        typo="header-3-semibold"
                        className='xl:!leading-normal'
                    >
                        The Healthcare Challenge in Public Systems
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='rale !leading-relaxed'
                    >
                        Governments and health ministries face significant challenges: - Siloed patient records and fragmented
                        hospital systems - Inaccessible healthcare in rural and underserved areas - Limited real-time data for
                        national health planning
                    </Typography>
                    <Typography
                        typo="body-medium-regular"
                        className='rale !leading-relaxed'
                    >
                        Our digital health solutions address these by unifying systems, empowering remote care delivery, and
                        equipping public health authorities with actionable insights.
                    </Typography>
                    <Button
                        variant="primary"
                        className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-8 lg:!px-16 md:!px-10 !px-8 !text-base font-semibold'
                    >
                        Our Methodology
                    </Button>
                </div>
            </div>
            <div className='flex-1  '>
                <div className='w-full sm:h-[500px] xs:h-[300px] h-[250px] '>
                    <Image 
                        src={mobileAppImg}
                        alt='Mobile app image'
                        className='w-full md:h-full object-cover object-top rounded-md'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default DigitalHealthChallenge