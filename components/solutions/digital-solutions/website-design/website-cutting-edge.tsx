'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function WebsiteCuttingEdge() {
  return (
    <div className='w-full xl:py-20 py-12'>
        <section className='xl:w-[65%] md:w-[80%] w-[90%] mx-auto flex flex-col items-center justify-center md:gap-8 gap-4'>
            <Typography
                typo="header-6-semibold"
                className='uppercase'
            >
                CUTTING EDGE WEBSITES
            </Typography>
            <Typography
                typo="body-large-medium"
                className='text-center !leading-relaxed'
            >
                Your website is the most important brand element for acquiring and building trust with existing and 
                potential clients online. Our website designer will help you plan, design, and develop your website with 
                landing pages that function effectively on desktops, tablets & mobile phones.
            </Typography>
        </section>
    </div>
  )
}

export default WebsiteCuttingEdge