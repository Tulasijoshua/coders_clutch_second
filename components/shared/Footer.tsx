'use client';

import Typography from "./typography";
import { Button } from "../ui/button";
import codersLogo from "@/public/assets/images/coders_logo.png"
import Image from "next/image";


export default function FooterSection() {
    return (
        <div className="w-full ">
            <div className="w-full py-12  bg-[#003B38]">
                <section className="max-container 2xl:w-[85%] md:w-[95%] w-[95%] mx-auto flex xl:flex-row flex-col justify-between gap-8 ">
                    <div className="xl:w-[35%] w-[95%] mx-auto flex flex-col gap-8">
                        <div className="flex flex-col gap-3 text-white">
                            <Typography
                                typo="body-large-medium"
                                className="uppercase "
                            >About Coders Clutch</Typography>
                            <Typography 
                                className="text-gray-300 leading-normal"
                                typo="body-medium-regular"
                            >
                                CONTUS Tech is a turnkey partner for product development, design, and strategy. As a full-stack 
                                software product development company, We engineer high-performance tech products developed for rapid 
                                market launch.
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-2 text-white">
                            <Typography
                                className="text-lg font-medium"
                            >
                                Want to build next-gen digital solutions?
                            </Typography>
                            <Typography
                                className="pb-3"
                            >
                                Let&apos;s create something extraordinary together!
                            </Typography>
                            <Button
                                variant="primary"
                                className="w-fit px-6 py-3"
                            >
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                    <div className="md:pl-6 pl-4 flex-1 grid md:grid-cols-4 xs:grid-cols-2 gap-8 lg:border-l-2 border-gray-500">
                        <div className="flex flex-col gap-4">
                            <Typography
                                className="uppercase text-white"
                                typo="body-medium-medium"
                            >
                                Services
                            </Typography>
                            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
                                <li>Digital Transformation</li>
                                <li>Product Development</li>
                                <li>Full Stack Development</li>
                                <li>DevOps Engineering</li>
                                <li>SaaS Product Development</li>
                                <li>AI Agent Development</li>
                                <li>UI/UX Design</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Typography
                                className="uppercase text-white"
                                typo="body-medium-medium"
                            >
                                Services
                            </Typography>
                            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
                                <li>Offshore Development</li>
                                <li>Software Outsourcing</li>
                                <li>OTT Development</li>
                                <li>Chat App Development</li>
                                <li>Hire Remote Developers</li>
                                <li>AI Software Development</li>
                                <li>IoT & Connected Vehicles</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Typography
                                className="uppercase text-white"
                                typo="body-medium-medium"
                            >
                                Technologies
                            </Typography>
                            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
                                <li>Flutter</li>
                                <li>React Native</li>
                                <li>Full Stack Development</li>
                                <li>React.js</li>
                                <li>Angular.js</li>
                                <li>Python</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Typography
                                className="uppercase text-white"
                                typo="body-medium-medium"
                            >
                                Company
                            </Typography>
                            <ul className="flex flex-col gap-2 text-sm text-gray-300">
                                <li>Our Blog</li>
                                <li>Case Studies</li>
                                <li>Newsroom</li>
                                <li>We&apos;re Hiring</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <section className="w-full py-4 bg-app-primary-medium">
                <div className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex justify-between items-center text-white">
                    <Typography>© Copyrights 2025 by CODERS CLUTCH.</Typography>
                    <div className="h-12 w-fit">
                        <Image 
                            src={codersLogo}
                            alt="Coders Logo"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
