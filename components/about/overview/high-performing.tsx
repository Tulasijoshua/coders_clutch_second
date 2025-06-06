'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function HighPerforming() {
  return (
    <div className='w-full py-24 bg-black'>
        <section className='max-w-[900px] mx-auto text-center'>
            <Typography
                typo="header-3-semibold"
                className='plusJak !text-4xl text-white !font-bold !leading-relaxed'
            >
                Our mission is to deliver exceptional, refreshingly unique, <span className='text-[#FFD35A]'>high-performing digital products</span> that help businesses 
                scale faster and better.
            </Typography>
        </section>
    </div>
  )
}

export default HighPerforming