'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import fullCircleImg from "@/public/assets/images/solutions/saas-product/full-circle-img.svg";
import Image from 'next/image';

const circles = [
    {
      id: "1",
      title: "Product Discovery",
      description: `Understand customer needs & conduct market research`,
      position: "bottom-[10%] left-1/3 -translate-x-1/2"
    },
    {
      id: "2",
      title: "Product Design",
      description: `Create the product concept and UI prototypes`,
      position: "left-[20%] top-1/2 -translate-y-1/2"
    },
    {
      id: "3",
      title: "Development & Architecture",
      description: `Develop the product, its structure, & functionality`,
      position: "-top-[5%] left-[25%]"
    },
    {
      id: "4",
      title: "Testing and QA",
      description: `Validate if the product meets the requirements`,
      position: "-top-[5%] right-[25%]"
    },
    {
      id: "5",
      title: "Cloud Deployment",
      description: `Deploy SaaS app and data onto a remote server`,
      position: "right-[20%] top-[40%] -translate-y-1/2"
    },
    {
      id: "6",
      title: "Maintenance and Support",
      description: `Patch management, data backups, & software updates`,
      position: "bottom-[10%] right-1/3 translate-x-1/2"
    },
  ];

function SaasFullCircle() {
    
  return (
    <div className='w-full py-12 bg-app-primary-deep'>
        <section className='inter max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto xl:pb-12 pb-10 flex flex-col gap-2 text-white'>
            <Typography
                typo="header-3-light"
            >
                A Full-Cycle SaaS
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='!font-bold capitalize'
            >
                Discovery, Design, Deployment, and Ongoing Support
            </Typography>
        </section>
        <section className='w-full max-w-[100rem] mx-auto pt-12'>
            <div className='w-full h-fit relative'>
                <Image 
                    src={fullCircleImg}
                    alt='Circle image'
                    className='w-full h-full'
                />
                <Typography
                    typo="header-4-semibold"
                    className='w-[200px] absolute right-1/2 left-1/2 top-32 transform -translate-x-1/2 text-black text-center'
                >
                    SaaS Development Lifecycle
                </Typography>
                <div className='w-full py-6'>
                    {circles.map(data => (
                        <div
                            key={data.id}
                            className={`w-[250px] absolute ${data.position} flex flex-col gap-3`}
                        >
                            <Typography
                                typo="body-large-semibold"
                                className='w-full py-4 px-8 text-center bg-[#F5E9E4] rounded-xl'
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-semibold"
                                className='w-full py-2 text-white'
                            >
                                {data.description}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default SaasFullCircle