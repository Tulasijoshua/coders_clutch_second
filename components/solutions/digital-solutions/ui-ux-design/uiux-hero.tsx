'use client';
import TrustBrands from '@/components/reusable/trust-brands';
import Typography from '@/components/shared/typography'
import React from 'react'

const work_rate = ["Custom-Tailored UX Strategies", "Agile & Adaptive Design Approach", "2× Faster Ready Designs", "Conversion-Optimized UI/UX", "30% Faster New Design Delivery", "End-to-End Design Support"]

function UiuxHero() {
  return (
    <div className='w-full'>
        <div className='w-full py-20 bg-app-primary-deep'>
            <section className='max-container w-[85%] mx-auto flex flex-col justify-center gap-6'>
                <Typography
                    typo="body-large-semibold"
                    className='text-center text-app-green'
                >Product Design Services</Typography>
                <div className='arial flex flex-col text-white'>
                    <Typography
                        className='text-center '
                        typo="header-2-semibold"
                    >
                        The #1 Product UI/UX Design Company
                    </Typography>
                    <Typography
                        className='text-center '
                        typo="header-2-semibold"
                    >
                        To Drive Higher Engagement & Conversion
                    </Typography>
                </div>
                <Typography
                    typo="body-large-medium"
                    className='w-[80%] mx-auto pt-4 text-center text-white'
                >
                    Design smarter, not harder. A UI/UX design and development company focused on results, not just 
                    aesthetics—delivering engagement, retention, and real business growth.
                </Typography>
            </section>

            <section className='w-full relative pt-5'>
                <div className='max-container w-[75%] mx-auto grid grid-cols-3 gap-10 text-white z-[10] relative'>
                    {work_rate.map(data => (
                        <Typography 
                            typo="body-medium-semibold"
                            key={data}
                            className='relative px-4 py-4 text-center border border-app-green 
                                        border-dashed rounded-lg bg-app-primary-deep'
                            >
                                {data}
                            </Typography>
                    ))}
                </div>
                <div className='w-full absolute top-11 border border-dashed border-green-700 z-[1]'></div>
                <div className='max-container w-[75%] mx-auto absolute top-[70px] left-1/4  grid grid-cols-3'>
                    {Array.from({length: 3}).map((_, index) => (
                        <div key={index+1} className='h-10 border-l border-app-green border-dashed'></div>
                    ))}
                </div>
            </section>
        </div>
        <section className='max-container w-[85%] mx-auto py-20'>
            <TrustBrands />
        </section>
    </div>
  )
}

export default UiuxHero