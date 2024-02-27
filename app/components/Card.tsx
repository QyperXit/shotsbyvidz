import { motion } from "framer-motion";
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
    <div className="mb-4 w-full inline-block">
      <motion.img
        initial={{ width: 0, scale: 0.095, opacity: 0 }}
        animate={{ width: loaded ? "100%" : 0, scale: 1, opacity: 1 }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
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
        src={item.url}
        alt={item.title}
        className="w-full bg-base-100 shadow-xl image-full cursor-pointer"
      />
    </div>
  );
};

export default Card;
