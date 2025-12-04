// Data for Activities Page - Day 1 & Day 2 Sessions

export interface Speaker {
  id: string;
  name: string;
  designation: string;
  organization: string;
  photo?: string;
  bio?: string;
  isModerator?: boolean;
}

export interface Session {
  id: string;
  time: string;
  title: string;
  description: string;
  type:
    | "plenary"
    | "panel"
    | "deep-dive"
    | "message"
    | "break"
    | "exhibit"
    | "ceremony";
  speakers?: Speaker[];
  moderator?: Speaker;
  location?: string;
}

export const DAY_1_SESSIONS: Session[] = [
  {
    id: "d1-registration",
    time: "08:00 - 09:00",
    title: "Registration",
    description: "Participant registration and welcome.",
    type: "break",
  },
  {
    id: "d1-invocation",
    time: "09:00 - 09:05",
    title: "Invocation",
    description: "Opening prayer.",
    type: "ceremony",
  },
  {
    id: "d1-anthem",
    time: "09:05 - 09:10",
    title: "National Anthem",
    description: "Philippine National Anthem.",
    type: "ceremony",
  },
  {
    id: "d1-welcome",
    time: "09:10 - 09:15",
    title: "Welcome Remarks",
    description: "Welcome address from the Governor of Iloilo.",
    type: "plenary",
    speakers: [
      {
        id: "speaker-1",
        name: "Governor Arthur Defensor, Jr.",
        designation: "Governor",
        organization: "Province of Iloilo",
      },
    ],
  },
  {
    id: "d1-opening",
    time: "09:15 - 09:20",
    title: "Opening Message",
    description: "Opening message from ICSC.",
    type: "message",
    speakers: [
      {
        id: "speaker-2",
        name: "Kairos dela Cruz",
        designation: "Representative",
        organization: "Institute for Climate and Sustainable Cities (ICSC)",
      },
    ],
  },
  {
    id: "d1-intro",
    time: "09:20 - 09:25",
    title: "Introduction to RE Congress",
    description: "Overview of the congress objectives and theme.",
    type: "plenary",
    speakers: [
      {
        id: "speaker-3",
        name: "Maris Cardenas",
        designation: "Representative",
        organization: "Center for Renewable Energy (CentRE)",
      },
    ],
  },
  {
    id: "d1-messages",
    time: "09:25 - 09:35",
    title: "Messages",
    description: "Message from the Embassy of the United Kingdom.",
    type: "message",
    speakers: [
      {
        id: "speaker-4",
        name: "Lloyd Cameron",
        designation: "Representative",
        organization: "Embassy of the United Kingdom, Manila",
      },
    ],
  },
  {
    id: "d1-keynote",
    time: "09:35 - 09:55",
    title: "Keynote Speech: Renewable Energy 2030",
    description:
      "Tracking Progress, Confronting Challenges, and Charting the Way Forward.",
    type: "plenary",
    speakers: [
      {
        id: "speaker-5",
        name: "Sec. Sharon Garin",
        designation: "Secretary",
        organization: "Department of Energy",
      },
    ],
  },
  {
    id: "d1-fireside",
    time: "09:55 - 10:25",
    title: "Fire Side Chat: Advancing the Philippines' Just Energy Transition",
    description: "Progress, Challenges, and Ways Forward.",
    type: "panel",
    speakers: [
      {
        id: "speaker-6",
        name: "Sec. Sharon Garin",
        designation: "Secretary",
        organization: "Department of Energy",
      },
      {
        id: "speaker-7",
        name: "Usec. Analiza Rebuelta-Teh",
        designation: "Undersecretary",
        organization: "Department of Environment and Natural Resources",
      },
      {
        id: "speaker-8",
        name: "Kairos Dela Cruz",
        designation: "Representative",
        organization: "Institute for Climate and Sustainable Cities (ICSC)",
      },
      {
        id: "speaker-9",
        name: "H.E. Vladislava Iordanova",
        designation: "Ambassador",
        organization: "Embassy of the Kingdom of Belgium, Manila",
      },
    ],
    moderator: {
      id: "mod-1",
      name: "Rev. Dr. Ernest Howard B. Dagohoy",
      designation: "President",
      organization: "Central Philippine University",
      isModerator: true,
    },
  },
  {
    id: "d1-declaration",
    time: "10:25 - 10:40",
    title: "Iloilo Declaration and Presentation",
    description: "Presentation by PGI, CentRE, ICSC, and CPU.",
    type: "ceremony",
  },
  {
    id: "d1-photo",
    time: "10:40 - 10:50",
    title: "Photo Op",
    description: "Official photo session with speakers and organizers.",
    type: "break",
  },
  {
    id: "d1-break1",
    time: "10:50 - 11:00",
    title: "Break",
    description: "Morning break.",
    type: "break",
  },
  {
    id: "d1-reporting",
    time: "11:00 - 12:00",
    title:
      "Reporting of National and Regional Just Energy Transition Strategies",
    description: "Presentations from various regional initiatives.",
    type: "plenary",
    speakers: [
      {
        id: "speaker-10",
        name: "Atty. Gia Ibay",
        designation: "Representative",
        organization: "WWF Philippines (Mindanao Clean Energy Forum)",
      },
      {
        id: "speaker-11",
        name: "Bencyrus Ellorin",
        designation: "Representative",
        organization: "MinREACH (Mindanao Clean Energy Forum)",
      },
      {
        id: "speaker-12",
        name: "Joshua Villalobos",
        designation: "Representative",
        organization:
          "Negrosanon Initiative for Climate and the Environment (NICE)",
      },
      {
        id: "speaker-13",
        name: "Maitet Diokno",
        designation: "Representative",
        organization:
          "Center for Power Issues and Initiatives (Romblon JET Roadmap)",
      },
      {
        id: "speaker-14",
        name: "Maris Cardenas",
        designation: "Representative",
        organization: "CentRE (Responsible Energy Initiative-Philippines)",
      },
      {
        id: "speaker-15",
        name: "Jonathan Catalla",
        designation: "Representative",
        organization:
          "Forum for the Future (Responsible Energy Initiative-Philippines)",
      },
      {
        id: "speaker-16",
        name: "Romil Hernandez",
        designation: "Representative",
        organization: "ICSC (Road to Renewables)",
      },
    ],
  },
  {
    id: "d1-lunch",
    time: "12:00 - 13:30",
    title: "Lunch & Dialogue of Local Chief Executives",
    description:
      "Networking lunch with dialogue session for local government leaders.",
    type: "break",
  },
  {
    id: "d1-sharing",
    time: "13:30 - 13:45",
    title: "Sharing of the Results",
    description: "Presentation of results from the LCE dialogue.",
    type: "plenary",
  },
  {
    id: "d1-panel2",
    time: "13:45 - 15:00",
    title: "Panel 2: Local Leaderships in Action",
    description:
      "Transformative Practices in Renewable Energy and Climate Resilience.",
    type: "panel",
    speakers: [
      {
        id: "speaker-17",
        name: "Dir. Marissa Cerezo",
        designation: "Director",
        organization: "Department of Energy",
      },
      {
        id: "speaker-18",
        name: "Governor Jericho Petilla",
        designation: "Governor",
        organization: "Province of Leyte",
      },
      {
        id: "speaker-19",
        name: "Governor Arthur Defensor, Jr.",
        designation: "Governor",
        organization: "Province of Iloilo",
      },
      {
        id: "speaker-20",
        name: "Board Member Rolando B. Distura",
        designation: "Board Member",
        organization: "Province of Iloilo",
      },
      {
        id: "speaker-21",
        name: "Governor Ma. Lucille Nava",
        designation: "Governor",
        organization: "Province of Guimaras",
      },
      {
        id: "speaker-22",
        name: "Mayor Vico Sotto",
        designation: "Mayor",
        organization: "Pasig City",
      },
      {
        id: "speaker-23",
        name: "Gov. Harris Christopher Ongchuan",
        designation: "Governor",
        organization: "Northern Samar",
      },
    ],
  },
  {
    id: "d1-break2",
    time: "15:00 - 15:30",
    title: "Coffee Break / Networking / RE Exhibit",
    description: "Refreshments and networking with RE exhibit viewing.",
    type: "break",
  },
  {
    id: "d1-dd1",
    time: "15:30 - 17:00",
    title: "Deep Dive 1: Community-based RE Systems",
    description:
      "Technical session on community-based renewable energy systems.",
    type: "deep-dive",
    speakers: [
      {
        id: "speaker-24",
        name: "Engr. Silverio Navarro",
        designation: "Engineer",
        organization: "VEMADECO",
      },
      {
        id: "speaker-25",
        name: "Toni Madulid",
        designation: "Representative",
        organization: "Reboot Philippines",
      },
      {
        id: "speaker-26",
        name: "Erel Narida / Sari Narida",
        designation: "Representatives",
        organization: "OREEi",
      },
      {
        id: "speaker-27",
        name: "DBP Representative",
        designation: "Reactor",
        organization: "Development Bank of the Philippines",
      },
      {
        id: "speaker-28",
        name: "BM Rolando Distura",
        designation: "Reactor",
        organization: "Province of Iloilo",
      },
      {
        id: "speaker-29",
        name: "Parimita Mohanty",
        designation: "Reactor",
        organization: "UNEP",
      },
      {
        id: "speaker-30",
        name: "Matt Carpio",
        designation: "Reactor",
        organization: "Climate Smart Ventures",
      },
    ],
  },
  {
    id: "d1-dd2",
    time: "15:30 - 17:00",
    title: "Deep Dive 2: Circular Strategies in the RE Sector",
    description: "Exploring circular economy in renewable energy.",
    type: "deep-dive",
    speakers: [
      {
        id: "speaker-31",
        name: "Engr. Rei Panaligan",
        designation: "Engineer",
        organization:
          "Center for Renewable Energy and Sustainable Technology (CREST)",
      },
      {
        id: "speaker-32",
        name: "Dr. Michael Promentilla",
        designation: "REI Circularity Team",
        organization: "Research Expert",
      },
      {
        id: "speaker-33",
        name: "Ina Silverio",
        designation: "Representative",
        organization: "WeGen Energy",
      },
      {
        id: "speaker-34",
        name: "Rey Garin",
        designation: "Representative",
        organization: "Iloilo Provincial Government",
      },
    ],
    moderator: {
      id: "mod-2",
      name: "Dr. Nelson Enano, Jr.",
      designation: "Director",
      organization:
        "Ateneo de Davao University - Center for Renewable Energy and Appropriate Technologies (CREATE)",
      isModerator: true,
    },
  },
  {
    id: "d1-dd3",
    time: "15:30 - 17:00",
    title: "Deep Dive 3: Enabling RPS Compliance through Renewable Energy",
    description: "Workshop on Renewable Portfolio Standards compliance.",
    type: "deep-dive",
    speakers: [
      {
        id: "speaker-35",
        name: "Dir. Marissa Cerezo",
        designation: "Director",
        organization: "DOE-REMB",
      },
      {
        id: "speaker-36",
        name: "Engr. Rene Fajilagutan",
        designation: "Representative",
        organization: "Association of Isolated Electric Cooperatives (AIEC)",
      },
      {
        id: "speaker-37",
        name: "Joshua Soroño",
        designation: "Representative",
        organization: "Allotrope",
      },
      {
        id: "speaker-38",
        name: "Engr. Job Jacob Gonzales",
        designation: "Engineer",
        organization: "CREST",
      },
      {
        id: "speaker-39",
        name: "MORE Power Representative",
        designation: "Representative",
        organization: "MORE Power",
      },
    ],
  },
  {
    id: "d1-consult",
    time: "08:00 - 17:00",
    title: "Consultation Booth (All Day)",
    description: "One-on-one consultations with RE experts.",
    type: "exhibit",
  },
  {
    id: "d1-exhibit",
    time: "08:00 - 17:00",
    title: "RE Exhibit (All Day)",
    description:
      "Exhibition showcasing renewable energy technologies and innovations.",
    type: "exhibit",
    location: "Exhibition Hall",
  },
];

export const DAY_2_SESSIONS: Session[] = [
  {
    id: "d2-registration",
    time: "08:00 - 09:00",
    title: "Registration",
    description: "Participant registration for Day 2.",
    type: "break",
  },
  {
    id: "d2-dd4",
    time: "09:00 - 11:00",
    title:
      "Deep Dive 4: The Green Workforce: Capacity Building and Green Jobs Creation",
    description:
      "Discussion on skills development and workforce transition for renewable energy sector.",
    type: "deep-dive",
    speakers: [
      {
        id: "speaker-40",
        name: "ILS Jeanette Damo",
        designation: "Representative",
        organization: "DOLE",
      },
      {
        id: "speaker-41",
        name: "Asst. Prof. Benjamin Velasco",
        designation: "Assistant Professor",
        organization: "UP SOLAIR",
      },
      {
        id: "speaker-42",
        name: "Engr. Joshua Lopez",
        designation: "Engineer",
        organization: "International Labour Organization (ILO)",
      },
      {
        id: "speaker-43",
        name: "Wilson Fortaleza",
        designation: "Representative",
        organization: "Center for Power Issues and Initiatives",
      },
      {
        id: "speaker-44",
        name: "MMSU Representative",
        designation: "Representative",
        organization: "Mariano Marcos State University",
      },
      {
        id: "speaker-45",
        name: "TESDA Representative",
        designation: "Representative",
        organization: "TESDA",
      },
    ],
  },
  {
    id: "d2-dd5",
    time: "09:00 - 11:00",
    title:
      "Deep Dive 5: Women in Green Entrepreneurship / Financial Management",
    description:
      "Empowering women entrepreneurs in renewable energy and green finance.",
    type: "deep-dive",
    speakers: [
      {
        id: "speaker-46",
        name: "NWTF Representative",
        designation: "Representative",
        organization: "Negros Women for Tomorrow Foundation",
      },
      {
        id: "speaker-47",
        name: "Maitet Diokno",
        designation: "Representative",
        organization: "WISE",
      },
      {
        id: "speaker-48",
        name: "Jonas Gregory Penalba Perez",
        designation: "Representative",
        organization: "UN Women",
      },
      {
        id: "speaker-49",
        name: "CPU Representative",
        designation: "Representative",
        organization: "Central Philippine University",
      },
      {
        id: "speaker-50",
        name: "Security Bank Foundation Representative",
        designation: "Representative",
        organization: "Security Bank Foundation",
      },
    ],
  },
  {
    id: "d2-dd6",
    time: "09:00 - 11:00",
    title:
      "Deep Dive 6: Role of AI/Open Access Mapping Tools in RE Development",
    description:
      "Leveraging AI and geospatial tools for renewable energy planning.",
    type: "deep-dive",
    speakers: [
      {
        id: "speaker-51",
        name: "Jonathan Catalla",
        designation: "Representative",
        organization: "REI-Forum for the Future",
      },
      {
        id: "speaker-52",
        name: "Charles Jason Diaz",
        designation: "Representative",
        organization: "Spectrum-ICSC",
      },
      {
        id: "speaker-53",
        name: "OSW Developer Representative",
        designation: "Representative",
        organization: "OSW Developer",
      },
      {
        id: "speaker-54",
        name: "ADB Representative",
        designation: "Representative",
        organization: "Asian Development Bank",
      },
      {
        id: "speaker-55",
        name: "CPU Representative",
        designation: "Representative",
        organization: "Central Philippine University",
      },
    ],
  },
  {
    id: "d2-networking",
    time: "11:00 - 11:30",
    title: "Networking",
    description: "Networking break.",
    type: "break",
  },
  {
    id: "d2-messages",
    time: "11:30 - 12:00",
    title: "Messages",
    description: "Messages from key stakeholders.",
    type: "message",
  },
  {
    id: "d2-lunch",
    time: "12:00 - 13:00",
    title: "Lunch",
    description: "Lunch break.",
    type: "break",
  },
  {
    id: "d2-panel3",
    time: "13:00 - 14:00",
    title: "Panel 3: Strengthening Grid Operations and Integrating Renewables",
    description:
      "Technical panel on grid stability and integrating renewable energy sources.",
    type: "panel",
    speakers: [
      {
        id: "speaker-56",
        name: "Juan Miguel Consolacion",
        designation: "Representative",
        organization: "Global Wind Energy Council (GWEC)",
      },
      {
        id: "speaker-57",
        name: "Cynthia Manrique",
        designation: "Representative",
        organization: "NGCP",
      },
      {
        id: "speaker-58",
        name: "Jhun Escobar, Jr.",
        designation: "Representative",
        organization: "ICSC",
      },
      {
        id: "speaker-59",
        name: "Poch Ambrosio",
        designation: "Representative",
        organization: "ACEN",
      },
      {
        id: "speaker-60",
        name: "ILECO Representative",
        designation: "Representative",
        organization: "ILECO",
      },
    ],
    moderator: {
      id: "mod-3",
      name: "Bert Dalusung III",
      designation: "Representative",
      organization: "ICSC/PEI",
      isModerator: true,
    },
  },
  {
    id: "d2-announcements",
    time: "14:00 - 14:30",
    title: "Announcement of New Initiatives",
    description:
      "Announcement of new renewable energy initiatives and partnerships.",
    type: "plenary",
  },
  {
    id: "d2-panel4",
    time: "14:30 - 16:15",
    title:
      "Panel 4: Financing the Future: Accessible and Inclusive Renewable Energy Investments",
    description:
      "Financing Distributed and Community Energy Systems – Innovations and Partnerships.",
    type: "panel",
    speakers: [
      {
        id: "speaker-61",
        name: "Jessica Juanico",
        designation: "Representative",
        organization: "Development Bank of the Philippines",
      },
      {
        id: "speaker-62",
        name: "Marla Alvarez-Garin",
        designation: "Representative",
        organization: "Banco de Oro",
      },
      {
        id: "speaker-63",
        name: "Ronaldo Averion",
        designation: "Representative",
        organization: "Land Bank of the Philippines",
      },
      {
        id: "speaker-64",
        name: "Jo Ann Eala",
        designation: "Representative",
        organization: "BPI",
      },
      {
        id: "speaker-65",
        name: "Security Bank Representative",
        designation: "Representative",
        organization: "Security Bank",
      },
      {
        id: "speaker-66",
        name: "Genalyn Aquino-Alcayera",
        designation: "Representative",
        organization: "Fair Finance Asia",
      },
      {
        id: "speaker-67",
        name: "Marlene Sindayen",
        designation: "Representative",
        organization: "NOVADECI",
      },
      {
        id: "speaker-68",
        name: "Jay Lacsamana",
        designation: "Representative",
        organization: "The CentRE",
      },
      {
        id: "speaker-69",
        name: "Lito Ignacio Villar",
        designation: "Representative",
        organization: "FSSI",
      },
    ],
  },
  {
    id: "d2-closing",
    time: "16:15 - 17:00",
    title: "Closing",
    description: "Closing remarks and next steps.",
    type: "plenary",
  },
  {
    id: "d2-consult",
    time: "08:00 - 17:00",
    title: "Consultation Sessions (All Day)",
    description: "One-on-one consultations with RE experts.",
    type: "exhibit",
    speakers: [
      {
        id: "expert-1",
        name: "Ivan Limjuco",
        designation: "Consultant",
        organization: "Allotrope Partners",
      },
      {
        id: "expert-2",
        name: "Dr. Nelson Enano, Jr.",
        designation: "Director",
        organization: "AdDU-CREATE, CentRE, MREC",
      },
      {
        id: "expert-3",
        name: "Engr. Jeriel Militar",
        designation: "Engineer",
        organization: "Central Philippine University",
      },
      {
        id: "expert-4",
        name: "Grace Yeneza",
        designation: "Representative",
        organization: "Preferred Energy, Inc.",
      },
      {
        id: "expert-5",
        name: "Matthew Carpio",
        designation: "Representative",
        organization: "Climate Smart Ventures",
      },
      {
        id: "expert-6",
        name: "Jun Escobar",
        designation: "Representative",
        organization: "ICSC",
      },
    ],
  },
  {
    id: "d2-exhibit",
    time: "08:00 - 17:00",
    title: "RE Exhibit (All Day)",
    description:
      "Continued exhibition of renewable energy products and services.",
    type: "exhibit",
    location: "Exhibition Hall",
  },
  {
    id: "d2-jobs",
    time: "08:00 - 17:00",
    title: "Green Jobs & Finance Fair (All Day)",
    description: "Job fair and financing opportunities showcase.",
    type: "exhibit",
    location: "Jobs & Finance Fair Area",
  },
];

export const DEC_13_EVENTS: Session[] = [
  {
    id: "d3-seminar",
    time: "Morning Session",
    title: "Seminar on Small Scale Wind Energy Systems",
    description:
      "Technical seminar on design, installation, and maintenance of small-scale wind energy systems.",
    type: "deep-dive",
    location: "Central Philippine University",
  },
  {
    id: "d3-graduation",
    time: "Afternoon Session",
    title: "RE Academy Graduation Ceremony",
    description:
      "Awarding of certificates to graduates of the Renewable Energy Academy training programs.",
    type: "ceremony",
    location: "Central Philippine University",
  },
  {
    id: "d3-training",
    time: "Full Day",
    title:
      "Training for Women on Renewable Energy, Low Carbon Solutions, and Entrepreneurship",
    description:
      "Comprehensive training program for women on renewable energy technologies and green business development.",
    type: "deep-dive",
    location: "Central Philippine University",
  },
];

// Consultation Experts
export interface ConsultationExpert {
  id: string;
  name: string;
  expertise: string;
  organization: string;
  photo?: string;
  availableSlots?: string[];
}

export const CONSULTATION_EXPERTS: ConsultationExpert[] = [
  {
    id: "expert-1",
    name: "Engr. Jeriel Militar",
    expertise: "RE Technology",
    organization:
      "Former Chairperson, Mechanical Engineering Department, Central Philippine University",
    photo: "/recongress2025/assets/people/jeriel-militar.webp",
    availableSlots: ["Day 1: 10:55-15:30", "Day 2: 12:00-13:00"],
  },
  {
    id: "expert-2",
    name: "Ms. Grace Yeneza",
    expertise: "Project Development",
    organization: "Executive Director, Preferred Energy, Inc.",
    photo: "/recongress2025/assets/people/grace-yeneza.png",
    availableSlots: ["Day 1: 10:55-15:30", "Day 2: 12:00-13:00"],
  },
  {
    id: "expert-3",
    name: "Dr. Nelson Enano, Jr.",
    expertise: "Policy",
    organization:
      "Director, Ateneo de Davao University - Center for Renewable Energy and Appropriate Technologies",
    photo: "/recongress2025/assets/people/nelson-enano.jpg",
    availableSlots: ["Day 1: 10:55-15:30", "Day 2: 12:00-13:00"],
  },
  {
    id: "expert-4",
    name: "Mr. Ivan Christian Limjuco",
    expertise: "Finance",
    organization: "Philippines Program Manager, Allotrope Partners",
    photo: "/recongress2025/assets/people/ivan-limjuco.jpg",
    availableSlots: ["Day 1: 10:55-15:30", "Day 2: 12:00-13:00"],
  },
  {
    id: "expert-5",
    name: "Mr. Joshua Soroño",
    expertise: "Finance",
    organization: "Country Assistant Manager, Allotrope Partners",
    photo: "/recongress2025/assets/people/joshua-sorono.webp",
    availableSlots: ["Day 1: 10:55-15:30", "Day 2: 12:00-13:00"],
  },
];
