'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { clients_project } from '@/constant';


function PortfolioMain() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = ["All", ...new Set(clients_project.map(project => project.category))];

    const filteredProjects = selectedCategory === "All" 
        ? clients_project 
        : clients_project.filter(project => project.category === selectedCategory);
  return (
    <div className='w-full py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='pb-6 flex flex-col gap-3 text-center'>
                <Typography
                    typo="header-4-semibold"
                >Latest Projects</Typography>
                <Typography>
                    We have delivered a vast range of solutions that have made a significant difference in our clients&apos;
                    businesses. Here are some of our latest projects.
                </Typography>
            </div>
            <div className='pt-8'>
                <div className='w-full overflow-auto'>
                    <div className='pb-3 flex justify-center items-center gap-4 flex-nowrap'>
                        {categories.map((category) => (
                            <Button
                                variant="outline"
                                type='button'
                                onClick={() => setSelectedCategory(category)}
                                key={category}
                                className={`px-4 py-2  text-sm rounded-full border-gray-300 hover:border-gray-600 ${selectedCategory === category ? 'bg-app-primary-medium text-white' : ''}`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className='w-full py-6 grid md:grid-cols-3 xs:grid-cols-2 gap-8'>
                    {filteredProjects.map((data, index) => (
                        <Card key={data.id} className='rounded-xl'>
                            <div className='relative group'>
                                <div className='w-full xl:h-[350px] lg:h-[300px] sm:h-[250px] xs:h-[200px] h-[300px] overflow-hidden  rounded-xl'>
                                    <Image
                                        src={data.img}
                                        alt={`Project ${index+1}`}
                                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                    />
                                </div>
                                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center p-4 transition-all duration-300 opacity-0 group-hover:opacity-100  rounded-xl'>
                                    <Typography className='text-white text-center leading-relaxed'>
                                        {data.description}
                                    </Typography>
                                </div>
                            </div>
                            <CardContent className='py-4 text-center'>
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

export default PortfolioMain