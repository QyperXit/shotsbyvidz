"use client";

import React, { useCallback } from "react";

import GalleryCard from "../components/GalleryCard";
import { useGalleryData } from "../hooks/useGalleryData";

type NatureItem = {
  id: number;
  url: string;
  alt: string;
};

interface ListProps {
  setSelected: React.Dispatch<React.SetStateAction<NatureItem | null>>;
}

const List: React.FC<ListProps> = ({ setSelected }) => {
  const loader = useCallback(
    () =>
      import("../../public/nature/nature").then((module) => module.default),
    [],
  );
  const items = useGalleryData<NatureItem[]>("nature", loader) ?? [];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
      <div className="mb-12">
        <h2 className="text-2xl font-light tracking-widest text-white font-geist uppercase mb-2">Nature & Landscape</h2>
        <div className="h-px w-24 bg-gradient-to-r from-indigo-500 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px] md:[&>*:nth-child(1)]:row-span-2 md:[&>*:nth-child(2)]:row-span-2 md:[&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(5)]:col-span-2 md:[&>*:nth-child(7)]:row-span-2 md:[&>*:nth-child(8)]:row-span-2 md:[&>*:nth-child(8)]:col-span-2">
        {items.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
            onSelect={(selectedItem) => setSelected(selectedItem)}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
