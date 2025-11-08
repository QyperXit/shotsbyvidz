import { motion } from "framer-motion";
import Image from "next/image";

import React, { useEffect, useState } from "react";

interface CardProps {
  setSelected: (item: any) => void; // Define the type of setSelected
  item: any; // Define the type of item
}

const Card: React.FC<CardProps> = ({ setSelected, item }) => {
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loaded to true when the component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="inline-block w-full mb-4">
      <motion.div
        initial={{ width: 0, scale: 0.095, opacity: 0 }}
        animate={{ width: loaded ? "100%" : 0, scale: 1, opacity: 1 }}
        // exit={{ width: 50, transition: { duration: 0.8 } }}
        transition={{ duration: 0.3, delay: 0.003 }} // Add a delay of 0.03 seconds
        whileHover={{
          scale: 1.025,
          opacity: 0.5,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        className="w-full shadow-xl cursor-pointer bg-base-100 image-full"
      >
        <Image
          className={`duration-700 ease-in-out w-full shadow-xl cursor-pointer bg-base-100 image-full ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          src={item.url}
          alt={item.title}
          width={1080}
          height={1080}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 20vw"
          loading="lazy"
          blurDataURL={item.blurDataURL}
          placeholder="blur"
          onLoad={() => setIsLoading(false)}
        />
      </motion.div>
    </div>
  );
};

export default Card;
