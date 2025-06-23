import { cn } from '@/lib/cn';
import React from 'react'
type subCardType = {
    className?:string;
    iconImage: React.ReactNode,
    title:string;
    subtitle:string;
}
export const SubCard = ({className,iconImage,title,subtitle}:subCardType) => {
  return (
    <div className={cn(`flex gap-4 bg-gradient-to-br bg-neutral-100 rounded-md lg:w-2xs h-3xs`,className)}>
        <div className="flex-shrink-0 pl-2 flex items-center justify-center">
            <div className="flex justify-center items-center text-3xl text-neutral-600 lg:text-xl">
            {iconImage}
            </div>
        </div>
        <div className='flex flex-col justify-center '>
            <p className='text-xl text-bold text-primary  lg:text-base'>
                {title}
            </p>
            <p className='text-xs mt-1 text-secondary'>
                {subtitle}
            </p>
        </div>
    </div>
  )
}
