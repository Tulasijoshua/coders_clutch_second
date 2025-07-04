'use client';
import React from 'react'
import Typography from '../shared/typography'
import trueId_logo from "@/public/assets/images/portfolio/trueid-logo.png"
import trueId from "@/public/assets/images/portfolio/trueid.png"
import daimler_logo from "@/public/assets/images/portfolio/daimler-logo.png"
import daimler from "@/public/assets/images/portfolio/daimler-pic.png"
import tata_logo from "@/public/assets/images/portfolio/tata-logo.png"
import tata from "@/public/assets/images/portfolio/tata-pic.png"
import mahindra_logo from "@/public/assets/images/portfolio/tata-logo.png"
import mahindra from "@/public/assets/images/portfolio/tata-pic.png"
import versa_logo from "@/public/assets/images/portfolio/versa-logo.png"
import versa from "@/public/assets/images/portfolio/versa-pic.png"
import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const case_studies = [
    {
        id: "1",
        title: "Chat, Video & Voice SDKs",
        logo: trueId_logo,
        img: trueId,
    },
    {
        id: "2",
        title: "Multi-disciplinary Heavy Vehicle Solution",
        logo: mahindra_logo,
        img: mahindra,
    },
    {
        id: "3",
        title: "Real-time Log Streaming Tech",
        logo: daimler_logo,
        img: daimler,
    },
    {
        id: "4",
        title: "IoT Enabled LoRaWAN Solution",
        logo: tata_logo,
        img: tata,
    },
    {
        id: "5",
        title: "SD WAN Cloud Solutions",
        logo: versa_logo,
        img: versa,
    },
    {
        id: "6",
        title: "Centralized User Engagement System",
        logo: mahindra_logo,
        img: mahindra,
    },
]

function CaseStudies() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-8'>
            <div className='pb-3 flex flex-col items-center gap-3'>
                <Typography
                    typo="header-4-semibold"
                >
                    500+ Success Stories and Counting
                </Typography>
                <div className='w-20 h-[3px] bg-app-primary-deep'></div>
            </div>
            <div className='md:block hidden w-full columns-2 gap-10'>
                {case_studies.map((data, index) => (
                    <Card 
                        key={data.id}
                        className='relative rounded-[1.2rem] mb-6'
                    >
                        <div className='w-full h-fit'>
                            <Image 
                                src={data.img}
                                alt={`Case study ${index+1}`}
                                className='w-full h-auto object-cover'
                            />
                        </div>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[45%] h-fit'>
                            <Image 
                                src={data.logo}
                                alt={`Case ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='absolute left-5 bottom-8 flex flex-col gap-2'>
                            <Typography
                                typo="header-6-medium"
                                className='text-white'
                            >{data.title}</Typography>
                            <div className='flex items-center gap-3 text-blue-700'>
                                <Link
                                    href="/portfolio"
                                    className='text-[#0873FF]'
                                >View Case Study</Link>
                                <ArrowRight />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <div className='md:hidden w-full grid xs:grid-cols-2 gap-6'>
                {case_studies.map((data, index) => (
                    <Card 
                        key={data.id}
                        className='relative sm:h-[300px] xs:h-[250px] h-[330px] rounded-[1.2rem]'
                    >
                        <div className='w-full h-full'>
                            <Image 
                                src={data.img}
                                alt={`Case study ${index+1}`}
                                className='w-full h-full object-cover rounded-2xl'
                            />
                        </div>
                        <div className='absolute sm:top-1/2 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[55%] h-fit'>
                            <Image 
                                src={data.logo}
                                alt={`Case ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='absolute left-5 bottom-8 flex flex-col gap-2'>
                            <Typography
                                typo="header-6-medium"
                                className='text-white !leading-normal'
                            >{data.title}</Typography>
                            <div className='flex items-center gap-3 text-blue-700'>
                                <Link
                                    href="/portfolio"
                                    className='text-[#0873FF]'
                                >View Case Study</Link>
                                <ArrowRight />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default CaseStudies