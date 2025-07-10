'use client';
import Typography from '@/components/shared/typography'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion-faq';
import React from 'react'

const smart_governance_faqs = [
    {
        id: "1",
        question: "What is Smart Governance?",
        answer: "Smart Governance refers to the digital transformation of public administration, using technology to make government services more efficient, transparent, and citizen-centric. It includes digital platforms for service delivery, real-time citizen engagement, and data-driven decision-making.",
    },
    {
        id: "2",
        question: "How does Coders Clutch help governments with digital transformation?",
        answer: "We provide end-to-end Smart Governance platforms that:",
        contents: [
            "Automate administrative processes (permits, applications, payments)",
            "Enable real-time citizen engagement (feedback, grievance redressal)",
            "Offer transparency dashboards (budget tracking, project status)",
            "Ensure secure digital identity and access management"
        ]
    },
    {
        id: "3",
        question: "What are the key benefits of Smart Governance?",
        answer: "",
        sections: [
            {
                title: "For Governments:",
                points: [
                    "Faster service delivery (automated workflows)",
                    "Reduced operational costs (less paperwork, fewer in-person visits)",
                    "Better policy decisions (data analytics & reporting)"
                ]
            },
            {
                title: "For Citizens:",
                points: [
                    "24/7 access to services (online portals, mobile-friendly)",
                    "Real-time tracking of applications and complaints",
                    "Greater trust in government (transparency dashboards)"
                ]
            }
        ]
    },
    {
        id: "4",
        question: "How secure are these digital governance platforms?",
        answer: "We implement enterprise-grade security, including:",
        contents: [
            "Authentication: OAuth 2.0, JWT, SAML 2.0",
            "Data Protection: Role-based access, encryption, audit logs",
            "Compliance: Adherence to government cybersecurity standards"
        ]
    },
    {
        id: "5",
        question: "Can Smart Governance work in rural or low-bandwidth areas?",
        answer: "Yes! Our platforms are designed for inclusivity:",
        contents: [
            "Mobile-first & offline-capable interfaces",
            "Multilingual support",
            "Lightweight applications for slow internet"
        ]
    },
    {
        id: "6",
        question: "What technologies power your Smart Governance solutions?",
        answer: "",
        contents: [
            "Backend: Laravel, Spring Boot, Node.js",
            "Frontend: React, Angular",
            "Databases: PostgreSQL, Oracle DB",
            "Cloud: AWS, Azure, or Government Private Clouds"
        ]
    },
    {
        id: "7",
        question: "Can your platform integrate with existing government systems?",
        answer: "Absolutely! Our solutions are modular and interoperable, meaning they can connect with legacy databases, payment gateways, and other e-governance tools."
    },
    {
        id: "8",
        question: "How do you ensure citizen adoption of digital services?",
        answer: "We focus on:",
        contents: [
            "User-friendly design (simple, intuitive interfaces)",
            "Training & awareness programs for citizens and officials",
            "Phased rollout to ease the transition from paper-based systems"
        ]
    }
]

function SmartGovernanceFaqs() {
  return (
    <div className='w-full py-12 bg-white'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    FAQ
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Smart Governance 
                </Typography>
            </div>
            <div className='w-full py-6'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {smart_governance_faqs.map((data, index) => (
                        <AccordionItem
                            key={data.id} 
                            value={`item-${index+1}`}
                        >
                            <AccordionTrigger
                                className='text-lg font-semibold'
                            >{data.question}</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                {data.answer && <p className='text-base'>{data.answer}</p>}
                                
                                {data.contents && (
                                    <ul className="pl-5 space-y-2 list-inside list-disc">
                                        {data.contents.map((item, i) => (
                                            <li key={i} className="text-base">{item}</li>
                                        ))}
                                    </ul>
                                )}
                                
                                {data.sections && (
                                    <div className="space-y-4">
                                        {data.sections.map((section, i) => (
                                            <div key={i}>
                                                <p className="font-semibold text-base">{section.title}</p>
                                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                                    {section.points.map((point, j) => (
                                                        <li key={j} className="text-base">{point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    </div>
  )
}

export default SmartGovernanceFaqs