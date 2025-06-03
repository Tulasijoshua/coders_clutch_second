'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import React from 'react';

function SeeResults() {
  return (
    <Card className='w-full py-12 bg-app-primary '> 
        <CardContent className='md:w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center gap-8'>
            <div className='flex flex-col text-white'>
                <Typography
                    typo="header-2-semibold"
                >
                    Ready to See the Results?
                </Typography>
                <Typography
                    typo="header-2-semibold"
                >
                    Start Your PoC Now!
                </Typography>
            </div>
            <Button
                variant="primary"
                className='text-lg'
            >
                Request Your PoC Today!
            </Button>
        </CardContent>
    </Card>
  )
}

export default SeeResults