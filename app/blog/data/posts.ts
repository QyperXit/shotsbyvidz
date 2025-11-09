import {
  buildBlogImageUrl,
  type ImageKitTransformOptions,
} from "../../../lib/imagekit";

type ImageKitCover = {
  kind: "imagekit";
  path: string;
  alt: string;
};

type ExternalCover = {
  kind: "external";
  url: string;
  alt: string;
};

export type BlogCover = ImageKitCover | ExternalCover;

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  cover: BlogCover;
  publishedAt: string; // ISO date string for easy sorting
  tags: string[];
};

const defaultTags = ["Mountains", "Aesthetic", "Pretty", "Scenic", "Rugged"] as const;

export const posts = [
  {
    id: 1,
    slug: "product-photography-ideas",
    title: "Product Photography Ideas",
    excerpt:
      "Experimenting with a minimal product concept for a client, styled and edited entirely inside Darktable.",
    body:
      "I've been experimenting with a product photography concept for a client, using only Darktable.",
    cover: {
      kind: "imagekit",
      path: "manzil.jpg",
      alt: "Bottle styled in a dramatic product photography scene",
    },
    publishedAt: "2024-01-05",
    tags: [...defaultTags],
  },
  {
    id: 2,
    slug: "church-stretton-camp-and-fish",
    title: "Church Stretton Camp & Fish",
    excerpt:
      "Serene campsite moment where the local tap water steals the scene with smooth bokeh in the background.",
    body:
      "This photo captures a serene moment from a camping trip with friends, showcasing the gentle flow of local tap water set against a beautifully blurred backdrop.",
    cover: {
      kind: "imagekit",
      path: "tapwater.jpg",
      alt: "Close-up of tap water pouring with a blurred campsite background",
    },
    publishedAt: "2024-01-12",
    tags: [...defaultTags],
  },
  {
    id: 3,
    slug: "church-next-to-school",
    title: "A Church Next to a School",
    excerpt:
      "Quiet country lane discovery—a cemetery chapel sharing a fence line with a sleepy schoolyard.",
    body:
      "Taken along a quiet country lane, this photo shows a cemetery church next to a school, creating a serene scene in the countryside.",
    cover: {
      kind: "imagekit",
      path: "church.jpg",
      alt: "Country church beside a school playground",
    },
    publishedAt: "2024-01-19",
    tags: [...defaultTags],
  },
  {
    id: 4,
    slug: "dji-mini-2-first-impressions",
    title: "DJI Mini 2",
    excerpt:
      "Borrowed my friend's Mini 2 and immediately started pricing one out—the aerial perspective is intoxicating.",
    body:
      "This photo was captured using the DJI Mini 2, which belongs to my friend. I'm definitely considering getting one for myself. The drone shots it takes are truly amazing.",
    cover: {
      kind: "imagekit",
      path: "drone.jpg",
      alt: "DJI Mini 2 drone in flight",
    },
    publishedAt: "2024-01-26",
    tags: [...defaultTags],
  },
  {
    id: 5,
    slug: "deer-park-farm-christmas",
    title: "Deer Park Farm",
    excerpt:
      "Christmas at Deer Park Farm came with a gracious horse that insisted on being part of every frame.",
    body:
      "This photo features a horse that was part of the Airbnb where my wife and I spent a memorable Christmas.",
    cover: {
      kind: "imagekit",
      path: "horse.jpg",
      alt: "Horse standing on a farm during winter",
    },
    publishedAt: "2024-02-02",
    tags: [...defaultTags],
  },
  {
    id: 6,
    slug: "black-and-white-color-calibration",
    title: "Black & White Color Calibration",
    excerpt:
      "Pushed Darktable's Color Calibration module to sculpt this monochrome study of a church clock tower.",
    body:
      "This is a black and white photo I edited using the 'Color Calibration' module in Darktable.",
    cover: {
      kind: "imagekit",
      path: "churchClock.jpg",
      alt: "Black and white detail of a church clock tower",
    },
    publishedAt: "2024-02-09",
    tags: [...defaultTags],
  },
  {
    id: 7,
    slug: "lantern-memorial",
    title: "Lantern",
    excerpt:
      "A single lantern glowing at the war memorial park in Coventry—simple, reverent, timeless.",
    body: "This photo was captured at a war memorial park in Coventry.",
    cover: {
      kind: "imagekit",
      path: "fire.jpg",
      alt: "Lantern light burning at night",
    },
    publishedAt: "2024-02-16",
    tags: [...defaultTags],
  },
  {
    id: 8,
    slug: "engine-pool-lake-day",
    title: "Engine Pool",
    excerpt:
      "Somewhere in Solihull—name forgotten—but the shoreline typography demanded a quick capture.",
    body:
      "This photograph was taken at a lake in Solihull. I can't quite recall the name of the area!",
    cover: {
      kind: "imagekit",
      path: "lakeSign.jpg",
      alt: "Warning sign near a calm lake",
    },
    publishedAt: "2024-02-23",
    tags: [...defaultTags],
  },
  {
    id: 9,
    slug: "swan-on-the-lake",
    title: "Swan",
    excerpt: "A swan carving ripples across a glassy lake in the heart of nature.",
    body: "A swan gracefully gliding across a serene lake in the heart of nature.",
    cover: {
      kind: "imagekit",
      path: "swan.jpg",
      alt: "Swan gliding across a calm lake",
    },
    publishedAt: "2024-03-01",
    tags: [...defaultTags],
  },
  {
    id: 10,
    slug: "red-light-new-street",
    title: "Red Light",
    excerpt: "Caught this moody glow while weaving through New Street Station in Birmingham.",
    body: "Captured at the bustling New Street Station in Birmingham.",
    cover: {
      kind: "imagekit",
      path: "redlight.jpg",
      alt: "Red light glowing in an urban station",
    },
    publishedAt: "2024-03-08",
    tags: [...defaultTags],
  },
  {
    id: 11,
    slug: "whispers-of-the-sky",
    title: "Whispers of the Sky",
    excerpt:
      "Clouds drift lazily across the azure expanse, whispering tales of wonder and magic.",
    body:
      "As clouds drift lazily across the azure expanse, painting pictures in the sky, the heavens whisper tales of wonder and magic, inviting all to gaze upon their ever-changing beauty.",
    cover: {
      kind: "external",
      url: "https://images.unsplash.com/photo-1662436267874-4ab1145ade4a?auto=format&fit=crop&w=1886&q=80",
      alt: "Cloud formations under a blue sky",
    },
    publishedAt: "2024-03-15",
    tags: [...defaultTags],
  },
  {
    id: 12,
    slug: "whispers-of-the-horizon",
    title: "Whispers of the Horizon",
    excerpt:
      "Twilight paints the sky with pink and gold while the world slows into a quiet glow.",
    body:
      "As the sun dips below the horizon, painting the sky with hues of pink and gold, the world is bathed in the soft glow of twilight, a fleeting moment of beauty and tranquility.",
    cover: {
      kind: "external",
      url: "https://images.unsplash.com/photo-1662514282655-438b87b04995?auto=format&fit=crop&w=687&q=80",
      alt: "Sunset hues over the horizon",
    },
    publishedAt: "2024-03-22",
    tags: [...defaultTags],
  },
] satisfies BlogPost[];

export const getBlogImageUrl = (
  cover: BlogCover,
  options: ImageKitTransformOptions = {},
) =>
  cover.kind === "imagekit"
    ? buildBlogImageUrl(cover.path, options)
    : cover.url;

export const findBlogPostBySlug = (slug: string) =>
  posts.find((post) => post.slug === slug);
