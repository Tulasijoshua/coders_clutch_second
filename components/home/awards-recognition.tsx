'use client';
import React from 'react'
import Typography from '../shared/typography'

function AwardsRecognition() {
  return (
    <div className='award-bg w-full h-full xl:py-20 py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto '>
            <div className=' hidden sm:pb-0 pb-4 xs:flex flex-col sm:gap-3 gap-1'>
                
                <Typography
                    typo="header-3-semibold"
                >
                    Gambian-Ghanaian <span className='font-light'>Start-up</span> 
                </Typography>
                <Typography
                    typo="header-3-light"
                >
                    Delivering Global Solutions.    
                </Typography>
            </div>
            <div className='xs:hidden sm:pb-0 pb-4 flex flex-col sm:gap-3 gap-1'>
                
                <Typography
                    typo="header-4-semibold"
                    className='!text-2xl'
                >
                    Gambian-Ghanaian <span className='font-light'>Start-up</span> 
                </Typography>
                <Typography
                    typo="header-3-light"
                    className='!text-2xl'

                >
                    Delivering Global Solutions.    
                </Typography>
            </div>

            <div className='relative xs:w-[40%] w-[50%] mx-auto h-fit md:mb-8'>
                {/* <Image 
                    src={globeImg}
                    alt='Awards Image'
                    className='absolute inset-0 w-full h-full'
                /> */}
                <video
                    width="100%"
                    height="auto"
                    autoPlay={true}
                    muted={true}
                    poster="/assets/images/security-cloud/circle.webm"
                >
                    <source src="/assets/images/global_map_cropped.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* <div className='xl:hidden w-full overflow-hidden relative'>
                <div className='flex animate-slide whitespace-nowrap'>
                    {[...Array(1)].map((_, i) => (
                        <div key={i} className='inline-block px-2'>
                            <Image 
                                src={awardsImg}
                                alt={`Awards Image ${i+1}`}
                                className='w-auto h-full max-h-[200px]'
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div> */}
        </section>
    </div>
  )
}

export default AwardsRecognition