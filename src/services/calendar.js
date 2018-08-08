export function getEvents(count = 5) {
  return mockEvents.slice(0, count);
}


const mockEvents = [
  {
    id: 1,
    name: "Project one with super long name to test this",
    description: "Work with JSON data parsing. Description to long to show in one moment but we need to test at all",
    tags: ["opensource", "npm", "web"],
    start: new Date(2018, 7, 9, 0, 0).valueOf(),
    end: new Date(2018, 7, 9, 23, 59).valueOf()
  },
  {
    id: 2,
    name: "Maintance website",
    description: "Support of previous projects",
    tags: ["web", "freelance"],
    start: new Date(2018, 7, 10, 0, 0).valueOf(),
    end: new Date(2018, 7, 10, 23, 59).valueOf()
  },
  {
    id: 3,
    name: "Holiday",
    description: "Time to reload",
    tags: ["holiday"],
    start: new Date(2018, 7, 11, 0, 0).valueOf(),
    end: new Date(2018, 7, 11, 23, 59).valueOf()
  },
  {
    id: 4,
    name: "Project one",
    description: "Custom form",
    tags: ["opensource", "npm"],
    start: new Date(2018, 7, 13, 0, 0).valueOf(),
    end: new Date(2018, 7, 13, 23, 59).valueOf()
  },
  {
    id: 5,
    name: "Project one",
    description: "Write README.md",
    tags: ["opensource", "npm"],
    start: new Date(2018, 7, 14, 0, 0).valueOf(),
    end: new Date(2018, 7, 14, 23, 59).valueOf()
  },
  {
    id: 6,
    name: "Project one",
    description: "Prepare to release",
    tags: ["opensource", "npm"],
    start: new Date(2018, 7, 15, 0, 0).valueOf(),
    end: new Date(2018, 7, 15, 23, 59).valueOf()
  },
  {
    id: 7,
    name: "Holiday",
    description: "Time to reload",
    tags: ["holiday"],
    start: new Date(2018, 7, 16, 0, 0).valueOf(),
    end: new Date(2018, 7, 16, 23, 59).valueOf()
  },
  {
    id: 8,
    name: "Project one",
    description: "Release day!",
    tags: ["opensource", "npm"],
    start: new Date(2018, 7, 18, 0, 0).valueOf(),
    end: new Date(2018, 7, 18, 23, 59).valueOf()
  },
]