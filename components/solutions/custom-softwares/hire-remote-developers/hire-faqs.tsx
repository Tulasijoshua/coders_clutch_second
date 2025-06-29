'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-faq';
import React from 'react'

const product_faqs = [
    {
        id: "1",
        question: `How do I recruit remote developers through CODERS Clutch?`,
        answer: `CONTUS Tech makes it easy to hire remote developers. Start by telling us your project requirements. 
                We will then match you with experienced professionals from our extensive talent pool. You can interview 
                candidates, select the best fit, and start working with your new team member soon.`,
    },
    {
        id: "2",
        question: `Can your remote consultants work according to my preferred schedule?`,
        answer: `Absolutely! Our remote software development is known for its flexibility and can adapt to your preferred 
                time zone. We understand the importance of seamless collaboration in today’s global workplace, so we make 
                sure our experts are available when you need them most.`,
    },
    {
        id: "3",
        question: `How much does it cost to hire a remote developer from CODERS Clutch?`,
        answer: `The cost to hire a remote developer varies based on several factors, including skill level, experience, 
                and project complexity. We offer competitive rates tailored to your specific needs and project scope. 
                To get an accurate estimate, reach out to us with your detailed requirements, and we'll provide a 
                customized quote.`,
    },
    {
        id: "4",
        question: `What are the benefits of hiring remote developers?`,
        answer: `Hiring remote developers offers numerous advantages. You gain access to a global talent pool, 
                allowing you to find the best skills regardless of location. Remote developers bring diverse perspectives 
                and skills to your projects, potentially increasing productivity and innovation.`,
    },
    {
        id: "5",
        question: `What are the hiring engagement options available at CODERS Clutch?`,
        answer: `At CODERS Clutch, we offer a range of engagement models to suit different project needs. These include 
                full-time dedicated developers for long-term projects, part-time remote experts for specific tasks or 
                smaller workloads, project-based hiring for defined scopes, and team augmentation to boost your 
                existing workforce.`,
    },
    {
        id: "6",
        question: `How long will it take to hire dedicated remote developers from CODERS Clutch?`,
        answer: `Our efficient process allows you to hire dedicated remote developers quickly. In most cases, we can 
                match you with suitable candidates within one to two weeks. However, the exact timeline may vary depending 
                on your specific requirements and the complexity of the skills needed.`,
    },
]


function HireFaqs() {
  return (
    <div className='w-full py-12 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-4 pb-3 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Queries
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    You Might Want To Ask
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

export default HireFaqs