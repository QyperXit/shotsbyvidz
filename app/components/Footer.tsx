import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-black flex-col items-center gap-6  py-4   mt-auto">
      <h1 className=" text-gray-600  font-medium text-3xl  font-sans">
        Follow me on Instagram
      </h1>
      <Link href="https://www.instagram.com/shotsbyvidz/">
        <Image
          src="instagram-167-svgrepo-com.svg"
          alt="instagram logo"
          className="my-4"
          width={28}
          height={28}
        />
      </Link>
      <div className="share mr-auto px-[min(5vw,20em)] flex items-center gap-4">
        <Image
          src="share-svgrepo-com.svg"
          alt="instagram logo"
          className="my-4"
          width={28}
          height={28}
        />
        <Link href="https://www.instagram.com/shotsbyvidz/">
          <Image
            src="/instagram-svgrepo-com.svg"
            alt="Instagram Logo"
            width={28}
            height={28}
            className="my-4"
          />
        </Link>
        <p className=" text-gray-600 ">ShotsbyVidz</p>
      </div>
    </div>
  );
};

export default Footer;
