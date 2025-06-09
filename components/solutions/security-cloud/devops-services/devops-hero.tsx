'use client';
import Typography from '@/components/shared/typography';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';
import cIcon from "@/public/assets/icons/security-cloud/c_rating.png";
import sIcon from "@/public/assets/icons/security-cloud/s_rating.png";
import fIcon from "@/public/assets/icons/security-cloud/f_rating.png";
import Image from 'next/image';
import StarRating from '@/components/reusable/star-rating';
import { Button } from '@/components/ui/button';

const devops_services = ["Agile & Adoptive Development", "97%+ Client Retention Rate", "Reduced 60% Cloud Cost", "Quick & Easy Onboarding", "Flexible Engagement Models", "24x7 Customer Support"]

const devops_rating = [
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

function DevopsHero() {
  return (
    <div className='w-full py-12 bg-app-primary-deep'>
        <div className='max-container w-[85%] mx-auto'>
            <section className='2xl:w-[80%] xl:w-[90%] mx-auto flex flex-col justify-center gap-3 text-white'>
                <Typography
                    typo="header-6-semibold"
                    className='text-center text-app-green'
                >
                    Top Certified DevOps Engineers
                </Typography>
                <div className='arial lg:flex hidden flex-col gap-3 text-white'>
                    <Typography
                        className='text-center '
                        typo="header-3-semibold"
                    >
                        Hire #1 DevOps Development Company for
                    </Typography>
                    <Typography
                        className='text-center '
                        typo="header-3-semibold"
                    >
                        Cloud Services & Solutions
                    </Typography>
                </div>
                <div className='w-[85%] mx-auto py-3 text-center'>
                    <Typography
                        typo="body-large-semibold"
                        className='text-center !leading-relaxed'
                    >
                        Accelerate the product lifecycle with advanced DevOps services. Our company delivers faster deployments, 60% fewer failures, automated workflows, and enhanced security through CI/CD solutions.
                    </Typography>
                </div>
                <div className='w-full grid grid-cols-3 gap-4'>
                    {
                        devops_services.map(data => (
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
                <div className='py-6 flex justify-center items-center gap-12'>
                    {
                        devops_rating.map((data, index) => (
                            <div 
                                key={data.id}
                                className='flex items-center gap-2'
                            >
                                <div className='w-[55px] h-fit'>
                                    <Image 
                                        src={data.icon}
                                        alt={`Icon ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
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
                    className='w-fit mx-auto 2xl:!py-4 !py-3 2xl:!px-10 !px-16 !text-lg font-semibold rounded-none'
                >
                    Let&apos;s Talk
                </Button>
            </section>
        </div>
    </div>
  )
}

export default DevopsHero