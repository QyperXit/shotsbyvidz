import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
  setSelected: (item: any) => void;
  item: any;
}

const Card: React.FC<CardProps> = ({ setSelected, item }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="group relative w-full h-full overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60 cursor-pointer"
      onClick={() => setSelected(item)}
    >
      <Image
        className={`w-full h-full object-cover transition duration-700 group-hover:scale-[1.05] ${
          isLoading ? "scale-110 blur-xl grayscale" : "scale-100 blur-0 grayscale-0"
        }`}
        src={item.url}
        alt={item.title}
        width={800}
        height={800}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        loading="lazy"
        blurDataURL={item.blurDataURL}
        placeholder="blur"
        onLoad={() => setIsLoading(false)}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h4 className="text-lg font-semibold text-white mb-1 font-geist line-clamp-1">
            {item.title}
          </h4>
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-neutral-300 font-geist line-clamp-1">
                {item.description || "ShotsByVidz"}
              </span>
            </div>
            <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Card;
