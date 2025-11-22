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
    <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 pb-24">
      <div className="mb-12">
        <h2 className="text-2xl font-light tracking-widest text-white font-geist uppercase mb-2">Featured Work</h2>
        <div className="h-px w-24 bg-gradient-to-r from-amber-500 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px] md:[&>*:nth-child(1)]:row-span-2 md:[&>*:nth-child(2)]:row-span-2 md:[&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(5)]:col-span-2 md:[&>*:nth-child(7)]:row-span-2 md:[&>*:nth-child(8)]:row-span-2 md:[&>*:nth-child(8)]:col-span-2">
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
