'use client';
import { X } from 'lucide-react'
import React, { useState } from 'react'
import Typography from './typography'

function NavBanner() {
    const [isOff, setIsOff] = useState(false);

  return (
    <div className={`w-full py-2 px-4 flex justify-between items-center ${isOff ? "hidden" : "block"} bg-[#1870BA]`}>
        <div></div>
        <div className='flex sm:flex-row flex-col justify-center items-center sm:gap-4 gap-2 text-white'>
            <Typography
                typo="body-medium-medium"
                className='text-center'

            >
                Plan your custom software project with precision
            </Typography>
            <Typography
                typo="body-medium-medium"
                className='md:px-4 px-3 md:py-2 py-1 md:!text-sm !text-[12px] bg-white/30 rounded-xl uppercase'
            >
                Estimate now!
            </Typography>
        </div>
        <button 
            onClick={() => setIsOff(true)}
            className='w-fit p-2 rounded-sm bg-white/40'
        >
            <X color='white' size={18} />
        </button>
    </div>
  )
}

export default NavBanner