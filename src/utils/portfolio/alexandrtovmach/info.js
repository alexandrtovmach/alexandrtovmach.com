import desktop_img from "./desktop.png";
import pad_img from "./pad.png";
import phone_img from "./phone.png";

export default {
  name: {
    en: "Personal website",
    ru: "Личный сайт",
    ua: "Персональний сайт"
  },
  description: {
    en: "Project to demonstrate my skills to the world blah blah blah",
    ru: "Личный сайт",
    ua: "Персональний сайт"
  },
  skills: ["UI/UX", "Design", "Web-development"],
  price: "free",
  start: new Date(2018, 6, 1),
  end: new Date(2018, 9, 1),
  link: "https://alexandrtovmach.com",
  screenshots: {
    desktop: desktop_img,
    pad: pad_img,
    phone: phone_img,
  }
};