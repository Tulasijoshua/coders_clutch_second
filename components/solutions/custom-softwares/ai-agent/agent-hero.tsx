'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const agent_services = ["Rapid AI Agent Implementation", "Hire the Top 5% of AI Talent", "24/7 AI-Driven Support & Monitoring", "15+ AI Models in Production", "End-to-End AI-Powered Automation", "10+ AI Agents Deployed & Scaling"]

function AgentHero() {
  return (
    <div className='aiagent-bg w-full py-20'>
        <div className='w-[85%] mx-auto'>
            <div className='w-[60%] flex flex-col gap-8 text-white'>
                <div className='flex flex-col'>
                    <Typography
                        typo="header-2-semibold"
                    >
                        Build and Deploy AI Agents
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                        className='text-app-yellow'
                    >
                        On-Cloud or On-Premise
                    </Typography>
                    <Typography
                        typo="header-2-semibold"
                    >
                        The Choice is Yours
                    </Typography>
                </div>
                <Typography
                    typo="body-large-medium"
                    className='text-gray-300'
                >
                    Contus Tech brings smart AI Agents that think on their feet, proactively automate tasks, and get things done before you even ask.
                </Typography>
                <div className='w-full grid grid-cols-2 gap-6'>
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