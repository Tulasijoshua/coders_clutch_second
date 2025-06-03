'use client';
import React from 'react'
import Typography from '../shared/typography'
import cultureImg from "@/public/assets/images/our-culture.png"
import Image from 'next/image';
import { culture_cards } from '@/constant';
import { Card, CardContent, CardDescription } from '../ui/card';

function CultureSection() {
  return (
    <div className='w-full py-12 bg-gray-100'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto'>
            <div className='w-fit sm:pb-10 pb-5 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Our Culture
                </Typography>
                <Typography
                    typo="header-3-semibold"
                >
                    Great Products Start with a Great Workplace
                </Typography>
            </div>
            <div className='w-full flex xl:flex-row flex-col justify-between items-stretch gap-3'>
                <div className='flex-1 grid sm:grid-cols-2 gap-2'>
                    {culture_cards.map(data => (
                        <Card key={data.id} className='py-8 px-6 border-none shadow-sm bg-white'>
                            <div className='flex flex-col'>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.subTitle}
                                </Typography>
                            </div>
                            <CardContent className='pt-4 pb-0 px-0'>
                                <CardDescription className='text-base text-black'>{data.content}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className='flex-1'>
                    <div className='w-full h-fit'>
                        <Image 
                            src={cultureImg}
                            alt='Culture image'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CultureSection