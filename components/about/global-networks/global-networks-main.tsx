'use client'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { brands } from '@/constant'
import Image from 'next/image'
import React from 'react'

function GlobalNetworksMain() {
  return (
    <div className='w-full py-12 bg-[#F0FAFC]'>
        <section className='max-container 2xl:w-[80%] w-[90%] mx-auto'>
            <div className='flex flex-col justify-center items-center gap-'>
                <Typography
                    typo="body-medium-medium"
                    className='uppercase text-app-secondary'
                >
                    Brands that Trust us
                </Typography>
                <Typography
                    typo="header-2-semibold"
                    className='pb-3 !font-bold'
                >
                    Our Clients
                </Typography>
                <Typography
                    typo="body-large-regular"
                    className='max-w-[450px] text-center'
                >
                    Over the years, Coders Clutch has had the privilege to
                    work for both local and global businesses
                </Typography>
            </div>
            <div className='py-12 flex flex-col gap-8 border-b'>
                <div className='flex flex-col gap-2'>
                    <Typography
                        typo="header-4-semibold"
                    >Local Clients</Typography>
                    <div className='w-16 h-[2px] bg-app-secondary'></div>
                </div>
                <div className='w-full grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-6 gap-3'>
                    {brands.map((logo, index) => (
                        <Card
                            key={`Brand logo ${index+1}`}
                            className='w-full lg:h-[150px] h-[100px] flex flex-col justify-center items-center border-none bg-white shadow-sm rounded-md hover:shadow-lg transition-all duration-300'
                        >
                            <Image
                                src={logo}
                                alt={`Brand ${index+1}`}
                                className='w-[100px] h-fit'
                            />
                        </Card>
                    ))}
                </div>
            </div>
            <div className='py-12 flex flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <Typography
                        typo="header-4-semibold"
                    >Global Clients</Typography>
                    <div className='w-16 h-[2px] bg-app-secondary'></div>
                </div>
                <div className='w-full grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 xs:gap-6 gap-3'>
                    {brands.map((logo, index) => (
                        <Card
                            key={`Brand logo ${index+1}`}
                            className='w-full lg:h-[150px] h-[100px] flex flex-col justify-center items-center border-none bg-white shadow-sm rounded-md hover:shadow-lg transition-all duration-300'
                        >
                            <Image
                                src={logo}
                                alt={`Brand ${index+1}`}
                                className='w-[100px] h-fit'
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default GlobalNetworksMain