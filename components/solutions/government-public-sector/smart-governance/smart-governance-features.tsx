'use client';
import Typography from '@/components/shared/typography';
import React from 'react'

const product_services = [
    {
        id: "1",
        title: "Citizen Self-Service Portals",
        description: `Apply for permits, track applications, pay bills—all online.`,
    },
    {
        id: "2",
        title: "E-Forms & Workflow Automation",
        description: `Digitized forms with role-based processing and status tracking.`,
    },
    {
        id: "3",
        title: "Public Feedback & Grievance Redressal",
        description: `Citizens can report issues and track response resolution in real-time.`,
    },
    {
        id: "4",
        title: "Transparency Dashboards",
        description: `Budget spend, project status, and performance metrics for the public.`,
    },
    {
        id: "5",
        title: "Digital Identity & Access Management",
        description: `Secure login, document e-verification, and role-based access.`,
    },
]

function SmartGovernanceFeatures() {
  return (
    <div className='w-full py-12 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Our Key
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Features & Capabilities
                </Typography>
            </div>

            <div className='w-full md:py-8 grid lg:grid-cols-3 sm:grid-cols-2 md:gap-12 gap-6'>
                {
                    product_services.map((data) => (
                        <div key={data.id} className='sm:p-0 p-4 flex flex-col gap-3 sm:shadow-none shadow-md sm:rounded-none rounded-md'>
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

export default SmartGovernanceFeatures