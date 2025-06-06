'use client';
import Typography from '@/components/shared/typography'
import { Instagram } from 'lucide-react'
import React from 'react';
import codersInsta from "@/public/assets/images/about/coders_insta.png";
import coderspongal from "@/public/assets/images/about/coders-pongal.png";
import instaframe from "@/public/assets/images/about/insta-frame.png";
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const coders_insta = [
    {
        id: "1",
        img: instaframe,
        link: "/",
    },
    {
        id: "2",
        img: coderspongal,
        link: "/",
    },
    {
        id: "3",
        img: codersInsta,
        link: "/",
    },
]

function CodersClutchInsta() {
  return (
    <div className='w-full py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-3 '>
                    <Typography
                        typo="header-3-semibold"
                        className='bg-gradient-to-r from-[#F25E20] to-[#E426A0] bg-clip-text hover:text-transparent'
                    >
                        @Coders_clutch
                    </Typography>
                    <div >
                        <Instagram size={28} 
                            className='bg-gradient-to-r from-[#F25E20] to-[#E426A0] bg-clip-text '
                        />
                    </div>
                </div>
                <Typography
                    typo="body-medium-medium"
                >
                    We work hard and play harder. Read the full story on our Instagram page. 
                    <span className='bg-gradient-to-r from-[#F25E20] to-[#E426A0] bg-clip-text hover:text-transparent cursor-pointer font-semibold'> {""}See More</span>
                </Typography>
            </div>
            <div className='w-full pt-12 grid grid-cols-3 lg:gap-8 gap-4'>
                {coders_insta.map((data, index) => (
                    <Card
                        key={data.id}
                        className='w-full xl:h-[500px] lg:h-[450px] md:h-[350px] h-[300px]'
                    >
                        <Image 
                            src={data.img}
                            alt={`Coders Insta ${index+1}`}
                            className='w-full h-full object-cover rounded-xl'
                        />
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default CodersClutchInsta