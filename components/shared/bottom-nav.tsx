'use client';
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

function BottomNav() {
    const router = useRouter()
    
  return (
    <div className='sm:hidden block w-full px-4 py-2 bg-white sticky bottom-0 z-50'>
        <Button
            variant="primary"
            size="lg"
            onClick={() => router.push("/contact-us")}
            className='w-full py-3'
        >
            Get In Touch
            <ArrowRight />
        </Button>
    </div>
  )
}

export default BottomNav