'use client';
import React from 'react'
import productIcon from "@/public/assets/icons/design-gap/product.svg"
import inconsistentIcon from "@/public/assets/icons/design-gap/inconsistent.svg"
import userIcon from "@/public/assets/icons/design-gap/user.svg"
import crossIcon from "@/public/assets/icons/design-gap/cross-platform.svg"
import designIcon from "@/public/assets/icons/design-gap/design.svg"
import Typography from '@/components/shared/typography'
import Image from 'next/image';

const products = [
    {
        id: "1",
        title: "Key",
        sub_title: "Benefits for Municipalities",
    },
    {
        id: "2",
        icon: productIcon,
        title: "Optimized Resource Usage",
        description: `Reduce energy and water waste through intelligent control.`,
    },
    {
        id: "3",
        icon: inconsistentIcon,
        title: "Improved Urban Safety",
        description: `Monitor and manage public areas to reduce incidents.`
    },
    {
        id: "4",
        icon: userIcon,
        title: "Traffic Flow Efficiency",
        description: `Ease congestion and support emergency vehicle access.`,
    },
    {
        id: "5",
        icon: crossIcon,
        title: "Data-Backed Urban Planning",
        description: `Use insights to drive policy, infrastructure investments, and zoning.`,
    },
    {
        id: "6",
        icon: designIcon,
        title: "Environmental Impact Reduction",
        description: `Lower emissions and support smart city sustainability.`,
    },
]

function SmartInfrastructureBenefits() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 2xl:gap-12 gap-6'>
            {products.map((data, index) => (
                data.sub_title ? (
                    <div key={data.id} className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                        <Typography
                            typo="header-4-light"
                        >
                            Key
                        </Typography>
                        <Typography
                            typo="header-4-semibold"
                            className='!font-bold'
                        >
                            Benefits for Municipalities
                        </Typography>
                    </div>
                )
             : (
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
            )))}
        </section>
    </div>
  )
}

export default SmartInfrastructureBenefits