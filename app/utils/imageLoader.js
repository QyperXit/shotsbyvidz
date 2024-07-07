// utils/imageLoader.js

export const imageKitLoader = ({ src, width, quality }) => {
  // Remove leading slash if present
  if (src[0] === "/") {
    src = src.slice(1);
  }

  // Construct transformation parameters
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  const paramsString = params.join(",");

  // Set your ImageKit endpoint URL
  let urlEndpoint = "https://ik.imagekit.io/er0iab8sp";

  // Remove trailing slash if present
  if (urlEndpoint[urlEndpoint.length - 1] === "/") {
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  }

  // Construct and return the final image URL
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
};
