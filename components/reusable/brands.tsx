'use client';
import React from 'react'
import ibmLogo from "@/public/assets/images/brands/ibm-logo-3.png"
import oracleLogo from "@/public/assets/images/brands/oracle-logo-2.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';

const brands = [ibmLogo, oracleLogo, ibmLogo, oracleLogo, ibmLogo, oracleLogo]

function Brands() {
  return (
    <div className='w-full py-12'>
        <section className='max-container sm:w-[85%] w-[70%] mx-auto'>

            <Carousel
                plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="w-full "
            >
            <CarouselContent>
                {brands.map((brand, index) => (
                <CarouselItem key={index+1} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="w-16 h-fit">
                        <Image 
                            src={brand}
                            alt={`Brand ${index+1}`}
                            className='w-full h-full'
                        />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </section>
    </div>
  )
}

export default Brands