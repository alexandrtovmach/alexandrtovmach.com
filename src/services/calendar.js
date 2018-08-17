export function getEvents(count = 5) {
  return mockEvents.slice(0, count);
}


const mockEvents = [
  {
    id: 1,
    name: "Project one with super long name to test this",
    description: "Work with JSON data parsing. Description to long to show in one moment but we need to test at all",
    tags: ["opensource", "npm", "web"],
    start: new Date(2018, 7, 17, 0, 0).valueOf(),
    end: new Date(2018, 7, 17, 23, 59).valueOf()
  },
  {
    id: 2,
    name: "Maintance website",
    description: "Support of previous projects",
    tags: ["web", "freelance"],
    start: new Date(2018, 7, 18, 0, 0).valueOf(),
    end: new Date(2018, 7, 18, 23, 59).valueOf()
  },
  {
    id: 3,
    name: "Holiday",
    description: "Time to reload",
    tags: ["holiday"],
    start: new Date(2018, 7, 19, 0, 0).valueOf(),
    end: new Date(2018, 7, 19, 23, 59).valueOf()
  },
  {
    id: 4,
    name: "Project one",
    description: "Custom form",
    tags: ["opensource", "npm"],
    start: new Date(2018, 7, 20, 0, 0).valueOf(),
    end: new Date(2018, 7, 20, 17, 59).valueOf()
  },
  {
    id: 5,
    name: "Project one",
    description: "Write README.md",
    tags: ["opensource", "npm"],
    start: new Date(2018, 7, 21, 20, 0).valueOf(),
    end: new Date(2018, 7, 21, 23, 59).valueOf()
  },
  {
    id: 6,
    name: "Project one",
    description: "Prepare to release",
    tags: ["opensource", "npm"],
    start: new Date(2018, 7, 23, 0, 0).valueOf(),
    end: new Date(2018, 7, 23, 23, 59).valueOf()
  },
  {
    id: 7,
    name: "Holiday",
    description: "Time to reload",
    tags: ["holiday"],
    start: new Date(2018, 7, 25, 0, 0).valueOf(),
    end: new Date(2018, 7, 25, 23, 59).valueOf()
  },
  {
    id: 8,
    name: "Project one",
    description: "Release day!",
    tags: ["opensource", "npm"],
    start: new Date(2018, 7, 26, 0, 0).valueOf(),
    end: new Date(2018, 7, 26, 23, 59).valueOf()
  },
]