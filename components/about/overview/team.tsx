
'use client';
import React, { useState } from 'react'
import linkedIcon from "@/public/assets/icons/career_icons/linkedin.svg";
import balaImg from "@/public/assets/images/about/team/bala-murugan.png"
import thiayaImg from "@/public/assets/images/about/team/thiyagu.png"
import saravanaImg from "@/public/assets/images/about/team/saravana-kumar.png"
import vijayImg from "@/public/assets/images/about/team/vijaykumar-rk.png"
import arunaImg from "@/public/assets/images/about/team/arunachalam.png"
import shankarImg from "@/public/assets/images/about/team/shankar.png"
import rajagoImg from "@/public/assets/images/about/team/rajagopal.png"
import venkateshImg from "@/public/assets/images/about/team/venkatesh.png"
import selvaImg from "@/public/assets/images/about/team/selvakumar.png"
import nirmalImg from "@/public/assets/images/about/team/nirmal-kumar.png"
import Typography from '@/components/shared/typography'
import Image from 'next/image';
import { TeamDetailModal } from './team-modal';
import { TeamMember } from '@/type';



const team_members: TeamMember[] = [
    {
        id: "1",
        name: "Balamurugan",
        title: "Vice President - Product Design",
        img: balaImg,
        description: [
            `Dr. Fumbi Chima is a globally recognized technology executive with a proven track record of leading digital transformation, driving operational excellence, and aligning technology innovation with business strategy. With extensive experience spanning retail, consumer goods, financial services, and media, she has successfully spearheaded P&L management, M&A initiatives, and large-scale enterprise transformations across some of the world's most recognized brands.`,
            `Fumbi has held leadership roles at Boeing Credit Union (BECU), adidas, Fox Networks, Burberry, Walmart, and American Express, where she has been instrumental in optimizing infrastructure, implementing cutting-edge digital strategies, and fostering a culture of innovation and high performance. She is a thought leader in AI, cybersecurity, and digital transformation, recognized for her ability to bridge the gap between technology and business to create sustainable value and competitive advantage.`,
            `Fumbi serves on the board of directors of a number of public and private companies during her career, including Willis Towers Watson Public Limited Company (NASDAQ: WTW), a financial services company. Previously, Ms. Chima served as a member of the board of directors of Whitbread PLC (LSE: WTB), a hospitality company; AZEK Company Inc. (NYSE: AZEK), a manufacturer of residential and commercial building products, Ted Baker PLC (LSE: TED (formerly)), a clothing company, and Africa Prudential PLC (Nigerian Stock Exchange: AFRIPRUD), a business service company; leveraging her expertise to shape corporate governance, digital strategy, and risk management.`,
            `She is also a dedicated advocate for diversity and inclusion in technology, actively supporting initiatives that empower women and underrepresented communities.`,
            `Fumbi holds a Doctor of Letters in Business and Politics from the University of Hull, along with executive management certifications from Harvard Business School. She has been recognized by American Banker, Puget Sound Business Journal, Savoy Magazine, and Career Communications Group for her leadership and contributions to the industry.`,
        ]
    },
    {
        id: "2",
        name: "Thiaghu",
        title: "VP - Hr & Admin",
        img: thiayaImg,
        description: [
            `Chiugo has been involved in several transformational projects in the Nigerian banking industry and possesses in-depth knowledge and experience in Financial Control, Mergers and Acquisition, Investor Relations and Business Transformation.`,
            `Chiugo holds a First-Class honours degree in Engineering from the University of Nigeria Nsukka, and a Master of Business Administration degree from the University of Lagos. He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), Chartered Institute of Bankers of Nigeria (CIBN) and Chartered Institute of Taxation of Nigeria (CITN).`,
            `Chiugo’s career spans over 25 years in Banking and Investment Management. He is currently the Group Executive Director in Heirs Holdings Limited. Prior to joining Heirs Holdings, he functioned as the Group Executive Director, Treasury & International Banking at United Bank of Africa, UBA, where he was responsible for the Treasury Business across the Group. He was also responsible for the bank’s international subsidiaries – UBA America, UBA UK, UBA France, and UBA Dubai. At UBA, he had previously functioned as Executive Director, Group Chief Operating Officer and Group Executive, Transformation & Resources.`,
            `Before joining UBA, Chiugo worked in former Diamond Bank Plc (now merged with Access Bank Plc) and played various roles including Executive Director, Chief Financial Officer, and Group Financial Controller.`,
            `Chiugo currently sits on the Board of several companies including Transcorp Plc and United Capital Plc.`,
        ]
    },
    {
        id: "3",
        name: "Saravana Kumar",
        title: "Director Finance",
        img: saravanaImg,
        description: [
            `Samuel Nwanze is the Executive Director and Chief Financial Officer at Energies Limited. Prior to this role, he was the Director of finance and Investments at Heirs Holdings, a leading investment company focused on long-term investments across Africa. He also served as CEO of HH Capital Ltd; and Acting CEO of Tenoil Energy & Petroleum Services Ltd, which owns and manages the ATA Marginal Field and OPL2008. As Director, Finance and Investments he was responsible for administrating and managing the Group’s overall financial activities, strategy and investment programs. Samuel has also served as Group Treasurer of Bank PHB where he was responsible for the overall management of Treasury for the Banking Group across Africa including its non-bank related subsidiaries. He has also served in various capacities in the banking industry which include heading Strategy & Performance Mgt; functioning as the Chief Financial Officer; managing Corporate Execution and M&A; and leading a number of local, regional and international deals and projects.`,
            `In his role as Chief Investment Officer of the Heirs Holdings Group and The Tony Elumelu Foundation, Samuel has originated and executed a number of landmark investments which have gained international recognition. He successful led the deal completion of acquisition of 45% participating interest of Shell, TOTAL and ENI in the OML17 JV and raised $2.5 billion in financing for the transaction from international financiers in the US, Europe, Middle East, Asia and Africa. Samuel was also a leading part of a core team that successful transformed an ailing bank and positioned it as one of the major leaders in the Nigeria. He has worked on a number of green and brownfield investments/projects covering Oil & Gas, Power, Agriculture, Real Estate, Hospitality, Healthcare, Technology, Financial Services and Impact Investing. Most of his work has been done in various markets across Africa but he has been involved in other projects in the US, UK and India.`,
            `He is a speaker at various regional and international conferences on issues that relate to investment, economic development and business management on the African continent. He has spoken at the Africa Union, United Nations Economic Commission for Africa, The Milken Institute, Investor Conferences, etc. He is a regular faculty at the Oxford Said Business School’s Impact Investing Programme. Samuel has extensive board-level experience as he sits on the board of a number of companies in multiple sectors both in Nigeria (where is also Chairs a number of board committees), Africa and in the US including the first African to be nominated to the board of the Global Impact Investing Network (GIIN).`,
            `He has a Masters in Finance and Management from Cranfield University in the UK where he won awards as the best graduating student and a prestigious annual award for academic excellence, bestowed by the Association of Corporate Treasurers (ACT) of the United Kingdom. Samuel is an Alumnus of Harvard Business School, IESE Business School and the Lagos Business School. He has completed the Advanced Management Program (Harvard) and the Global CEO Program (IESE & LBS). He is also a Chartered Alternative Investment Analyst (CAIA), Member of the Institute of Directors (IoD), a Member of the Society of Petroleum Engineers (SPE), Fellow of the Institute of Credit Administration, Associate of the Nigerian Institute of Management (Chartered), Associate of the Certified Pension Institute of Nigeria (CPIN) and Fellow of the Chartered Institute of Management Accountants (CIMA) and Chartered Global Management Accountant (CGMA) UK.`,
        ]
    },
    {
        id: "4",
        name: "Vijay Kumar",
        title: "Associate Vice President - HR",
        img: vijayImg,
        description: [
            `Samuel Nwanze is the Executive Director and Chief Financial Officer at Energies Limited. Prior to this role, he was the Director of finance and Investments at Heirs Holdings, a leading investment company focused on long-term investments across Africa. He also served as CEO of HH Capital Ltd; and Acting CEO of Tenoil Energy & Petroleum Services Ltd, which owns and manages the ATA Marginal Field and OPL2008. As Director, Finance and Investments he was responsible for administrating and managing the Group’s overall financial activities, strategy and investment programs. Samuel has also served as Group Treasurer of Bank PHB where he was responsible for the overall management of Treasury for the Banking Group across Africa including its non-bank related subsidiaries. He has also served in various capacities in the banking industry which include heading Strategy & Performance Mgt; functioning as the Chief Financial Officer; managing Corporate Execution and M&A; and leading a number of local, regional and international deals and projects.`,
            `In his role as Chief Investment Officer of the Heirs Holdings Group and The Tony Elumelu Foundation, Samuel has originated and executed a number of landmark investments which have gained international recognition. He successful led the deal completion of acquisition of 45% participating interest of Shell, TOTAL and ENI in the OML17 JV and raised $2.5 billion in financing for the transaction from international financiers in the US, Europe, Middle East, Asia and Africa. Samuel was also a leading part of a core team that successful transformed an ailing bank and positioned it as one of the major leaders in the Nigeria. He has worked on a number of green and brownfield investments/projects covering Oil & Gas, Power, Agriculture, Real Estate, Hospitality, Healthcare, Technology, Financial Services and Impact Investing. Most of his work has been done in various markets across Africa but he has been involved in other projects in the US, UK and India.`,
            `He is a speaker at various regional and international conferences on issues that relate to investment, economic development and business management on the African continent. He has spoken at the Africa Union, United Nations Economic Commission for Africa, The Milken Institute, Investor Conferences, etc. He is a regular faculty at the Oxford Said Business School’s Impact Investing Programme. Samuel has extensive board-level experience as he sits on the board of a number of companies in multiple sectors both in Nigeria (where is also Chairs a number of board committees), Africa and in the US including the first African to be nominated to the board of the Global Impact Investing Network (GIIN).`,
            `He has a Masters in Finance and Management from Cranfield University in the UK where he won awards as the best graduating student and a prestigious annual award for academic excellence, bestowed by the Association of Corporate Treasurers (ACT) of the United Kingdom. Samuel is an Alumnus of Harvard Business School, IESE Business School and the Lagos Business School. He has completed the Advanced Management Program (Harvard) and the Global CEO Program (IESE & LBS). He is also a Chartered Alternative Investment Analyst (CAIA), Member of the Institute of Directors (IoD), a Member of the Society of Petroleum Engineers (SPE), Fellow of the Institute of Credit Administration, Associate of the Nigerian Institute of Management (Chartered), Associate of the Certified Pension Institute of Nigeria (CPIN) and Fellow of the Chartered Institute of Management Accountants (CIMA) and Chartered Global Management Accountant (CGMA) UK.`
        ]
    },
    {
        id: "5",
        name: "Arun Palaniappan",
        title: "Director - Business Development",
        img: arunaImg,
        description: [
            `Anant, a seasoned financial services & Technology professional with 3 decades of experience. Anant brings a wealth of diverse expertise from his global banking career. He has held various significant positions at UBA since 2008, including Advisor to the Chairman of Heirs Holdings, Group Head of Consumer Lending Business, Group Executive Digital & Consumer Banking, Chief of Staff to the UBA Group Chairman, and Director of the Global Shared Services Centre.`,
            `Anant has a proven track record in a myriad of disciplines including banking operations & technology, digital transformation, operations transformation, lending and payment products, payment systems, strategy development and execution, financial inclusion, global business delivery, process reengineering, change management, credit and risk, data governance, strategy & analytics, blockchain, project management, design thinking, agile and scrum methodologies, risk management, compliance and control. He is also an Executive Coach.`,
            `Before joining UBA, Anant had a distinguished 14-year career with Citibank in India, specializing in Operations and Technology. He successfully delivered largescale transformational offshore projects for Citigroup across the EMEA and Asia Pacific regions.`,
            `Anant holds a Master of Commerce and an MBA from the Sri Sathya Sai Institute of Higher Learning in India.`,
            `His leadership style focuses on coaching for self, individual, and team transformation, and he is actively involved in non-profit projects in the fields of edu-care, socio-care, and healthcare. His is an Executive Director and Board Member at Heirs Technologies brings a wealth of experience and expertise to the Tech company.`,
        ]
    },
    {
        id: "6",
        name: "Shankar",
        title: "Director - Project Delivery",
        img: shankarImg,
        description: [
            `Obong, CEO of Heirs Technology Limited, leads the Company's expansion into Business Transformation and Consulting, Managed Services, and Licensing and Renewals. Previously, as Managing Director at Africa Prudential Plc, he drove digital transformation, broadening its services.`,
            `At Heirs Holdings, he oversaw legal affairs across diverse sectors, including Financial Services and Oil & Gas. With 22 years of experience, Obong's roles at United Bank for Africa Plc and other firms have honed his expertise in legal practice, banking, and strategy. He also serves as a Non-Executive Director at Afriland Properties Plc and Redtech Limited.`,
            `Obong holds degrees from the Nigerian Law School, University of Liverpool, Lagos Business School, IESE Business School, and Massachusetts Institute of Technology, specializing in Innovation & Design Thinking.`,
        ]
    },
]

function TeamSection() {
    const [openDetail, setOpenDetail] = useState(false);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    const handleMemberClick = (member: TeamMember): void => {
        setSelectedMember(member);
        setOpenDetail(true);
    };
    
  return (
    <div className='w-full xl:py-16 py-10 bg-[#F4F4F4]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col md:gap-4 gap-3'>
            <Typography
                typo="header-2-semibold"
                className='text-center'
            >
                Our Leadership Team
            </Typography>

            <div className='w-full xl:pt-8 xs:pt-4 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 xs:gap-20 gap-4'>
                {team_members.map((data, index) => (
                    <div 
                        onClick={() => handleMemberClick(data)}
                        className='bg-white rounded-2xl shadow-md cursor-pointer'
                        key={data.id}
                    >
                        <div className='w-full h-[370px]'>
                            <Image 
                                src={data.img}
                                alt={`${data.name} ${index+1}`}
                                className='w-full h-full object-cover object-top rounded-2xl'
                            />
                        </div>
                        <div className='w-full px-6 xs:py-6 py-3 flex flex-col space-y-1'>
                            <div className='w-full flex justify-between items-center gap-3'>
                                <Typography
                                    typo="header-6-semibold"
                                    className='text-gray-600 !font-bold'
                                >
                                    {data.name}
                                </Typography>
                                <div className='w-6 h-fit'>
                                    <Image 
                                        src={linkedIcon}
                                        alt='LinkedIn'
                                        className='w-full h-full'
                                    />
                                </div>
                            </div>
                            <Typography
                                typo="body-medium-medium"
                                className='text-gray-500'
                            >
                                {data.title}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <TeamDetailModal 
            open={openDetail} 
            setOpen={setOpenDetail} 
            member={selectedMember} 
        />
    </div>
  )
}

export default TeamSection