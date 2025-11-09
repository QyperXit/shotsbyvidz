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
    <div className={`inline-block w-full mb-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => onSelect(item)}
        className="w-full shadow-xl cursor-pointer image-full"
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
          className={`duration-700 ease-in-out w-full shadow-xl cursor-pointer image-full ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          } ${imageClassName}`}
        />
      </motion.div>
    </div>
  );
};

export default GalleryCard;
