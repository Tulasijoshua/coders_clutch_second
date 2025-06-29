'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import requirementsIcon from "@/public/assets/icons/solution/hire-devs/requirements_icon.png"
import developersIcon from "@/public/assets/icons/solution/hire-devs/developers_icon.png"
import assembleIcon from "@/public/assets/icons/solution/hire-devs/assemble_icon.png"
import kickstartIcon from "@/public/assets/icons/solution/hire-devs/kickstart_icon.png"
import Image from 'next/image';

const processes = [
    {
        id: "1",
        title: "Project Requirements",
        icon: requirementsIcon,
        description: `Clearly outline project needs for accurate developer matches.`,
    },
    {
        id: "2",
        title: "Choose Developers",
        icon: developersIcon,
        description: `Select top candidates from our expert developer pool.`,
    },
    {
        id: "3",
        title: "Assemble Your Team",
        icon: assembleIcon,
        description: `Customize Developer Selection and Manage Resources.`,
    },
    {
        id: "4",
        title: "Kickstart the Project",
        icon: kickstartIcon,
        description: `Start development with your handpicked remote team.`,
    },
]

function HireRemote() {
  return (
    <div className='w-full py-16 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-1 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Why Hire Dedicated Remote Developers
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    from CODERS Clutch?
                </Typography>
            </div>
            <div className='w-full py-8 grid md:grid-cols-4 xs:grid-cols-2 xs:gap-0 gap-3'>
                {processes.map((data, index) => (
                    <div key={data.id} className={`relative w-full sm:h-[300px] h-[250px] ${index % 2 === 0 ? "md:mt-10" : "mt-0"} flex flex-col justify-center items-center`}>
                        <div className='lg:w-[80%] w-[90%] mx-auto xl:px-10 px-3 py-6 flex flex-col justify-center items-center gap-5 border border-gray-500 rounded-xl text-white'>
                            <Typography
                                typo="header-6-semibold"
                                className='text-center'
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-medium"
                                className='text-center'
                            >
                                {data.description}
                            </Typography>
                        </div>
                        <div className='w-16 h-fit absolute top-0 left-0'>
                            <Image 
                                src={data.icon}
                                alt={`Proces ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div
                            className='absolute bottom-0 left-0 sm:text-9xl text-8xl font-bold text-app-primary-light'
                        >
                            {data.id}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default HireRemote