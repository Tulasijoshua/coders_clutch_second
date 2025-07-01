'use client';
import Typography from '@/components/shared/typography';
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
import React from 'react';
import BoardTeam from './board-team';
import ManagementTeam from './management-team';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs-team';

const team_members = [
    {
        id: "1",
        name: "Balamurugan",
        is_board: true,
        title: "Vice President - Product Design",
        img: balaImg,
    },
    {
        id: "2",
        name: "Thiaghu",
        is_board: true,
        title: "VP - Hr & Admin",
        img: thiayaImg,
    },
    {
        id: "3",
        name: "Saravana Kumar",
        is_board: true,
        title: "Director Finance",
        img: saravanaImg,
    },
    {
        id: "4",
        name: "Vijay Kumar",
        is_board: true,
        title: "Associate Vice President - HR",
        img: vijayImg,
    },
    {
        id: "5",
        name: "Arun Palaniappan",
        is_board: true,
        title: "Director - Business Development",
        img: arunaImg,
    },
    {
        id: "6",
        name: "Shankar",
        is_board: true,
        title: "Director - Project Delivery",
        img: shankarImg,
    },
    {
        id: "7",
        name: "Rajagopal",
        is_board: false,
        title: "Director - Product Development",
        img: rajagoImg,
    },
    {
        id: "8",
        name: "Venkateshwaran",
        is_board: false,
        title: "Head of DevOps",
        img: venkateshImg,
    },
    {
        id: "9",
        name: "Selvakumar",
        is_board: false,
        title: "Associate Director - Product Development",
        img: selvaImg,
    },
    {
        id: "10",
        name: "Nirmal Kumar",
        is_board: false,
        title: "Associate Director - Product Development",
        img: nirmalImg,
    },
    {
        id: "11",
        name: "Balamurugan",
        is_board: false,
        title: "Vice President - Product Design",
        img: balaImg,
    },
    {
        id: "12",
        name: "Thiaghu",
        is_board: false,
        title: "VP - Hr & Admin",
        img: thiayaImg,
    },
    {
        id: "13",
        name: "Saravana Kumar",
        is_board: false,
        title: "Director Finance",
        img: saravanaImg,
    },
    {
        id: "14",
        name: "Vijay Kumar",
        is_board: false,
        title: "Associate Vice President - HR",
        img: vijayImg,
    },
]

function BoardManagementMain() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='pops w-[500px] flex flex-col gap-4'>
                <Typography
                    typo="header-3-medium"
                    className='text-gray-700'
                >
                    Leadership & Executive Management
                </Typography>
                <Typography
                    className='!font-light text-gray-700'
                >
                    Meet the experts behind our success—a diverse team of IT professionals dedicated to delivering the best 
                    for our clients.
                </Typography>
            </div>

            <Tabs
                defaultValue="management-team"
                className='pt-8'
            >
                <TabsList>
                    <TabsTrigger
                        value="management-team"
                    >Management</TabsTrigger>
                    <TabsTrigger 
                        value="board-team"
                    >Board</TabsTrigger>
                </TabsList>
                <TabsContent value="management-team">
                    <ManagementTeam />
                </TabsContent>
                <TabsContent value="board-team">
                    <BoardTeam />
                </TabsContent>
            </Tabs>
        </section>
    </div>
  )
}

export default BoardManagementMain

