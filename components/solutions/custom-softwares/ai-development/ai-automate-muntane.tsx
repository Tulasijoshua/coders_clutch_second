'use client';
import Typography from '@/components/shared/typography'
import { automate_services } from '@/constant';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function AiAutomateMuntane() {
    const [selectedService, setSelectedService] = useState(automate_services[0].id)

    const currentService = automate_services.find(service => service.id === selectedService);
  return (
    <div className='ai_automate_bg w-full py-12'>
        <section className='w-[85%] mx-auto'>
            <div className='inter xl:pb-12 pb-6 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Automate Mundane Tasks with AI Development
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Services and Focus on What Truly Matters
                </Typography>
            </div>  
            <div className='w-[90%] mx-auto py-4 flex justify-between gap-20'>
                <div className='w-[300px] flex flex-col gap-3'>
                    {automate_services.map(data => (
                        <button
                            key={data.id}
                            type='button'
                            onClick={() => setSelectedService(data.id)}
                            className={`w-full px-4 py-[15px] flex justify-between items-center text-lg font-semibold ${
                                selectedService === data.id ? "py-[20px] text-white bg-gradient-to-b from-[#04A56B] to-[#00562E]" : "text-black"
                            } rounded-lg`}
                        >
                            <span>{data.title}</span>
                            {selectedService === data.id && (
                                <ArrowRight color="#fff" />
                            )}
                        </button>
                    ))}
                </div>
                <div className='flex-1 flex justify-between items-center gap-8'>
                    <div className='w-[400px] h-fit'>
                        <Image 
                            src={currentService?.img || automate_services[0].img}
                            alt='Automate service'
                            className='w-full h-full'
                        />
                    </div>
                    <div className='flex-1 flex flex-col gap-6'>
                        <Typography
                            typo="header-5-semibold"
                        >
                            {currentService?.title}
                        </Typography>
                        <div className='flex flex-col gap-4'>
                            {currentService?.contents.map(content => (
                                <Typography
                                    key={content}
                                    typo="body-medium-medium"
                                >
                                    {content}
                                </Typography>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AiAutomateMuntane