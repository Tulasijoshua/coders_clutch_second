'use client';
import React from 'react';
import futuresImg from "@/public/assets/images/futures.png";
import careerImg from "@/public/assets/images/careers-image.png";
import Image from 'next/image';
import Typography from '@/components/shared/typography';

function CareerHero() {
  return (
    <div className='w-full py-12'>
        <section className='pops max-container 2xl:w-[85%] w-[95%] mx-auto flex sm:flex-row flex-col justify-between items-center lg:gap-12 gap-8'>
            <div className='flex-1 flex flex-col gap-6'>
                <h1 className=' flex flex-col sm:items-start items-center sm:text-left text-center lg:text-6xl text-4xl font-semibold leading-8'>
                    <span>We</span>
                    <div className='flex items-center gap-2'>
                        <span>build</span>
                        <Image
                            src={futuresImg}
                            alt='Futures'
                            className='lg:w-42 w-32 h-fit'
                        />
                    </div>
                    <span>not just Tech.</span>
                </h1>
                <Typography
                    className='lg:!text-[15px] !text-[13px] leading-normal'
                >
                    We only stop growing when we stop learning. We believe the best way to scale and still have fun is by 
                    fostering a child-like curiosity about everything around us. Discover a workplace where your talents are 
                    nurtured, your ideas are valued, and your potential is limitless. Explore our diverse range of roles and find 
                    your place in a dynamic environment where passion meets purpose.
                </Typography>
            </div>
            <div className='flex-1'>
                <div className='w-full h-full'>
                    <Image
                        src={careerImg}
                        alt='Career Image'
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default CareerHero