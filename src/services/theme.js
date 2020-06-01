import { dayNow } from "./dayNow";

export function getThemeConfig(light) {
  return light ? themes.light : themes.dark;
}

export function detectTheme() {
  return dayNow(new Date()) ? themes.light : themes.dark;
}

export function updateMetaTagsTheme(newColor) {
  document.querySelector('meta[name="theme-color"]').setAttribute("content", newColor);
}

const themes = {
  dark: {
    name: "dark-theme",
    mainColor: "#000",
    secondColor: "#fff",
    baseColor: "#ffd700"
  },
  light: {
    name: "light-theme",
    mainColor: "#fff",
    secondColor: "#000",
    baseColor: "#ffd700"
  }
};
