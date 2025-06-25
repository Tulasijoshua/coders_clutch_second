'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { website_services } from '@/constant';
import Image from 'next/image';
import React, { useState } from 'react'

function WebsiteServices() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Show all");
    
    const categories = ["Show all", ...new Set(website_services.map(project => project.category))];

    const filteredProjects = selectedCategory === "Show all" 
        ? website_services 
        : website_services.filter(project => project.category === selectedCategory);
  return (
    <div className='w-full py-12 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='md:pb-6 flex flex-col gap-3 text-center text-white'>
                <Typography
                    typo="header-4-semibold"
                >Latest Websites</Typography>
                <Typography>
                    We have delivered a vast range of websites that have made a significant difference in our clients&apos;
                    businesses. Here are some of our latest websites.
                </Typography>
            </div>
            <div className='md:pt-8 pt-4'>
                <div className='w-full overflow-auto'>
                    <div className='pb-3 flex justify-center items-center gap-4 flex-nowrap'>
                        {categories.map((category) => (
                            <Button
                                variant="outline"
                                type='button'
                                onClick={() => setSelectedCategory(category)}
                                key={category}
                                className={`py-2 !px-0 text-sm rounded-full hover:text-gray-400 ${selectedCategory === category ? 'text-gray-400' : 'text-white'}`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className='w-full py-6 grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-8'>
                    {filteredProjects.map((data, index) => (
                        <Card key={data.id} className='rounded-xl'>
                            <div className='relative group'>
                                <div className='w-full xl:h-[200px] sm:h-[200px] xs:h-[150px] h-[250px] overflow-hidden  rounded-xl'>
                                    <Image
                                        src={data.img}
                                        alt={`Project ${index+1}`}
                                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                    />
                                </div>
                                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center p-4 transition-all duration-300 opacity-0 group-hover:opacity-100  rounded-xl'>
                                    {/* <Typography className='text-white text-center leading-relaxed'>
                                        {data.description}
                                    </Typography> */}
                                </div>
                            </div>
                            <CardContent className='py-3 text-center text-white'>
                                <Typography typo="body-medium-medium">
                                    {data.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default WebsiteServices