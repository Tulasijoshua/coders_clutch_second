'use client';
import Typography from '@/components/shared/typography'
import { department_specifics } from '@/constant';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function AgentDepartmentSpecific() {
    const [selectedSpecific, setSelectedSpecific] = useState(department_specifics[0].id)

    const currentSpecific = department_specifics.find(department => department.id === selectedSpecific);
  return (
    <div className='w-full py-12 bg-app-primary-deep'>
        <section className='w-[80%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Department-Specific AI Agents
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Ready to Work & Deliver Results in Record Time
                </Typography>
            </div>
            <div className='w-full py-4 space-y-10'>
                <div className='w-full flex justify-between items-center'>
                    {department_specifics.map((data) => (
                        <button
                            type='button'
                            key={data.id}
                            onClick={() => setSelectedSpecific(data.id)}
                            className={`flex-1 py-5 text-base font-medium border border-gray-600 bg-app-primary-medium ${
                                selectedSpecific === data.id ? "bg-white text-black font-semibold" : "text-white"
                            }`}
                        >{data.header}</button>
                    ))}
                </div>
                <div className='w-full flex justify-between items-center gap-10'>
                    <div className='flex-1 text-white'>
                        <div className='w-[90%] flex flex-col gap-4'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {currentSpecific?.title}
                            </Typography>
                            <Typography
                                typo="body-large-medium"
                            >
                                {currentSpecific?.description}
                            </Typography>
                            <div className='w-full py-3 flex flex-col gap-4'>
                                {currentSpecific?.contents.map((content) => (
                                    <div key={content} className='flex items-center gap-3'>
                                        <CircleCheck color='#62FF00' />
                                        <Typography
                                            className='!text-lg'
                                        >
                                            {content}
                                        </Typography>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%] h-fit'>
                        <Image
                            src={currentSpecific?.img || department_specifics[0].img}
                            alt={`Department specific ${currentSpecific?.id}`}
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AgentDepartmentSpecific