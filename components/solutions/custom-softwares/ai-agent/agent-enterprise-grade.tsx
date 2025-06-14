'use client';
import Typography from '@/components/shared/typography';
import React from 'react';
import enterpriseImg from "@/public/assets/images/solutions/ai-agent/enterprise-grade.png";
import Image from 'next/image';
import { enterprise_grade } from '@/constant';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

function AgentEnterpriseGrade() {
  return (
    <div className='w-full py-12'>
        <div className='inter w-[85%] mx-auto xl:pb-10 pb-6 flex flex-col gap-2'>
            <Typography
                typo="header-3-light"
            >
                Enterprise-Grade Integrations for
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='!font-bold'
            >
                Smooth AI Agent Adoption for Business
            </Typography>
        </div>
        <div className='w-full py-4'>
          <div className='w-full mx-auto'>
            <Image 
              src={enterpriseImg}
              alt='Enterprise image'
              className='w-full h-full'
            />
          </div>
        </div>
        <div className='w-[85%] mx-auto py-6 grid grid-cols-3 gap-12'>
          {enterprise_grade.map((data, index) => (
            <Card
              key={data.id}
              className='enterprise_card_bg flex flex-col gap-2'
            >
              <CardHeader>
                <Image 
                  src={data.icon}
                  alt={`Enterprise grade ${index+1}`}
                  className='w-10 h-fit'
                />
              </CardHeader>
              <CardContent className='flex flex-col gap-3'>
                <Typography
                  typo="header-5-semibold"
                >
                  {data.title}
                </Typography>
                <Typography

                >
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
    </div>
  )
}

export default AgentEnterpriseGrade