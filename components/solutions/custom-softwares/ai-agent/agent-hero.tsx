'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const agent_services = ["Rapid AI Agent Implementation", "Hire the Top 5% of AI Talent", "24/7 AI-Driven Support & Monitoring", "15+ AI Models in Production", "End-to-End AI-Powered Automation", "10+ AI Agents Deployed & Scaling"]

function AgentHero() {
  return (
    <div className='aiagent-bg w-full md:py-20 py-12'>
        <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='xl:w-[60%] lg:w-[70%] md:w-[85%] flex flex-col md:items-start items-center xl:gap-8 gap-4 text-white'>
                <div className='flex flex-col'>
                    <Typography
                        typo="header-2-semibold"
                        className='md:text-left text-center'
                    >
                        Build and Deploy AI Agents
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='text-app-yellow md:text-left text-center'
                    >
                        On-Cloud or On-Premise
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='md:text-left text-center'
                    >
                        The Choice is Yours
                    </Typography>
                </div>
                <Typography
                    typo="body-large-medium"
                    className='text-gray-300 text-center'
                >
                    Contus Tech brings smart AI Agents that think on their feet, proactively automate tasks, and get things done before you even ask.
                </Typography>
                <div className='w-full grid grid-cols-2 md:gap-6 gap-3'>
                    {agent_services.map((data) => (
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
                    Let&apos;s Talk
                </Button>
            </div>
        </div>
    </div>
  )
}

export default AgentHero