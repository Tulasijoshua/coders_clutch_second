'use client';
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react'

const product_steps = [
    {
        id: "1",
        title: "Strategy",
        description: `We conduct in-depth market research and comprehensive user analysis, creating a strategic roadmap that 
                        aligns your product vision with business objectives to maximize success and market relevance.`,
    },
    {
        id: "2",
        title: "Planning",
        description: `Our planning phase translates strategy into actionable steps, outlining timelines, resource 
                        allocation, and milestones, ensuring every phase of the development process stays organized and efficient.`,
    },
    {
        id: "3",
        title: "Development",
        description: `Using agile methodologies, we bring your vision to innovative digital products with a focus on 
                        functionality, scalability, and quality, ensuring it will meet your unique specifications perfectly.`,
    },
    {
        id: "4",
        title: "Testing",
        description: `Our rigorous testing phase identifies and resolves any potential issues, guaranteeing a seamless, 
                        user-friendly experience while ensuring that your product meets all quality standards consistently.`,
    },
    {
        id: "5",
        title: "Launch",
        description: `We execute a well-coordinated launch plan, including final checks and promotional strategies, 
                        positioning your product for success and maximizing user engagement from day one.`,
    },
]

function ProductStepsEngage() {
  return (
    <div className='w-full pt-12 pb-8 bg-app-primary-deep'>
        <section className='w-[85%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Steps to Engage
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Our Digital Product Development Process We Follow
                </Typography>
            </div>
            <div className='w-full py-4 grid grid-cols-5 gap-6'>
                {product_steps.map((data, index) => (
                    <div
                        key={data.id}
                        className={`flex flex-col gap-12 ${
                            index === 0 ? "mt-0 mb-[12rem]" :
                            index === 1 ? "mt-12 mb-[9rem]" :
                            index === 2 ? "mt-24 mb-[6rem]" :
                            index === 3 ? "mt-36 mb-[3rem]" :
                            "mt-[12rem] mb-0"
                        }`}
                    >
                        {data.id !== "1" && (
                            <Typography
                                typo="body-small-medium"
                                className='w-fit mx-8 p-2 bg-white rounded-full'
                            >
                                Process of work
                            </Typography>
                        )}
                        <Card 
                            
                            className={`flex flex-col bg-[#F7EFE1] hover:bg-gradient-to-br hover:from-white hover:via-white hover:to-green-300`
                        }>
                            <CardHeader className='flex flex-col gap-2'>
                                <Typography
                                    className='w-fit px-3 py-1 !text-sm font-semibold bg-[#F9DF91] text-[#AD5E07] rounded-md'
                                >
                                    Step {index+1}
                                </Typography>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                            </CardHeader>
                            <CardContent>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default ProductStepsEngage