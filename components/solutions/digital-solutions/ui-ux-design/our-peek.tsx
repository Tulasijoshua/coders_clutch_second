'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import processImg from "@/public/assets/images/solutions/process-img.png";
import Image from 'next/image';

const successful_designs = [
    {
        id: "1",
        title: "Define the Problem",
        description: `Translate research insights into clear, actionable problem statements for better product direction.`,
    },
    {
        id: "2",
        title: "Wireframe & Structure",
        description: `Sketch layout and navigation structure to visualize flow and identify early design gaps.`,
    },
    {
        id: "3",
        title: "Test & Iterate",
        description: `Conduct user testing, gather feedback, and refine designs for better usability and outcomes.`,
    },
    {
        id: "4",
        title: "Research & Understand",
        description: `Analyze user behavior, market trends, and business needs to guide informed design decisions.`,
    },
    {
        id: "5",
        title: "Ideate Solutions",
        description: `Explore and brainstorm design possibilities that align with user needs and business goals.`,
    },
    {
        id: "6",
        title: "Design & Prototype",
        description: `Create engaging visuals and interactive prototypes to simulate real product experience.`,
    },
]

function OurPeek() {
  return (
    <div className='w-full py-12'>
        <section className='inter max-container w-[85%] mx-auto xl:pb-12 pb-10 flex flex-col gap-2'>
            <Typography
                typo="header-3-light"
            >
                A Peek into Our
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='!font-bold'
            >
                Tried-and-Tested Methods for Successful Product Design
            </Typography>
        </section>

        <section className='max-container w-full '>
            <div className='w-[90%] pb-6 flex justify-end'>
                <div className='w-[70%] grid grid-cols-3 gap- pr-8'>
                    {successful_designs.slice(0, 3).map(data => (
                        <div key={data.id} className='max-w-[270px] flex flex-col justify-center gap-4'>
                            <Typography
                                typo="body-large-semibold"
                                className={`${data.id === "3" ? "text-left" : "text-center"}`}
                            >{data.title}</Typography>
                            <Typography
                                typo="body-medium-regular"
                                className={`${data.id === "3" ? "text-left" : "text-center"} !leading-normal`}
                            >{data.description}</Typography>

                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full h-fit'>
                <Image 
                    src={processImg}
                    alt='Process image'
                    className='w-full h-full'
                />
            </div>
            <div className='w-[70%] pt-8 mx-auto grid grid-cols-3 gap-3 pr-8'>
                {successful_designs.slice(3, 6).map(data => (
                    <div key={data.id} className='max-w-[270px] flex flex-col justify-center gap-4'>
                        <Typography
                            typo="body-large-semibold"
                            className={`${data.id === "6" ? "text-left" : "text-center"}`}

                        >{data.title}</Typography>
                        <Typography
                            typo="body-medium-regular"
                            className={`${data.id === "6" ? "text-left" : "text-center"} !leading-normal`}
                        >{data.description}</Typography>

                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default OurPeek