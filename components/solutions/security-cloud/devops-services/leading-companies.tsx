'use client';
import Typography from '@/components/shared/typography';
import React, { useState } from 'react'
import mobile_bg from "@/public/assets/images/security-cloud/mobile-bg.png"; 
import Image from 'next/image';
import { achievements } from '@/constant/devops';



function LeadingCompanies() {
    const [selectedBusiness, setSelectedBusiness] = useState(achievements[0].id)

    const currentBusiness = achievements.find(business => business.id === selectedBusiness)
  return (
    <div className='w-full py-12'>
        <section className='2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
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
                            src={currentBusiness?.logo || achievements[0].logo}
                            alt='My gate image'
                            className='w-full h-full'
                        />
                    </div>
                    {currentBusiness?.contents.map(data => (
                        <div key={data.id} className='flex flex-col gap-1'>
                            <Typography 
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-medium"
                            >
                                {data.description}
                            </Typography>
                        </div>
                    ))}

                </div>
                <div className='relative w-[500px] h-[550px] flex flex-col justify-center items-center'>
                    <div className='w-[80%] h-fit'>
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
                    <div className='w-full h-fit absolute top-0'>
                        <Image 
                            src={mobile_bg}
                            alt='Mygate'
                            className='w-full mx-auto h-full'
                        />
                    </div>
                    <div className='w-[62%] h-fit absolute top-1 right-[83px]'>
                        <Image 
                            src={currentBusiness?.screen || achievements[0].screen}
                            alt='Mygate'
                            className='w-full mx-auto h-full'
                        />
                    </div>
                </div>
                <div className='inter flex-1 flex flex-col gap-3'>
                    <Typography
                        typo="header-6-semibold"
                        className='pb-3'
                    >
                        Business Impact
                    </Typography>
                    {currentBusiness?.business.map(data => (
                        <div key={data.id} className='flex flex-col gap-3'>
                            <div className='flex items-center gap-2'>
                                <Typography
                                    className='text-[#178450]'
                                    typo="header-2-semibold"
                                >
                                   {data.rate}
                                </Typography>
                                <Typography
                                    typo="body-large-regular"
                                >
                                    {data.title}
                                </Typography>
                            </div>
                            <div 
                                className='w-[70%] border-[2px] border-gray-400 border-dashed'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full flex justify-end items-center gap-3'>
                {achievements.map(data => (
                    <button 
                        key={data.id} 
                        onClick={() => setSelectedBusiness(data.id)}
                        className={`w-4 h-4 rounded-full ${selectedBusiness === data.id ? "bg-gray-600" : "bg-gray-200"} `}
                    ></button>
                ))}
            </div>
        </section>
    </div>
  )
}

export default LeadingCompanies