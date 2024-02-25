import React from "react";
import Card from "./Card"; // Import the Card component

import images from "../../public/images/data";

interface HeroImagesProps {
  setSelected: React.Dispatch<React.SetStateAction<any>>; // Update any to the appropriate type
}

const HeroImages: React.FC<HeroImagesProps> = ({ setSelected }) => {
  return (
    <div className="bg-black p-4 px-[min(5vw,20em)]">
      <div className="columns-1 sx:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5">
        {images.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HeroImages;
