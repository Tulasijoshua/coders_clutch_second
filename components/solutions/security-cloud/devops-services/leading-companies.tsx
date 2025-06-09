'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import myGate from "@/public/assets/images/security-cloud/mygate_logo.png"; 
import myGate_screen from "@/public/assets/images/security-cloud/mygate_screen.png"; 
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';


function LeadingCompanies() {
  return (
    <div className='w-full py-12'>
        <section className='w-[85%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    World’s Leading Companies
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Achieve More With DevOps Services
                </Typography>
            </div>
            <div className='min-h-[550px] flex justify-between items-center gap-8'>
                <div className='flex-1 flex flex-col gap-6'>
                    <div className='w-40 h-fit '>
                        <Image 
                            src={myGate}
                            alt='My gate image'
                            className='w-full h-full'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Typography 
                            typo="header-6-semibold"
                        >
                            About
                        </Typography>
                        <Typography
                            typo="body-medium-medium"
                        >
                            India’s most downloaded (5M+ downloads) Security, ERP & accounting app for housing societies  
                        </Typography>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Typography 
                            typo="header-6-semibold"
                        >
                            Solutions
                        </Typography>
                        <Typography
                            typo="body-medium-medium"
                        >
                            Replaced token-based validation systems with in-app chat, video, and voice-based verification 
                            processes across Android, iOS, and the web.
                        </Typography>
                    </div>

                </div>
                <div className='w-[550px] h-full flex flex-col relative border'>
                    <div className='mobile_bg w-full h-full absolute top-0  mobile_bg'>
                        {/* <Image 
                            src={myGate_screen}
                            alt='Mygate'
                            className='w-full mx-auto h-full'
                        /> */}
                    </div>
                    <div className='w-full'>
                        <video
                            width="100%"
                            height="auto"
                            autoPlay={true}
                            muted={true}
                            poster="/assets/images/security-cloud/circle.webm"
                        >
                            <source src="/assets/images/security-cloud/circle.webm" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    {/* <div className='w-full h-full'>
                        
                    </div> */}
                </div>
                <div className='inter flex-1 flex flex-col gap-3'>
                    <Typography
                        typo="header-6-semibold"
                        className='pb-3'
                    >
                        Business Impact
                    </Typography>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2'>
                            <Typography
                                className='text-[#178450]'
                                typo="header-2-semibold"
                            >
                                3.5M+
                            </Typography>
                            <Typography
                                typo="body-large-regular"
                            >
                                Homes Connected
                            </Typography>
                        </div>
                        <div 
                            className='w-[70%] border-[2px] border-dashed'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2'>
                            <Typography
                                className='text-[#178450]'
                                typo="header-2-semibold"
                            >
                                150+
                            </Typography>
                            <Typography
                                typo="body-large-regular"
                            >
                                Real-Time Features
                            </Typography>
                        </div>
                        <div 
                            className='w-[70%] border-[2px] border-dashed'
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <Typography
                                className='text-[#178450]'
                                typo="header-2-semibold"
                            >
                                2M+
                            </Typography>
                            <Typography
                                typo="body-large-regular"
                            >
                                Check-in requests Handled
                            </Typography>
                        </div>
                        <div 
                            className='w-[70%] border-[2px] border-dashed'
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LeadingCompanies