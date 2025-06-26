'use client';
import React from 'react'
import project1 from "@/public/assets/images/digital-solutions/project1.jpg";
import project2 from "@/public/assets/images/digital-solutions/project2.jpg";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [project1, project2, project1, project2, project1, project2]

function EcommerceProjects() {
  return (
    <div className='w-full py-20 flex flex-col lg:gap-0 gap-16 bg-app-primary-deep'>
        <Carousel 
            opts={{
                align: "start",
                loop: true
            }}
            plugins={[
                Autoplay({
                    delay: 2000
                })
            ]}
            className="w-full lg:relative"
        >
            <CarouselContent className="">
                {projects.map((data, index) => (
                <CarouselItem key={index+1} className="pl-1 lg:basis-1/2 3xl:basis-1/4">
                    <div className='lg:w-[550px] xs:w-[400px] w-[90%] mx-auto lg:h-[400px] h-[300px]'>
                        <Image 
                            src={data}
                            alt='Carousel'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <Card className='hidden w-[550px] h-[400px] px-4 lg:absolute lg:top-0 lg:right-56 lg:flex flex-col justify-center gap-3 bg-black text-white rounded-none'>
                <CardHeader className='flex flex-col gap-2'>
                    <Typography
                        typo="body-small-semibold"
                        className='uppercase text-gray-500 tracking-widest'
                    >Projects</Typography>
                    <Typography
                        className='!leading-tight'
                        typo="header-2-regular"
                    >
                        We are happy to show our work
                    </Typography>
                </CardHeader>
                <CardContent className='flex flex-col gap-5 items-start'>
                    <Typography
                        className='rale'
                    >
                        Find out amazing projects we have been working on.
                    </Typography>
                    <Button
                        variant="primary"
                        className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-8 lg:!px-16 md:!px-10 !px-8 !text-base !rounded-none'
                    >
                        Find out more
                        <ArrowRight />
                    </Button>
                </CardContent>
            </Card>
        </Carousel>
        <Card className='lg:hidden sm:w-[550px] w-[90%] h-[400px] mx-auto px-4 flex flex-col justify-center gap-3 bg-black text-white rounded-none'>
            <CardHeader className='flex flex-col gap-2'>
                <Typography
                    typo="body-small-semibold"
                    className='uppercase text-gray-500 tracking-widest'
                >Projects</Typography>
                <Typography
                    className='!leading-tight'
                    typo="header-2-regular"
                >
                    We are happy to show our work
                </Typography>
            </CardHeader>
            <CardContent className='flex flex-col gap-5 items-start'>
                <Typography
                    className='rale'
                >
                    Find out amazing projects we have been working on.
                </Typography>
                <Button
                    variant="primary"
                    className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-8 lg:!px-16 md:!px-10 !px-8 !text-base !rounded-none'
                >
                    Find out more
                    <ArrowRight />
                </Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default EcommerceProjects
