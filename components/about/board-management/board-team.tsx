import Typography from '@/components/shared/typography'
import Image from 'next/image'
import React from 'react'
import linkedIcon from "@/public/assets/icons/career_icons/linkedin.svg";
import balaImg from "@/public/assets/images/about/team/bala-murugan.png"
import thiayaImg from "@/public/assets/images/about/team/thiyagu.png"
import saravanaImg from "@/public/assets/images/about/team/saravana-kumar.png"
import vijayImg from "@/public/assets/images/about/team/vijaykumar-rk.png"
import arunaImg from "@/public/assets/images/about/team/arunachalam.png"
import shankarImg from "@/public/assets/images/about/team/shankar.png"

const team_members = [
    {
        id: "1",
        name: "Balamurugan",
        is_board: true,
        title: "Vice President - Product Design",
        img: balaImg,
    },
    {
        id: "2",
        name: "Thiaghu",
        is_board: true,
        title: "VP - Hr & Admin",
        img: thiayaImg,
    },
    {
        id: "3",
        name: "Saravana Kumar",
        is_board: true,
        title: "Director Finance",
        img: saravanaImg,
    },
    {
        id: "4",
        name: "Vijay Kumar",
        is_board: true,
        title: "Associate Vice President - HR",
        img: vijayImg,
    },
    {
        id: "5",
        name: "Arun Palaniappan",
        is_board: true,
        title: "Director - Business Development",
        img: arunaImg,
    },
    {
        id: "6",
        name: "Shankar",
        is_board: true,
        title: "Director - Project Delivery",
        img: shankarImg,
    },
]

function BoardTeam() {
  return (
    <div className='w-full'>
        <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:gap-8 gap-4'>
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
    </div>
  )
}

export default BoardTeam