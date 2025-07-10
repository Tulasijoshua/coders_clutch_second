'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import productIcon from "@/public/assets/icons/design-gap/product.svg"
import inconsistentIcon from "@/public/assets/icons/design-gap/inconsistent.svg"
import userIcon from "@/public/assets/icons/design-gap/user.svg"
import crossIcon from "@/public/assets/icons/design-gap/cross-platform.svg"
import designIcon from "@/public/assets/icons/design-gap/design.svg"
import scopeIcon from "@/public/assets/icons/design-gap/scope-creep.svg"
import Image from 'next/image';

const design_gaps = [
    {
        id: "1",
        icon: productIcon,
        title: "Policy Alignment & Digital Strategy",
        description: `We work with government stakeholders to align digital systems with governance goals.`,
    },
    {
        id: "2",
        icon: inconsistentIcon,
        title: "Platform Design & Interoperability",
        description: `Modular architecture that connects existing systems, databases, and services.`,
    },
    {
        id: "3",
        icon: userIcon,
        title: "Inclusive UX Design",
        description: `User-centric design tailored for multilingual, low-bandwidth, and mobile-first populations.`,
    },
    {
        id: "4",
        icon: crossIcon,
        title: "Development & Deployment",
        description: `Agile rollout with phased onboarding across agencies and departments.`,
    },
    {
        id: "5",
        icon: designIcon,
        title: "Capacity Building",
        description: `Training public staff, knowledge transfer, and documentation.`,
    },
    {
        id: "6",
        icon: scopeIcon,
        title: "Monitoring & Compliance",
        description: `Audit trails, access logs, and governance dashboards ensure accountability.`,
    },
]

function SmartGovernanceApproah() {
  return (
    <div className='w-full py-12 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Our Approach 
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    to Governance Digitization
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {design_gaps.map((data, index) => (
                    <div key={data.id} className='lg:pr-16 md:p-0 sm:p-3 p-4 flex flex-col gap-4 md:shadow-none shadow-md md:rounded-none rounded-md'>
                        <div className='sm:w-16 w-12 sm:h-16 h-12 rounded-md'>
                            <Image 
                                src={data.icon}
                                alt={`Design ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <Typography
                            typo="header-6-semibold"
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            typo="body-medium-medium"
                            className='!leading-relaxed'
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

export default SmartGovernanceApproah