import React, { useCallback, useEffect, useState } from "react";
import { useGalleryData } from "../hooks/useGalleryData";
import Card from "./Card"; // Import the Card component

type HeroImage = {
  id: number;
  url: string;
  title: string;
  description: string;
  tags: string[];
};

const HeroImages: React.FC<{
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}> = ({ setSelected }) => {
  const [imageSize, setImageSize] = useState<number>(1080); // Default size for SSR
  const loader = useCallback(
    () => import("../../public/images/data").then((module) => module.default),
    []
  );
  const images = useGalleryData<HeroImage[]>("hero-images", loader) ?? [];

  useEffect(() => {
    const updateImageSize = () => {
      const size =
        window.innerWidth < 640 ? 480 : window.innerWidth < 1280 ? 720 : 1080;
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
          const blurDataURL = `${item.url}?tr=w-20,bl-6`;
          return (
            <Card
              key={item.id}
              setSelected={setSelected}
              item={{ ...item, url: url, blurDataURL: blurDataURL }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeroImages;
