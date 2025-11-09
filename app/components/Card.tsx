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
        transition={{ duration: 0.3, delay: 0.003 }}
        whileHover={{
          scale: 1.05, // Slightly more zoom
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)", // Add shadow
          zIndex: 20, // Ensure it pops forward on hover
          transition: {
            duration: 0.2,
            type: "spring",
            stiffness: 400,
          },
        }}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.1 },
        }}
        onClick={() => setSelected(item)}
        className="w-full overflow-hidden rounded shadow-lg cursor-pointer bg-base-100 image-full"
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
