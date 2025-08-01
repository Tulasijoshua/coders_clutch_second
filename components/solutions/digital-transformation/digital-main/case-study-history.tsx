'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import tataImg from "@/public/assets/icons/success/tata.svg";
import versaImg from "@/public/assets/icons/success/versa.png";
import iffImg from "@/public/assets/icons/success/iff.svg";
import daimlerImg from "@/public/assets/icons/success/daimler.svg";
import trueImg from "@/public/assets/icons/success/true.svg";
import mygateImg from "@/public/assets/icons/success/mygate.svg";
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const case_studies = [
    {
        id: "1",
        img: tataImg,
        content: `Enabled thousands of IoT devices for Mumbai's smart city initiatives, boosting urban connectivity and efficiency.`,
        rate: "500+",
        rate_title: "IoT Meters Connected",
    },
    {
        id: "2",
        img: versaImg,
        content: `Launched an AI-powered SD-WAN & SASE platform that manages IT edge devices for large global enterprises.`,
        rate: "120+",
        rate_title: "Fortune 500 Companies",
    },
    {
        id: "3",
        img: iffImg,
        content: `Supports its GCC (Global capability center) through flexible and effective staff augmentations.`,
        rate: "50%",
        rate_title: "of Total Engineers",
    },
    {
        id: "4",
        img: daimlerImg,
        content: `Delivered end-to-end Uberization of Trucks platform with advanced fleet management and optimization.`,
        rate: "100K",
        rate_title: "Bharat Benz Trucks in 3 Countries",
    },
    {
        id: "5",
        img: trueImg,
        content: `Built the super app for SE-Asia's largest telecom provider, improving user experience and service capabilities.`,
        rate: "1M+",
        rate_title: "Concurrent Users",
    },
    {
        id: "6",
        img: mygateImg,
        content: `Integrated MirrorFly communication tools from chats to calls hosted on a private cloud.`,
        rate: "5M+",
        rate_title: "Conversations Delivered",
    },
]

function CaseStudyHistory() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col items-center gap-2'>
            <Typography
                typo="header-4-medium"
            >
                Case Studies Our History of Successful Transformations
            </Typography>
            <div className='inter w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-4'>
                {case_studies.map((data, index) => (
                    <Card
                        key={data.id}
                        className='lg:p-10 p-6 flex flex-col gap-6 bg-[#F8F8F8] hover:bg-yellow-50'
                    >
                        <CardHeader
                            className='p-0 w-[100px] h-fit'
                        >
                            <Image 
                                src={data.img}
                                alt={`Case study ${index}`}
                                className='w-full h-full'
                            />
                        </CardHeader>
                        <CardContent className='p-0'>
                            <Typography
                                typo="body-large-semibold"
                            >
                                {data.content}
                            </Typography>
                        </CardContent>

                        <CardFooter
                            className='h-full p-0 flex flex-col items-start justify-end'
                        >
                            <Typography
                                typo="header-2-semibold"
                                className='!font-bold !leading-none text-app-green-text'
                            >
                                {data.rate}
                            </Typography>
                            <Typography
                                typo="body-medium-semibold"
                            >
                                {data.rate_title}
                            </Typography>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default CaseStudyHistory