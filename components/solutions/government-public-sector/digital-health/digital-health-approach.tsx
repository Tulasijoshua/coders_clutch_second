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
    title: "Our Approach to",
    sub_title: "Digital Health Transformation"
  },
  {
    id: "2",
    img: cloudImg,
    title: "Discovery",
    sub_title: "& Assessment",
    description: `Stakeholder workshops, system audits, and requirement gathering.`,
  },
  {
    id: "3",
    img: aiImg,
    title: "Solution",
    sub_title: "Architecture & Design",
    description: `Blueprinting scalable, secure, and interoperable systems.`,
  },
  {
    id: "4",
    img: enterpriseImg,
    title: "User Experience",
    sub_title: "& Prototyping",
    description: `Designing intuitive platforms for doctors, patients, and administrators.`,
  },
  {
    id: "5",
    img: securityImg,
    title: "Agile Development",
    sub_title: "& Integration",
    description: `Modular development with interoperability for lab systems, EHRs, and telemedicine.`,
  },
  {
    id: "6",
    img: solutionImg,
    title: "Quality Assurance",
    sub_title: "& Compliance",
    description: `HIPAA, HL7/FHIR standards, and public sector regulatory checks.`,
  },
  {
    id: "7",
    img: experienceImg,
    title: "Deployment",
    sub_title: "& Training",
    description: `National-level rollouts, training, and capacity-building programs.`,
  },
  {
    id: "8",
    img: productImg,
    title: "Support",
    sub_title: "& Enhancements",
    description: `Ongoing upgrades, analytics modules, and monitoring.`,
  },

]

function DigitalHealthApproach() {
  return (
    <div className='w-full py-16 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto grid xl:grid-cols-4 md:grid-cols-3 gap-4'>
          {solutions.map((data, index) => (
            data.description ? (
              <Card
                key={data.id}
                className='lg:py-6 py-3 px-3 bg-app-primary-deep text-white rounded-2xl'
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

export default DigitalHealthApproach