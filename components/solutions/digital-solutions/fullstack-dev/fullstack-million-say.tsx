'use client';
import React from 'react'
import test1 from "@/public/assets/images/security-cloud/banking.png"
import test2 from "@/public/assets/images/security-cloud/dedicated-team.png"
import test3 from "@/public/assets/images/security-cloud/staff-augmentation.png"
import test4 from "@/public/assets/images/security-cloud/media.png"
import Typography from '@/components/shared/typography'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';


const testimonial = [
    {
        id: "1",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test1,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "2",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test2,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "3",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test3,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "4",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test4,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "5",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test1,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
    {
        id: "6",
        title: "Truly commendable job. A big thumbs up from our side.",
        description: `We hired some 25 developers from CONTUS Tech. I must confess that their work is truly commendable, 
                        and among the finest we've encountered in a while. They incorporated unique features into our app 
                        and went above and beyond to deliver the highest quality of work possible for us.`,
        img: test2,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
    },
]

function FullstackMillionSay() {
  return (
    <div className='w-full py-12 bg-[#F1F1F7]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    What millions say
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    about Coders Clutch
                </Typography>
            </div>
            <div className='w-full flex justify-between gap-2 flex-wrap'>
            <Carousel
                opts={{
                    align: "center",
                }}
                plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                ]}
                className="w-full "
            >
                <CarouselContent>
                    {testimonial.map((data, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 xl:basis-1/3">
                            <Card
                                className='lg:w-[420px] md:w-[350px] sm:w-[300px] w-[350px] py-4'
                                key={data.id}
                            >
                                <CardHeader  className='pb-2'>
                                    <Typography
                                        typo="header-6-semibold"
                                    >
                                        {data.title}
                                    </Typography>
                                </CardHeader>
                                <CardContent>
                                    <Typography>
                                        {data.description}
                                    </Typography>
                                </CardContent>
                                <CardFooter className='pt-12 flex items-center gap-2'>
                                    <Image
                                        src={data.img}
                                        alt={`Testimony ${index+1}`}
                                        className='w-12 h-12 rounded-full object-cover'
                                    />
                                    <div className='flex flex-col gap-1'>
                                        <Typography
                                            typo="body-medium-semibold"
                                            className='text-app-primary-light'
                                        >{data.name}</Typography>
                                        <Typography
                                            typo="body-medium-medium"
                                            className='!leading-tight'
                                        >{data.position}</Typography>
                                    </div>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel>
            </div>
        </section>
    </div>
  )
}

export default FullstackMillionSay