import Typography from '@/components/shared/typography'
import Image, { StaticImageData } from 'next/image'
import React, { useRef, useState } from 'react'
import linkedIcon from "@/public/assets/icons/career_icons/linkedin.svg";
import isafaImg from "@/public/assets/images/about/career_5.jpg"
import kabuteyImg from "@/public/assets/images/about/team/kabutey_img.jpg"
import richardImg from "@/public/assets/images/about/team/richard_img.jpeg"
import jallowImg from "@/public/assets/images/about/team/jallow_img.jpeg"
import jengImg from "@/public/assets/images/about/team/jeng_img.jpg"
import sillaImg from "@/public/assets/images/about/team/silla_img.jpg"
import dushieImg from "@/public/assets/images/about/team/dushie_img.png"
import amaviImg from "@/public/assets/images/about/team/amavi_img.jpeg"

interface TeamMember {
    id: string;
    name: string;
    is_board: boolean;
    title: string;
    img: StaticImageData;
  }

const team_members: TeamMember[] = [
    {
        id: "1",
        name: "Isata P.B Dainkeh",
        is_board: true,
        title: "Cheif Executive Officer",
        img: isafaImg,
    },
    {
        id: "2",
        name: "Eric Kabutey",
        is_board: true,
        title: "Founder - Chief Technology Officer",
        img: kabuteyImg,
    },
    {
        id: "3",
        name: "Richard K. Asante",
        is_board: true,
        title: "Co-Founder - Director of Operations",
        img: richardImg,
    },
    {
        id: "4",
        name: "Mahmoud Jallow",
        is_board: true,
        title: "Co-Founder - Chief Financial Advisor",
        img: jallowImg,
    },
    {
        id: "5",
        name: "Abdoulie Jeng",
        is_board: true,
        title: "Director - Business Development & Marketing",
        img: jengImg,
    },
    {
        id: "6",
        name: "MUHAMMED SILLAH",
        is_board: true,
        title: "Director - Public Relations & Global Product Delivery",
        img: sillaImg,
    },
    {
        id: "7",
        name: "Emmanuel Dushie",
        is_board: true,
        title: "Executive Director",
        img: dushieImg,
    },
    {
        id: "8",
        name: "Francis Ayayivi Amavi",
        is_board: true,
        title: "Executive Director",
        img: amaviImg,
    },
]

function BoardTeam() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = cardRefs.current[id];
    if (card) {
      const rect = card.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div className='w-full'>
        {/* <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 xs:gap-8 gap-4'>
            {team_members.map((data, index) => (
                <div 
                    className='relative group'
                    key={data.id}
                >
                    <div className='w-full overflow-hidden'>
                        <Image
                            src={data.img}
                            alt={`${data.name} ${index+1}`}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
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
        </div> */}
        <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xs:gap-20 gap-4'>
            {team_members.map((data, index) => (
                <div 
                    ref={(el) => {
                        if (el) {
                        cardRefs.current[data.id] = el;
                        } else {
                        delete cardRefs.current[data.id];
                        }
                    }}
                    onMouseMove={(e) => handleMouseMove(e, data.id)}
                    onMouseLeave={handleMouseLeave}
                    className='relative group bg-white rounded-2xl shadow-md cursor-pointer'
                    key={data.id}
                >
                    <div className='w-full h-[370px] rounded-2xl overflow-hidden'>
                        <Image 
                            src={data.img}
                            alt={`${data.name} ${index+1}`}
                            className='w-full h-full object-cover object-top rounded-2xl hover:rounded-2xl group-hover:scale-105 transition-transform duration-300'
                        />
                        {hoveredCard === data.id && (
                            <div 
                                className='absolute rounded-full pointer-events-none'
                                style={{
                                    left: `${cursorPosition.x}px`,
                                    top: `${cursorPosition.y}px`,
                                    width: '60px',
                                    height: '60px',
                                    background: 'radial-gradient(circle, rgba(255,135,51,0.4) 100%, rgba(255,255,255,0) 70%)',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />
                        )}
                    </div>
                    <div className='w-full px-6 xs:py-6 py-3 flex flex-col space-y-1'>
                        <div className='w-full flex justify-between items-center gap-3'>
                            <Typography
                                typo="header-6-semibold"
                                className='text-gray-600 !font-bold'
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