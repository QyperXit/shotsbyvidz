import React from "react";

import GalleryCard from "../components/GalleryCard";
import items from "../../public/automotive/auto";

type ItemType = (typeof items)[0]; // Assuming items is an array of objects, choose the index that represents one item

const List: React.FC<{
  setSelected: React.Dispatch<React.SetStateAction<ItemType>>;
}> = ({ setSelected }) => {
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
