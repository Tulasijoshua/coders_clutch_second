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
        title: "On-Time Delivery",
        description: `Ensure efficient DevOps practices for on-time, reliable deployment cycles with a full-cycle DevOps service provider.`,
    },
    {
        id: "2",
        icon: inconsistentIcon,
        title: "Skilled DevOps Engineers",
        description: `Leverage DevOps best practices with skilled, culture-fit DevOps engineers to take yo ur business to the next level.`,
    },
    {
        id: "3",
        icon: userIcon,
        title: "Flexible Hiring Model",
        description: `Get customized DevOps development services to fit unique project requirements and scalability needs.`,
    },
    {
        id: "4",
        icon: crossIcon,
        title: "Best Security Integration",
        description: `Incorporate top-tier security protocols within the DevOps services pipeline to safeguard data and applications.`,
    },
    {
        id: "5",
        icon: designIcon,
        title: "Dedicated DevOps Team",
        description: `Hire DevOps engineers to optimize your CI/CD pipeline for continuous improvement and delivery.`,
    },
    {
        id: "6",
        icon: scopeIcon,
        title: "Better Scalability",
        description: `Design DevOps strategies that scale with your business. Build scalable products with optimal performance.`,
    },
]

function WhyChoose() {
  return (
    <div className='w-full py-16 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Why choose CODERS Clutch
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    As Your DevOps Service Provider?
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {design_gaps.map((data, index) => (
                    <div key={data.id} className='lg:pr-16 md:p-0 sm:p-3 p-4 flex flex-col gap-4 md:shadow-none shadow-md md:rounded-none rounded-md'>
                        <div className='sm:w-12 w-10 sm:h-12 h-10 rounded-md'>
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

export default WhyChoose