'use client';
import React from 'react'
import build_smart from "@/public/assets/images/security-cloud/build_smarter.png"
import Image from 'next/image'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';

function BuildSmart() {
  return (
    <div className='buildsmart-bg w-full'>
        <section className='max-container w-[85%] mx-auto flex justify-between items-center gap-8'>
            <div className='flex-1 flex flex-col gap-2 text-white'>
                <div className='pb-6 flex flex-col'>
                    <Typography
                        typo="header-3-semibold"
                        className='!leading-snug'
                    >
                        Build Smarter, Deploy Faster - Achieve 2x Results
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='!leading-snug text-app-yellow capitalize'
                    >
                        with Cloud DevOps Experts
                    </Typography>
                </div>
                <Button
                    variant="primary"
                >
                    Talk to our Experts
                </Button>
            </div>
            <div className='flex-1'>
                <div className='w-full h-fit'>
                    <Image 
                        src={build_smart}
                        alt='Build smart'
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default BuildSmart