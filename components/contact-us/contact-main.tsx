'use client';
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Typography from '../shared/typography';
import Link from 'next/link';
import { Input } from '../ui/contact-input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/contact-select';
import { Textarea } from '../ui/contact-textarea';

const inquiries = ["General Information", "What we do", "Business Inquiry", "Partnership", "Media Inquiry", "Program Information", "Other"]

function ContactMain() {
    const form = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            type_of_aid: "",
            contact_info: "",
            description: "",
        },
    });
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex lg:flex-row flex-col justify-between items-stretch gap-8'>
            <div className='flex-1'>
                <div className='w-full lg:h-full sm:h-[400px] h-[350px]'>
                    <iframe
                        title="Banjul Office Location"
                        src="https://maps.google.com/maps?width=100%&height=500&hl=en&q=Your%20Address+(Your%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "0.5rem" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className='flex-1'>
                <div>
                <Card className='flex-1 border-gray-200 bg-white'>
                <CardHeader className='xl:pb-10 lg:pb-2 sm:pb-10 pb-6 flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <Typography
                            typo="header-4-semibold"
                            className='!font-bold'
                        >
                            Get in-<span className='text-app-green-text'>Touch</span>
                        </Typography>
                        <Typography
                            className='text-gray-500'
                        >
                            Fill out the form below and we&apos;ll get back to you within 24 hours.
                        </Typography>
                    </div>
                    <div className='border-b border-gray-300'></div>
                </CardHeader>
                <CardContent className='pb-'>
                    <Form {...form}>
                        <form className='flex flex-col lg:gap-6 sm:gap-10 gap-8'>
                            <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-5 gap-8'>
                                <FormField
                                    control={form?.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                            <FormLabel>Full name</FormLabel>
                                            <FormControl className="py-">
                                                <Input className="!py-4 text-gray-500 rounded-[0.5rem] border-gray-300" placeholder="Enter your full name" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form?.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem
                                            className='sm:flex-1 w-full flex flex-col gap-0'
                                        >
                                        <FormLabel>Email Address </FormLabel>
                                        <FormControl className=" ">
                                            <Input className="!py-4 text-gray-500 border-gray-300 rounded-[0.5rem]" placeholder="Enter your email address" {...field} />
                                        </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-5 gap-8'>
                                <FormField
                                    control={form?.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <FormItem className='sm:flex-1 w-full flex flex-col gap-0'>
                                            <FormLabel>Company</FormLabel>
                                            <FormControl className="py-">
                                                <Input className="!py-4 text-gray-500 rounded-[0.5rem] border-gray-300" placeholder="Enter your full name" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form?.control}
                                    name="type_of_aid"
                                    render={({ field }) => (
                                        <FormItem
                                            className='sm:flex-1 w-full flex flex-col gap-0'
                                        >
                                            <FormLabel>Subject</FormLabel>
                                            <Select
                                                value={field.value}
                                                onValueChange={(value) => field.onChange(value)}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="w-full rounded-[0.5rem] border-gray-300 !text-gray-600">
                                                        <SelectValue placeholder="Select a subject" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="!py-2 text-gray-800 border-gray-500 rounded-[0.5rem] bg-white">
                                                    <SelectGroup
                                                        className=""
                                                    >
                                                        <SelectLabel>Subject</SelectLabel>
                                                        {inquiries.map((inquiry) => (
                                                            <SelectItem
                                                                key={inquiry} 
                                                                value={inquiry}
                                                            >
                                                                {inquiry}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form?.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className='flex flex-col gap-0'>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl className="py-">
                                            <div className='border-b rounded-xl border-gray-300'>
                                                <Textarea
                                                    className="!py-4 text-gray-500 rounded-[0.5rem] border-none" 
                                                    placeholder="Type your message here" 
                                                    {...field} 
                                                    rows={5}
                                                />
                                            </div>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button
                                variant="primary"
                                className='w-full md:py-6 py-4 text-lg !rounded-[0.6rem]'
                            >
                                Submit
                            </Button>
                        </form>
                    </Form>
                </CardContent>
                
            </Card>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactMain