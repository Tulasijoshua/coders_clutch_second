'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

const archievements = [
    {
        id: "1",
        amount: "16+",
        title: "Glorious Years",
        is_rainbow: false,
        color: "#F0D5FF",
        description: `We have been delivering mission-critical technology to the world’s top businesses for over a decade.`,
    },
    {
        id: "2",
        amount: "400+",
        is_rainbow: false,
        color: "#FFC7C1",
        title: "Happy Employees",
        description: `We don’t just create jobs, but build careers. We are proud to have impacted 1500+ careers so far.`,
    },
    {
        id: "3",
        amount: "500+",
        is_rainbow: true,
        title: "Clients Worldwide",
        description: `Almost half of them are from the ‘Fortune 500’ club — but we cater to businesses of all sizes.`,
    },
    {
        id: "4",
        amount: "40+",
        is_rainbow: true,
        title: "Countries and Counting",
        description: `Our clientele is diverse. They come from 40+ countries across 5 continents, 10 different time zones.`,
    },
]

function Mission() {
    const rainbowContent = archievements.filter(content => !content.is_rainbow)
    const no_rainbowContent = archievements.filter(content => content.is_rainbow)
  return (
    <div className='w-full md:py-16 py-12 bg-[#FAF9F7]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='xl:w-[70%] flex flex-col gap-4'>
                <Button
                    variant="secondary"
                    className='!px-8 md:!text-lg !text-base font-medium bg-app-blue rounded-full'
                >
                    Our Mission
                </Button>
                <Typography
                    typo="header-3-semibold"
                    className='!leading-normal'
                >
                    A company, driven by employee satisfaction and customer success.
                </Typography>
            </div>

            <div className='w-full pt-10 flex xl:flex-row flex-col justify-between gap-6'>
                <div className='flex-1 grid grid-cols-2 gap-6'>
                    {rainbowContent.map((data) => (
                        <Card key={data.id} className='2xl:pt-10 pt-6 2xl:pb-4 flex flex-col justify-center md:gap-6 gap-3 border-none rounded-3xl'
                            style={{backgroundColor: data.color}}
                        >
                            <CardHeader>
                                <CardTitle
                                    className='arial md:text-6xl text-4xl'
                                >{data.amount}</CardTitle>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-4'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    typo="body-medium-regular"
                                    className=' !leading-snug'
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Card className='flex-1 md:px-8 px-4 grid grid-cols-2 text-white bg-gradient-to-br from-[#6634F4] via-[#EF00C5] to-[#FB8E37] border-none rounded-3xl'>
                    {no_rainbowContent.map((data) => (
                        <div key={data.id} className={`md:pt-10 pt-6 flex flex-col justify-center md:gap-6 gap-3 rounded-none ${data.id === "3" && "border-r-[.2px] border-gray-400"} `}
                        >
                            <CardHeader>
                                <CardTitle
                                    className='arial md:text-6xl text-5xl'
                                >{data.amount}</CardTitle>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-4'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    typo="body-medium-regular"
                                    className='!leading-snug'
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </div>
                    ))}
                </Card>
            </div>
        </section>
    </div>
  )
}

export default Mission