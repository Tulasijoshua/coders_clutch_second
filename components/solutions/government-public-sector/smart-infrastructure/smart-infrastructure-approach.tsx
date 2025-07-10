'use client';
import Typography from '@/components/shared/typography';
import React from 'react'

const product_services = [
    {
        id: "1",
        title: "Urban Infrastructure Audit",
        description: `Mapping and assessing existing utilities, public facilities, and digital readiness`,
    },
    {
        id: "2",
        title: "Platform Design",
        description: `Architecture for sensor integration, data flow, and control interfaces.`,
    },
    {
        id: "3",
        title: "Sensor & IoT Deployment",
        description: `Real-time data collection through smart devices across infrastructure points.`,
    },
    {
        id: "4",
        title: "System Integration",
        description: `Connecting city services (e.g., traffic, lighting, sanitation) to a central control system.`,
    },
    {
        id: "5",
        title: "Automation & Optimization",
        description: `Using algorithms and AI for predictive maintenance, load balancing, and resource routing.`,
    },
    {
        id: "6",
        title: "Performance Monitoring",
        description: `Dashboards for real-time oversight and KPI tracking.`,
    },
]

function SmartInfrastructureApproach() {
  return (
    <div className='w-full py-12 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Our Approach to
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Smart Infrastructure Development
                </Typography>
            </div>

            <div className='w-full md:py-8 grid lg:grid-cols-3 sm:grid-cols-2 md:gap-12 gap-6'>
                {
                    product_services.map((data) => (
                        <div key={data.id} className='flex flex-col gap-3'>
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

export default SmartInfrastructureApproach