'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { BookOpen, CarFront, CircleDollarSign, HardHat, HeartPulse, Hotel, Landmark, MapPinned, ShieldCheck } from 'lucide-react';
import CaseStudies from './case-studies';
import PortfolioMain from './portfolio-main';

const hero_content = [
    {
        id: "1",
        title: "Fintech",
        icon: CircleDollarSign,
    },
    {
        id: "2",
        title: "Healthcare",
        icon: HeartPulse,
    },
    {
        id: "3",
        title: "Construction",
        icon: HardHat,
    },
    {
        id: "4",
        title: "Logistics",
        icon: MapPinned,
    },
    {
        id: "5",
        title: "Automotive",
        icon: CarFront,
    },
    {
        id: "6",
        title: "Hospitality",
        icon: Hotel,
    },
    {
        id: "7",
        title: "EdTech",
        icon: BookOpen,
    },
    {
        id: "8",
        title: "Insurance",
        icon: ShieldCheck,
    },
    {
        id: "9",
        title: "public sector solutions",
        icon: Landmark,
    },
]

function PortfolioHero2() {
    const [activeTab, setActiveTab] = useState<'caseStudies' | 'latestProjects'>('caseStudies');
  return (
    <div>
        <div className='w-full py-12 bg-app-primary-deep'>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between items-center lg:gap-12 gap-8'>
                <div className='lg:w-[40%] sm:w-[90%] flex flex-col lg:gap-6 gap-4 text-white'>
                    <Typography
                        typo="header-3-semibold"
                        className='!leading-normal'
                    >
                        Discover How We Accelerated Growth for Countless Businesses
                    </Typography>
                    <Typography
                        typo="body-large-medium"
                        className='pb-4 !leading-relaxed'
                    >
                        From eliminating inefficiencies and leveraging automation to streamlining workflows and enhancing digital 
                        capabilities, we've helped at least 100 companies boost their bottom line.
                    </Typography>
                    <Button
                        variant="primary"
                        className='!px-8 !py-4 font-[600] text-base'
                    >
                        Talk To Our Experts
                    </Button>
                </div>
                <div className='flex-1 grid lg:grid-cols-3 sm:grid-cols-4 xs:grid-cols-3 grid-cols-2 gap-5'>
                    {hero_content.map(data => (
                        <div key={data.id} className='max-w-[200px] xl:py-10 py-5 flex flex-col justify-center items-center gap-3 bg-white/50 rounded-xl'>
                            <div className='w-fit p-3 rounded-full border-2 border-white'>
                                <data.icon 
                                    size={35}
                                    color='#fff'
                                />
                            </div>
                            <Typography
                                typo="body-medium-semibold"
                                className='text-white text-center'
                            >
                                {data.title}
                            </Typography>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        <div className='max-w-[50rem] lg:w-[50%] sm:w-[70%] w-[90%] mx-auto -mt-8 border flex justify-between items-center gap-8 bg-white rounded-lg overflow-hidden'>
            <button
                className={`flex-1 py-4 text-center transition-all ${activeTab === 'caseStudies' ? 'bg-app-primary text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('caseStudies')}
            >
                Case Studies
            </button>
            <div className='w-[2px] h-8 bg-gray-300'></div>
            <button
                className={`flex-1 py-4 text-center transition-all ${activeTab === 'latestProjects' ? 'bg-app-primary text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('latestProjects')}
            >
                Latest Projects
            </button>
        </div>

        <div className='w-full md:py-6'>
            {activeTab === 'caseStudies' ? (
                <CaseStudies />
            ) : (
                <PortfolioMain />
            )}
        </div>
    </div>
  )
}

export default PortfolioHero2