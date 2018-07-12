import spacetime from 'spacetime';
import daylight from 'spacetime-daylight';

spacetime.extend(daylight);

export function getThemeConfig(light) {
  return light? themes.light: themes.dark;
}

export function detectTheme() {
  return spacetime(new Date()).daylight().current.status === "day" ? themes.light: themes.dark;
}

export function updateMetaTagsTheme(newColor) {
  document.querySelector('meta[name="theme-color"]').setAttribute("content", newColor);
}

const themes = {
  dark: {
    name: "dark-theme",
    mainColor: "#000",
    secondColor: "#fff"
  },
  light: {
    name: "light-theme",
    mainColor: "#fff",
    secondColor: "#000"
  }
}
