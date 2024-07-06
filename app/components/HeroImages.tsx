import React, { useEffect, useState } from "react";
import images from "../../public/images/data"; // Import the images array
import Card from "./Card"; // Import the Card component

const HeroImages: React.FC<{
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}> = ({ setSelected }) => {
  const [imageSize, setImageSize] = useState<number | "auto">(600); // Default size for SSR

  useEffect(() => {
    const updateImageSize = () => {
      const size =
        window.innerWidth < 768 ? 300 : window.innerWidth < 1280 ? 600 : "auto";
      setImageSize(size);
    };

    updateImageSize(); // Initial call
    window.addEventListener("resize", updateImageSize);

    return () => {
      window.removeEventListener("resize", updateImageSize);
    };
  }, []);

  return (
    <div className="bg-black p-4 px-[min(5vw,20em)]">
      <div className="gap-5 columns-1 sx:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {images.map((item) => {
          const transformations = `tr=w-${imageSize}`;
          const url = `${item.url}?${transformations}`;

          return (
            <Card
              key={item.id}
              setSelected={setSelected}
              item={{ ...item, url }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroImages;
