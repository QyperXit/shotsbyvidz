import React from "react";

import GalleryCard from "../components/GalleryCard";
import dataSet from "../../public/portraits/dataSet";

const List = ({ setSelected }) => {
  return (
    <div className="bg-black p-4 px-[min(5vw,20em)]">
      <div className="gap-5 bg-black  columns-1 sx:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {dataSet.map((item) => (
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
