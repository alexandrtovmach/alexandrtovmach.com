const API_KEY = "AIzaSyDK1TJCRNnfQQZ6d1q40DLbOmm7d44S2QI";
const CALENDAR_ID = "alexandrtovmach%40gmail.com";

export const pullEventsFromAPI = async count => {
  const minDate = new Date();
  minDate.setHours(0);
  minDate.setMinutes(0);
  minDate.setSeconds(0);
  minDate.setMilliseconds(0);
  const maxDate = new Date();
  maxDate.setDate(minDate.getDate() + Number(count || 1));
  const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events/?key=${API_KEY}&maxResults=${count}&timeMin=${minDate.toISOString()}&timeMax=${maxDate.toISOString()}`;
  const eventsResponse = await fetch(url);
  const recurringEventsResponse = await fetch(url + "&singleEvents=true");
  const events = await eventsResponse.json();
  const recurringEvents = await recurringEventsResponse.json();
  return [...events.items, ...recurringEvents.items];
};
