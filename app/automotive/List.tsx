"use client";

import React, { useEffect, useState } from "react";

import GalleryCard from "../components/GalleryCard";

type ItemType = {
  id: number;
  url: string;
};

const List: React.FC<{
  setSelected: React.Dispatch<React.SetStateAction<ItemType | null>>;
}> = ({ setSelected }) => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    let isMounted = true;
    import("../../public/automotive/auto")
      .then((module) => {
        if (isMounted) {
          setItems(module.default);
        }
      })
      .catch(() => {
        if (isMounted) {
          setItems([]);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

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
