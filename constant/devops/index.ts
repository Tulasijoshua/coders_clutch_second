import myGate from "@/public/assets/images/security-cloud/mygate_logo.png"; 
import myGate_screen from "@/public/assets/images/security-cloud/mygate_screen.png"; 
import daimler_screen from "@/public/assets/images/security-cloud/diamler_screen.png"; 
import daimler from "@/public/assets/images/security-cloud/daimler_logo.png"; 
import fttr_screen from "@/public/assets/images/security-cloud/fittr_screen.png"; 
import fttr from "@/public/assets/images/security-cloud/fittr_logo.png"; 
import versa_screen from "@/public/assets/images/security-cloud/versa_screen.png"; 
import versa from "@/public/assets/images/security-cloud/versa_logo.png"; 


export const achievements = [
    {
        id: "1",
        logo: myGate,
        screen: myGate_screen,
        contents: [
            {
                id: "1",
                title: "About",
                description: `India’s most downloaded (5M+ downloads) Security, ERP & accounting app for housing societies`,
            },
            {
                id: "2",
                title: "Solutions",
                description: `Replaced token-based validation systems with in-app chat, video, and voice-based verification processes across Android, iOS, and the web.`,
            },
        ],
        business: [
            {
                id: "1",
                rate: "3.5M+",
                title: "Homes Connected"
            },
            {
                id: "2",
                rate: "150+",
                title: "Real-Time Features"
            },
            {
                id: "3",
                rate: "2M+",
                title: "Check-in requests Handled"
            },
        ],
    },
    {
        id: "2",
        logo: daimler,
        screen: daimler_screen,
        contents: [
            {
                id: "1",
                title: "About",
                description: `Daimler Trucks is the world’s largest commercial vehicle manufacturer in 2022.`,
            },
            {
                id: "2",
                title: "Solutions",
                description: `8+ Enterprise-Grade Fleet Management Solutions built with DevOps services to track & monitor heavy-duty trucks.`,
            },
        ],
        business: [
            {
                id: "1",
                rate: "100K",
                title: "Vehicles-  24/7 Monitoring"
            },
            {
                id: "2",
                rate: "5X",
                title: "Increase in Connectivity"
            },
            {
                id: "3",
                rate: "12x",
                title: "Reduction in Maintenance Cost"
            },
        ],
    },
    {
        id: "3",
        logo: fttr,
        screen: fttr_screen,
        contents: [
            {
                id: "1",
                title: "About",
                description: `An app to make 50 million people fit and create 100,000+ meaningful career opportunities in the fitness industry.`,
            },
            {
                id: "2",
                title: "Solutions",
                description: `Built feature-rich video & voice SDKs for one-to-one group chat features with our DevOps development services. `,
            },
        ],
        business: [
            {
                id: "1",
                rate: "2M+",
                title: "App installations"
            },
            {
                id: "2",
                rate: "10X",
                title: "More Engagement"
            },
            {
                id: "3",
                rate: "50K+",
                title: "Daily concurrent users"
            },
        ],
    },
    {
        id: "4",
        logo: versa,
        screen: versa_screen,
        contents: [
            {
                id: "1",
                title: "About",
                description: `Versa Networks is a global leader in SASE & SD-WAN — backed by top investors like Sequoia Capital and Verizon Ventures.`,
            },
            {
                id: "2",
                title: "Solutions",
                description: `Designed a DevOps-based SD-WAN cloud solution to remotely control, monitor analytics & diagnose from anywhere in the world.`,
            },
        ],
        business: [
            {
                id: "1",
                rate: "05",
                title: "Minutes installation time"
            },
            {
                id: "2",
                rate: "100+",
                title: "Service providers acquired"
            },
            {
                id: "3",
                rate: "24/7",
                title: "Real-time monitoring"
            },
        ],
    },
]