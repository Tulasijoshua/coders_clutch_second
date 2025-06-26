'use client';
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { commerce_expects } from '@/constant';
import Image from 'next/image';
import React from 'react'
import featureImg from "@/public/assets/icons/ecommerce/ecommerce-feature.png";

function EcommerceToExpect() {
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-6'>
            <div className='flex flex-col gap-8'>
                <Typography
                    typo="body-large-medium"
                    className='text-app-primary-deep text-center'
                >
                    WHAT TO EXPECT
                </Typography>
                <div className='rale flex flex-col items-center gap-1'>
                    <Typography
                        typo="header-5-semibold"
                    >
                        You Get a Fast, Responsive & User-Friendly website.
                    </Typography>
                    <Typography
                        typo="header-5-semibold"
                    >
                        Generate more traffic and customers.
                    </Typography>
                </div>
            </div>
            <div className='w-full xl:py-8 py-4 grid lg:grid-cols-3 xs:grid-cols-2 xl:gap-8 gap-4'>
                {commerce_expects.map(data => (
                    <Card key={data.id} className='md:p-8 rounded-none bg-app-gray-bg'>
                        <CardHeader>
                            {data.is_feature && (
                                <Image 
                                    src={featureImg}
                                    alt='Feature image'
                                    className='w-12 h-fit'
                                />
                            )}
                            <Typography
                                typo="header-5-semibold"
                                className='pt-4 !leading-snug'
                            >
                                {data.title}
                            </Typography>
                        </CardHeader>
                        <CardContent className='rale'>
                            <Typography
                                typo="body-medium-medium"
                                className='!leading-relaxed'
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default EcommerceToExpect