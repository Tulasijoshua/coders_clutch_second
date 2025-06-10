'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

const business_growth = [
    {
        id: "1",
        title: "Countries Served",
        description: `We have spread our wings out to 40+ countries, across 5 continents, and 10 different time zones making a global impact.`,
        rate: "15+",
        rate_title: "Countries we served",
    },
    {
        id: "2",
        title: "Happy Clients",
        description: `Our customer base extends from ‘Fortune 500’ companies to all sizes of businesses reflecting success and 
                        growth.`,
        rate: "150+",
        rate_title: "Clients like family",
    },
    {
        id: "3",
        title: "Digital Solutions",
        description: `Delivering digital solution success and growth by leveraging cutting-edge technology, customer engagement, 
                        and digital evolution.`,
        rate: "200+",
        rate_title: "Solutions for seekers",
    },
    {
        id: "4",
        title: "Digital Experts",
        description: `Our extensive range of experts are known for delivering tailored digital transformation solutions and 
                        strategies that drives innovation.`,
        rate: "500+",
        rate_title: "Senior tech experts",
    },
]

function OurGrowth() {
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Our Growth
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Scaling up digital business growth from scratch
                </Typography>
            </div>
            <div className='w-full py-6 grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-4'>
                {business_growth.map((data) => (
                    <div
                        key={data.id}
                        className='relative 2xl:pl-10 xl:pl-6 pl-4 xl:pr-8 pr-4 lg:pb-0 pb-2 flex flex-col justify-between gap-2 lg:border-l lg:border-b-none border-b border-dashed border-gray-300'
                    >
                        <div className='flex flex-col gap-4'>
                            <Typography
                                typo="header-5-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-medium"
                            >
                                {data.description}
                            </Typography>
                        </div>
                        <div className='inter lg:pt-10 pt-5 flex flex-col '>
                            <Typography
                                typo="header-1-semibold"
                                className='text-app-green-text !font-bold !leading-none'
                            >{data.rate}</Typography>
                            <Typography
                                typo="body-medium-semibold"
                            >
                                {data.rate_title}
                            </Typography>
                            <div className='lg:block hidden h-16 w-[2px] absolute left-0 bg-app-green-text'></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default OurGrowth