export function getEvents(count = 5) {
  return mockEvents.slice(0, count);
}


const mockEvents = [
  {
    id: 1,
    name: "Project one",
    description: "Work with JSON data parsing.",
    tags: ["opensource", "npm", "web"],
    start: Date.now() + 1000*60*60*24*0.8,
    end: Date.now() + 1000*60*60*24*1,
  },
  {
    id: 2,
    name: "Maintance website",
    description: "Support of previous projects",
    tags: ["web", "freelance"],
    start: Date.now() + 1000*60*60*24*1.5,
    end: Date.now() + 1000*60*60*24*2,
  },
  {
    id: 3,
    name: "Holiday",
    description: "Time to reload",
    tags: ["holiday"],
    start: Date.now() + 1000*60*60*24*3,
    end: Date.now() + 1000*60*60*24*4,
  },
  {
    id: 4,
    name: "Project one",
    description: "Custom form",
    tags: ["opensource", "npm"],
    start: Date.now() + 1000*60*60*24*4.2,
    end: Date.now() + 1000*60*60*24*4.4,
  },
  {
    id: 5,
    name: "Project one",
    description: "Write README.md",
    tags: ["opensource", "npm"],
    start: Date.now() + 1000*60*60*24*4.2,
    end: Date.now() + 1000*60*60*24*4.6,
  },
  {
    id: 5,
    name: "Project one",
    description: "Prepare to release",
    tags: ["opensource", "npm"],
    start: Date.now() + 1000*60*60*24*4.2,
    end: Date.now() + 1000*60*60*24*4.8,
  },
  {
    id: 6,
    name: "Holiday",
    description: "Time to reload",
    tags: ["holiday"],
    start: Date.now() + 1000*60*60*24*5,
    end: Date.now() + 1000*60*60*24*6,
  },
  {
    id: 7,
    name: "Project one",
    description: "Release day!",
    tags: ["opensource", "npm"],
    start: Date.now() + 1000*60*60*24*6,
    end: Date.now() + 1000*60*60*24*7,
  },
]