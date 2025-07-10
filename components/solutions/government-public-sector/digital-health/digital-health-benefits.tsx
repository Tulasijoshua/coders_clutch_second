'use client';
import Typography from '@/components/shared/typography';
import React from 'react';

const product_services = [
    {
        id: "1",
        title: "Wider Access to Healthcare",
        description: `Bring telemedicine to underserved and rural populations.`,
    },
    {
        id: "2",
        title: "Improved Disease Surveillance",
        description: `Monitor and respond to outbreaks faster using real-time health data.`,
    },
    {
        id: "3",
        title: "Data-Driven Policy Making",
        description: `Use analytics to shape better health programs and budget allocation.`,
    },
    {
        id: "4",
        title: "Operational Efficiency",
        description: `Digitize patient records and reduce paperwork, queues, and errors.`,
    },
    {
        id: "5",
        title: "Trust and Transparency",
        description: `Improve reporting accuracy and healthcare accountability.`,
    },
]

function DigitalHealthBenefits() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter pb-4 flex flex-col gap-3'>
                <Typography
                    typo="header-3-light"
                >
                    Benefits for
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Governments & Communities
                </Typography>
            </div>
            <div className='w-full md:py-8 grid lg:grid-cols-5 sm:grid-cols-2 md:gap-12 gap-6'>
                {
                    product_services.map((data) => (
                        <div key={data.id} className='flex flex-col justify-center gap-3'>
                            <div className='flex flex-col gap-3'>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-12 h-[3px] bg-app-green-text'></div>
                            </div>
                            <div className='flex flex-col justify-start'>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default DigitalHealthBenefits