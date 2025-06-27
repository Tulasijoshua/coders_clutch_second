'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { licensing_services } from '@/constant';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

function LicensingService() {
  return (
    <div className='w-full py-12 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-3 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Licensing and Renewals
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Explore Services
                </Typography>
            </div>
            <div className='w-full py-6 grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                {licensing_services.map((data, index) => (
                    <Card
                        key={data.id}
                        className='rale w-full h-full border-none bg-white flex flex-col'
                    >
                        <div className='w-full xl:h-[230px] lg:h-[200px] md:h-[230px] h-[200px]'>
                            <Image 
                                src={data.img}
                                alt={`Licensing ${index+1}`}
                                className='w-full h-full object-cover rounded-t-xl'
                            />
                        </div>
                        <div className='flex flex-col flex-grow xl:px-8 sm:px-3 xs:px-8 px-4 xl:pb-3 pb-2 justify-between'>
                            <div className='xl:pb-4 sm:pb-0 pb-4'>
                                <CardHeader className='px-0 xl:pb-6 sm:pb-3 xs:pb-5 pb-3'>
                                    <Typography
                                        typo="header-5-medium"
                                    >{data.title}</Typography>
                                </CardHeader>
                                <CardContent className='px-0 pb-0'>
                                    <Typography
                                        typo="body-large-regular"
                                    >{data.description}</Typography>
                                </CardContent>
                            </div>
                            <CardFooter className='px-0 sm:pb-0 xs:pb-4 pb-2'>
                                <Button className='!px-0 flex items-center text-app-secondary'>
                                    Learn more
                                    <ArrowRight />
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default LicensingService