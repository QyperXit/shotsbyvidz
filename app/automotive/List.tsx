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
    <div className="bg-black p-4 px-[min(5vw,20em)]">
      <div className="max-w-screen-xl gap-5 mx-auto bg-black columns-1 sx:columns-2 md:columns-3 lg:columns-4 ">
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
