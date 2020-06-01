const { promises: fs } = require("fs");
const path = require("path");
const admin = require("firebase-admin");
const sharp = require("sharp");

const serviceAccount = require("./serviceAccount.json");
const imagesPath = path.join(__dirname, "images");
const devices = ["desktop", "pad", "phone"];
const resolutions = {
  "@1x": 0.25,
  "@2x": 0.5,
  "@3x": 1
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://alexandrtovmach-1534514719962.firebaseio.com",
  storageBucket: "alexandrtovmach-1534514719962.appspot.com"
});
const bucket = admin.storage().bucket();
const databaseRef = admin.database().ref();

const getUrl = (projectName, deviceName, resolution) => `https://firebasestorage.googleapis.com/v0/b/alexandrtovmach-1534514719962.appspot.com/o/portfolio%2F${projectName}%2F${deviceName}${encodeURIComponent(resolution)}.webp?alt=media&token=e1c712bf-2f1e-4f56-85d1-3b38ab8d6d14`

const upload = projectName => {
  return Promise.all(
    devices.map(device => {
      return Promise.all(
        Object.keys(resolutions).map(async key => {
          return bucket.upload(path.join(imagesPath, projectName, `${device}${key}.webp`), {
            destination: `portfolio/${projectName}/${device}${key}.webp`
          });
        })
      );
    })
  );
};

const convert = projectName => {
  return Promise.all(
    devices.map(async device => {
      const screenshotPath = path.join(imagesPath, projectName, device);
      const { width, height } = await sharp(`${screenshotPath}.png`).metadata();
      return Promise.all(
        Object.keys(resolutions).map(async key => {
          await sharp(`${screenshotPath}.png`)
            .resize(Math.round(width * resolutions[key]), Math.round(height * resolutions[key]))
            .webp({
              alphaQuality: resolutions[key] * 100,
              quality: resolutions[key] * 100,
              reductionEffort: 6
            })
            .toFile(`${screenshotPath}${key}.webp`);
          return `${screenshotPath}${key}.webp`;
        })
      );
    })
  );
};

const saveToDB = (projectName) => {
  return databaseRef.child("portfolio").push({
    name: {
      en: projectName,
      ru: projectName,
      ua: projectName,
    },
    screenshots: {
      desktop: {
        x1: getUrl(projectName, "desktop", "@1x"),
        x2: getUrl(projectName, "desktop", "@2x"),
        x3: getUrl(projectName, "desktop", "@3x"),
      },
      pad: {
        x1: getUrl(projectName, "pad", "@1x"),
        x2: getUrl(projectName, "pad", "@2x"),
        x3: getUrl(projectName, "pad", "@3x"),
      },
      phone: {
        x1: getUrl(projectName, "phone", "@1x"),
        x2: getUrl(projectName, "phone", "@2x"),
        x3: getUrl(projectName, "phone", "@3x"),
      },
    }
  })
}

const collectProjects = () => fs.readdir(imagesPath);

const main = async () => {
  try {
    const projects = await collectProjects();
    await Promise.all(projects.map(convert));
    await Promise.all(projects.map(upload));
    await Promise.all(projects.map(saveToDB));
    console.log("Done");
  } catch (err) {
    console.error(err);
  }
};

main();
