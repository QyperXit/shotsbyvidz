export type ImageKitTransformOptions = {
  width?: number;
  height?: number;
  quality?: number;
  format?: string;
  transforms?: string[];
};

const IMAGEKIT_ROOT = "https://ik.imagekit.io/er0iab8sp";

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

const buildTransformQuery = ({
  width,
  height,
  quality,
  format,
  transforms = [],
}: ImageKitTransformOptions) => {
  const parts = [...transforms];

  if (width) parts.push(`w-${width}`);
  if (height) parts.push(`h-${height}`);
  if (quality) parts.push(`q-${quality}`);
  if (format) parts.push(`f-${format}`);

  return parts.length ? `?tr=${parts.join(",")}` : "";
};

export const buildImageKitUrl = (
  pathOrUrl: string,
  options: ImageKitTransformOptions = {},
) => {
  const normalized = trimSlashes(pathOrUrl);
  return `${IMAGEKIT_ROOT}/${normalized}${buildTransformQuery(options)}`;
};

export const BLOG_IMAGEKIT_BASE_PATH = "blogPosts";

export const buildBlogImageUrl = (
  relativePath: string,
  options: ImageKitTransformOptions = {},
) =>
  buildImageKitUrl(`${BLOG_IMAGEKIT_BASE_PATH}/${trimSlashes(relativePath)}`, options);
