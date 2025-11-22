"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import chaunPolaNeck from "../../public/portraits/me.jpg";
import about from "./about";

const page = () => {
  return (
    <div className="flex flex-col max-w-[1440px] mx-auto lg:px-24 xl:px-32 mb-24 md:flex-row my-auto gap-12 pt-12">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 m-auto px-6 md:px-0"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <Image
            src={chaunPolaNeck}
            width={1080}
            height={1350}
            alt="chaun picture"
            className="object-cover w-full h-full"
            placeholder="blur"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-start w-full md:w-1/2 px-6 md:px-0"
      >
        <h1 className="text-white font-geist text-4xl font-light mb-8 tracking-tight">
          {about[0].h1}
        </h1>
        
        <div className="space-y-6">
          {about[0].info.split("\n").map((line, index) => (
            <p
              className="text-neutral-400 text-base font-geist leading-relaxed"
              key={index}
            >
              {line}
            </p>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-12 group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20"
        >
          <span>Contact Me</span>
          <svg className="w-4 h-4 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
};

export default page;
