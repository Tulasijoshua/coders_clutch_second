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
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import Typography from "../shared/typography";
import { Button } from "./button";
import { Activity, BarChart, BookOpen, Box, Brain, BrainCircuit, Briefcase, Brush, Calculator, Calendar, Car, ClipboardList, ClipboardSignature, Cloud, Code2, Compass, Cpu, Database, Factory, FileCheck, FileText, Fingerprint, FlaskConical, FolderGit2, Gavel, GitMerge, Globe, GraduationCap, Handshake, Headset, HeartPulse, Landmark, Layers, Leaf, Lightbulb, MessageSquare, Network, Package, Paintbrush, Plane, RefreshCw, Rocket, Server, Settings, Shield, ShieldAlert, ShieldCheck, ShoppingCart, Smartphone, Smile, Trophy, Users, Wallet, Wifi } from "lucide-react";

const nav_links = [
  {
    id: "1",
    nav_name: "Who we are",
    href: "/about/overview",
    title: "About US",
    sub_title: "Know our story",
    description: "A collective of innovation-driven technology specialists dedicated to transforming businesses through cutting-edge digital solutions and strategic thinking.",
    contents: [
      {
        id: "1",
        title: "Overview",
        icon: BookOpen,
        description: "Discover our company's vision, mission, and the core values that drive our ",
        href: "/about/overview"
      },
      {
        id: "2",
        title: "Our Management",
        icon: Users,
        description: "Meet our experienced leadership team who bring decades of combined expertise ",
        href: "/about/board-management"
      },
      {
        id: "3",
        title: "Global Networks",
        icon: Network,
        description: "Explore our international partnerships and global presence that enable us to ",
        href: "/about/global-networks"
      },
      {
        id: "4",
        title: "Careers",
        icon: Briefcase,
        description: "Join our team of innovators and discover exciting opportunities to grow your ",
        href: "/about/careers"
      },
      {
        id: "5",
        title: "Social Responsibilities",
        icon: HeartPulse,
        description: "Learn about our commitment to social impact through various initiatives ",
        href: "/"
      },
    ]
  },
  {
    id: "2",
    nav_name: "What we do",
    href: "/we-do",
    title: "Solutions",
    sub_title: "Our expertise",
    description: "Comprehensive technology services designed to accelerate your business growth, enhance efficiency, and drive digital transformation at every level.",
    contents: [
      {
        id: "1",
        title: "Overview",
        icon: Compass,
        description: "Explore our comprehensive suite of technology solutions designed to address your unique business challenges and digital transformation needs.",
        href: "/"
      },
      {
        id: "2",
        title: "Our Approach",
        icon: Lightbulb,
        description: "Discover our methodology that combines strategic thinking with technical excellence to deliver measurable results and business impact.",
        href: "/insight"
      },
      {
        id: "3",
        title: "Industries We Serve",
        icon: Factory,
        description: "Learn about our specialized solutions tailored for various industries including finance, healthcare, education, and government sectors.",
        href: "/"
      },
      {
        id: "4",
        title: "Technology Partners",
        icon: Handshake,
        description: "See our strategic alliances with leading technology providers that enhance our solution offerings and service capabilities.",
        href: "/"
      },
      {
        id: "5",
        title: "Client Success Stories",
        icon: Trophy,
        description: "Read about how we've helped businesses achieve their digital transformation goals and overcome complex technological challenges.",
        href: "/"
      },
      {
        id: "6",
        title: "Innovation Lab",
        icon: FlaskConical,
        description: "Explore our R&D initiatives where we experiment with emerging technologies to develop next-generation solutions for our clients.",
        href: "/"
      },
    ],
    main_contents: [
      {
        id: "1",
        title: "Digital Solutions",
        icon: Code2,
        contents: [
          {
            id: "1",
            title: "Website Design",
            icon: Globe,
            description: "a dlk asldkfj sldfk sldkfjCustom website development that combines stunning aesthetics with seamless functionality to enhance user experience and drive conversions.",
            href: "/solutions/digital-solutions/website-design"
          },
          {
            id: "2", 
            title: "Ecommerce solutions",
            icon: ShoppingCart,
            description: "End-to-end ecommerce platforms with secure payment gateways, inventory management, and personalized shopping experiences.",
            href: "/solutions/digital-solutions/ecommerce-solutions"
          },
          {
            id: "3",
            title: "UI/UX Design",
            icon: Paintbrush,
            description: "Human-centered design solutions that create intuitive digital experiences, improving engagement and customer satisfaction.",
            href: "/solutions/digital-solutions/ui-ux-design"
          },
          {
            id: "4",
            title: "Product Development",
            icon: Box,
            description: "From concept to launch, we build scalable digital products that solve real problems and deliver measurable business value.",
            href: "/solutions/digital-solutions/product-development"
          },
          {
            id: "5",
            title: "Software Outsourcing",
            icon: Code2,
            description: "Leverage our global talent pool for dedicated development teams that seamlessly integrate with your business operations.",
            href: "/solutions/digital-solutions/software-outsourcing"
          },
          {
            id: "6",
            title: "Branding lab & PR",
            icon: Brush,
            description: "Comprehensive branding strategies and digital PR services that elevate your market presence and connect with your audience.",
            href: "/"
          },
        ]
      },
      {
        id: "2",
        title: "Mobile Applications",
        icon: Smartphone,
        contents: [
          {
            id: "1",
            title: "iOS Apps",
            icon: Cpu,
            description: "Premium native iOS applications built with Swift, delivering exceptional performance and seamless Apple ecosystem integration.",
            href: "/solutions/mobile-applications"
          },
          {
            id: "2",
            title: "Android Apps",
            icon: Smartphone,
            description: "High-performance Android applications developed with Kotlin, optimized for diverse devices and screen sizes.",
            href: "/"
          },
          {
            id: "3",
            title: "Native Apps",
            icon: Cpu,
            description: "Platform-specific applications that leverage device capabilities for maximum performance and superior user experience.",
            href: "/"
          },
          {
            id: "4",
            title: "Hybrid Apps",
            icon: Network,
            description: "Cross-platform solutions using React Native/Flutter that maintain native feel while reducing development costs.",
            href: "/"
          },
        ]
      },
      {
        id: "3",
        title: "Custom Software",
        icon: Code2,
        contents: [
          {
            id: "1",
            title: "MVP Development",
            icon: Rocket,
            description: "Rapid development of minimum viable products to validate your business idea quickly and cost-effectively in the market.",
            href: "/solutions/custom-softwares/mvp-development"
          },
          {
            id: "2",
            title: "Full Stack Development",
            icon: Layers,
            description: "End-to-end custom software solutions with modern architectures that scale with your business growth and evolving needs.",
            href: "/solutions/digital-solutions/full-stack-development"
          },
          {
            id: "3",
            title: "SaaS Product Development",
            icon: Cloud,
            description: "Cloud-based software solutions with subscription models, multi-tenancy, and continuous feature deployment.",
            href: "/solutions/custom-softwares/saas-product-development"
          },
          {
            id: "4",
            title: "AI Development",
            icon: Brain,
            description: "Custom AI solutions including machine learning models, predictive analytics, and intelligent automation for your business.",
            href: "/solutions/custom-softwares/ai-development"
          },
          {
            id: "5",
            title: "AI Agent and Chatbot",
            icon: MessageSquare,
            description: "Intelligent conversational agents powered by NLP that enhance customer service and automate routine interactions.",
            href: "/solutions/custom-softwares/ai-agent-development"
          },
          {
            id: "6",
            title: "Hire Remote Developers",
            icon: Users,
            description: "Access our vetted talent network to build your dedicated development team with flexible engagement models.",
            href: "/solutions/custom-softwares/hire-remote-developers"
          },
        ]
      },
      {
        id: "4",
        title: "IT Security and Cloud",
        icon: Shield,
        contents: [
          {
            id: "1",
            title: "Cloud Monitoring",
            icon: Server,
            description: "Comprehensive cloud infrastructure monitoring with real-time alerts, performance metrics, and security surveillance.",
            href: "/"
          },
          {
            id: "2",
            title: "Infrastructure and Configuration Management",
            icon: Settings,
            description: "Automated infrastructure provisioning and configuration using IaC tools for consistency and compliance across environments.",
            href: "/"
          },
          {
            id: "3",
            title: "DevOps Consulting Services",
            icon: Code2,
            description: "End-to-end DevOps implementation including CI/CD pipelines, containerization, and infrastructure automation strategies.",
            href: "/"
          },
          {
            id: "4",
            title: "DevOps Implementation",
            icon: Box,
            description: "Complete DevOps transformation with container orchestration, microservices architecture, and automated deployment workflows.",
            href: "/"
          },
          {
            id: "5",
            title: "DevOps CI/CD Services",
            icon: RefreshCw,
            description: "Continuous integration and delivery pipelines that accelerate release cycles while maintaining quality and stability.",
            href: "/solutions/security-cloud/devops-services"
          },
          {
            id: "6",
            title: "DevOps Release Management",
            icon: GitMerge,
            description: "Orchestrated release processes with version control, environment management, and rollback capabilities.",
            href: "/"
          },
        ]
      },
      {
        id: "5",
        title: "Digital Transformation",
        icon: BarChart,
        contents: [
          {
            id: "1",
            title: "IT Strategy Development",
            icon: ClipboardList,
            description: "Comprehensive technology roadmaps aligned with your business objectives to drive growth and competitive advantage.",
            href: "/solutions/digital-transformation/digital-main"
          },
          {
            id: "2",
            title: "IT Infrastructure Modernization",
            icon: Server,
            description: "Legacy system upgrades and cloud migrations that improve performance, security, and operational efficiency.",
            href: "/"
          },
          {
            id: "3",
            title: "Business Process Automation",
            icon: Settings,
            description: "Intelligent automation solutions that eliminate manual tasks, reduce errors, and improve workflow efficiency.",
            href: "/"
          },
          {
            id: "4",
            title: "Customer Experience Transformation",
            icon: Smile,
            description: "Omnichannel digital experiences that engage customers and build loyalty through personalized interactions.",
            href: "/"
          },
          {
            id: "5",
            title: "Data Driven Decision Making",
            icon: Database,
            description: "Advanced analytics platforms that turn your data into actionable insights for strategic business decisions.",
            href: "/"
          },
          {
            id: "6",
            title: "Enterprise Resource Planning",
            icon: Package,
            description: "Integrated ERP solutions that streamline business processes across finance, HR, supply chain, and operations.",
            href: "/"
          },
          {
            id: "7",
            title: "Proactive Monitoring",
            icon: Activity,
            description: "24/7 system monitoring with predictive analytics to prevent issues before they impact your business operations.",
            href: "/"
          },
          {
            id: "8",
            title: "Training & Upskilling",
            icon: GraduationCap,
            description: "Customized training programs to equip your team with digital skills for the evolving technology landscape.",
            href: "/"
          },
        ]
      },
      {
        id: "6",
        href: "/solutions/managed-it-services",
        title: "Managed IT Services",
        icon: Server,
        contents: [
          {
            id: "1",
            title: "IT Infrastructure Management",
            icon: Server,
            href: "/solutions/managed-it-services",
            description: "End-to-end management of your IT environment including networks, servers, and endpoints with 24/7 monitoring and support."
          },
          {
            id: "2",
            title: "Cloud Management Services",
            icon: Cloud,
            href: "/",
            description: "Comprehensive cloud operations including cost optimization, performance tuning, security management, and governance."
          },
          {
            id: "3",
            title: "Institutional Cyber Security",
            icon: ShieldCheck,
            href: "/",
            description: "Enterprise-grade security solutions including threat detection, vulnerability management, and compliance monitoring."
          },
          {
            id: "4",
            title: "Data and Application Management",
            icon: Database, 
            href: "/",
            description: "Secure data lifecycle management and application maintenance with regular updates, backups, and performance optimization."
          },
          {
            id: "5",
            title: "End-user Support",
            icon: Headset,
            href: "/",
            description: "Dedicated helpdesk services with multi-channel support to resolve technical issues and maintain productivity."
          },
        ]
      },
      {
        id: "7",
        title: "Global Licensing and Renewals",
        icon: FileText,
        contents: [
          {
            id: "1",
            title: "License Procurement",
            icon: ClipboardSignature,
            href: "/solutions/licensing-renewals",
            description: "Strategic software licensing acquisition with volume discounts and optimal configuration for your business needs."
          },
          {
            id: "2",
            title: "Renewals Management",
            icon: RefreshCw,
            href: "/",
            description: "Automated tracking and processing of license renewals to ensure continuity and avoid compliance issues."
          },
          {
            id: "3",
            title: "Compliance Support",
            icon: FileCheck,
            href: "/",
            description: "Comprehensive audits and documentation to ensure adherence to software licensing agreements and regulations."
          },
          {
            id: "4",
            title: "Software Asset Management",
            icon: FolderGit2,
            href: "/",
            description: "Centralized management of software assets to optimize utilization, reduce costs, and maintain license compliance."
          },
          {
            id: "5",
            title: "Tillering Operations",
            icon: Calculator,
            href: "/",
            description: "Specialized financial services for software asset management including budgeting, forecasting, and cost allocation."
          },
          {
            id: "6",
            title: "Advisory Services",
            icon: Lightbulb,
            href: "/",
            description: "Expert guidance on licensing strategies, contract negotiations, and technology procurement best practices."
          },
        ]
      },
      {
        id: "8",
        title: "Government & Public Sector Solutions",
        icon: Landmark,
        contents: [
          {
            id: "1",
            title: "Digital Health",
            icon: HeartPulse,
            href: "/",
            description: "Integrated healthcare systems including telemedicine platforms, EHR solutions, and public health monitoring tools."
          },
          {
            id: "2",
            title: "Smart Governance",
            icon: Gavel,
            href: "/",
            description: "E-government platforms that digitize public services, enhance transparency, and improve citizen engagement."
          },
          {
            id: "3",
            title: "Smart Infrastructure",
            icon: Wifi,
            href: "/",
            description: "IoT-enabled urban solutions for traffic management, utilities monitoring, and public space optimization."
          },
          {
            id: "4",
            title: "Smart Education",
            icon: BookOpen,
            href: "/",
            description: "Digital learning ecosystems with LMS platforms, virtual classrooms, and educational content management systems."
          },
          {
            id: "5",
            title: "Smart Mobility / IoT for Automobile",
            icon: Car,
            href: "/solutions/custom-softwares/iot-automobile",
            description: "Intelligent transportation systems with vehicle connectivity, fleet management, and smart traffic solutions."
          },
          {
            id: "6",
            title: "Public Safety",
            icon: ShieldAlert,
            href: "/",
            description: "Integrated emergency response systems with real-time monitoring, dispatch coordination, and situational awareness."
          },
          {
            id: "7",
            title: "Environmental Sustainability",
            icon: Leaf,
            href: "/",
            description: "Smart environmental monitoring solutions for air quality, water management, and energy efficiency tracking."
          },
          {
            id: "8",
            title: "Data & AI Management",
            icon: BrainCircuit,
            href: "/",
            description: "City-wide data platforms with AI analytics for urban planning, resource allocation, and policy decision support."
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
    sub_title: "Our work speaks for itself",
    description: "Explore our diverse range of successful projects and solutions that demonstrate our technical expertise and creative problem-solving capabilities.",
  },
  {
    id: "4",
    nav_name: "Product",
    href: "/product",
    title: "Product",
    sub_title: "Our innovative solutions",
    description: "Discover our suite of proprietary products designed to solve specific industry challenges and deliver exceptional user experiences.",
    contents: [
      {
        id: "1",
        title: "Emiri Pay",
        icon: Wallet,
        description: "Revolutionary payment platform enabling seamless cross-border transactions and ",
        href: "/"
      },
      {
        id: "2",
        title: "Verified 360",
        icon: Fingerprint,
        description: "Comprehensive identity verification solution that combines biometric ",
        href: "/"
      },
      {
        id: "3",
        title: "Ricia Care",
        icon: HeartPulse,
        description: "Integrated healthcare management platform connecting patients ",
        href: "/"
      },
      {
        id: "4",
        title: "Tour Mate",
        icon: Plane,
        description: "Intelligent travel companion app offering personalized itineraries, real-time navigation, ",
        href: "/"
      },
    ]
  },
  {
    id: "5",
    nav_name: "Insight",
    href: "/insights",
    title: "Insight",
    sub_title: "Knowledge hub",
    description: "Access our latest research, thought leadership, and industry perspectives to stay ",
    contents: [
      {
        id: "1",
        title: "Case Studies",
        icon: FileText,
        description: "In-depth analyses of our client projects showcasing challenges, solutions, and ",
        href: "/insights?tab=case-studies"
      },
      {
        id: "2",
        title: "Blog",
        icon: BookOpen,
        description: "Articles and thought pieces on technology trends, digital transformation ",
        href: "/insights?tab=blog"
      },
      {
        id: "3",
        title: "Events",
        icon: Calendar,
        description: "Upcoming webinars, conferences, and workshops where we share ",
        href: "/insights?tab=events"
      },
      {
        id: "4",
        title: "Report",
        icon: ClipboardList,
        description: "Research papers and market analysis reports providing valuable insights ",
        href: "/insights?tab=reports"
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
          link.contents ? (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuTrigger
              >
                <Link
                  href={link.href}
                >
                  {link.nav_name}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                  <ul className="w-fit h-full pb-4 flex items-stretch gap-3 p-4 ">
                      <li className="w-[230px] min-h-full">
                        <NavigationMenuLink asChild>
                          <div
                            className="flex h-full w-full select-none flex-col gap-6 rounded-md p-3 no-underline outline-none focus:shadow-md "
                            
                          >
                            <Link 
                              className="flex flex-col gap-2"
                              href={link.href}
                            >
                              <Typography 
                                className=""
                                typo="header-6-semibold"
                              >
                                {link.title}
                              </Typography>
                              <Typography
                                typo="body-medium-regular"
                                className="text-gray-800 leading-normal line-clamp-2"
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
                                    className={`w-full px-1 !py-2 text-sm justify-start text-wrap text-left !leading-5 ${selectedSubLink === sub_link.id ? "!text-app-secondary/70 bg-app-secondary/10" : ""} hover:!text-app-secondary/70 border-gray-300 hover:bg-app-secondary/10 rounded-sm`}
                                  >
                                    {sub_link.title}
                                  </Button>
                                ))
                              ) : (
                                <Typography
                                  typo="body-medium-medium"
                                  className=""
                                >
                                  {link.sub_title}
                                </Typography>
                              )}
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      
                      {link.main_contents ? (
                        <div className="w-[750px] h-fit grid grid-cols-2 ">
                          {currentSubLink?.contents?.map((link) => (
                          <div key={link.id} className="min-w-[250px] h-fit flex flex-col text-black flex gap-16 border-l border-gray-300 border-dashed">
                            <ListItem 
                              href={link?.href} 
                              title={link.title}
                              icon={link.icon}
                            >
                              {link.description}
                              
                            </ListItem>
                            
                          </div>
                          ))}
                        
                        </div>
                      ) : (
                        <div className="w-[750px] grid grid-cols-3 ">
                          {link.contents?.map((link) => (
                          <div key={link.id} className="min-w-[250px] h-full flex gap-16 border-l">
                            <ListItem href={link.href} icon={link.icon} title={link.title}>
                              {link.description}
                            </ListItem>
                            
                          </div>
                          ))}
                        
                        </div>
                      )}
                  </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ): (
            <NavigationMenuItem 
              key={link.href}
              className="px-4"
            >
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  title={link.description}
                >
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & { icon?: React.ComponentType<{ className?: string }>; href?: string; title?: string; }
>(({ className, title, icon: Icon, children, href, ...props }, ref) => {
  const isBrandingLab = title === "Branding lab & PR";
  
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          className={cn(
            "block h-fit w-full select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors",
            className,
          )}
          ref={ref}
          {...props}
        >
          <div className="pb-6 flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <div className="w-[2px] h-4 bg-app-secondary"></div>
              <div className="flex flex-col gap-3">
                {Icon && (
                  <div className="w-fit p-1.5 border-2 border-black rounded-full">
                    <Icon className="w-5 h-5 text-app-secondary" />
                  </div>
                )}
                <div className="pb-1 text-lg text-black font-semibold leading-none">{title}</div>
              </div>
            </div>
            <div className="px-5">
              <p className="text-sm leading-normal text-gray-800">
                {children}
                {href && !isBrandingLab && (
                  <Link href={href} className="text-app-secondary ml-1 whitespace-nowrap">
                    read more
                  </Link>
                )}
              </p>
              {isBrandingLab && (
                <Button
                  className="mt-3 !px-6 !py-2 !text-sm text-app-secondary hover:bg-app-secondary hover:text-white border-2 border-app-secondary"
                >
                  Visit website {">"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </NavigationMenuLink>
    </li>
  );
});