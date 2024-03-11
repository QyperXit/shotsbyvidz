const images = [
  { id: 1, url: "/nature/bee.jpg" },
  { id: 2, url: "/nature/bird.jpg" },
  { id: 3, url: "/nature/birdScene.jpg" },
  { id: 4, url: "/nature/birdTree.jpg" },
  { id: 5, url: "/nature/catCoventry.jpg" },
  { id: 6, url: "/nature/grassLine.jpg" },
  { id: 7, url: "/nature/honeyBee.jpg" },
  { id: 8, url: "/nature/jungleView.jpg" },
  { id: 9, url: "/nature/lake.jpg" },
  { id: 10, url: "/nature/lake_full.jpg" },
  { id: 11, url: "/nature/Leaf.jpg" },
  { id: 12, url: "/nature/parrot.png" },
  { id: 13, url: "/nature/pine.jpg" },
  { id: 14, url: "/nature/skyTam.jpg" },
  { id: 15, url: "/nature/squirrel.jpg" },
  { id: 16, url: "/nature/swindonView.jpg" },
  { id: 17, url: "/nature/treeNut.jpg" },
  { id: 18, url: "/nature/yellowblossom.jpg" },
  { id: 19, url: "/nature/yellowFlower.jpg" },
];

const prefix = "https://ik.imagekit.io/er0iab8sp";

const imagesWithPrefix = images.map((image) => ({
  ...image,
  url: prefix + image.url,
}));

export default imagesWithPrefix;
