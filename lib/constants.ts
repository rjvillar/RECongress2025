// Event Constants
export const EVENT_CONFIG = {
  name: "8th Renewable Energy Congress & Exhibit 2025",
  shortName: "RE Congress 2025",
  theme:
    "Renewables, Resilience, Reliability, Resource Efficiency, and Responsibility to Accelerate Just Energy Transition",
  dates: "December 11-12, 2025",
  eventDate: new Date("2025-12-11T08:00:00+08:00"),
  venue: "Iloilo Convention Center",
  city: "Iloilo City",
  email: "re.congress.exhibit@thecentre.ph",
  registrationLink: "https://tinyurl.com/RECongress2025",
};

// Color Palette
export const COLORS = {
  main: {
    teal: "#62AFA7",
    blue: "#488BAA",
    green: "#61B116",
    navy: "#002734",
    light: "#F4F6FC",
  },
  supplementary: {
    peach: "#FFCB80",
    yellow: "#FFEA80",
    cyan: "#CCFFFF",
    mint: "#38D1B4",
    tealDark: "#008080",
    sage: "#58A2A0",
    gold: "#DFCE6A",
    cream: "#FFFFE7",
    seafoam: "#93CFC3",
    lime: "#97BD00",
  },
};

// Navigation Items
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Activities", href: "/activities" },
  { label: "CREED Consultations", href: "/consultation" },
];

// Registration Types
export const REGISTRATION_TYPES = [
  { id: "participant", label: "Participant" },
  { id: "re-exhibit", label: "RE Exhibit" },
  { id: "green-jobs", label: "Green Jobs Fair" },
  { id: "re-finance", label: "RE Finance Fair" },
];

// Google Maps Embed URL for Iloilo Convention Center
export const VENUE_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.2584639627894!2d122.54503670000001!3d10.714536899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee5313bae7939%3A0xf3c6bdd693c83314!2sIloilo%20Convention%20Center!5e0!3m2!1sen!2sph!4v1764728015953!5m2!1sen!2sph";
