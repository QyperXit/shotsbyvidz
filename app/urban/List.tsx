"use client";

import React, { useCallback } from "react";

import GalleryCard from "../components/GalleryCard";
import { useGalleryData } from "../hooks/useGalleryData";

type UrbanItem = {
  id: number;
  url: string;
};

interface ListProps {
  setSelected: React.Dispatch<React.SetStateAction<UrbanItem | null>>;
}

const List: React.FC<ListProps> = ({ setSelected }) => {
  const loader = useCallback(
    () => import("../../public/urban/urban").then((module) => module.default),
    [],
  );
  const items = useGalleryData<UrbanItem[]>("urban", loader) ?? [];

  return (
    <div className="bg-black p-4 px-[min(5vw,20em)]">
      <div className=" columns-1 sx:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 bg-black">
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
