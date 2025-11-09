"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback } from "react";

import { useGalleryData } from "../hooks/useGalleryData";

type BlogItem = {
  id: number;
  url: string;
  title: string;
  description: string;
  tags: string[];
};

const Card = ({ setSelected, item }) => {
  return (
    <div className="inline-block w-full p-4 mb-4 bg-gray-700 bg-opacity-50 rounded-xl ">
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
        onClick={() => {
          setSelected(item);
        }}
      >
        <Image
          src={item.url}
          alt={item.title}
          width={1080}
          height={1080}
          className="w-full rounded-lg shadow-xl cursor-pointer  image-full"
          loading="lazy"
        />
      </motion.div>
      <h3 className="pt-4 mb-1 text-lg font-bold font-arial text-amber-400 weight">
        {item.title}
      </h3>
      <p className="text-gray-200 ">{item.description}</p>
    </div>
  );
};

const List = ({ setSelected }) => {
  const loader = useCallback(
    () =>
      import("../../public/blogPosts/data").then((module) => module.items),
    [],
  );
  const items = useGalleryData<BlogItem[]>("blog", loader) ?? [];

  return (
    <div className="bg-black p-4 px-[min(5vw,20em)] max-w-[75em] mx-auto">
      <div className="gap-5 bg-black  columns-1 md:columns-2">
        {items.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
