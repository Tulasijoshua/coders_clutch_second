'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function SmartEducationImpact() {
  return (
    <div className='w-full py-20 bg-app-primary-deep'>
        <section className='max-w-[700px] 2xl:w-[70%] xl:w-[80%] w-[90%] mx-auto flex flex-col items-center gap-8 text-white'>
            <Typography
                typo="header-3-semibold"
                className='text-center !leading-normal'
            >
                Real-World Impact
            </Typography>
            <Typography
                typo="body-large-medium"
                className='text-center'
            >
                &lsquo;Since implementing Coders Clutch&apos;s LMS, we&apos;ve seen a <span className='text-app-yellow'>60% increase </span>  in student
                engagement and significant improvement in national exam pass rates.&rsquo;
            </Typography>
            <div className='w-full flex justify-end items-center'>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-300'
                >- Director of Education Technology, Ministry of Basic & Secondary Education</Typography>
            </div>
        </section>
    </div>
  )
}

export default SmartEducationImpact