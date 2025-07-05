'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import ghanaImg from "@/public/assets/images/Flag_of_Ghana.png"
import gambia from "@/public/assets/images/Flag_of_The_Gambia.png"
import Image from 'next/image';
import { social_icons } from '@/constant';

function Hereforyou() {
  return (
    <div className='w-full pb-12 pt-20 bg-app-primary-medium'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center gap-16'>
            <div className='flex-1 flex flex-col gap-4'>
                <Typography
                    typo="header-6-semibold"
                    className='text-[#15FF7E]'
                >
                    #WeAreHereForYou
                </Typography>

                <Typography
                    typo="header-2-semibold"
                    className='text-white leading-tight'
                >
                    What can we develop together?
                </Typography>
                <Button
                    variant="primary"
                    size="lg"
                >
                    Let&apos;s Talk
                    <ArrowRight />
                </Button>
            </div>
            <div className='flex-1 flex flex-col gap-7 text-white'>
                <Typography
                    typo="body-large-medium"
                >We are located in Ghana and Gambia</Typography>
                <div className='flex justify-between gap-10'>
                    <div className='flex-1 flex flex-col gap-2'>
                        <Image 
                            src={ghanaImg}
                            alt='India Flag'
                            className='w-10 h-fit'
                        />
                        <Typography
                            className='text-sm text-gray-300 leading-relaxed'
                        >
                            Ghana - Tema, 5th Avenue Road – Greater Accra Region, Ghana
                        </Typography>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <Image 
                            src={gambia}
                            alt='India Flag'
                            className='w-10 h-fit'
                        />
                        <Typography
                            className='text-sm text-gray-300 leading-relaxed'
                        >
                            Gambia - MSJ Plaza Office 07, Brusubi TurnTable - After AfricMed
                        </Typography>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <Typography
                        className='text-white'
                        typo="body-large-semibold"
                    >
                        Follow Us On.
                    </Typography>
                    <div className='flex gap-3 flex-wrap'>
                        {social_icons.map((icon, index) => (
                            <div key={index+1} className='md:w-16 w-12 h-fit'>
                                <Image
                                    src={icon}
                                    alt='Icon'
                                    className='w-full h-full'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div> 
  )
}

export default Hereforyou