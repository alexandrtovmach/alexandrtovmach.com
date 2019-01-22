import { pullEventsFromAPI } from "./api/goolgeCalendar";
import { getTranslations } from "./language";

export function getEvents(count = 5) {
  return pullEventsFromAPI(count).then(response => {
    return (
      response &&
      response.items &&
      response.items.map(event => transformEventData(event))
    );
  });
}

export function renderDateString(locale = "en", start, end) {
  const sD = new Date(start),
    langPack = getTranslations([locale || "en"], "CalendarComponent"),
    sDD = sD.getDate() || 1,
    sDM = langPack[`month${sD.getMonth() + 1}`] || "Jan",
    sDY = sD.getFullYear() || 2018;
  if (end) {
    const eD = new Date(end),
      eDD = eD.getDate() || 2,
      eDM = langPack[`month${eD.getMonth() + 1}`] || "Jan",
      eDY = eD.getFullYear() || 2018;
    return `${sDD} ${sDM.slice(0, 3)} ${sDY} - ${eDD} ${eDM.slice(
      0,
      3
    )} ${eDY}`;
  } else {
    return `${sDD} ${sDM.slice(0, 3)} ${sDY}`;
  }
}

function transformEventData(event) {
  const match =
    event.description &&
    event.description.match(/([a-zA-Z,. ]+)?\s*?(\+\+)\s*?([a-zA-Z,]+)/);
  return {
    id: event.id,
    name: event.summary || "Unknown name",
    description: (match && match[1]) || "",
    tags: (match && match[3] && match[3].split(",")) || [],
    start: new Date(event.start.dateTime).valueOf(),
    end: new Date(event.end.dateTime).valueOf()
  };
}
