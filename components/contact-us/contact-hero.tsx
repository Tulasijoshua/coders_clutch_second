'use client';
import { Hand, Scroll, Settings, User } from 'lucide-react'
import React from 'react'
import Typography from '../shared/typography'
import { Card, CardContent, CardHeader } from '../ui/card';

const details = [
    {
        id: "1",
        icon: Settings,
        title: "I'm new here",
        content: `Looking for a demo, or have questions about our products and pricing?`,
        contact: "sales@Ecosoftcorp.com",
    },
    {
        id: "2",
        icon: User,
        content: `Need help with adding licenses, changing plans, or additional services?`,
        contact: "upgrade@Ecosoftcorp.com",
    },
    {
        id: "3",
        icon: Scroll,
        title: "Existing Customer",
        content: `Want to renew your subscription or need details about your current plan?`,
        contact: "renewal@Ecosoftcorp.com",
    },
    {
        id: "4",
        icon: Hand,
        content: `Need to cancel or downgrade your subscription? We're sad to see you go, but ready to help.`,
        contact: "cancellation@Ecosoftcorp.com",
    },
]

function ContactHero() {
  return (
    <div className='w-full '>
        <div className='w-full bg-app-primary-deep'>
            <div className='md:w-[70%] w-[90%] max-h-[500px] h-[55vh] mx-auto flex flex-col justify-center items-center gap-3 text-white text-center'>
                <Typography
                    typo="header-3-semibold"
                >
                    Looking for something in particular?
                </Typography>
                <Typography
                    typo="body-large-medium"
                >
                    We&apos;re here to help.
                </Typography>
                <div className='w-12 h-[2px] bg-app-yellow'></div>
            </div>
        </div>
        <div className='max-w-[80rem] 2xl:w-[75%] xl:w-[85%] lg:w-[70%] md:w-[80%] w-[90%] mx-auto p-8 xl:-mt-32 -mt-24 grid xl:grid-cols-4 sm:grid-cols-2 gap-6 bg-white rounded-xl border-none shadow-md'>
            {details.map((data) => (
                <Card
                    key={data.id}
                    className='relative flex flex-col items-center gap-4'
                >
                    {data.title && (
                        <div className={`absolute top-1 left-1 px-2 py-[2px] text-[13px] rounded-md text-white ${data.id === "1" ? "bg-app-green-text" : "bg-red-600"} text-left border`}>
                            {data.title}
                        </div>
                    )}
                    <CardHeader className='pt-16 pb-0'>
                        <data.icon 
                            size={23}
                        />
                    </CardHeader>
                    <CardContent className='flex flex-col gap-2'>
                        <Typography
                            typo="body-small-regular"
                            className='text-center !font-extralight !leading-normal'
                        >{data.content}</Typography>
                        <Typography
                            typo="body-medium-semibold"
                            className='text-blue-600 break-all text-center'
                        >
                            {data.contact}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default ContactHero