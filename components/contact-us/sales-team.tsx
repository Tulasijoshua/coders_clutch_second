'use client';
import React, { useState } from 'react'
import Typography from '../shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

type DescriptionItem = {
    id: string;
    content: string;
    title?: string;
    tele?: string[];
    email?: string;
  };
  
  type SolutionItem = {
    id: string;
    title: string;
    description: DescriptionItem[];
  };

const solutions: SolutionItem[] = [
    {
        id: "1",
        title: "Rest of Africa",
        description: [
            {
                id: "1",
                content: "Monday to Friday EET (09:00 AM to 6:00 PM)",
                tele: ["+27 214268086"],
                email: "sales@zohocorp.com"
            }
        ],
    },
    {
        id: "2",
        title: "North America",
        description: [
            {
                id: "1",
                title: "Canada",
                content: "Monday to Friday EST (09:00 AM to 6:00 PM)",
                tele: ["+1 (833) 957-3953"],
            },
            {
                id: "2",
                title: "Mexico",
                content: "Monday to Friday CDT (07:00 AM - 6:00 PM)",
                tele: ["+52 5550912446", "+52 8002720326"],
            },
            {
                id: "3",
                title: "USA",
                content: "Monday to Friday PDT (05:00 AM to 6:00 PM)",
                tele: ["+1 877 834 4428", "+1 844 584 2497", "+1 833 968 1705", "+1 (888) 900 9646 (Support)"],
            }
        ],    
    },
    {
        id: "3",
        title: "Asia-Pacific",
        description: [
            {
                id: "1",
                content: "Contact information coming soon.",
            }
        ],
    },
    {
        id: "4",
        title: "Africa",
        description: [
            {
                id: "1",
                content: "Contact information coming soon.",
            }
        ],        
    },
    {
        id: "5",
        title: "Europe",
        description: [
            {
                id: "1",
                content: "Contact information coming soon.",
            }
        ],      
    },
]
  

function SalesTeam() {
    const [activeItem, setActiveItem] = useState("item-1");
    
  return (
    <div className='w-full py-16 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between gap-8'>
            <div className='flex-1 '>
            <div className='w-full flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="body-medium-medium"
                            className='!text-[15px] uppercase text-app-green-text'
                        >
                            I&apos;m new here
                        </Typography>
                        <Typography
                            typo="header-2-semibold"
                            className='md:!leading-[50px] !leading-[40px]'
                        >
                            Interested in a product? Talk to our sales team
                        </Typography>
                    </div>
                    <Typography
                        typo="body-large-medium"
                    >
                        From questions about pricing to one-on-one personalized demos, we&apos;d love to connect and help get you started.
                    </Typography>
                </div>
            </div>
            <div className='flex-1'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full p-4 bg-white rounded-lg shadow-lg"
                    defaultValue="item-1"
                    onValueChange={(value) => setActiveItem(value)}
                >
                    {
                        solutions.map((data, index) => (
                            <AccordionItem
                                key={data.id}
                                value={`item-${index+1}`}
                                className={`w-full  flex flex-col gap-2 xs:px-6 px-3 ${
                                    activeItem === `item-${index+1}` ? 'bg-[#fff]' : 'w-full'
                                }`}
                            >
                                <AccordionTrigger
                                    className='text-sm font-semibold'
                                >{data.title}</AccordionTrigger>
                                <AccordionContent className="w-full flex flex-col gap-4 text-balance">
                                    {data.description.map(content => (
                                        <div key={content.id} className='flex flex-col gap-1'>
                                            {content?.title && (
                                                <Typography
                                                    typo="body-small-semibold"
                                                >{content?.title}</Typography>

                                            )}
                                            <Typography
                                                typo="body-small-regular"
                                                className='font-extralight'
                                            >{content.content}</Typography>
                                            {content.tele && (
                                                <div className='flex flex-col gap-1'>
                                                    {content?.tele?.map(num => (
                                                        <Typography 
                                                            key={num}
                                                            className='!text-[15px] !font-extralight text-blue-500'
                                                        >
                                                            {num}
                                                        </Typography>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    
                                </AccordionContent>
                            </AccordionItem>

                        ))
                    }
                </Accordion>
            </div>
        </section>
    </div>
  )
}

export default SalesTeam