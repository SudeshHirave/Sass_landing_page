
"use client"
import { useEffect, useRef,useState} from "react"
import {motion} from "motion/react"

export const Nub = ({ selected }: { selected: number | null }) => {
  const nubref = useRef<null | HTMLSpanElement>(null);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      ref={nubref}
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl shadow-[0px_13px_27px_-5px_rgba(50,50,93,0.25),_0px_8px_16px_-8px_rgba(0,0,0,0.3)] border-[#f6f9fb] bg-[#f6f9fb]"
    />
  );
};