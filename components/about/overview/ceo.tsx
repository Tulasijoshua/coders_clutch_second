'use client';
import React from 'react';
import ceoImg from "@/public/assets/images/about/ceo.png";
import Image from 'next/image';
import Typography from '@/components/shared/typography';

function CeoSection() {
  return (
    <div className='ceobg w-full py-16'>
        <section className='w-[75%] mx-auto flex justify-between items-center gap-8 bg-white shadow-md'>
            <div className='w-[40%]'>
                <div className='w-full h-full '>
                    <Image 
                        src={ceoImg}
                        alt='CEO image'
                        className='w-full h-full'
                    />
                </div>
            </div>
            <div className='flex-1 p-12 flex flex-col gap-12'>
                <div>
                    <Typography
                        typo="header-4-semibold"
                        className='!leading-relaxed'
                    >
                        The secret to running a profitable, successful, bootstrapped business for 16+ years is quite simple: 
                        it's the mutual trust that binds employees and leadership team together. 
                    </Typography>
                </div>
                <div className='flex flex-col gap-1'>
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
        </section>
    </div>
  )
}

export default CeoSection