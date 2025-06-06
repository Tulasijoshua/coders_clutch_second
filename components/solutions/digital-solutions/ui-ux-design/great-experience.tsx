'use client';
import React from 'react'
import experienceImg from "@/public/assets/images/solutions/great-experience.png";
import Typography from '@/components/shared/typography';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const experiences = [
    {
        id: "1",
        title: "MVP Product Design",
        description: `Create a powerful MVP that nails your core idea, impresses users, and attracts early adopters fast.`,
    },
    {
        id: "2",
        title: "Product Redesign",
        description: `Revamp outdated designs with modern aesthetics and smarter flows to increase conversions by 10x.`,
    },
    {
        id: "3",
        title: "Design System",
        description: `Build a unified design system that streamlines workflows and keeps your product visually consistent.`,
    },
    {
        id: "4",
        title: "Mobile App",
        description: `Deliver intuitive mobile app experiences that keep users engaged and lead to more purchases.`,
    },
    {
        id: "5",
        title: "Web App",
        description: `Create web apps with seamless navigation, stunning visuals, and functionality that converts visitors.`,
    },
    {
        id: "6",
        title: "SaaS Product",
        description: `Design SaaS platforms that simplify complex tasks with intuitive layouts and clear user journeys.`,
    },
]

function GreatExperience() {
  return (
    <div className='w-full flex items-stretch justify-between gap-8 bg-black'>
        <section className='flex-1 py-8 bg-black'>
            <div className='w-full flex justify-end border '>
                <div className='max-w-[55rem] w-[85%] border flex flex-col justify-between h-full'>
                    <div className='inter xl:pb-6 pb-4 flex flex-col gap-3 text-white'>
                        <Typography
                            typo="header-3-light"
                        >
                            Deliver Great Experiences
                        </Typography>
                        <Typography
                            typo="header-3-semibold"
                            className='!font-bold'
                        >
                            With A Result-Driven Product Design Company
                        </Typography>
                    </div>
                    <div className='w-full py-8 flex-grow'>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full text-white"
                            defaultValue="item-1"
                        >
                            {experiences.map((data, index) => (
                                <AccordionItem 
                                    key={data.id} 
                                    value={`item-${index+1}`}
                                    className='py-2 border-gray-600'
                                >
                                    <AccordionTrigger className='text-xl font-semibold [&>svg]:text-white'>{data.title}</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
                                        <p>
                                            {data.description}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                            
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
        <section className='w-[45%] relative'>
            <div className='absolute inset-0'>
                <Image 
                    src={experienceImg}
                    alt='Experience image'
                    className='w-full h-full object-cover'
                />
            </div>
        </section>
    </div>
  )
}

export default GreatExperience