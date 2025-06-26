'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

const why_chooses = ["Top-Notch Quality", "Highly Customizable Design", "Secure Payment Gateway Integration.", "Responsive Design", "Pre-Built Pages and Sections", "Smooth Experience", "Seo Optimized", "Clean Design", "Outstanding Customer Support", "Extensive Theme Options"]

function EcommerceWhyChoose() {
  return (
    <div className='commerce-whychoose-bg w-full py-32'>
        <section className='max-container 2xl:w-[65%] xl:w-[75%] lg:w-[85%] w-[90%] mx-auto flex flex-col gap-8'>
            <Typography
                typo="header-2-semibold"
                className='text-white text-center'
            >
                Why Choose Coders Clutch For Your E-commerce Project ?
            </Typography>
            <div className='rale xs:w-full w-fit py-8 mx-auto grid md:grid-cols-3 xs:grid-cols-2 gap-2 text-white'>
                {why_chooses.map(data => (
                    <Typography
                        key={data}
                        typo="body-medium-medium"
                    >
                        {data}
                    </Typography>
                ))}
            </div>
        </section> 
    </div>
  )
}

export default EcommerceWhyChoose