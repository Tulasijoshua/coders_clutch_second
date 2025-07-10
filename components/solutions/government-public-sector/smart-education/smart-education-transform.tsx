'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function SmartEducationTransform() {
  return (
    <div className='w-full py-20 bg-app-primary-deep'>
        <section className='xl:w-[50%] lg:w-[70%] w-[90%] mx-auto flex flex-col lg:gap-10 gap-6 text-white'>
            <div className='flex flex-col items-center gap-5 ' >
                <Typography
                    typo="header-3-semibold"
                    className='text-center'
                >
                    Ready to Transform Your Education Delivery?
                </Typography>
                <div className='w-24 h-[2px] mx-auto bg-white'></div>
            </div>
            <Typography
                typo="body-large-medium"
                className='rale lg:!text-xl text-center !leading-relaxed'
            >
                Let&apos;s build a digital learning environment tailored to your institution or national strategy.
            </Typography>
            <Button
                variant="primary"
                className='w-fit mx-auto 2xl:!py-4 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !rounded-sm font-medium '
            >
                Talk to an Education Transformation Expert
            </Button>
        </section>
    </div>
  )
}

export default SmartEducationTransform