import Image from "next/image";
import React from "react";

import chaunPolaNeck from "../images/portraits/chaunPolaNeck.jpg";
import about from "./about";

const page = () => {
  return (
    <div className="flex  flex-col  max-w-[1440px] mx-auto lg:px-24 xl:px-32 bg-black mb-8 md:flex-row">
      <div className="w-[60%] m-auto  bg-black">
        <Image
          src={chaunPolaNeck}
          width={1080}
          height={1350}
          alt="chaun picture"
          className="object-contain   "
          placeholder="blur"
        />
      </div>
      <div className=" bg-[#EEEEEE] flex flex-col justify-center items-center w-[90%] md:w-[60%] px-[2.5em] sm:px-[2em] lg:px-[5em] py-12 lg:py-32 md:py-1 m-auto">
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
        <button className="bg-[#860C0C]  text-white  px-10 py-5 mt-16 hover:bg-[#880c0c8e] transition duration-200 ease-in">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default page;
