import desktop_img from "./desktop.jpg";
import pad_img from "./pad.jpg";
import phone_img from "./phone.jpg";

export default {
  name: {
    en: "PATProfi brand website",
    ru: "PATProfi сайт",
    ua: "PATProfi  сайт"
  },
  description: {
    en:
      "Some use cases require you to create multiple apps at the same time. For example, you might want to read data from the Realtime Database of one Firebase project and store files in another project. Or you might want to authenticate one app while have another app be unauthenticated. The Firebase SDK allows you to create multiple apps at the same time, each with their own configuration information.",
    ru: "Личный сайт",
    ua: "Персональний сайт"
  },
  skills: ["UI/UX", "Design", "Project Mangement", "Quality Assurance"],
  price: "500$",
  start: new Date(2018, 7, 10).toISOString(),
  end: new Date(2018, 8, 10).toISOString(),
  link: "https://patprofi.space",
  screenshots: {
    desktop: desktop_img,
    pad: pad_img,
    phone: phone_img
  }
};
