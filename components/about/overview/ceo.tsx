'use client';
import React from 'react';
import ceoImg from "@/public/assets/images/about/ceo.jpg";
import Image from 'next/image';
import Typography from '@/components/shared/typography';

function CeoSection() {
  return (
    <div className='max-w-[90rem] mx-auto ceobg w-full py-16'>
        <section className='max-container 2xl:w-[75%] xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center md:gap-8 gap-4 bg-white shadow-md'>
            
            <div className='flex-1 2xl:p-12 xl:p-8 p-4 flex flex-col xl:gap-12 md:gap-8 gap-4'>
                <div>
                    <Typography
                        typo="header-4-semibold"
                        className='xl:!leading-relaxed !leading-snug'
                    >
                        The secret to running a profitable, successful, bootstrapped business for 16+ years is quite simple: 
                        it&apos;s the mutual trust that binds employees and leadership team together. 
                    </Typography>
                </div>
                <div className='flex flex-col xs:gap-1'>
                    <Typography
                        typo="header-5-semibold"
                    >
                        Sriram Manoharan
                    </Typography>
                    <Typography
                        typo="header-5-regular"
                    >
                        Chief Executive Officer
                    </Typography>
                </div>
            </div>
            <div className='md:w-[40%] w-full'>
                <div className='w-full h-full '>
                    <Image 
                        src={ceoImg}
                        alt='CEO image'
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default CeoSection