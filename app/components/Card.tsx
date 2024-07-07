import { motion } from "framer-motion";
import Image from "next/image";
import { imageKitLoader } from "../utils/imageLoader"; // Adjust the path based on your directory structure

import React, { useEffect, useState } from "react";

interface CardProps {
  setSelected: (item: any) => void; // Define the type of setSelected
  item: any; // Define the type of item
}

const Card: React.FC<CardProps> = ({ setSelected, item }) => {
  const [loaded, setLoaded] = useState(false);

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
          className="w-full shadow-xl cursor-pointer bg-base-100 image-full"
          src={item.url}
          alt={item.title}
          width={1080}
          height={1080}
          loading="lazy"
          blurDataURL={item.blurDataURL}
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
};

export default Card;
