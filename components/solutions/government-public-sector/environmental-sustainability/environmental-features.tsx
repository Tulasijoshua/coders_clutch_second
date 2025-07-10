'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import productIcon from "@/public/assets/icons/design-gap/product.svg"
import inconsistentIcon from "@/public/assets/icons/design-gap/inconsistent.svg"
import userIcon from "@/public/assets/icons/design-gap/user.svg"
import crossIcon from "@/public/assets/icons/design-gap/cross-platform.svg"
import designIcon from "@/public/assets/icons/design-gap/design.svg"
import Image from 'next/image';

const education_features = [
    {
        id: "1",
        icon: productIcon,
        title: "Air Quality Monitoring Systems",
        description: `PM2.5, CO2, and pollutant sensors across urban zones.`,
    },
    {
        id: "2",
        icon: inconsistentIcon,
        title: "Water Quality & Usage Analytics",
        description: `Monitor pH, turbidity, consumption rates, and leakage.`,
    },
    {
        id: "3",
        icon: userIcon,
        title: "Energy Consumption Dashboards",
        description: `Track electricity and fuel use across public assets.`,
    },
    {
        id: "4",
        icon: crossIcon,
        title: "Carbon Footprint Estimators",
        description: `Measure emissions at building, city, or fleet level.`,
    },
    {
        id: "5",
        icon: designIcon,
        title: "Regulatory Reporting Tools",
        description: `Auto-generate reports aligned with environmental compliance standards.`,
    },
]

function EnvironmentalFeatures() {
  return (
    <div className='w-full py-12 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Key
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Features & Capabilities
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {education_features.map((data, index) => (
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

export default EnvironmentalFeatures