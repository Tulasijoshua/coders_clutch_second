'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function ReshapeTrajectory() {
  return (
    <div className='w-full py-20 bg-app-yellow'>
      <section className='w-[85%] mx-auto flex flex-col gap-6'>
        <div className='w-[80%] mx-auto'>
          <div className=' flex flex-col justify-center gap-8'>
            <Typography
              // typo="header-2-semibold"
              className='arial !text-6xl text-center !font-bold !leading-tight'
            >
              Reshape your growth trajectory with Coders Clutch.
            </Typography>
            <div className='w-[600px] mx-auto flex flex-col justify-center gap-2'>
              <Typography
                typo="body-large-regular"
                className='text-center !leading-normal'
              >
                Be it collaborating on challenging projects or onboarding an exciting talent -
                we are always on the lookout to build new, exciting things.
              </Typography>
              <Typography
                typo="body-large-regular"
                className='text-center'
              >
                Let&apos;s connect and bring your vision to life.
              </Typography>
            </div>
            <div className='w-fit mx-auto flex flex-col justify-center gap-8'>
              <Button
                variant="primary"
                className='mx-auto !py-4 !px-10 !text-lg shadow-md'
              >
                Connect With Us
              </Button>
              <Typography
                typo="header-6-medium"
              >
                Are you a candidate, looking for a rewarding career? <span className='font-bold underline'>Join With Us</span>
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReshapeTrajectory