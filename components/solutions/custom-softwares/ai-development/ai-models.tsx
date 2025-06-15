'use client';
import React from 'react'
import Image from 'next/image';
import ai_model_img from "@/public/assets/images/solutions/ai-agent/ai_model_img.png";
import ai_arrow_img from "@/public/assets/images/solutions/ai-agent/model_arrow.png";
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';

function AiModels() {
  return (
    <div className='w-full py-12'>
        <section className='w-[85%] mx-auto flex justify-between items-center gap-12'>
            <div className='flex-1 flex justify-between items-center gap-8'>
                <div className='flex-1 flex flex-col gap-6'>
                    <div className='inter flex flex-col gap-'>
                        <Typography
                            typo="header-3-light"
                        >
                            AI Models
                        </Typography>
                        <Typography
                            typo="header-3-semibold"
                            className='!font-bold'
                        >
                            We Specialize In
                        </Typography>
                    </div>  
                    <Typography>
                        At CODERS Clutch, we develop industry-leading AI models, delivering game-changing results with 500+ successful projects under our belt.
                    </Typography>
                    <Button
                        variant="primary"
                        className='!text-lg !font-semibold capitalize'
                    >
                        Talk to our AI Experts
                    </Button>
                </div>
                <div className='w-32 h-fit'>
                    <Image 
                        src={ai_arrow_img}
                        alt='Ai arrow'
                        className='w-full h-full'
                    />
                </div>
            </div>
            <div className='w-[50%]'>
                <div className='w-full h-fit'>
                    <Image 
                        src={ai_model_img}
                        alt='Ai Models image'
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default AiModels