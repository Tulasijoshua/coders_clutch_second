'use client'
import StarRating from '@/components/reusable/star-rating'
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { successful_businesses } from '@/constant'
import Image from 'next/image'
import React from 'react'


function IotSuccessful() {
  return (
    <div className='w-full py-12 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    What Successful IoT Businesses Say
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    About CONTUS Tech
                </Typography>
            </div>
            <div className='w-full xl:py-6 md:py-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-4'>
                {successful_businesses.map((data, index) => (
                    <Card
                        key={data.id}
                        className='flex flex-col '
                    >
                        <CardHeader className='xl:pb-8 flex flex-row items-center gap-4'>
                            <div className='min-w-12 h-12'>
                                <Image
                                    src={data.img}
                                    alt={`Client ${index+1}`}
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.name}
                                </Typography>
                                <Typography
                                    typo="body-small-regular"
                                >
                                    {data.position}
                                </Typography>
                            </div>
                        </CardHeader>
                        <CardContent className='flex flex-col space-y-4'>
                            <Typography
                                typo="body-large-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-regular"
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                        <div className='h-full flex flex-col justify-end'>
                            <CardFooter className='pb-4 xl:pt-8 flex justify-between items-end gap-6'>
                                <Typography
                                    typo="body-large-semibold"
                                    className='text-blue-900'
                                >{data.rate}/5 Stars</Typography>

                                <StarRating rating={data.rate} />
                            </CardFooter>

                        </div>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default IotSuccessful