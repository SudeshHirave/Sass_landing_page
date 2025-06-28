 
import Image from 'next/image';
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Logos } from "@/components/logos"
import { Features } from '@/components/features';
import { Features2 } from '@/components/features2';
import { CodeBlock } from '@/components/CodeBlock/CodeBlock';
import { CodeBlock2 } from '@/components/CodeBlock/CodeBlock2';
export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh]   pt-24  lg:pb-10 ">
          <div className="flex flex-col px-5 lg:px-30 ">
            <h1 className='text-5xl md:text-6xl mt-2 font-bold tracking-tight text-primary'>
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
              <Button className='py-2 px-4 min-w-35 mt-8 text-black'>Talk to an Expert</Button>
            </div>
            <div className="h-70 w-full flex py-auto items-center">
              <button
                className="border pl-2 border-secondary rounded-full text-xs text-secondary h-7 w-1/2 lg:w-1/2 hover:border-neutral-950 transition-colors text-center"
              >
                <span className='h-full w-fit'>Introducing Radar: protect against bots, fraud, abuse:</span>
              </button>
            </div> 
            <div className=" pb-15"> 
              <Logos/> 
            </div> 
          </div>
            <div className=" pt-20    bg-foregorund px-5 lg:px-30"> 
              <div className="flex  "> 
                <div className="w-1/2  pr-8"> 
                  <h2 className="text-3xl pb-5 text-indigo-500">Theall-in-one solution</h2>
                  <h3 className="text-5xl pb-5 font-boldtext-primary">Enterprise SSO (and a whole lot more)</h3>
                  <p className="text-secondary pb-5">WorkOS is a set ofbuilding blocks for quickly adding enterprise features toyour app. You’ll be shipping quickly with a market-provensolution for your customers.</p>
                  <Button className="hover:bg-indigo-500">Add Single Sign-Onto your app </Button>
                </div>
                <div className="w-1/2 relative flex  items-centerjustify-center item-center">
                  <Image
                    className="absolute z-[2]"
                    src="/6564a28f8383f05a0258710a_stack-1.png"
                    alt="Stack"
                    width={500}
                    height={400}
                  />
                  <Image
                    className="absolute pt-8 z-[1]"
                    src="/6564a28f8383f05a0258710a_stack-1.png"
                    alt="Stack"
                    width={500}
                    height={400}
                  />
                  <Image
                    className="absolute pt-16 z-[0]"
                    src="/6564a28f8383f05a0258710a_stack-1.png"
                    alt="Stack"
                    width={500}
                    height={400}
                  />
                </div>
              </div>
              <div className="py-20 px-auto flex flex-wrap justify-evenly gap-20 space">
                <Features/>
              </div>
            </div>
            <div className=" py-25  px-5 lg:px-30 bg-foregorund2">
              <div className=" mb-2 h-20 flex flex-col justify-center items-center lg:mb-15 ">
                <h2 className="text-glows text-2xl font-bold mb-2 lg:text-3xl " >Developer-first design</h2>
                <h3  className="text-4xl font-bold text-white tracking-tighter lg:text-5xl">A unified platform with modern APIs</h3>
              </div>
              <div className="flex flex-col  lg:flex-row lg:justify-between gap-10 w-full">
                <div className=" labels w-full lg:w-4/10 flex flex-col justify-center items-center gap-2 lg:items-start lg:justify-start">
                  <p className='text-secondary2 text-pretty text-center text-lg lg:text-balance lg:text-left'>WorkOS provides a single, elegant interface that abstracts dozens of enterprise integrations.</p>
                  <div className="flex justify-start gap-2 mt-3">
                    <Button>Read the docs</Button>
                    <Button>Get your API key</Button>
                  </div>
                  <div className="flex items-center justify-center">
                    <Features2/>
                  </div>
                </div>
                <div className="flex flex-col gap-7 w-full lg:w-full lg:max-w-6/10 lg:px-2">
                  <div className=" w-full ">
                    <CodeBlock/>
                  </div>
                  <div className="">
                    <CodeBlock2/>
                  </div>
                </div>
              </div>
            </div>
 
      </Container>
    </div>
  );
}

