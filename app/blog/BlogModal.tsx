import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";

import {
    type BlogPost,
    getBlogImageUrl,
} from "./data/posts";

type BlogModalProps = {
  selected: BlogPost | null;
  setSelected: (post: BlogPost | null) => void;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const BlogModal = ({ selected, setSelected }: BlogModalProps) => {
  useEffect(() => {
    if (!selected) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected, setSelected]);

  if (!selected) {
    return null;
  }

  const description = selected.body ?? selected.excerpt;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/90 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Blog post: ${selected.title}`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl ring-1 ring-white/10"
      >
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-white/20 backdrop-blur-md"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <motion.div initial={{ scale: 1.02 }} animate={{ scale: 1 }} className="relative">
          <Image
            alt={selected.cover.alt || selected.title}
            src={getBlogImageUrl(selected.cover, { width: 1600, quality: 90 })}
            width={1600}
            height={900}
            className="h-full max-h-[65vh] w-full object-contain bg-black"
          />
          <div className="absolute inset-0 pointer-events-none ring-1 ring-white/5 rounded-t-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="space-y-6 p-8 md:p-10 bg-neutral-900"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-widest text-indigo-400 font-geist">
              {formatDate(selected.publishedAt)}
            </p>
            {selected.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={`${selected.slug}-${tag}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-400 font-geist"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-light text-white font-geist">{selected.title}</h3>
          
          {description && (
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-neutral-300 leading-relaxed font-geist font-light">
                {description}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default BlogModal;
