"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";

import { useGalleryData } from "../hooks/useGalleryData";
import {
    type BlogPost,
    getBlogImageUrl,
} from "./data/posts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

type CardProps = {
  item: BlogPost;
  onSelect: (item: BlogPost) => void;
};

const Card = ({ item, onSelect }: CardProps) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="group relative flex h-full flex-col overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
  >
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="relative block w-full aspect-[16/9] overflow-hidden"
    >
      <Image
        fill
        src={getBlogImageUrl(item.cover, { width: 1080, quality: 85 })}
        alt={item.cover.alt || item.title}
        sizes="(min-width: 1024px) 45vw, 92vw"
        className="object-cover transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
    </button>
    
    <div className="flex flex-1 flex-col p-6 gap-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-widest text-indigo-400 font-geist">
          {formatDate(item.publishedAt)}
        </p>
        {item.tags.length > 0 && (
          <div className="flex gap-2">
            {item.tags.slice(0, 2).map((tag) => (
              <span
                key={`${item.slug}-${tag}`}
                className="text-[10px] uppercase tracking-wider text-neutral-400 font-geist px-2 py-1 rounded-full bg-white/5 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <h3 className="text-2xl font-semibold text-white font-geist group-hover:text-indigo-300 transition-colors">
        {item.title}
      </h3>
      
      <p className="text-sm leading-relaxed text-neutral-400 font-geist line-clamp-3">
        {item.excerpt}
      </p>

      <div className="mt-auto pt-4">
        <button
          type="button"
          onClick={() => onSelect(item)}
          className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-300 transition-colors font-geist group/btn"
        >
          Read Story
          <svg 
            className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  </motion.article>
);

const List = ({ setSelected }) => {
  const loader = useCallback(
    () => import("./data/posts").then((module) => module.posts),
    [],
  );
  const data = useGalleryData<BlogPost[]>("blog", loader);
  const posts = data ?? [];

  const sortedPosts = useMemo(
    () =>
      [...posts].sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [posts],
  );

  return (
    <section className="min-h-screen px-6 lg:px-12 py-24">
      <div className="mx-auto max-w-[1400px] flex flex-col gap-16">
        <header className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400 font-geist mb-4">
            Latest Updates
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white font-geist tracking-tight mb-6">
            Field notes & stories
          </h1>
          <p className="text-lg text-neutral-400 font-geist leading-relaxed">
            Bite-sized dispatches from recent shoots, edits, and experiments.
          </p>
        </header>

        {data === null && posts.length === 0 ? (
          <div className="flex justify-center py-20">
            <div className="animate-pulse text-neutral-500 font-geist">Loading updates...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((item) => (
              <Card key={item.id} item={item} onSelect={setSelected} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default List;
