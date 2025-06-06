'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function BusinessOutcome() {
  return (
    <div className='w-full py-24 outcome-bg'>
        <section className='max-container w-[85%] mx-auto flex flex-col justify-center gap-3'>
            <Typography
                typo="header-3-semibold"
                className='text-[#F9DF91] text-center'
            >
                Every Click Should Count
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='text-white text-center'
            >
                UI/UX Design Built for Clear Business Outcomes.
            </Typography>

            <div className='w-fit mx-auto pt-6'>
                <Button
                    variant="primary"
                    className='!text-lg !font-semibold'
                >
                    Level Up Your UX
                </Button>
            </div>
        </section>
    </div>
  )
}

export default BusinessOutcome