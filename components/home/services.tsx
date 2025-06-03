'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { services } from '@/constant';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

function ServicesSection() {
    const [selectedService, setSelectedService] = useState(services[0].id);

  const currentService = services.find(service => service.id === selectedService);
  return (
    <div className=' service-bg w-full py-10'> 
        <div className='max-container 2xl:w-[85%] w-[95%] mx-auto mb-6'>
            <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-[300px] bg-white">
                    <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                    {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                            {service.title}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <section className='hidden max-container 2xl:w-[85%] w-[95%] mx-auto xl:flex justify-between items-stretch gap-2 flex-wrap'>
            {currentService?.contents.map((data) => (
                <div key={data.id}>
                    {data.id === "1" ? (
                        <div className='pops 2xl:w-[660px] xl:w-[600px] h-full py-12 flex flex-col justify-center gap-2'>
                            <Typography
                                typo="header-3-light"
                            >
                                {data.title}
                            </Typography>
                            
                                <Typography
                                    typo="header-3-semibold"
                                >
                                    {data.content}
                                </Typography>
                        </div>
                    ) : (
                        <Card className='2xl:w-[300px] xl:w-[280px] w-[300px] h-full px-2 bg-white flex flex-col justify-between hover:shadow-md'>
                            <CardHeader className='space-y-0'>
                                <Typography
                                    typo="header-6-semibold"
                                >{data.title}</Typography>
                                <div className='w-fit relative'>
                                    <div className='w-full py-1 absolute bottom-0 bg-[#DAE9DE] rounded-full'></div>
                                    <Typography
                                        typo="header-6-semibold"
                                        className='relative'
                                    >{data.subTitle}</Typography>
                                </div>
                            </CardHeader>
                            <CardContent className=''>
                                <CardDescription className='text-[16px] text-black leading-relaxed'>
                                    {data.content}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    className='p-0'
                                >
                                    Read More
                                    <ArrowRight />
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </div>
                ))}
        </section>

        <section className='xl:hidden max-container 2xl:w-[85%] w-[95%] mx-auto flex-wrap'>    
            {currentService?.contents.filter(data => data.id === "1").map((data) => (
                <div key={data.id} className='pops w-full border h-full py-12 flex flex-col justify-center gap-2'>
                    <Typography
                        typo="header-3-light"
                    >
                        {data.title}
                    </Typography>
                    
                        <Typography
                            typo="header-3-semibold"
                        >
                            {data.content}
                        </Typography>
                </div>
            ))}
           
        </section>
        <section className='xl:hidden max-container 2xl:w-[85%] w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-2 flex-wrap'>    
           
            {currentService?.contents.filter(data => data.id !== "1").map((data) => (
                <div key={data.id}>
                    <Card className='h-full px-2 bg-white flex flex-col justify-between hover:shadow-md'>
                        <CardHeader className='space-y-0'>
                            <Typography
                                typo="header-6-semibold"
                            >{data.title}</Typography>
                            <div className='w-fit relative'>
                                <div className='w-full py-1 absolute bottom-0 bg-[#DAE9DE] rounded-full'></div>
                                <Typography
                                    typo="header-6-semibold"
                                    className='relative'
                                >{data.subTitle}</Typography>
                            </div>
                        </CardHeader>
                        <CardContent className=''>
                            <CardDescription className='text-[16px] text-black leading-relaxed'>
                                {data.content}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button
                                className='p-0'
                            >
                                Read More
                                <ArrowRight />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                ))}
        </section>
    </div>
  )
}

export default ServicesSection