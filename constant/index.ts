import { CloudSunRain, DatabaseZap, HardDriveDownload, Rocket, ShieldCheck } from "lucide-react";

import tataIcon from "@/public/assets/icons/success/tata.svg";
import versaIcon from "@/public/assets/icons/success/versa.png";
import iffIcon from "@/public/assets/icons/success/iff.svg";
import daimlerIcon from "@/public/assets/icons/success/daimler.svg";
import trueIcon from "@/public/assets/icons/success/true.svg";
import mygateIcon from "@/public/assets/icons/success/mygate.svg";
import mirrorIcon from "@/public/assets/icons/top_tier/mirrorfly-logo.png";
import vplayedIcon from "@/public/assets/icons/top_tier/vplayed.png";
import onTheFlyIcon from "@/public/assets/icons/top_tier/on-the-fly-logo.png";
import facebookIcon from "@/public/assets/icons/social_media/facebook.svg"
import instagramIcon from "@/public/assets/icons/social_media/instagram.svg"
import xIcon from "@/public/assets/icons/social_media/twitter.svg"
import youtubeIcon from "@/public/assets/icons/social_media/youtube.svg"
import linkedInIcon from "@/public/assets/icons/social_media/linkedin.svg"
import englishFlag from "@/public/assets/images/countries/engish-flag.png";
import spanishFlag from "@/public/assets/images/countries/espanol-flag.png";
import deutschFlag from "@/public/assets/images/countries/Deutsch-flag.png";
import franceFlag from "@/public/assets/images/countries/france-flag.png";
import japanFlag from "@/public/assets/images/countries/japan-flag.png";
import nederlandFlag from "@/public/assets/images/countries/nederlands-flag.png";

export const languages = [
    {
        id: "1",
        name: "English",
        flag: englishFlag,
        label: "EN",
    },
    {
        id: "2",
        name: "Espanol",
        flag: spanishFlag,
        label: "ES",
    },
    {
        id: "3",
        name: "France",
        flag: franceFlag,
        label: "FR",
    },
    {
        id: "4",
        name: "Deutsch",
        flag: deutschFlag,
        label: "DE",
    },
    {
        id: "5",
        name: "Japan",
        flag: japanFlag,
        label: "JA",
    },
    {
        id: "6",
        name: "Nederland",
        flag: nederlandFlag,
        label: "NE",
    },
]

export const home_services = [
    {
        id: "1",
        title: "Faster Time to Market",
        icon: Rocket
    },
    {
        id: "2",
        title: " Private Cloud",
        icon: CloudSunRain

    },
    {
        id: "3",
        title: "On Premise",
        icon: DatabaseZap
    },
    {
        id: "4",
        title: "100% Secured",
        icon: ShieldCheck
    },
    {
        id: "5",
        title: "Own Your Data and IP",
        icon: HardDriveDownload
    },
    {
        id: "6",
        title: "Our Full Stack Team",
        icon: Rocket
    },
]

export const reasons_global = [
    {
        id: "1",
        rate: "5X",
        title: "Agile Speed to Market.",
    },
    {
        id: "2",
        rate: "100%",
        title: "Customer Success Centric Approach.",
    },
    {
        id: "3",
        rate: "300+",
        title: "Digital Transformation Success Stories.",
    },
    {
        id: "4",
        rate: "99%",
        title: "Advanced CI/CD and Devops Capabilities.",
    },
    {
        id: "5",
        rate: "100%",
        title: "Scalable Micro Services Architecture.",
    },
    {
        id: "6",
        rate: "16+",
        title: "Years of Digital First Approach.",
    },
]

export const customer_growth = [
    {
        id: 1, 
        rate: "4.9",
        title: "Customer Satisfaction Score (CSAT)",
    },
    {
        id: 2, 
        rate: "90%",
        title: "Minimum ROI Guaranteed",
    },
    {
        id: 3, 
        rate: "100%",
        title: "Transparent and Effective Collaboration",
    },
    {
        id: 4, 
        rate: "40+",
        title: "Analytics & Performance Integrations",
    },
    {
        id: 5, 
        rate: "99%",
        title: "Risk Free MVP Launches",
    },
]

export const services = [
    {
        id: "1",
        title: "Small-to-large",
        contents: [
            {
                id: "1",
                title: "Digital Transformation Services for",
                subTitle: "Digital Transformation Services for",
                content: `Every Small to Large Enterprises in the World`,
            },
            {
                id: "2",
                title: "Digital",
                subTitle: "Product Engineering",
                content: `We support you from initial ideation and wireframe design to product development, whether on the cloud or 
                            on-premises. Our approach uses advanced microservices architecture and incorporates CI/CD and DevOps 
                            processes to ensure success through the UAT phase.`,
            },
            {
                id: "3",
                title: "Digital",
                subTitle: "Transformation",
                content: `We help you achieve a smooth transition from legacy systems to modern, scalable solutions with industry-specific integrations. Our data-driven approach brings transparency with comprehensive real-time analytics, designed to improve processes, boost productivity, and maximize ROI.`,
            },
            {
                id: "4",
                title: "Full Stack",
                subTitle: "Software Development",
                content: `We offer a complete suite for B2B and B2C app development with pre-built frontend and backend frameworks. 
                            Our solutions deploy across multi-cloud environments, scaling for millions of users. From MVP to production, 
                            we support customers with flexible pricing to ensure success.`,
            },
            {
                id: "5",
                title: "Cloud",
                subTitle: "and DevOps",
                content: `We specialize in creating cloud-native applications in both SaaS and PaaS models for a global clientele. 
                            Our expertise covers entire DevOps workflows, from CI/CD, containerization, and orchestration, 
                            across major cloud platforms such as AWS, GCP, Azure, and Oracle Cloud.`,
            },
            {
                id: "6",
                title: "AI Agents",
                subTitle: "& RAG",
                content: `We quickly integrate AI capabilities into your organization by developing RAG and AI agents to optimize 
                            processes. This enhances analysis, intelligence application, and workforce productivity. We use top vector 
                            databases and generative AI models for optimal results.`,
            },
            {
                id: "7",
                title: "Platforms and",
                subTitle: "Integration Services",
                content: `We provide integrations with leading platforms to automate and optimize your workflows. Our services include 
                            custom integrations with platforms like ServiceNow, HubSpot, Salesforce, Google Workspace, and major CRMs. 
                            We also support open-source frameworks too.`,
            },
        ]
    },
    {
        id: "2",
        title: "Cybersecurity",
        contents: [
            {
                id: "1",
                title: "Comprehensive",
                subTitle: "Cybersecurity Solutions",
                content: `Protecting your digital assets with end-to-end security services tailored to your business needs.`,
            },
            {
                id: "2",
                title: "Network",
                subTitle: "Security",
                content: `Advanced protection for your network infrastructure against intrusions, malware, and unauthorized access with 24/7 monitoring.`,
            },
            {
                id: "3",
                title: "Data",
                subTitle: "Protection",
                content: `Implementing robust encryption, access controls, and backup solutions to safeguard your critical business data.`,
            },
            {
                id: "4",
                title: "Threat",
                subTitle: "Intelligence",
                content: `Proactive identification and mitigation of emerging cyber threats through continuous monitoring and analysis.`,
            },
            {
                id: "5",
                title: "Compliance",
                subTitle: "and Governance",
                content: `Ensuring your organization meets industry regulations and standards with comprehensive security policies and audits.`,
            },
            {
                id: "6",
                title: "Security",
                subTitle: "Awareness Training",
                content: `Educating your workforce to recognize and respond to security threats, reducing human error risks.`,
            },
            {
                id: "7",
                title: "Incident",
                subTitle: "Response",
                content: `Rapid detection, containment, and recovery from security breaches with our expert incident response team.`,
            },
        ]
    },
    {
        id: "3",
        title: "Data Analytics",
        contents: [
            {
                id: "1",
                title: "Advanced",
                subTitle: "Data Analytics",
                content: `Transforming raw data into actionable insights to drive your business decisions.`,
            },
            {
                id: "2",
                title: "Business",
                subTitle: "Intelligence",
                content: `Comprehensive BI solutions with interactive dashboards and reports for real-time performance tracking.`,
            },
            {
                id: "3",
                title: "Predictive",
                subTitle: "Analytics",
                content: `Leveraging machine learning and statistical models to forecast trends and customer behavior.`,
            },
            {
                id: "4",
                title: "Data",
                subTitle: "Visualization",
                content: `Creating intuitive, interactive visual representations of complex data for better understanding.`,
            },
            {
                id: "5",
                title: "Big Data",
                subTitle: "Solutions",
                content: `Handling massive datasets with distributed computing frameworks for scalable analysis.`,
            },
            {
                id: "6",
                title: "Data",
                subTitle: "Warehousing",
                content: `Designing and implementing optimized data storage solutions for efficient querying and analysis.`,
            },
            {
                id: "7",
                title: "AI-Powered",
                subTitle: "Analytics",
                content: `Enhancing analytical capabilities with artificial intelligence for deeper insights and automation.`,
            },
        ]
    },
    {
        id: "4",
        title: "IT Consulting",
        contents: [
            {
                id: "1",
                title: "Strategic",
                subTitle: "IT Consulting",
                content: `Aligning technology solutions with your business objectives for maximum impact.`,
            },
            {
                id: "2",
                title: "Technology",
                subTitle: "Roadmapping",
                content: `Developing phased implementation plans for your digital transformation journey.`,
            },
            {
                id: "3",
                title: "Infrastructure",
                subTitle: "Optimization",
                content: `Evaluating and improving your IT infrastructure for performance, cost, and scalability.`,
            },
            {
                id: "4",
                title: "Cloud",
                subTitle: "Advisory",
                content: `Guidance on cloud strategy, migration, and optimization across multiple platforms.`,
            },
            {
                id: "5",
                title: "Digital",
                subTitle: "Workplace",
                content: `Enhancing employee productivity with modern collaboration tools and workflows.`,
            },
            {
                id: "6",
                title: "Vendor",
                subTitle: "Management",
                content: `Helping you select and manage technology vendors and service providers.`,
            },
            {
                id: "7",
                title: "IT Cost",
                subTitle: "Optimization",
                content: `Identifying opportunities to reduce technology expenses without compromising capability.`,
            },
        ]
    }
]

export const success_stories = [
    {
        id: "1",
        icon: tataIcon,
        content: `Enabled thousands of IoT devices for Mumbai's smart city initiatives, boosting urban connectivity and efficiency`,
        rate: "500+",
        summary: "IoT Meters Connected",
    },
    {
        id: "2",
        icon: versaIcon,
        content: `Launched an AI-powered SD-WAN & SASE platform that manages IT edge devices for large global enterprises`,
        rate: "120+",
        summary: "Fortune 500 Companies",
    },
    {
        id: "3",
        icon: iffIcon,
        content: `Supports its GCC (Global capability center) through flexible and effective staff augmentations`,
        rate: "50%",
        summary: "of Total Engineers",
    },
    {
        id: "4",
        icon: daimlerIcon,
        content: `Delivered end-to-end Uberization of Trucks platform with advanced fleet management and optimization.`,
        rate: "100K",
        summary: "Bharat Benz Trucks in 3 Countries",
    },
    {
        id: "5",
        icon: trueIcon,
        content: `Built the super app for SE-Asia's largest telecom provider, improving user experience and service capabilities.`,
        rate: "1M+",
        summary: "Concurrent Users",
    },
    {
        id: "6",
        icon: mygateIcon,
        content: `Integrated MirrorFly communication tools from chats to calls hosted on a private cloud.`,
        rate: "5M+",
        summary: "Conversations Delivered",
    },
]

export const digital_solutions = [
    {
        id: "1",
        title: "100% Microservice Architecture",
        contents: [
            "Increased deployment frequency by up to 300%",
            "Reduced the average time to market by 49%",
            "Improved system reliability and reduced downtime by 72%",
            "Achieved 37% reduction in infrastructure costs"
        ]
    },
    {
        id: "2",
        title: "Dedicated Digital Engine for Engineering",
        contents: [
            "Increased development efficiency by 60%",
            "Improved the ability to handle peak loads by 53%",
            "Reduced system downtime by 75% with fault isolation",
            "Achieved a 40% reduction in average response time"
        ]
    },
    {
        id: "3",
        title: "1000+ Agile Enabled Talents and Growing",
        contents: [
            "35% Reduction in time to market with 1000+ agile experts",
            "Up to 50% more productive teams, completing twice as many projects yearly",
            "Curtailing the post-launch defects of products by up to 47%",
            "67% Increase in ability to take on larger, more complex projects."
        ]
    },
]

export const top_tier_products = [
    {
        id: "1",
        img: mirrorIcon,
        title: "Communication Platform as a Service (CPaaS)",
        contents: [
            {
                id: "1",
                title: "500 Millions",
                content: "Conversations Managed and delivered seamlessly without any issue",
            },
            {
                id: "2",
                title: "1000+ Features",
                content: "Ready to deploy in just one sprint with a complete toolkit for all needs.",
            },
            {
                id: "3",
                title: "2 Deployment Models",
                content: "Available in both SaaS and self-hosted deployment options",
            },
        ]
    },
    {
        id: "2",
        img: vplayedIcon,
        title: "OTT and Media Streaming Software",
        contents: [
            {
                id: "1",
                title: "100% White Label",
                content: "Fully customizable software with Netflix-style streaming features",
            },
            {
                id: "2",
                title: "10+ Native Apps",
                content: "Instantly deployable for mobile & TV platforms, offering great user experiences",
            },
            {
                id: "3",
                title: "10+ Monetization Models",
                content: "Supports ads, subscriptions, PPV, Super Thanks, and bulk buy options",
            },
        ]
    },
    {
        id: "3",
        img: onTheFlyIcon,
        title: "SaaS Video Marketing Suite for Businesses",
        contents: [
            {
                id: "1",
                title: "150+ Features",
                content: "From video hosting, sharing, and editing to live webinars, all in one place",
            },
            {
                id: "2",
                title: "10+ Mainstream Channels",
                content: "Stream live and recorded videos across all social platforms in one go",
            },
            {
                id: "3",
                title: "1M+ Concurrent Users",
                content: "Scaled and tested to handle one million simultaneous views from a single stream",
            },
        ]
    },
]

export const culture_cards = [
    {
        id: "1",
        title: "Strong",
        subTitle: "Core Values",
        content: "We work with integrity and purpose, guided by values that shape everything we do.",
    },
    {
        id: "2",
        title: "Positive",
        subTitle: "Work Environment",
        content: "Our workplace is collaborative, supportive, energizing, inspiring creativity and teamwork.",
    },
    {
        id: "3",
        title: "Flat",
        subTitle: "Hierarchy",
        content: "Everyone's voice is heard here, and we collaborate across all levels without any barriers.",
    },
    {
        id: "4",
        title: "Work-Life",
        subTitle: "Balance",
        content: "We prioritize a healthy work-life balance, helping employees grow personally and professionally.",
    },
]

export const social_icons = [facebookIcon, instagramIcon, xIcon, youtubeIcon, linkedInIcon]