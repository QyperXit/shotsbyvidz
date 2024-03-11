const images = [
  { id: 1, url: "/portraits/Van.jpg" },
  { id: 2, url: "/portraits/VanSummer19.jpg" },
  { id: 3, url: "/portraits/ZionBraulio.jpg" },
  { id: 4, url: "/portraits/chaunPolaNeck.jpg" },
  { id: 5, url: "/portraits/chaunTankTop.jpg" },
  { id: 6, url: "/portraits/mask.png" },
  { id: 7, url: "/portraits/melBloom.png" },
  { id: 8, url: "/portraits/vanSolihull.png" },
];

const prefix = "https://ik.imagekit.io/er0iab8sp";

const imagesWithPrefix = images.map((image) => ({
  ...image,
  url: prefix + image.url,
}));

export default imagesWithPrefix;
