'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import licenseIcon from "@/public/assets/icons/solution/licensing/license_icon.png"
import costIcon from "@/public/assets/icons/solution/licensing/cost_icon.png"
import complianceIcon from "@/public/assets/icons/solution/licensing/compliance_icon.png"
import visibilityIcon from "@/public/assets/icons/solution/licensing/visibility_icon.png"
import partnershipIcon from "@/public/assets/icons/solution/licensing/partnership_icon.png"
import Image from 'next/image';

const why_licenses = [
    {
        id: "1",
        icon: licenseIcon,
        title: "Simplified Licence Management",
        description: `We handle procurement, renewals, and compliance, ensuring seamless operations and reduced administrative burden.`,
    },
    {
        id: "2",
        icon: costIcon,
        title: "Cost Optimisation Experts",
        description: `Our advisory services help you minimise costs while maximising the value of your software investments.`,
    },
    {
        id: "3",
        icon: complianceIcon,
        title: "Regulatory Compliance Assurance",
        description: `Avoid costly penalties with our comprehensive compliance audits and expert audit defence services.`,
    },
    {
        id: "4",
        icon: visibilityIcon,
        title: "End-to-End Visibility",
        description: `Through inventory management and usage monitoring, we provide insights to optimise your software lifecycle.`,
    },
    {
        id: "5",
        icon: partnershipIcon,
        title: "Trusted Vendor Partnerships",
        description: `Our relationships with top software providers mean you benefit from the latest technology and reliable support.`,
    },
    {
        id: "6",
        icon: costIcon,
        title: "Automated Renewal Management",
        description: `Never miss a renewal deadline with our proactive tracking and alerts system.`,
    },
]

function WhyLicensingRenewals() {
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
                    Licensing and Renewals
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {why_licenses.map((data, index) => (
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

export default WhyLicensingRenewals