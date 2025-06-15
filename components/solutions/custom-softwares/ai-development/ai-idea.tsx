'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

const clients_served = [
    {
        id: "1",
        rate: "150+",
        title: "In-house AI Developers",
    },
    {
        id: "2",
        rate: "70%",
        title: "Saving on Development Cost",
    },
    {
        id: "3",
        rate: "50+",
        title: "Custom AI Solutions",
    },
    {
        id: "4",
        rate: "17+",
        title: "Total Years of Experience",
    },
]

function AiIdea() {
  return (
    <div className='maskbg w-full py-16 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col'>
                <Typography
                    typo="header-3-light"
                >
                    Got an AI Idea?
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    We Will Architect It To 100% Perfection. No Less
                </Typography>
            </div>
            <div className='w-full grid md:grid-cols-4 xs:grid-cols-2 gap-2'>
                {clients_served.map((data) => (
                    <div key={data.id} className='px-3 flex flex-col border-l-[3px] border-black'>
                        <Typography
                            typo="header-1-semibold"
                            className='pops'
                        >
                            {data.rate}
                        </Typography>
                        <div className='flex flex-col gap-1'>
                            <Typography
                                typo="body-medium-medium"
                            >
                                {data.title}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default AiIdea