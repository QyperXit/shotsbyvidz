"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import chaunPolaNeck from "../../public/portraits/me.jpg";
import about from "./about";

const page = () => {
  return (
    <div className="flex  flex-col  max-w-[1440px] mx-auto lg:px-24 xl:px-32 bg-black mb-8 md:flex-row my-auto">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[60%] m-auto  bg-black"
      >
        <Image
          src={chaunPolaNeck}
          width={1080}
          height={1350}
          alt="chaun picture"
          className="object-contain   "
          placeholder="blur"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" bg-[#EEEEEE] flex flex-col justify-center items-center w-[90%] md:w-[60%] px-[2.5em] sm:px-[2em] lg:px-[5em] py-12 lg:py-32 md:py-3 m-auto"
      >
        <h1 className="  text-zinc-700   w-fit text-3xl  text-center mb-6 ">
          {about[0].h1}
        </h1>
        {about[0].info.split("\n").map((line, index) => (
          <p
            className="text-zinc-700 text-sm text-center  mt-2 leading-[1.5rem]"
            key={index}
          >
            {line}
          </p>
        ))}
        <Link
          href="/contact"
          className="bg-[#860C0C]  text-white  px-10 py-5 mt-16 hover:bg-[#880c0c8e] transition duration-200 ease-in"
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
};

export default page;
