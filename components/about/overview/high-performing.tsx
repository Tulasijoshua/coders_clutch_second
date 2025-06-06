'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function HighPerforming() {
  return (
    <div className='w-full py-24 bg-black'>
        <section className='lg:max-w-[900px] max-w-[700px] mx-auto text-center'>
            <Typography
                typo="header-3-semibold"
                className='plusJak lg:!text-4xl !text-2xl text-white !font-bold !leading-relaxed'
            >
                Our mission is to deliver exceptional, refreshingly unique, <span className='text-[#FFD35A]'>high-performing digital products</span> that help businesses 
                scale faster and better.
            </Typography>
        </section>
    </div>
  )
}

export default HighPerforming