const path = require("path");
const fs = require("fs");
const webp = require('webp-converter');
const { generateResponsiveImages } = require("responsive-images-generator/lib/index");

const IMAGES_DIR = path.join(`${__dirname}/images`);

const configs = [
  {width: '25%', rename: {suffix: '@1x'}},
  {width: '50%', rename: {suffix: '@2x'}},
  {width: '100%', rename: {suffix: '@3x'}}
];

Promise.all(
  fs.readdirSync(IMAGES_DIR).map(file => {
    return new Promise(resolve => {
      const [name, ext] = file.split(".");
      if (ext !== "webp") {
        webp.cwebp(`${IMAGES_DIR}/${file}`, `${IMAGES_DIR}/${name}.webp`, "-q 50", () => resolve(`${IMAGES_DIR}/${name}.webp`));
      } else {
        resolve(`${IMAGES_DIR}/${file}`);
      }
    })
  })
)
.then(images => generateResponsiveImages(images, configs));