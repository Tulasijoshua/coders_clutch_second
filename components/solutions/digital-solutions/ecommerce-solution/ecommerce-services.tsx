'use client';
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';
import serviceIcon from "@/public/assets/icons/ecommerce/service_icon.png";
import Image from 'next/image';
import { commerce_services } from '@/constant';

function EcommerceServices() {
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col'>
            <Typography 
                className='text-center'
                typo="header-3-semibold"
            >Our E-commerce Services</Typography>
            <div className='w-full pt-12 flex md:flex-row flex-col justify-between items-stretch xl:gap-32 lg:gap-16 gap-8'>
                <Card className='flex-1 lg:py-10 py-6 lg:px-24 px-6 flex flex-col gap-8 rounded-none border-none bg-[#EAEAEA]'>
                    <CardHeader className='pb-0'>
                        <Image 
                            src={serviceIcon}
                            alt='Service icon'
                            className='w-12 h-fit'
                        />
                    </CardHeader>
                    {commerce_services.slice(0, 2).map((data) => (
                        <CardContent key={data.id} className='px-0 lg:pb-8 pb-4 flex flex-col gap-4'>
                            <Typography
                                typo="header-5-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                className='rale'
                                typo="body-medium-regular"
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                    ))}
                </Card>
                <Card className='flex-1 pt-16 md:pb-20 pb-10 lg:px-16 px-8 flex flex-col justify-between gap-8 rounded-none border-none bg-[#000] text-white'>
                    {commerce_services.slice(2, 4).map((data) => (
                        <CardContent key={data.id} className='px-0 pb-8 flex flex-col gap-4'>
                            <Typography
                                typo="header-5-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                className='rale'
                                typo="body-medium-regular"
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                    ))}
                </Card>
            </div>
        </section>
    </div>
  )
}

export default EcommerceServices