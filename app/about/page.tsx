"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import chaunPolaNeck from "../../public/portraits/me.jpg";
import about from "./about";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6 py-24 lg:px-12">
      <div className="w-full max-w-[1200px] bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
        <div className="flex flex-col gap-12 items-center lg:flex-row lg:gap-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-2xl ring-1 ring-white/10 aspect-[4/5]">
              <Image
                src={chaunPolaNeck}
                width={1080}
                height={1350}
                alt="chaun picture"
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                placeholder="blur"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center w-full lg:w-1/2"
          >
            <h1 className="mb-8 text-4xl font-light tracking-tight text-white font-geist">
              {about[0].h1}
            </h1>
            
            <div className="space-y-6">
              {about[0].info.split("\n").map((line, index) => (
                <p
                  className="text-base leading-relaxed text-neutral-400 font-geist"
                  key={index}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="pt-12">
              <Link href="/contact" className="inline-block shiny-cta focus:outline-none">
                <span>Contact Me</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
