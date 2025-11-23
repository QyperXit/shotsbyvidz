import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 pt-16 pb-12 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-semibold text-white font-geist mb-4 block">
              ShotsByVidz
            </Link>
            <p className="text-neutral-400 text-sm font-geist max-w-md">
              Capturing life's most precious moments. Specializing in cinematic wedding videography and immersive event coverage.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-geist">Social</h4>
            <ul className="space-y-3">
              <li>
                <Link href="https://www.instagram.com/shotsbyvidz/" className="text-sm text-neutral-400 hover:text-white transition font-geist flex items-center gap-2">
                  Instagram
                </Link>
              </li>
              {/* Add more social links here if needed */}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-geist">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-neutral-400 hover:text-white transition font-geist">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-neutral-400 hover:text-white transition font-geist">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-500 font-geist">
            © {new Date().getFullYear()} ShotsByVidz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
