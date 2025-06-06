'use client';
import Typography from '@/components/shared/typography';
import React from 'react'

const clients_served = [
    {
        id: "1",
        rate: "100+",
        title: "Expert",
        sub_title: "UI/UX Designers",
    },
    {
        id: "2",
        rate: "1500+",
        title: "Successful Design",
        sub_title: "Projects Delivered",
    },
    {
        id: "3",
        rate: "70+",
        title: "Countries",
        sub_title: "We Served",
    },
    {
        id: "4",
        rate: "17+",
        title: "Years of Proven",
        sub_title: "Design Experience",
    },
]

function DrivenPurpose() {
  return (
    <div className='maskbg w-full py-16 '>
        <section className='max-container w-[85%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col'>
                <Typography
                    typo="header-3-light"
                >
                    Driven by Purpose
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Product Design Services That Feel Right and Work Better
                </Typography>
            </div>
            <div className='w-full grid grid-cols-4 gap-2'>
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
                            <Typography
                                typo="body-medium-medium"
                            >
                                {data.sub_title}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default DrivenPurpose