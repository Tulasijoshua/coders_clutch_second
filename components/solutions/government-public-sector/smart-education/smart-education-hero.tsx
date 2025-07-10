'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const education_services = [
    "AI-Powered Learning Management Systems",
    "Personalized Learning Paths with AI",
    "Smart Content Recommendation Engines",
    "Automated Grading & Feedback Systems",
    "24/7 AI Tutoring Support",
    "Digital Education Infrastructure",
]
function SmartEducationHero() {
  return (
    <div className='aiagent-bg w-full md:py-16 py-12'>
        <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='xl:w-[60%] lg:w-[70%] md:w-[85%] flex flex-col md:items-start items-center xl:gap-8 gap-4 text-white'>
                <div className='xs:flex hidden flex-col'>
                    <Typography
                        typo="header-2-semibold"
                        className='md:text-left text-center'
                    >
                        Creating Digital 
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='text-app-yellow md:text-left text-center'
                    >
                        Learning Environments
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='md:text-left text-center'
                    >
                        That Inspire
                    </Typography>
                </div>
                <Typography
                    typo="header-2-semibold"
                    className='xs:hidden block text-center'
                >
                    Creating Digital <span className='text-app-yellow'>Learning Environments</span> That Inspire
                </Typography>
                <Typography
                    typo="body-large-medium"
                    className='text-gray-300 xs:text-left text-center !leading-relaxed'
                >
                    Coders Clutch designs and builds digital education ecosystems that empower institutions, educators,
                    and learners. From virtual classrooms and LMS platforms to AI-driven content and learning analytics,
                    we help governments modernize education delivery and bridge access gaps.

                </Typography>
                <div className='sm:w-full w-fit mx-auto grid sm:grid-cols-2 md:gap-6 gap-3'>
                    {education_services.map((data) => (
                        <div key={data} className='flex items-center gap-4'>
                            <CircleCheckBig size={25} fill='#4D7372' />
                            <Typography>
                                {data}
                            </Typography>
                        </div>
                    ))}
                </div>
                <Button
                    variant="primary"
                    className='w-fit mt-4 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold'
                >
                    Get a Free Consultation
                </Button>
            </div>
        </div>
    </div>
  )
}

export default SmartEducationHero