'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Bookmark, BriefcaseBusiness, MapPin } from 'lucide-react';
import React from 'react'

const careers = [
    {
        id: "1",
        role: "Senior PPC Specialist",
        location: "Chennai, India",
        time: "Full Time"
    },
    {
        id: "2",
        role: "Senior PPC Specialist",
        location: "Chennai, India",
        time: "Full Time"
    },
    {
        id: "3",
        role: "Senior PPC Specialist",
        location: "Chennai, India",
        time: "Full Time"
    },
    {
        id: "4",
        role: "Senior PPC Specialist",
        location: "Chennai, India",
        time: "Full Time"
    },
    {
        id: "5",
        role: "Senior PPC Specialist",
        location: "Chennai, India",
        time: "Full Time"
    },
    {
        id: "6",
        role: "Senior PPC Specialist",
        location: "Chennai, India",
        time: "Full Time"
    },
]

function JoinUs() {
  return (
    <div className='w-full py-12 bg-[#F6FAFD]'>
        <section className='max-container sm:w-[85%] w-[70%] mx-auto'>
            <div className='w-fit mx-auto text-center pb-4 flex flex-col gap-2'>
                <Typography
                    typo="header-4-semibold"
                >
                    Join Us
                </Typography>
                <div className='w-12 mx-auto h-[1px] bg-black'></div>
            </div>

            <div className='w-full py-8 flex flex-col gap-8'>
                <Typography
                    typo="header-5-semibold"
                    className='text-center'
                >Current Openings</Typography>

                <div className='w-full grid grid-cols-3 gap-6'>
                    {careers.map((data) => (
                        <Card 
                            key={data.id}
                            className='hover:border-orange-300'
                        >
                            <CardHeader className='w-full flex flex-row justify-between gap-4'>
                                <div className='flex gap-3'>
                                    <BriefcaseBusiness size={45} />
                                    <div className=''>
                                        <div className='font-semibold'>Unilever</div>
                                        <div className='flex items-center gap-2 text-gray-500'>
                                            <MapPin size={15} />
                                            <span className='text-sm'>{data.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className='w-fit p-2 text-gray-400 hover:text-app-primary-medium hover:bg-app-primary-light/10'
                                >
                                    <Bookmark className='w-6 ' />
                                </div>
                            </CardHeader>   
                            <CardContent className='pt-0 flex flex-col gap-2'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.role}
                                </Typography>
                                <span className='w-fit px-3 py-1 text-sm font-semibold text-app-secondary/60 bg-orange-100'>{data.time}</span>
                                <div className='text-sm text-orange-400'>
                                    <span className='text-gray-400'>Salary: </span>
                                    Competitive
                                </div>
                            </CardContent>
                            <CardFooter className='w-full flex justify-end'>
                                <Button
                                    variant="primary"
                                    className='!py-2'
                                >
                                    Apply Now
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default JoinUs