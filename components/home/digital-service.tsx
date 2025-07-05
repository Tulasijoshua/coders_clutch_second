'use client';
import React, { useState } from 'react';
import Typography from '../shared/typography';
import { digital_services } from '@/constant';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowDown, ArrowLeft, ArrowRight, LaptopMinimal } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

function DigitalService() {
  const [activeCards, setActiveCards] = useState<Record<string, boolean>>({});
  const [isMore, setIsMore] = useState(false);

  const toggleCard = (id: string) => {
    setActiveCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className='service-bg w-full py-10'>
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto mb-6'>
        <div className='pops w-full h-full py-12 flex flex-col justify-center gap-2'>
          <Typography typo='header-3-light'>
            Digital Transformation Services for
          </Typography>
          <Typography typo='header-3-semibold'>
            Every Small to Large Enterprises in the World
          </Typography>
        </div>

        <div className='w-full pb-6 flex flex-col gap-8 overflow-auto'>
          <div className='w-fit flex items-center gap-8'>
            {digital_services.slice(0, 3).map((data, index) => {
              const isActive = activeCards[data.id];

              return (
                <Card
                  key={data.id}
                  onClick={() => toggleCard(data.id)}
                  className={clsx(
                    'transition-all duration-500 ease-in-out h-[480px] flex justify-between items-stretch gap-8 bg-white border-none rounded-xl overflow-hidden cursor-pointer',
                    isActive ? 'w-[900px]' : 'w-[400px]'
                  )}
                >
                  <div className='flex-1 pl-2 flex flex-col justify-between gap-8'>
                    <CardHeader className='flex flex-col gap-2'>
                      <div className='w-fit p-1.5 rounded-md bg-gray-200'>
                        <LaptopMinimal size={25} />
                      </div>
                      <Typography
                        typo='header-5-semibold'
                        className='text-gray-600'
                      >
                        {data.title}
                      </Typography>
                      <Typography
                        typo='body-medium-regular'
                        className='text-gray-700'
                      >
                        {data.sub_title}
                      </Typography>
                    </CardHeader>
                    <CardContent className='pb-10 flex flex-col gap-5'>
                      <Typography
                        typo='body-medium-regular'
                        className='text-gray-700'
                      >
                        {data.description}
                      </Typography>
                      <Button
                        variant='primary'
                        className='!py-2 !px-3 !text-sm rounded-[1.1rem]'
                      >
                        View
                      </Button>
                    </CardContent>
                  </div>

                  <div
                    className={clsx(
                      'transition-all duration-500 ease-in-out h-full p-2 flex-shrink-0',
                      isActive ? 'w-[60%] opacity-100' : 'w-0 opacity-0 p-0'
                    )}
                  >
                    <Image
                      src={data.img}
                      alt={`Digital ${index + 1}`}
                      className='w-full h-full object-cover rounded-xl'
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        
        {isMore && (
          <div className='w-full py-8 flex flex-col gap-8 overflow-auto'>
            <div className='w-fit flex items-center gap-8'>
              {digital_services.slice(3, 6).map((data, index) => {
                const isActive = activeCards[data.id];

                return (
                  <Card
                    key={data.id}
                    onClick={() => toggleCard(data.id)}
                    className={clsx(
                      'transition-all duration-500 ease-in-out h-[480px] flex justify-between items-stretch gap-8 bg-white border-none rounded-xl overflow-hidden cursor-pointer',
                      isActive ? 'w-[900px]' : 'w-[400px]'
                    )}
                  >
                    <div className='flex-1 pl-2 flex flex-col justify-between gap-8'>
                      <CardHeader className='flex flex-col gap-2'>
                        <div className='w-fit p-1.5 rounded-md bg-gray-200'>
                          <LaptopMinimal size={25} />
                        </div>
                        <Typography
                          typo='header-5-semibold'
                          className='text-gray-600'
                        >
                          {data.title}
                        </Typography>
                        <Typography
                          typo='body-medium-regular'
                          className='text-gray-700'
                        >
                          {data.sub_title}
                        </Typography>
                      </CardHeader>
                      <CardContent className='pb-10 flex flex-col gap-5'>
                        <Typography
                          typo='body-medium-regular'
                          className='text-gray-700'
                        >
                          {data.description}
                        </Typography>
                        <Button
                          variant='primary'
                          className='!py-2 !px-3 !text-sm rounded-[1.1rem]'
                        >
                          View
                        </Button>
                      </CardContent>
                    </div>

                    <div
                      className={clsx(
                        'transition-all duration-500 ease-in-out h-full p-2 flex-shrink-0',
                        isActive ? 'w-[60%] opacity-100' : 'w-0 opacity-0 p-0'
                      )}
                    >
                      <Image
                        src={data.img}
                        alt={`Digital ${index + 1}`}
                        className='w-full h-full object-cover rounded-xl'
                      />
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
        
        <Button
          variant="default"
          onClick={() => setIsMore(!isMore)}
          className='w-fit mx-auto flex items-center gap-2 bg-transparent hover:bg-transparent'
        >
          {!isMore ? 'See All' : 'See Less'}
          {!isMore ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
        </Button>
      </section>
    </div>
  );
}

export default DigitalService;