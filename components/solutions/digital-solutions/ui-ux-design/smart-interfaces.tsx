'use client';
import Typography from '@/components/shared/typography';
import React from 'react';
import smartImg from '@/public/assets/images/solutions/smart-interface.png'
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const design_services = [
    {
        id: "1",
        title: "Product",
        sub_title: "Ideation",
        description: "Convert ideas into impactful products with smart strategies and fresh thinking.",
    },
    {
        id: "2",
        title: "User Interface",
        sub_title: "(UI) Design",
        description: "Create sleek, eye-catching designs that keep users hooked for a long period.",
    },
    {
        id: "3",
        title: "User Experience ",
        sub_title: "(UX) Design",
        description: "Create intuitive user journeys that make navigating your product smooth and highly enjoyable.",
    },
    {
        id: "4",
        title: "Digital Product",
        sub_title: "Redesign",
        description: "Revamp outdated interfaces with modern visuals and smoother, conversion-focused UX.",
    },
    {
        id: "5",
        title: "UX Audit",
        sub_title: "& Optimization",
        description: "Spot usability issues, fix experience gaps & improve overall performance strategically.",
    },
    {
        id: "6",
        title: "Custom Product",
        sub_title: "Development",
        description: "Build tailor-made digital products aligned with your business goals and user expectations.",
    },
    {
        id: "7",
        title: "Design Strategy",
        sub_title: "Consulting",
        description: "Leverage expert design advice to align user needs with your product and business objectives.",
    },
    {
        id: "8",
        title: "Interactive",
        sub_title: "Prototyping",
        description: "Validate design ideas with realistic, clickable prototypes before moving into full development.",
    },
    {
        id: "9",
        title: "Accessibility & ",
        sub_title: "Inclusion Design",
        description: "Design inclusive digital products that are easy for everyone to understand and navigate.",
    },
]

function SmartInterfaces() {
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col'>
                <Typography
                    typo="header-3-light"
                >
                    Build Smart Interfaces With
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    UI/UX Design & Development Services for Better Engagement
                </Typography>
            </div>
            <div className='w-full flex justify-between gap-6'>
                <section className='flex-1 grid md:grid-cols-3 sm:grid-cols-2 gap-3'>
                    {design_services.map((data) => (
                        <Card key={data.id} className=' rounded-[1.3rem] bg-[#F8F8F8] border-l-[3px] border-t-[3px] border-r-0 border-b-0 border-green-500'>
                            <CardHeader className=' pb-3 flex flex-row items-center gap-2'>
                                <div className='xl:flex sm:hidden'>
                                    <MousePointer2 className='rotate-90' fill='#FFB22B' />
                                </div>
                                <div className=''>
                                    <CardTitle
                                        className='flex-1 text-xl inter'
                                    >{data.title}</CardTitle>
                                    <CardTitle
                                        className='flex-1 text-xl inter'
                                    >{data.sub_title}</CardTitle>
                                </div>

                            </CardHeader>
                            <CardContent className='pb-6'>
                                <CardDescription
                                    className='text-base text-black'
                                >{data.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </section>
                <section className='w-[300px] min-h-full relative lg:flex hidden flex-col justify-end'>
                    <div className='w-full h-full'>
                        <Image
                            src={smartImg}
                            alt='Smart image'
                            className='w-full h-full'
                        />
                    </div>
                    <div className='px-5 absolute bottom-6 flex flex-col gap-3 text-white'>
                        <Typography
                            typo="header-6-semibold"
                        >
                            Designs That Win Users
                        </Typography>
                        <Typography
                            typo="body-medium-medium"
                            className='!leading-relaxed'
                        >
                            Try a UI/UX Design and Development Service That Works
                        </Typography>
                        <Button
                            variant="primary"
                            className='!px-8 !text-lg'
                        >
                            Book A 30 Mins Call
                        </Button>
                    </div>

                </section>
            </div>
        </section>
    </div>
  )
}

export default SmartInterfaces