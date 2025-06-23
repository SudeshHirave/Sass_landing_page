import React, { useMemo } from 'react';
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Logos } from "@/components/logos"

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh]  p-4 pt-20 mg:pb-10">
        <div className="">
          <div className="flex flex-col">
            <h1 className='text-4xl md:text-6xl mt-2 font-bold tracking-tight text-primary'>
              <span>
                Your app,
              </span><br/>
              <span className=' bg-gradient-to-r from-indigo-500 via-blue-400 to-green-500 bg-clip-text text-transparent'>
                Enterprise Ready.
              </span>
              </h1>
            <p className='text-secondary  md:max-w-xs pt-4 mt-2 text-sm md:text-sm lg:pt-4 w-1/2'>Start selling to enterprise customers with just a few line of code. Implement features like a single sign-on in minutes instead of months. </p>
            <div className=" flex gap-5 pt-7 lg:pt-0">
              <Button className='py-2 px-4 max-w-35 min-w-25 mt-8 '>Get started</Button>
              <Button className='py-2 px-4 max-w-35 min-w-25 mt-8 '>Get started</Button>
            </div>
            <div className="h-70 w-full flex py-auto items-center">
              <button
                className="border pl-2 border-secondary rounded-full text-xs text-secondary h-7 w-1/2 lg:w-1/2 hover:border-neutral-950 transition-colors text-center"
              >
                <span className='h-full w-fit'>Introducing Radar: protect against bots, fraud, abuse:</span>
              </button>
            </div>
            <div className="h-">
              <Logos/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

