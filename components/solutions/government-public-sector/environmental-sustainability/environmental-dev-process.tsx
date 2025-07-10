'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import ideationIcon from "@/public/assets/icons/solution/mvp-dev/ideation_icon.png"
import prototypingIcon from "@/public/assets/icons/solution/mvp-dev/prototyping_icon.png"
import agileIcon from "@/public/assets/icons/solution/mvp-dev/agile_icon.png"
import testingIcon from "@/public/assets/icons/solution/mvp-dev/testing_icon.png"
import deploymentIcon from "@/public/assets/icons/solution/mvp-dev/deployment_icon.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const mvp_workflows = [
    {
        id: "1",
        icon: ideationIcon,
        title: "Environmental Data",
        sub_title: "Needs Assessment",
        description: "Evaluate priority areas: air, water, waste, energy.",
    },
    {
        id: "2",
        icon: prototypingIcon,
        title: "Smart Sensor",
        sub_title: " Network Design",
        description: "Deploy IoT sensors for real-time environmental readings.",
    },
    {
        id: "3",
        icon: testingIcon,
        title: "Data Collection",
        sub_title: "& Integration",
        description: "Unify data from public works, weather APIs, and local measurements.",
    },
    {
        id: "4",
        icon: agileIcon,
        title: "Sustainability ",
        sub_title: "Dashboard Development",
        description: "Interactive visualization of pollution trends, resource usage, and alerts.",
    },
    {
        id: "5",
        icon: deploymentIcon,
        title: "Automation &",
        sub_title: "Policy Alerts",
        description: "Trigger actions or notifications when limits are breached.",
    },
]

function EnvironmentalDevProcess() {
  return (
    <div className='w-full py-12 saas-cycle-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%]'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Our Eco-Tech
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    Development Process
                </Typography>
            </div>
            <div className='lg:block hidden w-full py-8'>
                <div className='w-[90%] pl- grid grid-cols-3 gap-4'>
                    {mvp_workflows.slice(0, 3).map((data, index) => (
                        <Card
                            key={data.id}
                            className='max-w-[330px] border-none bg-white'
                        >
                            <CardHeader >
                                <div className='w-12 h-fit'>
                                    <Image 
                                        src={data.icon}
                                        alt={`Cycle ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className='flex flex-col'>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.id}. {data.title}
                                </Typography>
                                {/* <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.sub_title}
                                </Typography> */}
                            </CardContent>
                            <CardFooter>
                                <CardDescription
                                    className='text-base text-black'
                                >
                                    {data.description}
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className='w-[90%] mb-2 flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className='w-4 h-4 bg-white border-[3px] border-black rounded-full'></div>
                    ))}
                </div>
                <div className='w-[90%] -mb-2 flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className=' py-6 border-l-[2px] border-dashed border-gray-500'></div>
                    ))}
                </div>
                <div className='w-[90%] -mb-4 flex justify-around z-[20]'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className='w-4 h-4 bg-white border-[3px] border-black rounded-full'></div>
                    ))}
                </div>
                <div className='w-full flex flex-justify-between items-center'>
                    <div className='w-4 h-4 bg-green-700 rounded-full'></div>
                    <div className='w-full grid-cols-3 border-b-2 border-dashed border-gray-400'></div>
                    <div className='w-4 h-4 bg-green-700 rounded-full'></div>
                </div>
                <div className='w-[90%] ml-auto -mt-4 flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className='w-4 h-4 bg-white border-[3px] border-black rounded-full'></div>
                    ))}
                </div>
                <div className='w-[90%] ml-auto -mb-2 flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className=' py-6 border-l-[2px] border-dashed border-gray-500'></div>
                    ))}
                </div>
                <div className='w-[90%] ml-auto mb- flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className='w-4 h-4 bg-white border-[3px] border-black rounded-full'></div>
                    ))}
                </div>
                <div className='w-[90%] ml-auto grid grid-cols-3 gap-4'>
                    {mvp_workflows.slice(3, 6).map((data, index) => (
                        <Card
                            key={data.id}
                            className='max-w-[330px] border-none bg-white'
                        >
                            <CardHeader >
                                <div className='w-12 h-fit'>
                                    <Image 
                                        src={data.icon}
                                        alt={`Cycle ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className='flex flex-col'>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.id}. {data.title}
                                </Typography>
                                {/* <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.sub_title}
                                </Typography> */}
                            </CardContent>
                            <CardFooter>
                                <CardDescription
                                    className='text-base text-black'
                                >
                                    {data.description}
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='lg:hidden block w-full py-2'>
                <div className='w-full grid sm:grid-cols-2 gap-4'>
                    {mvp_workflows.map((data, index) => (
                        <Card
                            key={data.id}
                            className='border-none bg-white'
                        >
                            <CardHeader >
                                <div className='w-12 h-12'>
                                    <Image 
                                        src={data.icon}
                                        alt={`Cycle ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className='flex sm:flex-col gap-1'>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.id}. {data.title}
                                </Typography>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.sub_title}
                                </Typography>
                            </CardContent>
                            <CardFooter>
                                <CardDescription
                                    className='text-base text-black'
                                >
                                    {data.description}
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default EnvironmentalDevProcess