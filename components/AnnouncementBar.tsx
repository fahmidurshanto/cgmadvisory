"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnnouncementBar() {
  const textContent = (
    <span className="inline-flex items-center text-xs sm:text-sm tracking-tight whitespace-nowrap mx-8">
      <span className="font-extrabold text-[#07162c]">CGM Advisory Pte. Ltd.</span>
      <span className="text-slate-400 font-light mx-2">—</span>
      <span className="text-[#0b3b60] font-medium">Strategic Business &amp; Legal Solutions for a Changing World</span>
      <span className="text-amber-500 font-bold ml-6 mr-2">✦</span>
      <span className="text-slate-600 font-normal">Singapore Headquarters · Solicitor-Backed Legal Documentation · Corporate Secretarial · Commercial Event Management</span>
    </span>
  );

  return (
    <div className="w-full h-10 sm:h-11 bg-[#f0f5fa] border-b border-slate-200/90 shadow-xs flex items-center overflow-hidden select-none">
      <motion.div
        className="flex items-center whitespace-nowrap shrink-0 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        {textContent}
        {textContent}
        {textContent}
        {textContent}
      </motion.div>
    </div>
  );
}
