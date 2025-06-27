'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import licenseIcon from "@/public/assets/icons/solution/licensing/license_icon.png"
import costIcon from "@/public/assets/icons/solution/licensing/cost_icon.png"
import complianceIcon from "@/public/assets/icons/solution/licensing/compliance_icon.png"
import visibilityIcon from "@/public/assets/icons/solution/licensing/visibility_icon.png"
import partnershipIcon from "@/public/assets/icons/solution/licensing/partnership_icon.png"
import scalableIcon from "@/public/assets/icons/solution/licensing/scalable_icon.png"
import customizeIcon from "@/public/assets/icons/solution/licensing/customized_icon.png"
import Image from 'next/image';

const why_managed = [
    {
        id: "1",
        icon: licenseIcon,
        title: "Proven Expertise Across Leading OEMs",
        description: `We leverage partnerships with top-tier brands like Dell, Oracle, Microsoft, Huawei, and Fortinet 
                        to deliver cutting-edge IT solutions tailored to your needs.`,
    },
    {
        id: "2",
        icon: costIcon,
        title: "24/7 Proactive Support",
        description: `Our team ensures continuous monitoring, swift issue resolution, and reliable support—minimising 
                        downtime and maximising productivity.`,
    },
    {
        id: "3",
        icon: scalableIcon,
        title: "Scalable Solutions for Growth",
        description: `Whether you’re expanding operations or adopting new technologies, we help you scale with confidence.`,
    },
    {
        id: "4",
        icon: complianceIcon,
        title: "End-to-End Security",
        description: `From managed threat detection to full compliance support, we secure your business against evolving 
                        cyber threats.`,
    },
    {
        id: "5",
        icon: customizeIcon,
        title: "Customised Services",
        description: `We tailor IT infrastructure, cloud management, and end-user support to align with your unique 
                        operational goals.`,
    },
]

function WhyManagedServices() {
  return (
    <div className='w-full py-16 bg-white'>
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
                    Managed Services
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {why_managed.map((data, index) => (
                    <div key={data.id} className='lg:pr-16 md:p-0 sm:p-3 p-4 flex flex-col gap-4 md:shadow-none shadow-md md:rounded-none rounded-md'>
                        <div className='sm:w-16 w-10 h-fit rounded-md'>
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

export default WhyManagedServices