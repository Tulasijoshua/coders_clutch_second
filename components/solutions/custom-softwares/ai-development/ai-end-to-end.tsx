'use client';
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ai_innovations } from '@/constant';
import React from 'react'

function AiEndtoEnd() {
  return (
    <div className='w-full py-12'>
        <section className='w-[85%] mx-auto'>
            <div className='inter xl:pb-12 pb-6 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    End-to-End AI Development Solutions
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    From Strategy to Scalable Innovation
                </Typography>
            </div>  
            <div className='w-full grid grid-cols-3 gap-8'>
                {ai_innovations.map((data) => (
                    <Card
                        key={data.id} 
                        className={`p-8 flex flex-col gap-4 ${data.is_right_active ? "ai_right_active_bg" : data.is_left_active ? "ai_left_active_bg" : "bg-[#F7EFE1]"} border-none shadow-none`}>
                            <CardHeader className='p-0'>
                                <Typography
                                    typo="header-5-semibold"
                                >
                                    {data.title}
                                </Typography>
                            </CardHeader>
                            <CardContent className='p-0'>
                                <Typography
                                    typo="body-large-regular"
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                            <CardFooter className='p-0 flex flex-col items-start  gap-2'>
                                {data.contents.map(content => (
                                    <div 
                                        key={content} 
                                        className='flex items-center gap-2'
                                    >
                                        <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                                        <Typography>
                                            {content}
                                        </Typography>
                                    </div>
                                ))}
                            </CardFooter>
                        </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default AiEndtoEnd