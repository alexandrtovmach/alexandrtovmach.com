const API_KEY = "AIzaSyBS4jzKakkbQqT1nLoWeAXMhhv0zddLLMU";
const CALENDAR_ID = "25b7e2v5vatnp8e9a343iu0p0o@group.calendar.google.com";

export function getEvents(count = 5) {
  return pullEventsFromAPI(count)
    .then(response => {
      return response.items.map(event => transformEventData(event));
    })
}

function pullEventsFromAPI(count) {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/?key=${API_KEY}&maxResults=${count}`;
  return fetch(url)
  .then(data => data.json())
  .catch(err => {
    console.error(err);
  })
}

function transformEventData(event) {


  return {
    id: event.id,
    name: event.summary || "Unknown name",
    description: (event.description && event.description.split("++")[0]) || event.description || "",
    tags: (event.description && event.description.match(/(\+\+)\s*?([a-zA-Z,]+)/)[2].split(",")) || [],
    start: new Date(event.start.dateTime).valueOf(),
    end: new Date(event.end.dateTime).valueOf()
  }
}