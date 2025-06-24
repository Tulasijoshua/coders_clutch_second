'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-faq';
import { iot_faqs } from '@/constant';
import React from 'react'

function IotFaqs() {
  return (
    <div className='w-full py-12 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    FAQ
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    About Connected Vehicle Solution
                </Typography>
            </div>
            <div className='w-full py-6'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {iot_faqs.map((data, index) => (
                        <AccordionItem
                            key={data.id} 
                            value={`item-${index+1}`}
                        >
                            <AccordionTrigger
                                className='text-lg font-semibold'
                            >{data.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p className='text-base'>
                                    {data.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    </div>
  )
}

export default IotFaqs