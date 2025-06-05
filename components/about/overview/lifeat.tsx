'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import team1 from "@/public/assets/images/about/our-team1.png";
import team2 from "@/public/assets/images/about/our-team2.png";
import team3 from "@/public/assets/images/about/our-team3.png";
import team4 from "@/public/assets/images/about/our-team4.png";
import team5 from "@/public/assets/images/about/our-team5.png";
import team6 from "@/public/assets/images/about/our-team6.png";
import team7 from "@/public/assets/images/about/our-team7.png";
import team8 from "@/public/assets/images/about/our-team8.png";
import team9 from "@/public/assets/images/about/our-team9.png";
import team10 from "@/public/assets/images/about/our-team10.png";
import Image from 'next/image';

const teams = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10]

function Lifeat() {
  return (
    <div className='w-full py-12'>
        <section className='w-[85%] mx-auto'>
            <div className='max-w-[550px] mx-auto flex flex-col justify-center gap-3 text-center'>
                <Typography
                    typo="header-3-semibold"
                >
                    Life at Coders Clutch
                </Typography>
                <Typography
                    typo="body-medium-regular"
                    className='!leading-relaxed'
                >
                    Workplace happiness is the cornerstone of our success — we give all it takes to
                    create and sustain a happy, vibrant atmosphere.
                </Typography>
            </div>
            <div className='w-full py-12 flex items- gap-4 flex-wrap'>
                {teams.map((team, index) => (
                    <div key={`Team ${index+1}`} className='min-w-[230px] w-fit h-fit'>
                        <Image
                            src={team}
                            alt='Teams'
                            className='w-full h-fit'
                        />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Lifeat