"use client"
import { useState } from "react";
import sample from './sample'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Variants } from "motion/react"
import {motion} from 'motion/react'
type SampleLanguage = keyof typeof sample;

export const CodeBlock = () => {
  const [language, setLanguage] = useState<SampleLanguage>('javascript');
  const [languageDemo, changeDemo] = useState(sample["javascript"]);

  const languages: { title: string; language: SampleLanguage }[] = [
    {title:`Node.js` , language:`javascript`},
    {title:`Ruby` , language:`ruby`},
    {title:`Python` , language:`python`},
    {title:`Go` , language:`go`},
    {title:`PHP` , language:`php`},
    {title:`Java` , language:`java`},
    {title:`.NET` , language:`dotnet`},
    {title:`cURL` , language:`curl`},
  ]

  const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}


  return (
    <motion.div 
    className="rounded-2xl h-full w-full  bg-codebg "
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ amount: 0.8 }}
    >
      <motion.div className=""
        variants={cardVariants} 
      >
       <div className="flex relative items-center justify-between">
                <motion.div
                  className="absolute bg-glows left-0 bottom-0"
                  style={{
                  height: '3px',
                  width: `${100 / languages.length}%`,
                  }}
                  animate={{
                  x: `${languages.findIndex(l => l.language === language) * 100}%`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

             {languages.map((lang, idx) => (
                 <a
                   className="h-full w-full flex items-center cursor-pointer"
                   key={idx}
                   onClick={() => {
                   setLanguage(lang.language);
                   changeDemo(sample[lang.language]);
                   }}
                 >
                   <div className="h-full w-full font-thin text-thinfont py-3 text-center text-base">
                   {lang.title}
                   </div>
                 </a>
             ))}
       </div>
       <div className="h-px bg-border1 w-full" />
       <div className="">
          <SyntaxHighlighter
            language={language}
            showLineNumbers={true}
            wrapLongLines={true}
            wrapLines={true}
            style={dracula}
            customStyle={{
              fontFamily: 'inherit',
              fontWeight: 100, 
              fontSize: '1rem',
              background: '#181b39'
            }}
            >
            {languageDemo}
          </SyntaxHighlighter>
       </div>
      </motion.div>
    </motion.div>
  );
}
