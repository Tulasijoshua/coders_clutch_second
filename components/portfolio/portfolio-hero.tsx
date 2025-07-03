'use client';
import React from 'react'
import Typography from '../shared/typography'

function PortfolioHero() {
  return (
    <div className='portfolio-bg w-full max-h-[700px] xs:h-[90vh] h-[80vh] py-12'>
        <section className='w-[40%] h-full mx-auto flex flex-col justify-center items-center gap-4 text-white'>
            <Typography
                typo="header-1-medium"
                className='uppercase'
            >
                Our Portfolio
            </Typography>
            <Typography
                typo="body-small-semibold"
                className='uppercase text-center !leading-loose'
            >
                Comprehensive solutions for all your IT, digital marketing, and brand
                identity needs on diverse platforms.
            </Typography>
        </section>
    </div>
  )
}

export default PortfolioHero