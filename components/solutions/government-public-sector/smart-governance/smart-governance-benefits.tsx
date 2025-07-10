'use client';
import Typography from '@/components/shared/typography';
import React from 'react';

const product_services = [
    {
        id: "1",
        title: "Faster Service Delivery",
        description: `Slash turnaround times from days to minutes with automated workflows.`,
    },
    {
        id: "2",
        title: "Improved Public Trust",
        description: `Increase civic confidence with open, responsive systems.`,
    },
    {
        id: "3",
        title: "Broader Access to Government",
        description: `Citizens can interact with services anytime, from anywhere.`,
    },
    {
        id: "4",
        title: "Operational Cost Savings",
        description: `Reduced need for manual paperwork, printing, and office visits.`,
    },
    {
        id: "5",
        title: "Data-Driven Governance",
        description: `Leverage reports and analytics to inform decisions and shape policy.`,
    },
]

function SmartGovernanceBenefits() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter pb-4 flex flex-col gap-3'>
                <Typography
                    typo="header-3-light"
                >
                    Tangible Benefits
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    for Governments & Citizens
                </Typography>
            </div>
            <div className='w-full md:py-8 grid lg:grid-cols-5 sm:grid-cols-2 md:gap-12 gap-6'>
                {
                    product_services.map((data) => (
                        <div key={data.id} className='sm:p-0 p-4 flex flex-col justify-center gap-3 sm:shadow-none shadow-md sm:rounded-none rounded-md'>
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

export default SmartGovernanceBenefits