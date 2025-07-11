'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function DataManagementImpact() {
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
                &lsquo;Coders Clutch helped us consolidate 25 government databases into a single city data
                platform <span className='text-app-yellow'>—leading to smarter planning and 40% </span>  faster decision cycles.&rsquo;
            </Typography>
            <div className='w-full flex justify-end items-center'>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-300'
                >- Chief Digital Officer, Smart Capital Authority</Typography>
            </div>
        </section>
    </div>
  )
}

export default DataManagementImpact