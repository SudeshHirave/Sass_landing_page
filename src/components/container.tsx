import { cn } from '@/lib/cn';
import React from 'react'

export const Container = ({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string;
})=>{
    return (
        <div className={cn("max-w-4xl w-full bg-white mx-auto ",className)}>{children}</div>
    )
}