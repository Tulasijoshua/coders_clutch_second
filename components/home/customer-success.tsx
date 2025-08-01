'use client';
import React, { useEffect, useState } from 'react'
import Typography from '../shared/typography'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';
import { customer_growth, reasons_global } from '@/constant';


function CustomerSuccess() {
    const [showAllReasons, setShowAllReasons] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
          setIsMobile(window.innerWidth < 768); // 768px is typically the breakpoint for md in Tailwind
        };
    
        // Check on mount
        checkIfMobile();
    
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
    
        // Clean up
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const displayedReasons = (!isMobile || showAllReasons) 
    ? reasons_global 
    : reasons_global.slice(0, 2);

  const toggleReasons = () => {
    setShowAllReasons(!showAllReasons);
  };
  return (
    <div className='inter w-full py-12 bg-app-primary-light'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex xl:flex-row flex-col justify-between items-center 2xl:gap-24 gap-12'>
            <Card className='flex-1 sm:p-8 xs:p-0 bg-white rounded-none'>
                <CardHeader className=' sm:flex hidden flex-col'>
                    <Typography
                        typo="header-3-light"
                        
                    >Top 6 Reasons</Typography>
                    <Typography typo="header-3-semibold" className='!leading-normal'>
                        Why Global Companies Choose CODERS CLUTCH
                    </Typography>
                </CardHeader>
                <CardHeader className='px-3 flex sm:hidden flex-col'>
                    <Typography typo="header-3-semibold" className='!leading-relaxed !text-[20px]'>
                        Why Global Companies Choose CODERS CLUTCH
                    </Typography>
                </CardHeader>
                
                <CardContent className='xs:px-6 px-3'>
                    {displayedReasons.map((data) => (
                    <div key={data.id} className='py-4 flex items-center xs:gap-6 gap-3 border-b'>
                        <div className='flex items-center gap-2'>
                            <ArrowUp color='#449358' />
                            <Typography typo="body-large-semibold">{data.rate}</Typography>
                        </div>
                        <Typography typo="body-large-regular">
                        {data.title}
                        </Typography>
                    </div>
                    ))}
                </CardContent>
                {isMobile && (
                    <CardFooter className='w-fit mx-auto'>
                    <Button
                        variant="default"
                        onClick={toggleReasons}
                        className='flex items-center gap-2'
                    >
                        {showAllReasons ? 'See Less' : 'See More'}
                        {showAllReasons ? <ArrowDown size={18} /> : <ArrowRight size={18} />}
                    </Button>
                    </CardFooter>
                )}
            </Card>
            <div className='md:flex-1 w-full space-y-3'>
                <div className='w-full flex flex-col space-y- text-white'>
                    <Typography
                        typo="header-3-medium"
                    >
                        Our Customer Success
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                    >
                        Is Our Growth
                    </Typography>
                </div>

                <div className='w-full py-3 flex md:flex-row flex-col justify-between items-stretch flex-wrap'>
                    {customer_growth.map((growth) => (
                        <Card 
                            key={growth.id}
                            className={`h-full mb-3 ${growth.id === 3 ? "md:w-[100%] " : "md:w-[49%]"} ${growth.id % 2 !== 0 ? "bg-[#FAE1B6] text-[#1F0802]" : "bg-[#1F0802] text-[#FAE1B6]"} flex flex-col gap-2 `}
                        >
                            <CardContent
                                className={`md:py-6 pb-3 pt-6  flex md:flex-col flex-row md:items-start items-center gap-2 ${growth.id === 5 ? "px-10" : "2xl:px-8 px-7"} `}
                            >
                                <div
                                    className='md:text-5xl text-3xl font-normal'
                                >{growth.rate}</div>
                                <Typography
                                    typo="body-large-regular"
                                >{growth.title}</Typography>
                            </CardContent>
                            <CardFooter className={`py-1.5 ${growth.id % 2 !== 0 ? "bg-[#E8CF95]" : "bg-[#1F0802]"}  rounded-b-md`}></CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default CustomerSuccess