"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export interface GalleryItem {
  id: string | number;
  url: string;
  alt?: string;
  title?: string;
  blurDataURL?: string;
  width?: number;
  height?: number;
}

interface GalleryCardProps<T extends GalleryItem> {
  item: T;
  onSelect: (item: T) => void;
  sizes?: string;
  className?: string;
  imageClassName?: string;
}

const responsiveSizes =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 20vw";

const GalleryCard = <T extends GalleryItem>({
  item,
  onSelect,
  sizes = responsiveSizes,
  className = "",
  imageClassName = "",
}: GalleryCardProps<T>) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`group relative w-full h-full overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60 cursor-pointer ${className}`}
      onClick={() => onSelect(item)}
    >
      <Image
        src={item.url}
        alt={item.alt || item.title || "Gallery item"}
        width={item.width ?? 1080}
        height={item.height ?? 1080}
        loading="lazy"
        sizes={sizes}
        blurDataURL={item.blurDataURL}
        placeholder={item.blurDataURL ? "blur" : "empty"}
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full object-cover transition duration-700 group-hover:scale-[1.05] ${
          isLoading
            ? "scale-110 blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        } ${imageClassName}`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {item.title && item.title !== "Untitled" && (
            <h4 className="text-lg font-semibold text-white mb-1 font-geist line-clamp-1">
              {item.title}
            </h4>
          )}
          <div className="flex items-center justify-between mt-2">
            <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6"></path>
                <path d="M9 21H3v-6"></path>
                <path d="M21 3l-7 7"></path>
                <path d="M3 21l7-7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default GalleryCard;
