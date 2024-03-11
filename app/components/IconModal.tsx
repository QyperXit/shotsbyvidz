import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SpringModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const IconModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-black grid place-content-center sm:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className=" text-white font-medium  rounded hover:opacity-90 transition-opacity"
      >
        <Image
          src="burger-menu-right-svgrepo-com.svg"
          className="text-white"
          width={28}
          height={28}
          alt="hamburger icon"
        />
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal: React.FC<SpringModalProps> = ({ isOpen, setIsOpen }) => {
  const [menu, setMenu] = useState(false);

  const handleOpen = () => setMenu((prevMenu) => !prevMenu);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setIsOpen(false);
            setMenu((prevMenu) => !prevMenu);
          }}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-black text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="navbar  sm:flex flex-col sm:flex-row  gap-4  justify-center text-3xl  font-abhaya-libre-semibold">
              <div
                onClick={() => {
                  setIsOpen(false);
                  setMenu((prevMenu) => !prevMenu);
                }}
              >
                <BottomLine href="/">Home</BottomLine>
              </div>
              <div
                className="w-fit h-fit"
                // onMouseEnter={() => setMenu(true)}
                // onMouseLeave={() => setTimeout(() => setMenu(false), 7000)} // Delay setting menu to false
                onClick={handleOpen}
              >
                <BottomLine href="#">Galleries</BottomLine>
              </div>

              {menu && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    // style={{ translateX: "-50%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col menu text-2xl"
                  >
                    <Link
                      href="/portraits"
                      className="  text-xl hover:text-amber-400"
                      onClick={() => {
                        setIsOpen(false);
                        setMenu((prevMenu) => !prevMenu);
                      }}
                    >
                      Portraits
                    </Link>
                    <Link
                      href="/stilllife"
                      className=" text-xl hover:text-amber-400"
                      onClick={() => {
                        setIsOpen(false);
                        setMenu((prevMenu) => !prevMenu);
                      }}
                    >
                      Still Life
                    </Link>
                    <Link
                      href="/nature"
                      className=" text-xl hover:text-amber-400"
                      onClick={() => {
                        setIsOpen(false);
                        setMenu((prevMenu) => !prevMenu);
                      }}
                    >
                      Nature & Landscape
                    </Link>
                    <Link
                      href="/automotive"
                      className=" text-xl hover:text-amber-400"
                      onClick={() => {
                        setIsOpen(false);
                        setMenu((prevMenu) => !prevMenu);
                      }}
                    >
                      Automotive
                    </Link>
                    <Link
                      href="/urban"
                      className=" text-xl hover:text-amber-400"
                      onClick={() => {
                        setIsOpen(false);
                        setMenu((prevMenu) => !prevMenu);
                      }}
                    >
                      Urban
                    </Link>
                  </motion.div>
                </AnimatePresence>
              )}
              <div
                onClick={() => {
                  setIsOpen(false);
                  setMenu((prevMenu) => !prevMenu);
                }}
              >
                <BottomLine href="/blog">Blog</BottomLine>
              </div>
              <div
                onClick={() => {
                  setIsOpen(false);
                  setMenu((prevMenu) => !prevMenu);
                }}
              >
                <BottomLine href="/about">About</BottomLine>
              </div>
              <div
                onClick={() => {
                  setIsOpen(false);
                  setMenu((prevMenu) => !prevMenu);
                }}
              >
                <BottomLine href="/contact">Contact</BottomLine>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface BottomLineProps {
  href: string;
  children: React.ReactNode;
}

const BottomLine: React.FC<BottomLineProps> = ({ children, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-fit h-fit"
    >
      <Link href={href} className="relative text-white">
        {children}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-[-10px] left-0 right-0 h-1 origin-left rounded-full bg-amber-400 transition-transform duration-300 ease-out"
        />
      </Link>
    </div>
  );
};

export default IconModal;
