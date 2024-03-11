const images = [
  { id: 1, url: "/still/aceCard.jpg" },
  { id: 2, url: "/still/beachLockChain.jpg" },
  { id: 3, url: "/still/bird.jpg" },
  { id: 4, url: "/still/bulbStation.jpg" },
  { id: 5, url: "/still/bulbwater_.jpg" },
  { id: 7, url: "/still/cardFLoat.jpg" },
  { id: 8, url: "/still/cross.jpg" },
  { id: 9, url: "/still/earings.jpg" },
  { id: 10, url: "/still/earings-side.jpg" },
  { id: 11, url: "/still/rainDropGlasses.jpg" },
  { id: 12, url: "/still/Jewllery.jpg" },
  { id: 13, url: "/still/jokerCard.jpg" },
  { id: 14, url: "/still/kingQueen.jpg" },
  { id: 15, url: "/still/knight.jpg" },
  { id: 16, url: "/still/plu.jpg" },
  { id: 17, url: "/still/plu-ray.jpg" },
  { id: 18, url: "/still/two-bulbs.jpg" },
  { id: 19, url: "/still/watch.jpg" },
];

const prefix = "https://ik.imagekit.io/er0iab8sp";

const imagesWithPrefix = images.map((image) => ({
  ...image,
  url: prefix + image.url,
}));

export default imagesWithPrefix;
