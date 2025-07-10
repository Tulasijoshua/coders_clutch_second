'use client';
import TrustBrands from '@/components/reusable/trust-brands';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import React from 'react'

const public_safety_metrics = [
    "Real-Time Emergency Response Systems", 
    "Predictive Threat Detection Analytics",
    "50% Faster Dispatch Coordination",
    "Integrated Multi-Agency Platforms",
    "24/7 Critical System Monitoring",
    "Reduced Emergency Response Times"
]
function PublicSafetyHero() {
  return (
    <div className='w-full'>
        <div className='w-full flex flex-col items-center lg:py-12 py-10 bg-app-primary-deep'>
            <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col justify-center lg:gap-6 gap-3'>
                <Typography
                    typo="body-large-semibold"
                    className='text-center text-app-green'
                >Public Safety Solutions</Typography>
                <div className='arial lg:flex hidden flex-col text-white'>
                    <Typography
                        className='text-center '
                        typo="header-2-semibold"
                    >
                        Building Resilient Emergency 
                    </Typography>
                    <Typography
                        className='text-center '
                        typo="header-2-semibold"
                    >
                        Systems for Safer Communities
                    </Typography>
                </div>
                <div className='arial flex lg:hidden flex-col text-white'>
                    <Typography
                        className='text-center '
                        typo="header-2-semibold"
                    >
                        Building Resilient Emergency Systems for Safer Communities
                    </Typography>
                </div>
                <Typography
                    typo="body-large-medium"
                    className='sm:block hidden w-[80%] mx-auto pt-4 text-center text-white !leading-relaxed'
                >
                    Coders Clutch delivers integrated public safety platforms that enable real-time response coordination,
                    emergency communication, and predictive incident management. We work with city authorities and
                    first responders to design digital systems that protect citizens and streamline response workflows.

                </Typography>
            </section>

            <section className='w-full sm:block hidden relative pt-5'>
                <div className='max-container 2xl:w-[75%] xl:w-[85%] w-[95%] mx-auto grid grid-cols-3 lg:gap-10 gap-4 text-white z-[10] relative'>
                    {public_safety_metrics.map(data => (
                        <Typography 
                            typo="body-medium-semibold"
                            key={data}
                            className='relative lg:px-4 py-4 text-center border border-app-green 
                                        border-dashed rounded-lg bg-app-primary-deep'
                            >
                                {data}
                            </Typography>
                    ))}
                </div>
                <div className='w-full absolute lg:top-11 top-14 border border-dashed border-green-700 z-[1]'></div>
                <div className='max-container w-[75%] mx-auto absolute top-[70px] left-1/4  grid grid-cols-3'>
                    {Array.from({length: 3}).map((_, index) => (
                        <div key={index+1} className='h-10 border-l border-app-green border-dashed'></div>
                    ))}
                </div>
            </section>
            <section className='sm:hidden w-[90%] mx-auto pt-4 flex flex-col gap-8'>
                <ul className='flex flex-col gap-4'>
                    {public_safety_metrics.map(rate => (
                        <li key={rate} className='w-fit h-fit flex gap-2'>
                            <div className='p-1 rounded-full bg-white'>
                                <Check color='#002523' size={12} />
                            </div>
                            <Typography
                                typo="body-large-medium"
                                className='text-white'
                            >{rate}</Typography>
                        </li>
                    ))}
                </ul>
            </section>
            <Button
                variant="primary"
                size="lg"
                className='w-fit mx-auto mt-12'
            >
                Get a Free Consultation
                <ArrowRight />
            </Button>
        </div>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto py-20'>
            <TrustBrands />
        </section>
    </div>
  )
}

export default PublicSafetyHero