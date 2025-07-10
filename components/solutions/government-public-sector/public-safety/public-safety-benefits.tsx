'use client';
import Typography from '@/components/shared/typography';
import React from 'react'

const product_services = [
    {
        id: "1",
        title: "Faster Incident Response",
        description: `Cut down on emergency response times through streamlined workflows.`,
    },
    {
        id: "2",
        title: "Increased Situational Awareness",
        description: `Command centers gain visibility into ongoing operations and safety status.`,
    },
    {
        id: "3",
        title: "Coordination Across Agencies",
        description: `Unify EMS, fire, police, and civil defense operations.`,
    },
    {
        id: "4",
        title: "Improved Safety for Field Personnel",
        description: `Track teams, provide alerts, and ensure real-time communication.`,
    }
]

function PublicSafetyBenefits() {
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
                    Emergency Teams & Citizens
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

export default PublicSafetyBenefits