'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Typography from '@/components/shared/typography';
import StarRating from '@/components/reusable/star-rating';
import Image from 'next/image';
import { ArrowRight, CircleCheckBig } from 'lucide-react';
import { team_members } from '@/constant';

const digital_services = [
    "Automated permit processing", 
    "Real-time public service tracking", 
    "Digital citizen engagement platforms", 
    "Transparent government spending analytics"
];

function SmartGovernanceHero() {
  return (
    <div className='sourcing-bg w-full md:py-12 py-8 '>
        <div className='max-container lg:w-[85%] w-[95%] mx-auto'>
            <section className='2xl:w-[90%] xl:w-[90%] mx-auto flex flex-col justify-center gap-3 text-white'>
                <Typography
                    typo="header-6-semibold"
                    className='text-center text-app-green'
                >
                    Smart Governance Solutions
                </Typography>
                <div className='arial md:flex hidden flex-col xl:gap-1 text-white'>
                    <Typography
                        className='text-center '
                        typo="header-2-semibold"
                    >
                        Digitizing Public Services for
                    </Typography>
                    <Typography
                        className='text-center '
                        typo="header-2-semibold"
                    >
                        Transparent, Citizen-Centric Governance
                    </Typography>
                </div>
                <Typography
                    typo="header-3-semibold"
                    className='md:hidden block md:pt-4 text-center text-white md:!leading-relaxed !leading-snug'
                >
                    Digitizing Public Services for Transparent, Citizen-Centric Governance
                </Typography>
                <div className='lg:w-[90%] mx-auto flex flex-col py-3 text-center'>
                    <Typography
                        typo="body-large-semibold"
                        className='text-center !leading-relaxed'
                    >
                        Coders Clutch helps governments digitize operations and services to build smarter, more efficient, and
                        transparent institutions. Our Smart Governance platforms enable seamless public service delivery, 
                        realtime engagement with citizens, and data-driven policy implementation—all while reducing 
                        bureaucratic inefficiencies.
                    </Typography>
                </div>
                <div className='lg:w-[80%] mx-auto flex flex-col items-center gap-10'>
                    <div className=' grid xs:grid-cols-2 gap-4'>
                        {
                            digital_services.map(data => (
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
                    <Button
                        variant="primary"
                        className='w-fit mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-8 lg:!px-12 md:!px-10 !px-8 !text-lg font-semibold'
                    >
                        Get a Free Consultation
                        <ArrowRight />
                    </Button>
                    <div className='flex items-center gap-4'>
                        <div className='lg:h-[50px] h-[40px] flex'>
                            {team_members.map((data, index) => (
                                <div key={index+1} className={`h-full lg:w-[50px] w-[40px] lg:border-[4px] border-[3px] border-white rounded-full z-${index} ${
                                    index !== 0 ? '-ml-4' : ''
                                }`}>
                                    <Image 
                                        src={data}
                                        alt={`Member ${index+1}`}
                                        className='w-full h-full object-cover rounded-full'
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col '>
                            <StarRating rating={5} />
                            <Typography
                                typo="body-medium-medium"
                            >
                                100+ Team members
                            </Typography>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    </div>
  )
}

export default SmartGovernanceHero