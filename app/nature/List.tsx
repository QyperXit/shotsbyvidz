"use client";

import React, { useEffect, useState } from "react";

import GalleryCard from "../components/GalleryCard";

type NatureItem = {
  id: number;
  url: string;
  alt: string;
};

interface ListProps {
  setSelected: React.Dispatch<React.SetStateAction<NatureItem | null>>;
}

const List: React.FC<ListProps> = ({ setSelected }) => {
  const [items, setItems] = useState<NatureItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    import("../../public/nature/nature")
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
      <div className="gap-5 bg-black  columns-1 sx:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
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
