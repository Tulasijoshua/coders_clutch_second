'use client';
import Typography from '@/components/shared/typography';
import React from 'react'

function LeverageEssential() {
  return (
    <div className='w-full py-12 bg-app-primary-deep'>
        <section className='w-[85%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Leverage Essential
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Tools and Platforms with DevOps Services
                </Typography>
            </div>
        </section>
    </div>
  )
}

export default LeverageEssential