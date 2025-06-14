'use client'
import Typography from '@/components/shared/typography'
import React from 'react'
import user1 from "@/public/assets/images/solutions/outsourcing/preston.png"
import user2 from "@/public/assets/images/solutions/outsourcing/mike_img.png"
import user3 from "@/public/assets/images/solutions/outsourcing/shanka_img.png"
import user4 from "@/public/assets/images/solutions/outsourcing/rory_img.png"
import user5 from "@/public/assets/images/solutions/outsourcing/kumar_img.png"
import user6 from "@/public/assets/images/solutions/outsourcing/pirmin_img.png"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import StarRating from '@/components/reusable/star-rating'

const clients = [
    {
        id: "1",
        img: user1,
        name: "Preston Purnell",
        position: "UI/UX Designer at Navitus Health Solutions",
        title: "Seamless integration, outstanding results",
        description: `We faced challenges integrating outsourced developers with our in-house team. However, their seamless 
                        integration and expertise resolved these issues, resulting in exceptional outcomes that surpassed our 
                        expectations. I recommend them highly to anyone looking to overcome similar development challenges.`,
        rate: 5,
    },
    {
        id: "2",
        img: user2,
        name: "Mike Swinford",
        position: "Co-Founder / President at Bandwear.com",
        title: "Timezone alignment made all the difference",
        description: `Working with a timezone-aligned outsourced development team was a game-changer for our project. 
                        The real-time collaboration and quick response times significantly accelerated our development process.`,
        rate: 5,
    },
    {
        id: "3",
        img: user3,
        name: "Shankar Uprety",
        position: "Chief Executive Officer at Hamro Patro",
        title: "Flexible team scaling saved our project",
        description: `Our experience with their outsourcing software development services was exceptional. From custom 
                        software solutions to web and mobile applications, their developers consistently delivered 
                        high-quality code`,
        rate: 5,
    },
    {
        id: "4",
        img: user4,
        name: "Rory A Pollard",
        position: "VP of Internal Audit - Orion Engineered Carbons",
        title: "Cost-effective without compromising quality",
        description: `We were initially skeptical about the cost savings, but the outsourced team delivered the work while 
                        significantly reducing our development expenses. The quality-to-cost ratio was impressive.`,
        rate: 5,
    },
    {
        id: "5",
        img: user5,
        name: "Kumar Mehta",
        position: "VP of Engineering at Juniper Networks",
        title: "Diverse skill set for complex projects",
        description: `The range of expertise among the outsourced developers was remarkable. We were able to find 
                        specialists for every aspect of our complex project. The ability to scale our dedicated team as 
                        needed, combined with their agile methodology, ensured we met all our milestones`,
        rate: 5,
    },
    {
        id: "6",
        img: user6,
        name: "Pirmin Unger",
        position: "Director KM and AI - think-cell Software",
        title: "Responsive support around the clock",
        description: `we relied on the outsourced team's responsive support, which was consistently available whenever 
                        issues arose. Their expert assistance ensured smooth progress throughout our project, making a 
                        significant impact on our operations`,
        rate: 5,
    },
]

function OutsourceOurClient() {
  return (
    <div className='w-full py-12 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Hear What Our Clients
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Say About Us
                </Typography>
            </div>
            <div className='w-full xl:py-6 md:py-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-4'>
                {clients.map((data, index) => (
                    <Card
                        key={data.id}
                        className='flex flex-col '
                    >
                        <CardHeader className='xl:pb-8 flex flex-row items-center gap-4'>
                            <div className='min-w-12 h-12'>
                                <Image 
                                    src={data.img}
                                    alt={`Client ${index+1}`}
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.name}
                                </Typography>
                                <Typography
                                    typo="body-small-regular"
                                >
                                    {data.position}
                                </Typography>
                            </div>
                        </CardHeader>
                        <CardContent className='flex flex-col space-y-4'>
                            <Typography
                                typo="body-large-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-regular"
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                        <div className='h-full flex flex-col justify-end'>
                            <CardFooter className='pb-4 xl:pt-8 flex justify-between items-end gap-6'>
                                <Typography
                                    typo="body-large-semibold"
                                    className='text-blue-900'
                                >{data.rate}/5 Stars</Typography>

                                <StarRating rating={data.rate} />
                            </CardFooter>

                        </div>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default OutsourceOurClient