'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

const processes = [
    {
        id: "1",
        title: "Discovery",
        description: `We obtain your project requirements, carry out strategic analysis and familiarize you with our process.`,
    },
    {
        id: "2",
        title: "Design",
        description: `We turn creative ideas into design layouts, UI experience and user interfaces that render a visually 
                        exciting experience for users.`,
    },
    {
        id: "3",
        title: "Engineer",
        description: `We take advantage of cutting-edge technology to build next-gen mobile apps that deliver immersive 
                        and memorable experiences - cost-effectively.`,
    },
    {
        id: "4",
        title: "Scale",
        description: `We scale your business to new heights. We offer post-release support to ensure the quality of your 
                        app is continuously improved.`,
    },
]

function MobileOurProcess() {
  return (
    <div className='mobile-process-bg w-full xs:py-24 py-16'>
        <section className='rale max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col gap-8 text-white'>
            <div className=' flex flex-col items-center gap-3'>
                <Typography
                    typo="header-2-semibold"
                    className='text-center'
                >
                    Our process actively involves finding the best solution
                </Typography>
                <Typography
                    typo="body-large-medium"
                    className='text-center'
                >
                    Swift. Transparent. Collaborative. Our strategy for app development helps you make the right choice for your users.
                </Typography>
            </div>
            <div className='w-full lg:py-12 xs:py-6 py-4 grid lg:grid-cols-4 xs:grid-cols-2 xl:gap-20 xs:gap-10 gap-6'>
                {processes.map(data => (
                    <div key={data.id} className='flex flex-col xs:gap-4 gap-2'>
                        <Typography
                            typo="header-5-semibold"
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            typo="body-medium-semibold"
                        >
                            {data.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default MobileOurProcess