"use client";

import { ArrowRight } from "lucide-react";
import Typography from "../shared/typography";
import { Button } from "../ui/button";
import Image from "next/image";
import mxpImg from "@/public/assets/images/Coders_Clutch_Mockup/Coders_Clutch_Mockup/MXP_Crypto.svg"
import { clients_logos } from "@/constant";
import { motion } from "framer-motion";
import mxpmockupImg from "@/public/assets/images/Coders_Clutch_Mockup/MXP_Crypto.svg"
import opixmockupImg from "@/public/assets/images/Coders_Clutch_Mockup/Opix_Transactions_Mockup.png"
import giismockupImg from "@/public/assets/images/Coders_Clutch_Mockup/GIISS_Mockup.svg"
import genaimockupImg from "@/public/assets/images/Coders_Clutch_Mockup/Gen_AI_Super_Admin_Mockup.svg"

const hero_caro = [mxpmockupImg, opixmockupImg, giismockupImg, genaimockupImg]

const Hero = () => {
      const tripleLogos = [...clients_logos, ...clients_logos,];

      const many_caro = [...hero_caro, ...hero_caro, ...hero_caro, ...hero_caro, ...hero_caro]

    return (
        <div className="w-full pt-8 pb- lg:space-y-20 space-y-10 bg-gradient-to-t from-[#D1FFFB] to-[#fff]">
            <section className="w-full flex flex-col gap-10">
                <div className="max-container 2xl:w-[80%] w-[90%] mx-auto flex flex-col justify- items-center gap-6">
                    <div className="pb-4 flex flex-col justify-center items-center md:gap-3 gap-1">
                        <Typography
                            className="inter xl:text-5xl lg:text-4xl sm:text-3xl font-extrabold xs:text-3xl text-2xl text-center text-app-primary-light"
                        >Build Hi-Tech Products & Enterprise Apps</Typography>
                        <Typography
                            className="inter xl:text-4xl lg:text-4xl sm:text-3xl xs:text-3xl text-2xl font-extrabold text-center text-black"
                        >With Instant Agentic AI & AI Agents</Typography>
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full hover:bg-app-primary-deep hover:text-white"
                    >
                        Let&apos;s Talk
                        <ArrowRight />
                    </Button>
                    {/* <div className="w-[75%] mx-auto h-fit ">
                        <Image 
                            src={mxpImg}
                            alt="Mxp"
                            className="w-full h-full object-cover object-top rounded-2xl "
                        />
                    </div> */}
                </div>
                <div className="flex-1 overflow-hidden">
                    <motion.div
                        className="flex space-x-16 w-max"
                        animate={{ x: ["0", "-33.3333%"] }}
                        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                        >
                        {many_caro.map((logo, index) => (
                            <div key={index+1} className="lg:w-fit h-[330px] flex items-center md:justify-center ">
                            <Image 
                                src={logo}
                                alt={`Brand logo ${index}`}
                                className="w-full h-full "
                            />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
            {/* <div className="w-full py-10 flex justify-between items-center gap-4">
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
            </div> */}
            <div className="flex flex-col gap-4">
                <Typography
                    typo="header-5-semibold"
                    className="w-fit px-6 "
                >
                    Globally trusted by
                </Typography>
                <div className="w-full px-16 mx-auto py-6 flex justify-between items-center gap-8 ">
                    {tripleLogos.map((logo, index) => (
                        <div key={`Logo ${index}`} className="w-fit h-16">
                            <Image 
                                src={logo}
                                alt={`Logo ${index+1}`}
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Hero