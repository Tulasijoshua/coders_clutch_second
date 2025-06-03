'use client';
import React from 'react'
import Typography from '../shared/typography'
import awardsImg from "@/public/assets/images/awards.png";
import Image from 'next/image';

function AwardsRecognition() {
  return (
    <div className='award-bg w-full h-full xl:py-20 py-12'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto '>
            <div className='xl:pb-16 pb-10 flex flex-col'>
                <Typography
                    typo="header-3-light"
                >
                    Awards and Recognition
                </Typography>
                <Typography
                    typo="header-3-semibold"
                >
                    from Industry Leaders
                </Typography>
            </div>

            <div className='w-full h-fit'>
                <Image 
                    src={awardsImg}
                    alt='Awards Image'
                    className='w-full h-full'
                />
            </div>
        </section>
    </div>
  )
}

export default AwardsRecognition