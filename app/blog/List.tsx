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
    className="flex h-full flex-col rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-4 shadow-lg shadow-black/30"
  >
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group relative block overflow-hidden rounded-2xl"
    >
      <Image
        src={getBlogImageUrl(item.cover, { width: 1080, quality: 85 })}
        alt={item.cover.alt || item.title}
        width={1080}
        height={720}
        sizes="(min-width: 1024px) 45vw, 92vw"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
    </button>
    <div className="mt-5 flex flex-1 flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
        {formatDate(item.publishedAt)}
      </p>
      <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
      <p className="text-sm leading-relaxed text-gray-300">{item.excerpt}</p>
      {item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={`${item.slug}-${tag}`}
              className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-auto pt-4">
        <button
          type="button"
          onClick={() => onSelect(item)}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          Quick view
          <span aria-hidden="true">→</span>
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
    <section className="bg-black px-4 py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="text-center text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Latest updates
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl lg:text-5xl">
            Field notes & stories
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300">
            Bite-sized dispatches from recent shoots, edits, and experiments—click any
            card for a closer look.
          </p>
        </header>

        {data === null && posts.length === 0 ? (
          <p className="text-center text-gray-400">Loading updates…</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
