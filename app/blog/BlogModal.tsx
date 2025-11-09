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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
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
        className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-black via-gray-950 to-black shadow-2xl"
      >
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-white/20"
          aria-label="Close"
        >
          ×
        </button>
        <motion.div initial={{ scale: 1.02 }} animate={{ scale: 1 }}>
          <Image
            alt={selected.cover.alt || selected.title}
            src={getBlogImageUrl(selected.cover, { width: 1600, quality: 90 })}
            width={1600}
            height={900}
            className="h-full max-h-[65vh] w-full object-contain bg-black"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="space-y-4 p-6 text-white md:p-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            {formatDate(selected.publishedAt)}
          </p>
          <h3 className="text-3xl font-semibold">{selected.title}</h3>
          {description && <p className="text-base text-gray-200">{description}</p>}
          {selected.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selected.tags.map((tag) => (
                <span
                  key={`${selected.slug}-${tag}`}
                  className="rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-wide text-amber-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default BlogModal;
