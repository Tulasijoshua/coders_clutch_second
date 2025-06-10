'use client';
import React from 'react'
import cloudImg from "@/public/assets/images/solutions/digital-transformation/digital_cloud.png";
import aiImg from "@/public/assets/images/solutions/digital-transformation/digital_ai.png";
import enterpriseImg from "@/public/assets/images/solutions/digital-transformation/digital_enterprise.png";
import securityImg from "@/public/assets/images/solutions/digital-transformation/digital_security.png";
import solutionImg from "@/public/assets/images/solutions/digital-transformation/digital_iot-solution.png";
import experienceImg from "@/public/assets/images/solutions/digital-transformation/digital_customer_experience.png";
import productImg from "@/public/assets/images/solutions/digital-transformation/digital_product_eng.png";
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Typography from '@/components/shared/typography';
import Image from 'next/image';

const solutions = [
  {
    id: "1",
    title: "Our Solutions",
    sub_title: "Complete Digital Solutions with Customization"
  },
  {
    id: "2",
    img: cloudImg,
    title: "Cloud Infrastructure",
    sub_title: "Management",
    description: `Monitor, scale and utilize the cloud solutions to your benefits accelerating business processes, 
                  empowering management, performance and security.`,
  },
  {
    id: "3",
    img: aiImg,
    title: "AI",
    sub_title: "and Automation",
    description: `Leverage artificial intelligence and automation tools to enhance your business outcome with the most 
                  productive and performance-centric approaches.`,
  },
  {
    id: "4",
    img: enterpriseImg,
    title: "Enterprise",
    sub_title: "Mobility",
    description: `Adopt enterprise mobility solutions to build a dynamic work culture that supports remote access 
                    with next-gen capabilities and optimal functionalities.`,
  },
  {
    id: "5",
    img: securityImg,
    title: "Data Protection &",
    sub_title: "Security",
    description: `Our Industry standard security mechanism enables seamless digital security with continuous monitoring, 
                    tracking and automatic security solutions.`,
  },
  {
    id: "6",
    img: solutionImg,
    title: "IoT",
    sub_title: "Solutions",
    description: `Evolve into our IoT solutions and develop multiple tech based solutions involving ML, AI and Blockchains 
                  for a stimulated growth and performance.`,
  },
  {
    id: "7",
    img: experienceImg,
    title: "Customer Experience",
    sub_title: "(CX) Solutions",
    description: `Transform customer engagement with adaptive CX solutions, personalizing every interaction to drive 
                    loyalty, satisfaction, and business growth.`,
  },
  {
    id: "8",
    img: productImg,
    title: "Product",
    sub_title: "Re-Engineering",
    description: `Rebuild your entire project right from scratch into complete digital solutions with the aid of 
                    top-end technologies driving supreme results and success.`,
  },

]

function CompleteDigitalSolutions() {
  return (
    <div className='w-full py-16 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto grid xl:grid-cols-4 md:grid-cols-3 gap-4'>
          {solutions.map((data, index) => (
            data.description ? (
              <Card
                key={data.id}
                className='lg:py-6 py-3 bg-app-primary-deep text-white rounded-2xl'
              >
                <CardHeader 
                  className='flex flex-col'
                >
                  <Typography
                    typo="header-6-semibold"
                    className='!leading-none'
                  >{data.title}</Typography>
                  <Typography
                    typo="header-6-semibold"
                  >{data.sub_title}</Typography>
                </CardHeader>

                <CardContent>
                  <Typography
                    typo="body-medium-medium"
                    className='!leading-relaxed'
                  >
                    {data.description}
                  </Typography>
                </CardContent>
                <CardFooter
                  className='w-full pt-4 flex justify-end items-end'
                >
                  <div className='lg:w-24 w-16 h-fit'>
                    <Image 
                      src={data.img}
                      alt={`Solution ${index+1}`}
                      className='w-full h-full'
                    />
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <div key={data.id} className='inter xl:pb-10 pb-10 flex flex-col justify-center gap-2'>
                  <Typography
                      typo="header-3-light"
                  >
                      {data.title}
                  </Typography>
                  <Typography
                      typo="header-3-semibold"
                      className='!font-bold'
                  >
                      {data.sub_title}
                  </Typography>
                </div>
            )
          ))}
        </section>
    </div>
  )
}

export default CompleteDigitalSolutions