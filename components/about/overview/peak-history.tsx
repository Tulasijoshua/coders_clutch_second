'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button'
import React from 'react'

const peak_history = [
    {
        id: "1",
        color: "#FE0935",
        year: "Year 2022",
        title: "A trusted SaaS companion for Fortune 500 firms",
    },
    {
        id: "2",
        color: "#FE0935",
        year: "Years 2020-2021",
        title: "Braving the odds during the pandemic",
    },
    {
        id: "3",
        color: "#FFD01A",
        year: "Year 2019",
        title: "Clocked 144% year-on-year growth",
    },
    {
        id: "4",
        color: "#11CDA6",
        year: "Year 2017",
        title: "Connected 1 million+ cars & trucks",
    },
    {
        id: "5",
        color: "#FE0935",
        year: "Year 2016",
        title: "Pioneering the video streaming industry",
    },
    {
        id: "6",
        color: "#FFD01A",
        year: "Year 2015",
        title: "First in-app communication platform",
    },
    {
        id: "7",
        color: "#FFD01A",
        year: "Years 2012-2014",
        title: "Spreading wings beyond the Asia-Pacific to the Americas",
    },
    {
        id: "8",
        color: "#11CDA6",
        year: "Years 2008 - 2011",
        title: "Emergence & recognition as a leading SaaP company",
    },
]

function PeakHistory() {
  return (
    <div className='w-full xl:py-12 py-6 peak-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='w-[70%] flex flex-col gap-4'>
                <Button
                    variant="secondary"
                    className='md:!px-8 !px-5 md:!text-lg !text-base font-medium bg-app-blue rounded-full'
                >
                    Our Mission
                </Button>
                <Typography
                    typo="header-3-semibold"
                    className='!leading-normal'
                >
                    A peek into our history
                </Typography>
            </div>
            <div className='md:block hidden w-full md:py-16 py-8'>
                <div className='w-full pb-3 pl-3 grid grid-cols-4 gap-8'>
                    {peak_history.slice(0, 4).map((data) => (
                        <div 
                            key={data.id} 
                            className='px-4 pb-8 flex flex-col gap-4 border-l-2 border-dashed'
                            style={{borderColor: data.color}}
                        >
                            <Typography
                                typo="body-medium-semibold"
                                className='text-blue-800'
                            >
                                {data.year}
                            </Typography>
                            <Typography
                                typo="body-large-semibold"
                            >
                                {data.title}
                            </Typography>
                        </div>
                    ))}
                </div>
                <div className='w-full grid grid-cols-8 gap-4'>
                    {peak_history.map((data, index) => (
                        <div key={data.id} className='flex justify-between items-center gap-2'>
                            <div className={`w-6 h-6 bg-white border-[4px] ${index < 3 ? "border-[#FE0935]" : index < 6 ? "border-[#FFD01A]" : "border-[#11CDA6]"}  rounded-full`}></div>
                            <div className={`flex-1 h-[0.5px] ${index < 3 ? "bg-[#FE0935]" : index < 6 ? "bg-[#FFD01A]" : "bg-[#11CDA6]"} `}></div>
                        </div>
                    ))}
                </div>
                <div className='w-full flex justify-end'>
                    <div className='w-[88%] pt-3 pl-3 grid grid-cols-4 gap-8'>
                        {peak_history.slice(4, 8).map((data) => (
                            <div 
                                key={data.id} 
                                className={`px-4 pb-8 flex flex-col gap-4 border-l-2 border-dashed`}
                                style={{borderColor: data.color}}
                            >
                                <Typography
                                    typo="body-medium-semibold"
                                    className='text-blue-800'
                                >
                                    {data.year}
                                </Typography>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.title}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative">
                
                
                {peak_history.map((item, index) => (
                    <div key={index} className="relative pl-12 pb-8">
                        <div className="absolute left-4 top-1 h-4 w-4 rounded-full  transform -translate-x-1/2"
                            style={{backgroundColor: item.color}}
                        ></div>
                        
                        <div className="text-lg font-semibold text-blue-600 mb-1">
                        Year{item.year.includes("-") ? "s" : ""} {item.year}
                        </div>
                        
                        <div className="text-gray-700">{item.title}</div>
                        <div className="absolute left-4 top-1 h-full w-1 border border-gray-300 transform -translate-x-1/2"
                            style={{borderColor: item.color}}
                        ></div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default PeakHistory