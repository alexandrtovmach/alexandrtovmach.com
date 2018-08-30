const API_KEY = "AIzaSyBS4jzKakkbQqT1nLoWeAXMhhv0zddLLMU";
const CALENDAR_ID = "25b7e2v5vatnp8e9a343iu0p0o@group.calendar.google.com";

export function pullEventsFromAPI(count) {
  const minDate = new Date();
  minDate.setHours(0);
  minDate.setMinutes(0);
  minDate.setSeconds(0);
  minDate.setMilliseconds(0);
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/?key=${API_KEY}&maxResults=${count}&timeMin=${minDate.toISOString()}`;
  return fetch(url)
    .then(data => data.json())
    .catch(err => {
      console.error(err);
    });
}
