'use client';
import Typography from '@/components/shared/typography';
import React from 'react'

const product_services = [
    {
        id: "1",
        title: "Expanded Access to Learning",
        description: `Extend reach of education to rural and underserved communities.`,
    },
    {
        id: "2",
        title: "Improved Teacher Productivity",
        description: `Save time on admin tasks and focus on student interaction.`,
    },
    {
        id: "3",
        title: "Consistent Quality & Delivery",
        description: `Standardize educational content across schools.`,
    },
    {
        id: "4",
        title: "Performance-Driven Insights",
        description: `Use data to shape interventions, curriculum, and policy.`,
    }
]

function SmartEducationBenefits() {
  return (
    <div className='w-full py-20 bg-white'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Benefits for
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Governments & Educators
                </Typography>
            </div>

            <div className='w-full md:py-8 grid lg:grid-cols-4 sm:grid-cols-2 md:gap-12 gap-6'>
                {
                    product_services.map((data) => (
                        <div key={data.id} className='md:p-0 p-6 flex flex-col gap-3 md:shadow-none shadow-md md:rounded-none rounded-md'>
                            <div className='flex flex-col gap-3'>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-12 h-[3px] bg-app-green-text'></div>
                            </div>
                            <Typography
                                className='!text-lg !font-normal'
                            >
                                {data.description}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default SmartEducationBenefits