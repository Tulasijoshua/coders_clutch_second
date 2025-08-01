"use client";

import { ArrowRight } from "lucide-react";
import Typography from "../shared/typography";
import { Button } from "../ui/button";
import ourClients from '@/public/assets/images/our-clients.svg';
import ourClientsMobile from '@/public/assets/images/our-clients-mobile.png';
import Image from "next/image";
import mxpImg from "@/public/assets/images/Coders_Clutch_Mockup/Coders_Clutch_Mockup/MXP_Crypto.svg"
import { home_services } from "@/constant";


const Hero = () => {

    return (
        <div className="w-full pt-16 pb-10 lg:space-y-20 space-y-10 bg-gradient-to-t from-[#D1FFFB] to-[#fff]">
            <section className="w-full">
                <div className="max-container 2xl:w-[80%] w-[90%] mx-auto flex flex-col justify-center items-center gap-6">
                    <div className="pb-4 flex flex-col justify-center items-center md:gap-3 gap-1">
                        <Typography
                            className="inter xl:text-5xl lg:text-4xl sm:text-3xl font-extrabold xs:text-3xl text-2xl text-center text-app-primary-light"
                        >Build Hi-Tech Products & Enterprise Apps</Typography>
                        <Typography
                            className="inter xl:text-4xl lg:text-4xl sm:text-3xl xs:text-3xl text-2xl font-extrabold text-center text-black"
                        >With Instant Agentic AI & AI Agents</Typography>
                    </div>
                    <div className="w-full mx-auto h-[630px]">
                        <Image 
                            src={mxpImg}
                            alt="Mxp"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <Typography
                        typo="body-large-medium"
                        className="max-w-2xl mx-auto text-center dark:text-black"
                    >
                        Join our global enterprise customers to build your AI-powered B2B, B2C and
                        D2C products and platforms.
                    </Typography>

                    <div className="xl:w-[80%] mx-auto py-5 flex justify-center items-center lg:gap-6 gap-4  flex-wrap">
                        {home_services.map((service, index) => {
                            return (
                                <div key={service.id} className="md:w-fit w-[45%] lg:px-6 px-3 py-3.5 flex lg:justify-center  items-center sm:gap-2 gap-3 bg-app-primary-light rounded-md">
                                    <Image 
                                        src={service.icon}
                                        alt={`Service ${index+1}`}
                                        className="lg:w-7 mdw-5 w-6 h-fit"
                                    />
                                    <Typography 
                                        className="text-white"
                                        typo="body-medium-semibold"
                                    >{service.title}</Typography>
                                </div>
                            )
                        })}
                    </div>
                    <Button
                        variant="primary"
                        size="lg"
                    >
                        Let&apos;s Talk
                        <ArrowRight />
                    </Button>
                </div>
            </section>
            <section 
                className="w-[80%] mx-auto text-center space-y-10"
            >
                <Typography
                    className="text-center"
                    typo="body-large-semibold"
                >
                    Trusted by Funded Startups to <span className="text-[#108B47]">Fortune 500+ Brands</span> in 12+ Countries
                </Typography>
                <div
                    className="lg:block hidden lg:h-24 w-fit mx-auto"
                >
                    <Image
                        src={ourClients}
                        alt="Our Clients image"
                        className="w-full h-full"
                    />
                </div>
                <div
                    className="lg:hidden block w-full h-fit mx-auto"
                >
                    <Image
                        src={ourClientsMobile}
                        alt="Our Clients image"
                        className="w-full h-full"
                    />
                </div>
            </section>
        </div>
    );
}


export default Hero