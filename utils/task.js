const path = require("path");
const fs = require("fs");
const { generateResponsiveImages } = require("responsive-images-generator/lib/index");

const configs = [
  {width: '25%', rename: {suffix: '@1x'}},
  {width: '50%', rename: {suffix: '@2x'}},
  {width: '100%', rename: {suffix: '@3x'}}
];

const images = fs.readdirSync(path.join(__dirname, 'images')).map(file => path.join(__dirname, `images/${file}`))

generateResponsiveImages(images, configs);