'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { tested_approaches } from '@/constant';
import { MousePointer2 } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'

function AiTriedTested() {
    const [selectedApproach, setSelectedApproach] = useState(tested_approaches[0].id)

    const currentSpecific = tested_approaches.find(data => data.id === selectedApproach);
  return (
    <div className='w-full py-12 bg-[#F2F2F2]'>
        <section className='max-container 2xl:w-[85%] md:w-[90%] w-[85%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Our Tried & Tested Approach to
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Building AI Models That Deliver Real Results
                </Typography>
            </div>
            <div className='lg:block hidden w-full space-y-4 bg-white'>
                <div className='w-full flex justify-between items-center'>
                    {tested_approaches.map((data) => (
                        <button
                            type='button'
                            key={data.id}
                            onClick={() => setSelectedApproach(data.id)}
                            className={`flex-1 py-5 xl:text-base text-sm font-medium border border-gray-300 bg-app-primary-medium ${
                                selectedApproach === data.id ? "bg-gradient-to-b from-green-300 via-green-600 to-green-900 text-white font-semibold" : "text-black bg-[#E3E3E3]"
                            }`}
                        >{data.title}</button>
                    ))}
                </div>
                <div className='w-[90%] mx-auto flex justify-between items-center gap-10'>
                    <Card className='flex-1 flex flex-col gap-4 shadow-none border-none'>
                        <CardHeader className='px-0 flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <Typography
                                    typo="header-5-semibold"
                                >
                                    {currentSpecific?.title === "Planning" ? "Planning & Consultation" : currentSpecific?.title}
                                </Typography>
                                <div className='w-12 h-[3px] bg-black'></div> 
                            </div>
                            <Typography
                                typo="body-medium-medium"
                            >
                                {currentSpecific?.description}
                            </Typography>
                        </CardHeader>
                        <CardContent className='px-0 grid grid-cols-2 gap-6'>
                            {currentSpecific?.contents.map(content => (
                                <div className='pb-4 flex gap-3'>
                                    <div className=''>
                                        <MousePointer2 className='rotate-90' fill='#FFB22B' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Typography
                                            typo="body-large-semibold"
                                        >
                                            {content.title}
                                        </Typography>
                                        <Typography
                                            typo="body-medium-medium"
                                        >
                                            {content.description}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <div className='w-[500px] h-fit'>
                        <Image
                            src={currentSpecific?.img || tested_approaches[0].img}
                            alt={`Department specific ${currentSpecific?.id}`}
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
            <div className='lg:hidden block w-full'>
                {/* <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                    onValueChange={(value) => setActiveItem(value)}
                >
                    {
                        tested_approaches.map((data, index) => (
                            <AccordionItem
                                key={data.id}
                                value={`item-${index+1}`}
                                className={`xs:px-6 px-3 border-b border-gray-400 last:border-b-0 text-white ${
                                    activeItem === `item-${index+1}` ? 'border-2-b border-[#34644C]' : ''
                                }`}
                            >
                                <AccordionTrigger
                                    className='text-xl font-semibold'
                                >{data.header}</AccordionTrigger>
                                <AccordionContent className="w-full flex flex-col gap-4 text-balance">
                                    <Typography
                                        typo="header-5-semibold"
                                    >
                                        {data.title}
                                    </Typography>
                                    <p className='w-full text-base'>
                                        {data.description}
                                    </p>
                                    <div className='w-full py-3 flex flex-col gap-4'>
                                        {currentSpecific?.contents.map((content) => (
                                            <div key={content} className='flex items-center gap-3'>
                                                <CircleCheck color='#62FF00' />
                                                <Typography
                                                    className='xs:!text-base'
                                                >
                                                    {content}
                                                </Typography>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='lg:hidden block w-full h-full max-h-[400px] overflow-hidden shadow-sm'>
                                        <Image
                                            src={data.img}
                                            alt='Industry Image'
                                            className='w-full h-full object-cover'
                                            
                                        />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                        ))
                    }
                </Accordion> */}
            </div>
        </section>
    </div>
  )
}

export default AiTriedTested