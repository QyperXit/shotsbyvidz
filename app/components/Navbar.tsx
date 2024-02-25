"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// import Link from "next/link";
import React, { useState } from "react";

import "../fontfamily.css";
// import { PortraitsPage } from "../pages/index";
import ExampleWrapper from "./ExampleWrapper";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex sm:flex-col flex-row justify-between sm:justify-center items-center gap-4 bg-black  py-28 px-[min(5vw,20em)] ">
      <Link
        href="/"
        className=" text-white cursor-pointer  hover:text-gray-300 font-abhaya-libre-semibold font-medium  text-2xl sm:text-4xl lg:text-5xl "
      >
        ShotsByVidz
      </Link>
      <ExampleWrapper />

      <div className="navbar  hidden sm:flex flex-col sm:flex-row  gap-12  justify-center  pt-22 font-serif text-lg">
        <BottomLine href="#">Home</BottomLine>{" "}
        <span className=" text-[10px]">◇</span>
        <FlyoutLink href="#" FlyoutContent={GalleriesContent}>
          Galleries
        </FlyoutLink>{" "}
        <span className=" text-[10px]">◇</span>
        <BottomLine href="#">Blog</BottomLine>
        <span className=" text-[10px]">◇</span>
        <BottomLine href="#">About</BottomLine>
        <span className=" text-[10px]">◇</span>
        <BottomLine href="#">Contact</BottomLine>
      </div>
    </nav>
  );
};

// #ffbe1c

interface BottomLineProps {
  children: React.ReactNode;
  href: string;
}

const BottomLine: React.FC<BottomLineProps> = ({ children, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-[-10px] left-0 right-0 h-1 origin-left rounded-full bg-amber-400 transition-transform duration-300 ease-out"
        />
      </a>
    </div>
  );
};

interface FlyoutLinkProps {
  children: React.ReactNode;
  href: string;
  FlyoutContent: React.ComponentType;
}

const FlyoutLink: React.FC<FlyoutLinkProps> = ({
  children,
  href,
  FlyoutContent,
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-0 -right-0 h-1 origin-left scale-x-0 rounded-full bg-amber-400 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GalleriesContent = () => {
  return (
    <div className="w-64 bg-black text-white p-6 shadow-xl border border-white border-width-1">
      <div className="mb-3 space-y-3">
        <Link href="/portraits" className="block  hover:underline">
          Portraits
        </Link>
        <Link href="/stilllife" className="block  hover:underline">
          Still Life
        </Link>
      </div>
      <div className="mb-1 space-y-3">
        <Link href="/nature" className="block hover:underline">
          Nature & Landscape Page
        </Link>
        <Link href="automotive" className="block hover:underline">
          Automotive
        </Link>
        <Link href="/urban" className="block hover:underline">
          Urban
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
