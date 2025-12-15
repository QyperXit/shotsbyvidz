"use client";

import React, { useCallback } from "react";

import GalleryCard from "../components/GalleryCard";
import { useGalleryData } from "../hooks/useGalleryData";

type ItemType = {
  id: number;
  url: string;
};

const List: React.FC<{
  setSelected: React.Dispatch<React.SetStateAction<ItemType | null>>;
}> = ({ setSelected }) => {
  const loader = useCallback(
    () =>
      import("../../public/automotive/auto").then((module) => module.default),
    []
  );
  const items = useGalleryData<ItemType[]>("automotive", loader) ?? [];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
      <div className="mb-12">
        <h2 className="text-2xl font-light tracking-widest text-white font-geist uppercase mb-2">Automotive</h2>
        <div className="h-px w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
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
