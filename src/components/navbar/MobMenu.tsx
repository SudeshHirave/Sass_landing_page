
"use client"
import { useState,useEffect } from "react"
import {TABS} from "."
import { HiChevronRight,HiArrowSmLeft, HiMenu,HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {motion,AnimatePresence} from 'motion/react'

export const MobMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState<null | number>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);

  };
  return (
    <>
<motion.button
  onClick={toggleDrawer}
  whileTap={{ scale: 0.9 }}
  className="z-[999] flex justify-center mt-8 mr-2 py-2 rounded-full px-3.5 bg-neutral-200"
>
  <AnimatePresence mode="wait" initial={false}>
    <motion.span
      key={isOpen ? 'menu' : 'close'}
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      exit={{ opacity: 0, rotate: 90 }}
      transition={{ duration: 0.2 }}
      className="flex items-center"
    >
      {(isOpen==true) ? <HiOutlineX className="h-4 text-primary w-4" />: 
         <HiMenu className="h-4 text-primary w-4" />
      }
    </motion.span>
  </AnimatePresence>
</motion.button>
    <div
      className={`fixed inset-0 h-full w-full bg-white transition-all duration-200 ${
        isOpen ? 'block z-20' : 'hidden'
      }`}>
      <AnimatePresence mode="wait">
        <motion.div
            layout
            key={'menu-tabs'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
      {!clicked ? (
        <div className="pl-5 h-17 pt-7">
        <Link 
        href={"#"}
      >
      <Image 
        className="h-10 w-10 "
        src="/webpack.svg"
        height="100"
        width="100"
        alt="CompanyLogo"
        />
        </Link>
        </div>
      ) : <div className="pl-5 h-17 pt-7"><button className="h-10 items-center justift-between flex " onClick={()=>{setClicked(null)}}><HiArrowSmLeft className="w-6"/>Back</button></div>}
        </motion.div>
        </AnimatePresence>
        <hr className="border-t border-dotted border-gray-400 my-4" />
        <div className="p-2 h-full">

        <AnimatePresence>
          <motion.div
            layout
            key={clicked ?? 'menu-tabs'}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="h-full w-full"
          >
            {clicked == null && <Tabs setClicked={setClicked} clicked={clicked} />}
            {clicked && TABS[clicked - 1].component &&
              (() => {
                const Component = TABS[clicked - 1].component;
                return typeof Component === 'function' ? Component() : null;
              })()}
          </motion.div>
        </AnimatePresence>
        </div>

    </div>
    </>
  )
}

interface TabsProps {
  setClicked: React.Dispatch<React.SetStateAction<null | number>>;
  clicked: null | number;
}

const Tabs = ({ setClicked, clicked }: TabsProps) => {
  const router = useRouter();
  return (<>
    {TABS.map((t) => {
      if(!(typeof t.component === "function") ){
        return (
             <div
              key={t.id}>
              <Link
               href={t.href}
              >
            <button 
              onClick={() => {setClicked(clicked ? null : t.id); 
                 router.push(`/${t.href}`);
               }}
              className="w-full p-0 h-17 ">
            <div className="flex px-4 justify-between">
              <div>
                {t.title}
              </div>
              <div>
                { typeof t.component === "function" && <HiChevronRight/>}
              </div>
            </div>
          </button>
              </Link>
            <hr className="border-t border-dotted border-gray-400 my-4" />
            </div>
        )
      }
      return (
            <div
              key={t.id}>
                <button 
                  onClick={() => setClicked(clicked ? null : t.id)}
                  className="w-full p-0 h-17 ">
                <div className="flex px-4 justify-between">
                  <div>
                    {t.title}
                  </div>
                  <div>
                    { typeof t.component === "function" && <HiChevronRight/>}
                  </div>
                </div>
              </button>
            <hr className="border-t border-dotted border-gray-400 my-4" />
            </div>
          )
        })}
            </>
  )
}

