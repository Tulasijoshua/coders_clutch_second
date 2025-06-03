'use client';
import React from 'react'
import Typography from '../shared/typography'
import { top_tier_products } from '@/constant';
import Image from 'next/image';

function TopTierSection() {
  return (
    <div className='w-full pt-16 pb-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='xs:pb-16 pb-8 flex flex-col gap-'>
                <Typography
                    typo="header-3-light"
                >
                    Our Globally Renowned,
                </Typography>
                <Typography
                    typo="header-3-semibold"
                >
                    Top-tier Products & Solutions
                </Typography>
            </div>

            <div className='w-full flex md:flex-row flex-col justify-between'>
                {top_tier_products.map((data, index) => (
                    <div key={data.id} className={`md:px-6 py-8 flex flex-col md:gap-10 gap-6 ${data.id === "2" ? "md:border-l-2 md:border-r-2 border-dashed" : ""} border-b-2 border-dashed`}>
                        <div className='h-8 w-fit'>
                            <Image
                                src={data.img}
                                alt={`Product ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <Typography
                            typo="header-6-semibold"
                        >
                            {data.title}
                        </Typography>

                        <div className='flex flex-col gap-7'>
                            {data.contents.map(product => (
                                <div key={product.id} className='flex flex-col'>
                                    <Typography
                                        typo="header-6-semibold"
                                        className='text-[#1D646D]'
                                    >{product.title}</Typography>
                                    <Typography
                                        typo="body-large-medium"
                                    >{product.content}</Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default TopTierSection