'use client';
import Typography from '@/components/shared/typography';
import React from 'react';
import BoardTeam from './board-team';
import ManagementTeam from './management-team';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs-team';

function BoardManagementMain() {
  return (
    <div className='w-full py-20'>
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

