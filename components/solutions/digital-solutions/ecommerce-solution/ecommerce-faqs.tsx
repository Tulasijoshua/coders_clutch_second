'use client';
import Typography from '@/components/shared/typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-faq';
import React from 'react';

const product_faqs = [
    {
        id: "1",
        question: `How much does a Website Development cost?`,
        answer: `At Coders Clutch, one-page website cost starts at $600 . This price highly depends on your specifications.`,
    },
    {
        id: "2",
        question: `How Long will it take to develop a website`,
        answer: `The standard timeframe is a minimum of 7-14 working days (2 weeks) to build your professional website. 
                    However, this can be longer depending on your requirements as we do not compromise on the quality of our 
                    work while meeting your needs.`,
    },
    {
        id: "3",
        question: `What are the types of websites and which one is best`,
        answer: `We have the “no-code” website builder which you can build yourself using any available CMS platform or a 
                    website built from scratch with code, which can be accomplished by contacting a professional developer 
                    to get your website up and running.`,
    },
    {
        id: "4",
        question: `Do you provide support & maintenance after the product delivery?`,
        answer: `Absolutely! Our commitment doesn't end with product delivery. We offer comprehensive support and 
                    maintenance services to keep your software running smoothly. We can tailor a support package to fit 
                    your specific requirements, ensuring your product stays up-to-date and continues to meet your business 
                    needs long after the initial development phase.`,
    },
    {
        id: "5",
        question: `How long does it take to complete the project?`,
        answer: `Project timelines can vary greatly depending on the complexity and scope of work. A simple app might take 
                    a few weeks, while a large-scale enterprise system could require several months. During our initial 
                    discussions, we'll work with you to understand your requirements and provide a realistic timeline estimate.`,
    },
    {
        id: "6",
        question: `How do you ensure a smooth project transition from my existing vendor to CODERS Clutch?`,
        answer: `To ensure a smooth transition, we follow a carefully planned process. This includes a thorough documentation 
                    review, knowledge transfer sessions with your current vendor, and a phased handover approach. Our team 
                    will work closely with you to minimize disruptions and maintain project continuity throughout the switch 
                    to our software development outsourcing services.`,
    },
]


function EcommerceFaqs() {
  return (
    <div className='w-full py-12 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Frequently Asked Questions
                </Typography>
            </div>
            <div className='w-full py-6'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {product_faqs.map((data, index) => (
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

export default EcommerceFaqs