'use client';
import React from 'react'
import cIcon from "@/public/assets/icons/security-cloud/c_rating.png";
import sIcon from "@/public/assets/icons/security-cloud/s_rating.png";
import fIcon from "@/public/assets/icons/security-cloud/f_rating.png";
import { Button } from '@/components/ui/button';
import StarRating from '@/components/reusable/star-rating';
import Typography from '@/components/shared/typography';
import Image from 'next/image';
import { CircleCheckBig } from 'lucide-react';

const sustainability_services = [
    "Carbon Footprint Tracking", 
  "Smart Waste Management Systems", 
  "Renewable Energy Optimization", 
  "Water Conservation Analytics",
  "Air Quality Monitoring",
  "Sustainable Supply Chain Solutions"
];

const digital_rating = [
    {
        id: "1",
        rate: 4.7,
        icon: cIcon
    },
    {
        id: "2",
        rate: 4.9,
        icon: sIcon
    },
    {
        id: "3",
        rate: 4.8,
        icon: fIcon
    },
]

function EnvironmentalHero() {
  return (
    <div className='w-full md:py-12 py-8 bg-app-primary-deep'>
        <div className='max-container lg:w-[85%] w-[95%] mx-auto'>
            <section className='2xl:w-[90%] xl:w-[95%] mx-auto flex flex-col justify-center gap-3 text-white'>
                <Typography
                    typo="header-6-semibold"
                    className='text-center text-app-green'
                >
                    Environmental Sustainability Solutions
                </Typography>
                <div className='arial md:flex hidden flex-col lg:gap-3 text-white'>
                    <Typography
                        className='text-center '
                        typo="header-2-semibold"
                    >
                        Monitoring the Planet to
                    </Typography>
                    <Typography
                        className='text-center '
                        typo="header-2-semibold"
                    >
                        Protect the Future
                    </Typography>
                </div>
                <Typography
                    typo="header-3-semibold"
                    className='md:hidden block md:pt-4 text-center text-white md:!leading-relaxed !leading-snug'
                >
                    Monitoring the Planet to Protect the Future
                </Typography>
                <div className='lg:w-[85%] mx-auto py-3 text-center'>
                    <Typography
                        typo="body-large-semibold"
                        className='text-center !leading-relaxed'
                    >
                        Coders Clutch builds smart environmental platforms that help governments and agencies monitor,
                        analyze, and manage critical resources like air, water, and energy. Through real-time sensing, data
                        analytics, and automation, we empower eco-conscious decision-making and drive sustainability
                        outcomes.
                    </Typography>
                </div>
                <div className='md:w-[70%] mx-auto flex flex-col items-center gap-2'>
                    <div className=' grid xs:grid-cols-2 gap-4'>
                        {
                            sustainability_services.map(data => (
                                <div key={data} className='flex items-center gap-3'>
                                    <CircleCheckBig size={20} />
                                    <Typography
                                        typo="body-medium-semibold"
                                    >
                                        {data}
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>
                    <div className='py-6 flex justify-center items-center gap-12 flex-wrap'>
                        {
                            digital_rating.map((data, index) => (
                                <div 
                                    key={data.id}
                                    className='flex items-center gap-2'
                                >
                                    <div className='lg:w-[55px] w-[45px] h-fit'>
                                        <Image
                                            src={data.icon}
                                            alt={`Icon ${index+1}`}
                                            className='w-full h-full'
                                        />
                                    </div>
                                    <div className='flex flex-col lg:gap-2'>
                                        <StarRating rating={data.rate}  />
                                        <Typography
                                            typo="body-medium-semibold"
                                        >
                                            {data.rate} Rating
                                        </Typography>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Button
                        variant="primary"
                        className='w-fit mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold rounded-none'
                    >
                        Get a Free Consultation
                    </Button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default EnvironmentalHero