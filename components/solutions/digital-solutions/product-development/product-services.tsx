'use client';
import Typography from '@/components/shared/typography';
import React from 'react'

const product_services = [
    {
        id: "1",
        title: "Product Consulting",
        description: `Experience seamless software product engineering from start to finish. We cover research, development, 
                        testing, deployment, and ongoing support to ensure your software’s success.`,
    },
    {
        id: "2",
        title: "SaaS Product Development",
        description: `Transform your legacy applications into powerful SaaS solutions! We help enterprises embrace the 
                        cloud with multi-tenant architectures that enhance scalability and drive efficiency.`,
    },
    {
        id: "3",
        title: "Product Design & Engineering",
        description: `Our pre-built frameworks drive rapid growth, enabling the creation of consistent learning experiences. 
                        They adapt seamlessly to any design, duration, timeline, and learning objective.`,
    },
    {
        id: "4",
        title: "MVP Development",
        description: `Our certified consultants excel in developing Minimum Viable Products using the latest technologies, 
                        ensuring only the top 5% of talent works on your projects for superior results.`,
    },
    {
        id: "5",
        title: "Product Modularization",
        description: `Revitalize your product with our re-engineering expertise. We address defects, enhance features, 
                        and minimize downtime, ensuring optimal performance that meets contemporary market needs.`,
    },
    {
        id: "6",
        title: "QA & Testing",
        description: `Testing digital products is complex and time-consuming in a mobile-driven world. Our comprehensive QA 
                            strategies ensure thorough validation, helping you maintain product quality and reliability.`,
    },
    {
        id: "7",
        title: "Product Prototyping",
        description: `Stay ahead in a fast-paced market! Our prototyping services turn innovative ideas into high-quality 
                        solutions, delivering effortless experiences that exceed customer expectations and drive success.`,
    },
    {
        id: "8",
        title: "Product Support & Maintenance",
        description: `Our dedicated team provides support and maintenance, ensuring your custom product operates smoothly. 
                        We deliver timely updates and proactive solutions for 100% enhanced user experiences.`,
    },
    {
        id: "9",
        title: "Cloud Integration Services",
        description: `Seamlessly integrate product with the cloud for enhanced performance. We specialize in cloud migration, 
                        multi-cloud solutions, and building scalable infrastructures that allow your product to thrive in any 
                        environment.`,
    },
]

function ProductServices() {
  return (
    <div className='w-full py-12 bg-app-gray-bg'>
        <section className='w-[85%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Our Services
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    A Custom Product Development Service for Data-driven Growth
                </Typography>
            </div>

            <div className='w-full py-8 grid grid-cols-3 gap-12'>
                {
                    product_services.map((data) => (
                        <div key={data.id} className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-3'>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-12 h-[3px] bg-app-green-text'></div>
                            </div>
                            <Typography
                                className='!text-lg !font-normal'
                            >
                                {data.description}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default ProductServices