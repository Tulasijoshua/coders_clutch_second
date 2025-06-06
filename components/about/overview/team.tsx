
'use client';
import React from 'react'
import linkedIcon from "@/public/assets/icons/career_icons/linkedin.svg";
import balaImg from "@/public/assets/images/about/team/bala-murugan.png"
import thiayaImg from "@/public/assets/images/about/team/thiyagu.png"
import saravanaImg from "@/public/assets/images/about/team/saravana-kumar.png"
import vijayImg from "@/public/assets/images/about/team/vijaykumar-rk.png"
import arunaImg from "@/public/assets/images/about/team/arunachalam.png"
import shankarImg from "@/public/assets/images/about/team/shankar.png"
import rajagoImg from "@/public/assets/images/about/team/rajagopal.png"
import venkateshImg from "@/public/assets/images/about/team/venkatesh.png"
import selvaImg from "@/public/assets/images/about/team/selvakumar.png"
import nirmalImg from "@/public/assets/images/about/team/nirmal-kumar.png"
import Typography from '@/components/shared/typography'
import Image from 'next/image';

const team_members = [
    {
        id: "1",
        name: "Balamurugan",
        title: "Vice President - Product Design",
        img: balaImg,
    },
    {
        id: "2",
        name: "Thiaghu",
        title: "VP - Hr & Admin",
        img: thiayaImg,
    },
    {
        id: "3",
        name: "Saravana Kumar",
        title: "Director Finance",
        img: saravanaImg,
    },
    {
        id: "4",
        name: "Vijay Kumar",
        title: "Associate Vice President - HR",
        img: vijayImg,
    },
    {
        id: "5",
        name: "Arun Palaniappan",
        title: "Director - Business Development",
        img: arunaImg,
    },
    {
        id: "6",
        name: "Shankar",
        title: "Director - Project Delivery",
        img: shankarImg,
    },
    {
        id: "7",
        name: "Rajagopal",
        title: "Director - Product Development",
        img: rajagoImg,
    },
    {
        id: "8",
        name: "Venkateshwaran",
        title: "Head of DevOps",
        img: venkateshImg,
    },
    {
        id: "9",
        name: "Selvakumar",
        title: "Associate Director - Product Development",
        img: selvaImg,
    },
    {
        id: "10",
        name: "Nirmal Kumar",
        title: "Associate Director - Product Development",
        img: nirmalImg,
    },
]

function TeamSection() {
  return (
    <div className='w-full xl:py-16 py-10 bg-gray-50'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col md:gap-5 gap-3'>
            <Typography
                typo="header-2-semibold"
                className='text-center'
            >
                Our Leadership Team
            </Typography>

            <div className='w-full xl:pt-16 xs:pt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:gap-8 gap-4'>
                {team_members.map((data, index) => (
                    <div 
                        className=''
                        key={data.id}
                    >
                        <div className='w-full'>
                            <Image 
                                src={data.img}
                                alt={`${data.name} ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='w-full xs:pt-5 pt-3 flex flex-col space-y-1'>
                            <div className='w-full flex justify-between items-center gap-3'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.name}
                                </Typography>
                                <div className='w-6 h-fit'>
                                    <Image 
                                        src={linkedIcon}
                                        alt='LinkedIn'
                                        className='w-full h-full'
                                    />
                                </div>
                            </div>
                            <Typography
                                typo="body-medium-medium"
                                className='text-gray-500'
                            >
                                {data.title}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default TeamSection