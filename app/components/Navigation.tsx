"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopGalleryOpen, setDesktopGalleryOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryLinks = [
    { name: "Portraits", href: "/portraits" },
    { name: "Still Life", href: "/stilllife" },
    { name: "Nature & Landscape", href: "/nature" },
    { name: "Automotive", href: "/automotive" },
    { name: "Urban", href: "/urban" },
  ];

  return (
    <>
      <header
        // className={`sticky top-0 z-50 transition-all duration-300 ${
        //   isScrolled
        //     ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/5"
        //     : "bg-transparent"
        // }`}

        className={`sticky top-0 z-50 transition-all duration-300 bg-neutral-950/80 backdrop-blur-md border-b border-white/5`}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between animate-fade-slide-in">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight text-white font-geist"
          >
            ShotsByVidz
          </Link>

          {/* Desktop Nav */}
          <nav className="items-center hidden gap-8 md:flex">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors font-geist ${
                pathname === "/"
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Galleries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopGalleryOpen(true)}
              onMouseLeave={() => setDesktopGalleryOpen(false)}
            >
              <button
                onClick={() => setDesktopGalleryOpen(!desktopGalleryOpen)}
                className={`text-sm font-medium transition-colors font-geist flex items-center gap-1 ${
                  pathname.includes("/portraits") ||
                  pathname.includes("/stilllife") ||
                  pathname.includes("/nature") ||
                  pathname.includes("/automotive") ||
                  pathname.includes("/urban")
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Galleries
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${
                    desktopGalleryOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <AnimatePresence>
                {desktopGalleryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute w-48 pt-4 -translate-x-1/2 left-1/2 top-full"
                  >
                    <div className="p-2 overflow-hidden border shadow-xl bg-neutral-900/90 backdrop-blur-xl border-white/10 rounded-xl">
                      {galleryLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-sm transition-colors rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 font-geist"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors font-geist ${
                pathname === "/blog"
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors font-geist ${
                pathname === "/about"
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors font-geist ${
                pathname === "/contact"
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <line x1="4" x2="20" y1="12" y2="12" />
              )}
              {!mobileMenuOpen && <line x1="4" x2="20" y1="6" y2="6" />}
              {!mobileMenuOpen && <line x1="4" x2="20" y1="18" y2="18" />}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 p-4 md:hidden z-40 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium transition-colors rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 font-geist"
              >
                Home
              </Link>

              {/* Mobile Galleries Accordion */}
              <div>
                <button
                  onClick={() => setMobileGalleryOpen(!mobileGalleryOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium transition-colors rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 font-geist"
                >
                  Galleries
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      mobileGalleryOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileGalleryOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 py-1 pl-4">
                        {galleryLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-2 text-sm transition-colors rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 font-geist"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium transition-colors rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 font-geist"
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium transition-colors rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 font-geist"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium transition-colors rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 font-geist"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
