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
      },
      {
        id: "2",
        title: "The Board",
        description: "For sighted users to preview content available behind a link.",
      },
      {
        id: "3",
        title: "Management",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        id: "4",
        title: "Careers",
        description: "Visually or semantically separates content.",
      },
      
      {
        id: "5",
        title: "Social Responsibilities",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      
      {
        id: "6",
        title: "Global Networks",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
      },
      {
        id: "2",
        title: "Careers",
        description: "Visually or semantically separates content.",
      },
      {
        id: "3",
        title: "The Board",
        description: "For sighted users to preview content available behind a link.",
      },
      {
        id: "4",
        title: "Social Responsibilities",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        id: "5",
        title: "Management",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        id: "6",
        title: "Global Networks",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
            description: "Beautiful, functional digital experiences that convert"
          },
          {
            id: "2",
            title: "Website Design",
            description: "Beautiful, functional digital experiences that convert"
          },
          {
            id: "3",
            title: "Ecommerce solutions",
            description: "Complete online store solutions for all business sizes"
          },
          {
            id: "4",
            title: "Digital Marketing",
            description: "Data-driven strategies to grow your online presence."
          },
          {
            id: "5",
            title: "Branding lab & PR",
            description: "Crafting compelling brand narratives across channels."
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
            description: "Premium native applications for Apple ecosystem"
          },
          {
            id: "2",
            title: "Android Apps",
            description: "High-performance Android applications"
          },
          {
            id: "3",
            title: "Natives Apps",
            description: "Platform-specific apps with maximum performance."
          },
          {
            id: "4",
            title: "Hybrid Apps",
            description: "Cross-platform solutions with native feel."
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
            description: "Enterprise resource planning with integrated AI"
          },
          {
            id: "2",
            title: "DLT Solutions",
            description: "Blockchain and web3 distributed ledger technology"
          },
          {
            id: "3",
            title: "Digital Twins",
            description: "Virtual replicas for automotive, property and more."
          },
          {
            id: "4",
            title: "Web Applications",
            description: "Complex platforms and digital brand destinations."
          },
          {
            id: "5",
            title: "AI agent and Chatbot",
            description: "Generative AI, Chatbot, custom LLMs and machine learning."
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
            description: "Ensure uninterrupted operations during disruptions"
          },
          {
            id: "2",
            title: "Cloud Monitoring",
            description: "Comprehensive protection for cloud environments"
          },
          {
            id: "3",
            title: "Penetration Testing",
            description: "Identify vulnerabilities before attackers do."
          },
          {
            id: "4",
            title: "Digital Forensics",
            description: "Investigate and analyze digital evidence."
          },
          {
            id: "5",
            title: "Infrastructure and configuration management",
            description: "Generative AI, Chatbot, custom LLMs and machine learning."
          },
          {
            id: "6",
            title: "DevOps consulting services",
            description: "Generative AI, Chatbot, custom LLMs and machine learning."
          },
          {
            id: "7",
            title: "DevOps implementation and containerization",
            description: "Generative AI, Chatbot, custom LLMs and machine learning."
          },
          {
            id: "8",
            title: "DevOps CI/CD services",
            description: "Generative AI, Chatbot, custom LLMs and machine learning."
          },
          {
            id: "9",
            title: "DevOps release management and orchestration.",
            description: "Generative AI, Chatbot, custom LLMs and machine learning."
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
            description: "Align technology with business objectives"
          },
          {
            id: "2",
            title: "IT Infrastructure Modernization",
            description: "Upgrade legacy systems for the digital age"
          },
          {
            id: "3",
            title: "Business Process Automation",
            description: "Streamline operations with intelligent automation"
          },
          {
            id: "4",
            title: "Customer Experience Transformation",
            description: "Redesign customer journeys for digital channels"
          },
          {
            id: "5",
            title: "Data Driven Decision Making",
            description: "Leverage analytics for strategic insights"
          },
          {
            id: "6",
            title: "Enterprise Resource Planning",
            description: "Integrated management of core business processes"
          },
          {
            id: "7",
            title: "Proactive Monitoring",
            description: "Real-time system health and performance tracking"
          },
          {
            id: "8",
            title: "Training & Upskilling",
            description: "Develop digital capabilities across your organization"
          },
          {
            id: "9",
            title: "Industry Specific Solutions",
            description: "Tailored digital transformation for your sector"
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
            description: "End-to-end management of your IT environment"
          },
          {
            id: "2",
            title: "Cloud Management Services",
            description: "Optimized cloud operations and cost management"
          },
          {
            id: "3",
            title: "Institutional Cyber Security",
            description: "Enterprise-grade security protection"
          },
          {
            id: "4",
            title: "Data and Application Management",
            description: "Secure, compliant data handling and app management"
          },
          {
            id: "5",
            title: "End-user Support",
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
            description: "Strategic software acquisition and management"
          },
          {
            id: "2",
            title: "Renewals Management",
            description: "Automated tracking and renewal processing"
          },
          {
            id: "3",
            title: "Compliance Support",
            description: "Ensure adherence to licensing agreements"
          },
          {
            id: "4",
            title: "Software Asset Management",
            description: "Optimize software investments and usage"
          },
          {
            id: "5",
            title: "Tillering Operations",
            description: "Specialized financial operations management"
          },
          {
            id: "6",
            title: "Advisory Services",
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
            description: "Telemedicine and healthcare digitization"
          },
          {
            id: "2",
            title: "Smart Governance",
            description: "E-government and digital public services"
          },
          {
            id: "3",
            title: "Smart Infrastructure",
            description: "IoT-enabled urban infrastructure solutions"
          },
          {
            id: "4",
            title: "Smart Education",
            description: "Digital learning platforms and tools"
          },
          {
            id: "5",
            title: "Smart Mobility",
            description: "Intelligent transportation systems"
          },
          {
            id: "6",
            title: "Public Safety",
            description: "Emergency response and surveillance systems"
          },
          {
            id: "7",
            title: "Environmental Sustainability",
            description: "Smart environmental monitoring solutions"
          },
          {
            id: "8",
            title: "Data & AI Management",
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
      },
      {
        id: "2",
        title: "Health Care",
        description: "For sighted users to preview content available behind a link.",
      },
      {
        id: "3",
        title: "EdTech",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        id: "4",
        title: "Construction",
        description: "Visually or semantically separates content.",
      },
      {
        id: "5",
        title: "Energy & Climate",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        id: "6",
        title: "Insurance & Mortgage",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
      {
        id: "7",
        title: "Logistics & Transportation",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
      {
        id: "8",
        title: "Travel & Hospitality",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
      },
      {
        id: "2",
        title: "Verified 360",
        description: "For sighted users to preview content available behind a link.",
      },
      {
        id: "3",
        title: "Ricia Care",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
      {
        id: "4",
        title: "Tour Mate",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
      },
      {
        id: "2",
        title: "Events",
        description: "For sighted users to preview content available behind a link.",
      },
      {
        id: "3",
        title: "Case Studies",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
      {
        id: "4",
        title: "Report",
        description: "Visually or semantically separates content.",
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
                    <li className="w-[220px] min-h-full bg-gray-50">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col gap-6 rounded-md p-3 no-underline outline-none focus:shadow-md "
                          href="/"
                        >
                          <div className="flex flex-col gap-4">
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
                          </div>
                          <div
                            className="space-y-2"
                          >
                            {link.main_contents ? (
                              link.main_contents.map((sub_link) => (
                                <Button
                                  variant="outline"
                                  key={sub_link.id}
                                  onMouseEnter={() => setSelectedSubLink(sub_link.id)}
                                  className="w-full px-2 py-2 text-sm justify-start text-wrap text-left hover:!text-blue-900 border-gray-300 hover:bg-blue-100 rounded-lg"
                                >{sub_link.title}</Button>
                              ))
                            ) : (
                              <Typography
                                typo="body-medium-medium"
                                className=""
                              >{link.sub_title}</Typography>
                            )}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    
                    {link.main_contents ? (
                      <div className="w-[750px] grid grid-cols-2 ">
                        {currentSubLink?.contents?.map((link) => (
                        <div key={link.id} className="min-w-[250px] h-full flex gap-16 border-l">
                          <ListItem href="/" title={link.title}>
                            {link.description}
                          </ListItem>
                          
                        </div>
                        ))}
                      
                      </div>
                    ) : (
                      <div className="w-[750px] grid grid-cols-3 ">
                        {link.contents?.map((link) => (
                        <div key={link.id} className="min-w-[250px] h-full flex gap-16 border-l">
                          <ListItem href="/" title={link.title}>
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
