
'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function OverviewHero() {
  return (
    <div className='overviewbanner-bg w-full md:py-32 py-12'>
        <section className='max-container xl:w-[70%] w-[85%] flex flex-col gap-20 text-center'>
            <div>
                <Typography
                    // typo="header-1-semibold"
                    className='block xl:!text-7xl lg:!text-6xl md:!text-5xl !text-4xl font-bold'
                >
                    We are <span className='bg-gradient-to-r from-[#F25E20] to-[#E426A0] bg-clip-text text-transparent'>Coders Clutch. </span>
                </Typography>
                <Typography
                    // typo="header-1-semibold"
                    className='xl:!text-7xl lg:!text-6xl md:!text-5xl !text-4xl font-bold !leading-snug'
                >
                    We Deliver Memorable Digital Experiences for Top Brands.
                </Typography>
            </div>
            <Typography
                className=''
                typo="body-large-regular"
            >
                <span className='font-semibold'>Coders Clutch</span> builds mission-critical technology solutions for many Fortune 500 firms.
            </Typography>
        </section>
    </div>
  )
}

export default OverviewHero