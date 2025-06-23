"use client"
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence,motion } from "motion/react";
import { FiChevronDown } from "react-icons/fi";
import { TABS } from ".";
import { Nub } from "./Nub";


export const Desktopmenu = ()=>{
  const [selected, SetSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"r" | "l" | null>(null);

    const handleSetSelected = (val:number | null) => {
      if(typeof selected === "number" && typeof val === "number"){
        setDir(selected > val ? "r" : "l");
      } else if(val === null){
      setDir(null);
    }
        SetSelected(val);
    }
    
    return (
        <div onMouseLeave={() => {handleSetSelected(null)}}
             className="relative flex w-fit h-fit gap-2"
        >
            {TABS.map((t) => {
                  return (
                    <Tab
                        key={t.id}
                        selected={selected}
                        href={t.href}
                        handleSetSelected={handleSetSelected}
                        tab={t.id}
                        componentPresent={t.component ? true : false}
                    >
                        {t.title}
                    </Tab>
                  )
                }
            )}
            <AnimatePresence>
                {selected && (TABS[selected-1].component) && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    )

}

type TabProps = {
    selected: number | null;
    href: string;
    handleSetSelected: (val: number | null) => void;
    tab: number;
    children: React.ReactNode;
    componentPresent: boolean;
};

const Tab = ({ selected, href, handleSetSelected, tab, children,componentPresent }: TabProps) => {
    return (
      <Link
      id={`shift-tab-${tab}`} 
            href={href}
            onMouseEnter={() => handleSetSelected(tab)}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-200 text-primary"
          : "text-neutral-400"
      }`}
        >
      <span>{children}</span>
      {}
      <>{componentPresent &&
         <FiChevronDown
            className={`transition-transform ${
            selected === tab ? "rotate-180" : ""
          }`}
          />}
      </>
        </Link>
    );
};

const Content = ({
  selected,
  dir,
}: {
  selected: number | null;
  dir: null | "l" | "r";
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
      opacity: 0,
      y: 8,
      }}
      animate={{
      opacity: 1,
      y: 0,
      }}
      exit={{
      opacity: 0,
      y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] rounded-lg border-5 shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)] border-[#f6f9fb] bg-white"
      style={{
      width: "auto",
      height: "auto",
      minWidth: 0,
      minHeight: 0,
      maxWidth: "100vw",
      maxHeight: "80vh",
      zIndex: 50,
      }}
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
      return (
        <div className="overflow-visible" key={t.id}>
        {selected === t.id && (
          <motion.div
          className="w-full h-full"
          initial={{
            opacity: 0,
            x: dir === "l" ? 75 : dir === "r" ? -75 : 0,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          >
          {t.component ? <t.component /> : null}
          </motion.div>
        )}
        </div>
      );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);
