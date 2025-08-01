'use client';
import Typography from '@/components/shared/typography'
import Image from 'next/image';
import React from 'react'
import awardImg from "@/public/assets/images/about/awards.png"

function AwardsAccolades() {
  return (
    <div className='w-full py-20 bg-[#070A27]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex md:flex-row flex-col jusity-between items-center gap-4'>
            <div className='md:max-w-[400px] flex flex-col gap-3 text-white'>
                <Typography
                    className='md:text-left text-center'
                    typo="header-4-semibold"
                >
                    Awards & Accolades
                </Typography>
                <Typography
                    className='leading-relaxed md:text-left text-center'
                >
                    Consistently recognized for nurturing a vibrant workplace culture and building top-tier products.
                </Typography>
            </div>

            <div className='flex-1 '>
                <div className='w-[90%] h-fit md:mx-0 mx-auto'>
                    <Image 
                        src={awardImg}
                        alt='Award image'
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default AwardsAccolades