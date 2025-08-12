"use client";

import { ArrowRight } from "lucide-react";
import Typography from "../shared/typography";
import { Button } from "../ui/button";
import Image from "next/image";
import mxpImg from "@/public/assets/images/Coders_Clutch_Mockup/Coders_Clutch_Mockup/MXP_Crypto.svg"
import { clients_logos } from "@/constant";
import { motion } from "framer-motion";



const Hero = () => {
      const tripleLogos = [...clients_logos, ...clients_logos, ...clients_logos];

    return (
        <div className="w-full pt-8 pb-20 lg:space-y-20 space-y-10 bg-gradient-to-t from-[#D1FFFB] to-[#fff]">
            <section className="w-full">
                <div className="max-container 2xl:w-[80%] w-[90%] mx-auto flex flex-col justify- items-center gap-6">
                    <div className=" flex flex-col justify-center items-center md:gap-3 gap-1">
                        <Typography
                            className="inter xl:text-5xl lg:text-4xl sm:text-3xl font-extrabold xs:text-3xl text-2xl text-center text-app-primary-light"
                        >Build Hi-Tech Products & Enterprise Apps</Typography>
                        <Typography
                            className="inter xl:text-4xl lg:text-4xl sm:text-3xl xs:text-3xl text-2xl font-extrabold text-center text-black"
                        >With Instant Agentic AI & AI Agents</Typography>
                    </div>
                    <div className="w-[70%] mx-auto h-fit ">
                        <Image 
                            src={mxpImg}
                            alt="Mxp"
                            className="w-full h-full object-cover object-top rounded-2xl "
                        />
                        {/* <div className="h-2 w-5 absolute -top-1 right-0 bg-yellow-400"></div> */}
                    </div>
                    <div className="w-full py-10 flex justify-between items-center gap-4">
                        <Typography
                            typo="header-6-semibold"
                            className="w-fit px-6"
                        >
                            Globally trusted by
                        </Typography>
                        <div className="flex-1 overflow-hidden">
                            <motion.div
                                className="flex space-x-16 w-max"
                                animate={{ x: ["0", "-33.3333%"] }}
                                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                >
                                {tripleLogos.map((logo, index) => (
                                    <div key={index+1} className="lg:w-fit h-8 flex items-center md:justify-center ">
                                    <Image 
                                        src={logo}
                                        alt={`Brand logo ${index}`}
                                        className="w-full h-full "
                                    />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* <div className="xl:w-[80%] mx-auto py-5 flex justify-center items-center lg:gap-6 gap-4  flex-wrap">
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
                    </div> */}
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full hover:bg-app-primary-deep hover:text-white"
                    >
                        Let&apos;s Talk
                        <ArrowRight />
                    </Button>
                </div>
            </section>
            
        </div>
    );
}


export default Hero