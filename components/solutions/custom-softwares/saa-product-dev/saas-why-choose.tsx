'use client';
import Typography from '@/components/shared/typography'
import { reason_saas } from '@/constant'
import Image from 'next/image'
import React from 'react'

function SaasWhyChoose() {
  return (
    <div className='w-full py-16 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Why CODERS Clutch for
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    SaaS Product Development?
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-4 sm:grid-cols-2 lg:gap-12 gap-4'>
                {reason_saas.map((data, index) => (
                    <div key={data.id} className='md:p-4 sm:p-3 p-4 flex flex-col gap-4 md:shadow-none shadow-md md:rounded-none rounded-md'>
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

export default SaasWhyChoose