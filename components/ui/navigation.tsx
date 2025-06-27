"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import Typography from "../shared/typography";
import { Button } from "./button";

const nav_links = [
  {
    id: "1",
    nav_name: "Who we are",
    href: "/we-are",
    title: "About US",
    sub_title: "Know our story",
    description: "A collective of innovation-driven tech specialists",
    contents: [
      {
        id: "1",
        title: "Overview",
        description: "Core and supplemental courses for language development",
        href: "/about/overview"
      },
      {
        id: "2",
        title: "The Board",
        description: "For sighted users to preview content available behind a link.",
        href: "/"
      },
      {
        id: "3",
        title: "Management",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        href: "/"
      },
      {
        id: "4",
        title: "Careers",
        description: "Visually or semantically separates content.",
        href: "/about/careers"
      },
      
      {
        id: "5",
        title: "Social Responsibilities",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        href: "/"
      },
      
      {
        id: "6",
        title: "Global Networks",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        href: "/"
      },
    ]
  },
  {
    id: "2",
    nav_name: "What we do",
    href: "/we-do",
    title: "Solutions",
    sub_title: "Know our story",
    description: "Tailored technology services to accelerate your business growth",
    contents: [
      {
        id: "1",
        title: "Overview",
        description: "Core and supplemental courses for language development",
        href: "/"
      },
      {
        id: "2",
        title: "Careers",
        description: "Visually or semantically separates content.",
        href: "/insight"
      },
      {
        id: "3",
        title: "The Board",
        description: "For sighted users to preview content available behind a link.",
        href: "/"
      },
      {
        id: "4",
        title: "Social Responsibilities",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        href: "/"
      },
      {
        id: "5",
        title: "Management",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        href: "/"
      },
      {
        id: "6",
        title: "Global Networks",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        href: "/"
      },
    ],
    main_contents: [
      {
        id: "1",
        title: "Digital Solutions",
        contents: [
          {
            id: "1",
            title: "UI/UX Design",
            description: "Beautiful, functional digital experiences that convert",
            href: "/solutions/digital-solutions/ui-ux-design"
          },
          {
            id: "7",
            title: "Product Development",
            description: "Beautiful, functional digital experiences that convert",
            href: "/solutions/digital-solutions/product-development"
          },
          {
            id: "2",
            title: "Website Design",
            description: "Beautiful, functional digital experiences that convert",
            href: "/solutions/digital-solutions/website-design"
          },
          {
            id: "3",
            title: "Ecommerce solutions",
            description: "Complete online store solutions for all business sizes",
            href: "/solutions/digital-solutions/ecommerce-solutions"
          },
          {
            id: "4",
            title: "Digital Marketing",
            description: "Data-driven strategies to grow your online presence.",
            href: "/"
          },
          {
            id: "5",
            title: "Branding lab & PR",
            description: "Crafting compelling brand narratives across channels.",
            href: "/"
          },
          {
            id: "6",
            title: "Full Stack Development",
            description: "Crafting compelling brand narratives across channels.",
            href: "/solutions/digital-solutions/full-stack-development"
          },
          {
            id: "8",
            title: "Software Outsourcing",
            description: "Crafting compelling brand narratives across channels.",
            href: "/solutions/digital-solutions/software-outsourcing"
          },
        ]
      },
      {
        id: "2",
        title: "Mobile Applications",
        contents: [
          {
            id: "1",
            title: "iOS Apps",
            description: "Premium native applications for Apple ecosystem",
            href: "/solutions/mobile-applications"
          },
          {
            id: "2",
            title: "Android Apps",
            description: "High-performance Android applications",
            href: "/"
          },
          {
            id: "3",
            title: "Natives Apps",
            description: "Platform-specific apps with maximum performance.",
            href: "/"
          },
          {
            id: "4",
            title: "Hybrid Apps",
            description: "Cross-platform solutions with native feel.",
            href: "/"
          },
        ]
      },
      {
        id: "3",
        title: "Custom Softwares",
        contents: [
          {
            id: "1",
            title: "ERP Solutions",
            description: "Enterprise resource planning with integrated AI",
            href: "/"
          },
          {
            id: "2",
            title: "DLT Solutions",
            description: "Blockchain and web3 distributed ledger technology",
            href: "/"
          },
          {
            id: "3",
            title: "Digital Twins",
            description: "Virtual replicas for automotive, property and more.",
            href: "/"
          },
          {
            id: "4",
            title: "Web Applications",
            description: "Complex platforms and digital brand destinations.",
            href: "/"
          },
          {
            id: "5",
            title: "AI agent and Chatbot",
            description: "Generative AI, Chatbot, custom LLMs and machine learning.",
            href: "/solutions/custom-softwares/ai-agent-development"
          },
          {
            id: "6",
            title: "AI Development",
            description: "Generative AI, Chatbot, custom LLMs and machine learning.",
            href: "/solutions/custom-softwares/ai-development"
          },
          {
            id: "7",
            title: "Saas Product Development",
            description: "Design & Develop Customized SaaS Application.",
            href: "/solutions/custom-softwares/saas-product-development"
          },
          {
            id: "8",
            title: "IoT for Automobile",
            description: "Real-time Access to Vehicles.",
            href: "/solutions/custom-softwares/iot-automobile"
          },
        ]
      },
      {
        id: "4",
        title: "IT Security and cloud",
        contents: [
          {
            id: "1",
            title: "Business Continuity",
            description: "Ensure uninterrupted operations during disruptions",
            href: "/"
          },
          {
            id: "2",
            title: "Cloud Monitoring",
            description: "Comprehensive protection for cloud environments",
            href: "/"
          },
          {
            id: "3",
            title: "Penetration Testing",
            description: "Identify vulnerabilities before attackers do.",
            href: "/"
          },
          {
            id: "4",
            title: "Digital Forensics",
            description: "Investigate and analyze digital evidence.",
            href: "/"
          },
          {
            id: "5",
            title: "Infrastructure and configuration management",
            description: "Generative AI, Chatbot, custom LLMs and machine learning.",
            href: "/"
          },
          {
            id: "6",
            title: "DevOps consulting services",
            description: "Generative AI, Chatbot, custom LLMs and machine learning.",
            href: "/"
          },
          {
            id: "7",
            title: "DevOps implementation and containerization",
            description: "Generative AI, Chatbot, custom LLMs and machine learning.",
            href: "/"
          },
          {
            id: "8",
            title: "DevOps CI/CD services",
            description: "Generative AI, Chatbot, custom LLMs and machine learning.",
            href: "/solutions/security-cloud/devops-services"
          },
          {
            id: "9",
            title: "DevOps release management and orchestration.",
            description: "Generative AI, Chatbot, custom LLMs and machine learning.",
            href: "/"
          },
        ]
      },
      {
        id: "5",
        title: "Digital Transformation",
        contents: [
          {
            id: "1",
            title: "IT Strategy Development",
            description: "Align technology with business objectives",
            href: "/solutions/digital-transformation/digital-main"
          },
          {
            id: "2",
            title: "IT Infrastructure Modernization",
            description: "Upgrade legacy systems for the digital age",
            href: "/"
          },
          {
            id: "3",
            title: "Business Process Automation",
            description: "Streamline operations with intelligent automation",
            href: "/"
          },
          {
            id: "4",
            title: "Customer Experience Transformation",
            description: "Redesign customer journeys for digital channels",
            href: "/"
          },
          {
            id: "5",
            title: "Data Driven Decision Making",
            description: "Leverage analytics for strategic insights",
            href: "/"
          },
          {
            id: "6",
            title: "Enterprise Resource Planning",
            description: "Integrated management of core business processes",
            href: "/"
          },
          {
            id: "7",
            title: "Proactive Monitoring",
            description: "Real-time system health and performance tracking",
            href: "/"
          },
          {
            id: "8",
            title: "Training & Upskilling",
            description: "Develop digital capabilities across your organization",
            href: "/"
          },
          {
            id: "9",
            title: "Industry Specific Solutions",
            description: "Tailored digital transformation for your sector",
            href: "/"
          },
        ]
      },
      {
        id: "6",
        title: "Managed IT Services",
        contents: [
          {
            id: "1",
            title: "IT Infrastructure Management",
            href: "/solutions/managed-it-services",
            description: "End-to-end management of your IT environment"
          },
          {
            id: "2",
            title: "Cloud Management Services",
            href: "/",
            description: "Optimized cloud operations and cost management"
          },
          {
            id: "3",
            title: "Institutional Cyber Security",
            href: "/",
            description: "Enterprise-grade security protection"
          },
          {
            id: "4",
            title: "Data and Application Management",
            href: "/",
            description: "Secure, compliant data handling and app management"
          },
          {
            id: "5",
            title: "End-user Support",
            href: "/",
            description: "24/7 technical assistance for your workforce"
          },
        ]
      },
      {
        id: "7",
        title: "Global Licensing and Renewals",
        contents: [
          {
            id: "1",
            title: "License Procurement",
            href: "/solutions/licensing-renewals",
            description: "Strategic software acquisition and management"
          },
          {
            id: "2",
            title: "Renewals Management",
            href: "/",
            description: "Automated tracking and renewal processing"
          },
          {
            id: "3",
            title: "Compliance Support",
            href: "/",
            description: "Ensure adherence to licensing agreements"
          },
          {
            id: "4",
            title: "Software Asset Management",
            href: "/",
            description: "Optimize software investments and usage"
          },
          {
            id: "5",
            title: "Tillering Operations",
            href: "/",
            description: "Specialized financial operations management"
          },
          {
            id: "6",
            title: "Advisory Services",
            href: "/",
            description: "Expert guidance on licensing strategies"
          },
        ]
      },
      {
        id: "8",
        title: "Government & Public Sector Solutions",
        contents: [
          {
            id: "1",
            title: "Digital Health",
            href: "/",
            description: "Telemedicine and healthcare digitization"
          },
          {
            id: "2",
            title: "Smart Governance",
            href: "/",
            description: "E-government and digital public services"
          },
          {
            id: "3",
            title: "Smart Infrastructure",
            href: "/",
            description: "IoT-enabled urban infrastructure solutions"
          },
          {
            id: "4",
            title: "Smart Education",
            href: "/",
            description: "Digital learning platforms and tools"
          },
          {
            id: "5",
            title: "Smart Mobility",
            href: "/",
            description: "Intelligent transportation systems"
          },
          {
            id: "6",
            title: "Public Safety",
            href: "/",
            description: "Emergency response and surveillance systems"
          },
          {
            id: "7",
            title: "Environmental Sustainability",
            href: "/",
            description: "Smart environmental monitoring solutions"
          },
          {
            id: "8",
            title: "Data & AI Management",
            href: "/",
            description: "City-wide data analytics and AI implementation"
          },
        ]
      },
    ]
  },
  {
    id: "3",
    nav_name: "Portfolio",
    href: "/portfolio",
    title: "Portfolio",
    sub_title: "Products by Grade Level",
    description: "Teaching solutions to drive better student outcomes",
    contents: [
      {
        id: "1",
        title: "Fintech",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
        href: "/"
      },
      {
        id: "2",
        title: "Health Care",
        description: "For sighted users to preview content available behind a link.",
        href: "/"
      },
      {
        id: "3",
        title: "EdTech",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        href: "/"
      },
      {
        id: "4",
        title: "Construction",
        description: "Visually or semantically separates content.",
        href: "/"
      },
      {
        id: "5",
        title: "Energy & Climate",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        href: "/"
      },
      {
        id: "6",
        title: "Insurance & Mortgage",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        href: "/"
      },
      {
        id: "7",
        title: "Logistics & Transportation",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        href: "/"
      },
      {
        id: "8",
        title: "Travel & Hospitality",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        href: "/"
      },
    ]
  },
  {
    id: "4",
    nav_name: "Product",
    href: "/product",
    title: "Product",
    sub_title: "Products by Grade Level",
    description: "Innovative solutions tailored for you",
    contents: [
      {
        id: "1",
        title: "Emiri Pay",
        description: "The future of cross-border remittance and utility payment solutions for everyone",
        href: "/"
      },
      {
        id: "2",
        title: "Verified 360",
        description: "For sighted users to preview content available behind a link.",
        href: "/"
      },
      {
        id: "3",
        title: "Ricia Care",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        href: "/"
      },
      {
        id: "4",
        title: "Tour Mate",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        href: "/"
      },
    ]
  },
  {
    id: "5",
    nav_name: "Insight",
    href: "/insight",
    title: "Insight",
    sub_title: "Products by Grade Level",
    description: "Teaching solutions to drive better student outcomes",
    contents: [
      {
        id: "1",
        title: "Blog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
        href: "/"
      },
      {
        id: "2",
        title: "Events",
        description: "For sighted users to preview content available behind a link.",
        href: "/"
      },
      {
        id: "3",
        title: "Case Studies",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        href: "/"
      },
      {
        id: "4",
        title: "Report",
        description: "Visually or semantically separates content.",
        href: "/"
      },
    ]
  },
  
]


export default function Navigation() {
  const [selectedSubLink, setSelectedSubLink] = React.useState(nav_links[1]?.main_contents?.[0].id)

  const currentSubLink = nav_links[1].main_contents?.find(link => link.id === selectedSubLink)

  return (
    <NavigationMenu className="hidden xl:flex">
      <NavigationMenuList>
        
        {nav_links.map((link) => (
          <NavigationMenuItem key={link.id}>
            <NavigationMenuTrigger>{link.nav_name}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="w-fit h-full pb-4 flex items-stretch gap-3 p-4 ">
                    <li className="w-[230px] min-h-full bg-gray-50">
                      <NavigationMenuLink asChild>
                        <div
                          className="flex h-full w-full select-none flex-col gap-6 rounded-md p-3 no-underline outline-none focus:shadow-md "
                          
                        >
                          <Link 
                            className="flex flex-col gap-4"
                            href={link.href}
                          >
                            <Typography 
                              className="text-blue-900"
                              typo="header-5-semibold"
                            >
                              {link.title}
                            </Typography>
                            <Typography
                              typo="body-medium-regular"
                              className="text-gray-600 leading-normal"
                            >
                              {link.description}
                            </Typography>
                          </Link>
                          <div
                            className="space-y-2"
                          >
                            {link.main_contents ? (
                              link.main_contents.map((sub_link) => (
                                <Button
                                  variant="outline"
                                  key={sub_link.id}
                                  onMouseEnter={() => setSelectedSubLink(sub_link.id)}
                                  className={`w-full px-1 !py-2 text-sm justify-start text-wrap text-left !leading-5 ${selectedSubLink === sub_link.id ? "!text-blue-900 bg-blue-100" : ""} hover:!text-blue-900 border-gray-300 hover:bg-blue-100 rounded-lg`}
                                >{sub_link.title}</Button>
                              ))
                            ) : (
                              <Typography
                                typo="body-medium-medium"
                                className=""
                              >{link.sub_title}</Typography>
                            )}
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </li>
                    
                    {link.main_contents ? (
                      <div className="w-[750px] grid grid-cols-2 ">
                        {currentSubLink?.contents?.map((link) => (
                        <div key={link.id} className="min-w-[250px] h-full flex gap-16 border-l">
                          <ListItem href={link?.href} title={link.title}>
                            {link.description}
                          </ListItem>
                          
                        </div>
                        ))}
                      
                      </div>
                    ) : (
                      <div className="w-[750px] grid grid-cols-3 ">
                        {link.contents?.map((link) => (
                        <div key={link.id} className="min-w-[250px] h-full flex gap-16 border-l">
                          <ListItem href={link.href} title={link.title}>
                            {link.description}
                          </ListItem>
                          
                        </div>
                        ))}
                      
                      </div>
                    )}
                </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block h-full w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="pb-2 text-base text-blue-800 font-semibold leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
