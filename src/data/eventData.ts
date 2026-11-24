import { ScheduleItem, TrackItem, FaqItem } from '../types';

export const EVENT_DETAILS = {
  name: "DAYBREAK",
  edition: "THE NEW YEAR EDITION",
  tagline: "Make it before sunrise.",
  subTagline: "A new year. A new build.",
  heroPunchline: "24 hours. One night. A thousand possibilities.",
  heroDescription: "Leave the countdown behind. Bring your ideas, find your people, and build something before the sun comes up.",
  dateRange: "December 31 – January 1",
  duration: "24 Hours Overnight",
  location: "Bengaluru, India",
  venue: "Bengaluru Creative Innovation Hub (Central Bengaluru)",
  organizer: "ShipIt Teens",
  organizerUrl: "https://ship-it-teen.vercel.app/",
  targetAudience: "Teen developers, designers, hardware enthusiasts, and makers (Ages 13–19)",
  registrationDeadline: "December 20, 2026",
  eventStartIso: "2026-12-31T17:00:00+05:30",
  newYearMidnightIso: "2027-01-01T00:00:00+05:30",
  sunriseIso: "2027-01-01T06:45:00+05:30",
};

export const COLOR_PALETTE = {
  psychedelicAqua: '#2DDFFF',
  sunny: '#F5F474',
  techPink: '#E33CC7',
  romanticOrange: '#FFAA47',
  dragonFire: '#F54D28',
  cream: '#FAF8F5',
  ink: '#140E24',
  midnight: '#190E33',
};

// Official DAWIN Character Colour Palette (from design sheet)
export const DAWIN_PALETTE = {
  dark: '#1E1E1E',       // near-black body/screen
  cream: '#F5F1E8',      // hoodie & body
  orange: '#FF7A00',     // primary accent, sunrise motif, screen expressions
  gold: '#FFC94D',       // secondary warm highlights
  blueGrey: '#4F6D9A',   // cool accents
  purple: '#6A4C93',     // subtle contrast
};

// DAWIN Lore & Personality (canonical from design sheet)
export const DAWIN_LORE = {
  fullName: "DAWIN",
  title: "The Curious Co-Builder of Daybreak",
  traits: ["Curious", "Creative", "Collaborative", "A little chaotic", "Always exploring", "Believes in building together"],
  markings: ["M-zigzag wave", "X cross mark", "// double slash"],
  props: ["Laptop with sunrise sticker", "Headphones", "Backpack with patches", "Water bottle", "Anchor keychain"],
  description: "DAWIN is a friendly character with a retro CRT television monitor for a head, two antennae with ball tips, an expressive orange-glow screen face, and a cream-coloured oversized hoodie with an orange X marking on the chest. DAWIN wears dark cargo pants and chunky sneakers, and always carries a patched backpack.",
};

export const MANIFESTO_SECTIONS = [
  {
    type: "conventional",
    badge: "THE CONVENTIONAL NYE",
    title: "Waiting For The Clock",
    points: [
      "Crowded noisy parties with stale music playlists",
      "Staring at a phone counting down 10... 9... 8...",
      "Making resolutions you might forget by January 3rd",
      "Waking up the next morning feeling like nothing changed"
    ]
  },
  {
    type: "daybreak",
    badge: "THE DAYBREAK PROMISE",
    title: "Building Into The Dawn",
    points: [
      "Turning ideas into tangible running code and hardware",
      "High-fiving teammates at 00:00:01 as a git push lands",
      "Entering the new year surrounded by curious, passionate peers",
      "Greeting the sunrise holding something real you built with your hands"
    ]
  }
];

export const EXPERIENCES = [
  {
    number: "01",
    title: "Build Through The Night",
    tagline: "A full 24-hour building flow.",
    description: "Experience the electric hum of the overnight sprint. When the city sleeps, the lab comes alive with coffee, soldering irons, mechanical keyboards, and unstoppable maker energy.",
    color: "#FFAA47",
    textColor: "#140E24",
    badge: "OVERNIGHT FLOW",
    perks: ["24/7 High-speed Internet & Power", "Late-night pizza & chai fuels", "Quiet sleep & rest pods"]
  },
  {
    number: "02",
    title: "Find Your People",
    tagline: "Meet fellow developers, designers, and makers.",
    description: "No solo silos. Connect with teen hackers from across India who share your obsession with building. Form cross-disciplinary squads combining frontend wizards, systems coders, and 3D modellers.",
    color: "#2DDFFF",
    textColor: "#140E24",
    badge: "COMMUNITY FIRST",
    perks: ["Speed team matchmaking", "Peer code & design jams", "Mentorship from top founders & engineers"]
  },
  {
    number: "03",
    title: "Experiment Without Limits",
    tagline: "Explore software, hardware, and creative technology.",
    description: "No boring enterprise dashboards or cookie-cutter clones. Build weird musical instruments, retro microcomputers, autonomous drones, AI companions, or interactive generative canvas art.",
    color: "#E33CC7",
    textColor: "#FFFFFF",
    badge: "UNCONVENTIONAL TECH",
    perks: ["Hardware lab with sensors & ESP32s", "Zero restrictions on tech stacks", "Fast-track API sandboxes"]
  },
  {
    number: "04",
    title: "Demo Day At Sunrise",
    tagline: "Present what you built and celebrate the work.",
    description: "As the first rays of the new year light up the Bengaluru skyline, gather for an energetic expo. Share your messy triumphs, live bugs, breakthrough moments, and ship to the world.",
    color: "#F5F474",
    textColor: "#140E24",
    badge: "THE FIRST SHIP OF 2027",
    perks: ["Live 3-minute stage demos", "Custom engraved trophies & grants", "Community voting & feedback"]
  }
];

export const TRACKS: TrackItem[] = [
  {
    id: "open-projects",
    title: "OPEN PROJECTS",
    tagline: "Build anything you can imagine.",
    description: "From delightful web tools and developer utilities to indie games, interactive digital poetry, mobile apps, and creative AI engines. If you can conceive it in 24 hours, you can ship it.",
    highlights: ["Web & Mobile Applications", "Developer Tools & CLIs", "Creative Coding & Shaders", "Indie Games & Interactive Media"],
    examples: ["A peer-to-peer browser file drop", "Generative typography synthesizer", "Offline emergency mesh messenger", "A retro arcade built in Rust"],
    iconBg: "bg-daybreak-orange",
    accentColor: "#FFAA47"
  },
  {
    id: "hardware-hacks",
    title: "HARDWARE HACKS",
    tagline: "Physical computing, electronics & unconventional inventions.",
    description: "Get your hands dirty with microcontrollers, servos, LEDs, breadboards, 3D prints, sensors, and robotics. Bridge the gap between digital logic and the tangible physical world.",
    highlights: ["Microcontrollers (ESP32, RP2040, Arduino)", "Robotics, Mechatronics & Drones", "Synthesizers & MIDI Instruments", "Wearables & IoT Installations"],
    examples: ["Physical pomodoro robot with CRT eyes", "Laser tripwire alarm system", "Mechanical MIDI typewriter", "Smart bicycle safety helmet HUD"],
    iconBg: "bg-daybreak-aqua",
    accentColor: "#2DDFFF"
  },
  {
    id: "demo-day",
    title: "DEMO DAY & CELEBRATION",
    tagline: "Showcase your process, share your story, celebrate the dawn.",
    description: "A track dedicated to project presentation, technical craftsmanship, open-source documentation, and the sheer grit of shipping under the sunrise pressure.",
    highlights: ["Live Stage Presentations", "Open Source Release & Readmes", "Community Choice Awards", "Startup & Grant Discovery"],
    examples: ["Polished interactive demo stations", "High-energy lightning pitch", "Technical deep-dive retrospective", "Live hardware test run on stage"],
    iconBg: "bg-daybreak-pink",
    accentColor: "#E33CC7"
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    id: "s1",
    time: "03:30 PM – 05:00 PM",
    title: "Doors Open & Check-In",
    phase: "checkin",
    phaseLabel: "PHASE 01: ARRIVAL",
    description: "Check in at the venue, grab your official Daybreak badge, collect the sticker pack, set up your workstation, and grab your first welcome drink.",
    tag: "Welcome",
    iconName: "BadgeCheck"
  },
  {
    id: "s2",
    time: "05:00 PM – 06:15 PM",
    title: "Opening Ceremony & Keynote",
    phase: "kickoff",
    phaseLabel: "PHASE 02: THE SPARK",
    description: "Welcome address from ShipIt Teens founders, breakdown of track guidelines, introducing the mentor team, and unveiling the hardware pantry.",
    tag: "Ceremony",
    iconName: "Megaphone"
  },
  {
    id: "s3",
    time: "06:15 PM – 07:00 PM",
    title: "Team Formation & Idea Jam",
    phase: "kickoff",
    phaseLabel: "PHASE 02: THE SPARK",
    description: "Looking for teammates? Join the fast-paced pitch circle. Match with designers, frontend gurus, or hardware tinkerers.",
    tag: "Networking",
    iconName: "Users"
  },
  {
    id: "s4",
    time: "07:00 PM SHARP",
    title: "Hacking Officially Begins",
    phase: "kickoff",
    phaseLabel: "PHASE 02: THE SPARK",
    description: "The 24-hour countdown starts on the main CRT display. Repositories initialized, breadboards powered, keyboards clacking.",
    tag: "Milestone",
    iconName: "Flame"
  },
  {
    id: "s5",
    time: "08:30 PM – 09:30 PM",
    title: "Dinner & Mentor Office Hours",
    phase: "kickoff",
    phaseLabel: "PHASE 02: THE SPARK",
    description: "Hot Bengaluru street-food dinner served. Technical mentors circulate tables to assist with architecture, APIs, and hardware circuit checks.",
    tag: "Food & Mentors",
    iconName: "Utensils"
  },
  {
    id: "s6",
    time: "11:45 PM – 12:15 AM",
    title: "Midnight 2027 Countdown & Celebration",
    phase: "midnight",
    phaseLabel: "PHASE 03: MIDNIGHT SHIFT",
    description: "Pause the code for 15 minutes! Special New Year countdown with confetti, synthwave tracks, midnight snacks, and high-fives across the venue.",
    tag: "Celebration",
    iconName: "Sparkles"
  },
  {
    id: "s7",
    time: "01:30 AM – 03:00 AM",
    title: "Midnight Hardware Lab & Secret Mini-Challenge",
    phase: "night",
    phaseLabel: "PHASE 04: THE NIGHT OWL",
    description: "Optional surprise mini-challenge with instant swag prizes, plus soldering tutorials and 3D printing assistance in the hardware lab.",
    tag: "Lab Session",
    iconName: "Cpu"
  },
  {
    id: "s8",
    time: "03:30 AM – 05:00 AM",
    title: "The 3 AM Flow State & Silent Cafe",
    phase: "night",
    phaseLabel: "PHASE 04: THE NIGHT OWL",
    description: "The deepest building hours. Fresh filter coffee, quiet lo-fi beats, peer testing, and debugging sessions under the neon glow.",
    tag: "Focus",
    iconName: "Coffee"
  },
  {
    id: "s9",
    time: "06:30 AM – 07:15 AM",
    title: "Sunrise Watch & Dawn Breakfast",
    phase: "dawn",
    phaseLabel: "PHASE 05: SUNRISE SPRINT",
    description: "Head to the open rooftop terrace to witness the first sunrise of the new year over Bengaluru. Fresh dosas, fruit, and hot coffee served.",
    tag: "Sunrise Moment",
    iconName: "Sunrise"
  },
  {
    id: "s10",
    time: "09:30 AM – 11:00 AM",
    title: "Code Freeze & Submissions Deadline",
    phase: "dawn",
    phaseLabel: "PHASE 05: SUNRISE SPRINT",
    description: "Git push origin main! Submissions close on the Daybreak portal. Prepare your demo slides, video clips, and live hardware setups.",
    tag: "Deadline",
    iconName: "GitCommit"
  },
  {
    id: "s11",
    time: "11:30 AM – 02:00 PM",
    title: "The Demo Day Expo & Stage Pitches",
    phase: "finale",
    phaseLabel: "PHASE 06: DEMO & FINALE",
    description: "Every squad demonstrates their working project to attendees, judges, and visiting tech leaders. 3-minute lightning presentations with live testing.",
    tag: "Demos",
    iconName: "MonitorPlay"
  },
  {
    id: "s12",
    time: "03:00 PM – 04:00 PM",
    title: "Awards, Closing Ceremony & Group Photo",
    phase: "finale",
    phaseLabel: "PHASE 06: DEMO & FINALE",
    description: "Announcing track champions, category awards, community favorites, presenting custom etched badges, and celebrating the first build of the year.",
    tag: "Closing",
    iconName: "Trophy"
  }
];

export const DAWIN_MOODS: Record<string, { label: string; eyeArt: string; mouthArt: string; dialogue: string; color: string }> = {
  neutral: {
    label: "NEUTRAL",
    eyeArt: "—  —",
    mouthArt: "____",
    dialogue: "Standing by... waiting for someone to press START.",
    color: "#FF7A00"
  },
  happy: {
    label: "HAPPY",
    eyeArt: "^   ^",
    mouthArt: "(___)",
    dialogue: "BEEP BOOP! Ready to build something that'll melt brains?",
    color: "#FFC94D"
  },
  excited: {
    label: "EXCITED",
    eyeArt: "★   ★",
    mouthArt: "\\___/",
    dialogue: "24 HOURS OF BUILDING?! LET'S GOOOOO!",
    color: "#FF7A00"
  },
  laugh: {
    label: "LAUGH",
    eyeArt: ">   <",
    mouthArt: "HAHA",
    dialogue: "Ahaha! That bug was actually a feature all along!",
    color: "#FFC94D"
  },
  curious: {
    label: "CURIOUS",
    eyeArt: "?   ?",
    mouthArt: " ~~ ",
    dialogue: "Hmm... what if we connected that sensor to a MIDI controller?",
    color: "#4F6D9A"
  },
  thinking: {
    label: "THINKING",
    eyeArt: "•   •",
    mouthArt: " .. ",
    dialogue: "Processing... calculating... optimizing architecture...",
    color: "#6A4C93"
  },
  surprised: {
    label: "SURPRISED",
    eyeArt: "O   O",
    mouthArt: "( O )",
    dialogue: "WHOA! That hardware prototype is actually working?! Insane!",
    color: "#FF7A00"
  },
  confused: {
    label: "CONFUSED",
    eyeArt: "?   !",
    mouthArt: " ~~ ",
    dialogue: "Wait... is that a pointer to a pointer to a... pointer?",
    color: "#4F6D9A"
  },
  focused: {
    label: "FOCUSED",
    eyeArt: "< / >",
    mouthArt: "[===]",
    dialogue: "Git commit -m 'Fixed that 3AM memory leak'! Clack clack clack!",
    color: "#FF7A00"
  },
  tired: {
    label: "TIRED",
    eyeArt: "-   -",
    mouthArt: " ... ",
    dialogue: "Zzz... 3:45 AM... Pass the filter coffee and some solder wick...",
    color: "#1E1E1E"
  },
  overwhelmed: {
    label: "OVERWHELMED",
    eyeArt: "X   X",
    mouthArt: " ~~~ ",
    dialogue: "Too many tabs open... brain.exe has stopped responding...",
    color: "#6A4C93"
  },
  idea: {
    label: "IDEA!",
    eyeArt: "!   !",
    mouthArt: "\\___/",
    dialogue: "EUREKA! What if we use a sunrise as the trigger signal?!",
    color: "#FFC94D"
  },
};

export const FAQS: FaqItem[] = [
  {
    question: "Who can participate in Daybreak?",
    answer: "Daybreak is exclusively designed for teenagers aged 13 to 19. Whether you're in high school, college, or self-learning, if you're a teen maker who loves coding, design, hardware, or creative storytelling, you belong here. No prior hackathon experience required!",
    category: "general"
  },
  {
    question: "Do I need a team before applying?",
    answer: "Nope! You can apply individually or with a squad of up to 4 members. If you apply solo, we host an energetic matchmaking mixer at the beginning of the event to help you connect with complementary teammates (e.g., matching a backend developer with a UI designer or hardware hacker).",
    category: "teams"
  },
  {
    question: "What does it cost to attend?",
    answer: "Daybreak is 100% free! Thanks to ShipIt Teens and our community supporters, venue admission, all meals (dinner, midnight pizzas, snacks, dawn breakfast), drinks, stickers, event badges, and hardware lab tools are completely covered.",
    category: "general"
  },
  {
    question: "What should I bring with me?",
    answer: "Bring your laptop, charger, phone, government or student ID for check-in, any microcontrollers or hardware parts you'd love to experiment with, a comfortable hoodie/jacket for late night, and personal toiletries. We provide power strips, Wi-Fi, monitors in limited supply, and resting areas.",
    category: "logistics"
  },
  {
    question: "Is it really a 24-hour overnight event? Is it safe?",
    answer: "Yes, Daybreak runs non-stop for 24 hours through New Year's Eve into New Year's Day. The venue is fully secure and private with 24/7 security personnel, adult chaperones, background-verified mentors, separate gender-segregated quiet rest zones, and a dedicated first-aid team.",
    category: "logistics"
  },
  {
    question: "I am a total beginner. Will I be overwhelmed?",
    answer: "Not at all. We love first-time builders! We run dedicated starter workshops, provide starter templates, have roaming mentors who debug code with you, and judge projects based on creativity, learning curve, and ambition rather than pure complexity.",
    category: "building"
  },
  {
    question: "What kinds of things can I build?",
    answer: "Almost anything! You can build a web application, mobile app, browser extension, CLI tool, video game, creative generative artwork, machine learning model, or physical hardware gadget with sensors and microcontrollers. All code and hardware must be built during the 24 hours.",
    category: "building"
  },
  {
    question: "Where in Bengaluru will the event be hosted?",
    answer: "The event is hosted at a premier creative tech campus in central Bengaluru with great connectivity via Namma Metro. The exact venue address and check-in instructions will be sent directly to accepted participants alongside their admission pass.",
    category: "logistics"
  }
];

export const STICKERS = [
  { id: 'logo', label: 'DAYBREAK', type: 'text', color: '#140E24', bg: '#FFAA47' },
  { id: 'sun', label: 'SUNRISE RAYS', type: 'icon', icon: 'Sun', color: '#FFAA47', bg: '#140E24' },
  { id: 'code', label: '</>', type: 'code', color: '#FFFFFF', bg: '#E33CC7' },
  { id: 'gameboy', label: 'GAMEBOY', type: 'icon', icon: 'Gamepad2', color: '#140E24', bg: '#F5F474' },
  { id: 'pixel-heart', label: 'MADE WITH LOVE', type: 'icon', icon: 'Heart', color: '#FFFFFF', bg: '#F54D28' },
  { id: 'bengaluru', label: 'BLR 560001', type: 'mono', color: '#140E24', bg: '#2DDFFF' },
  { id: 'dawin', label: 'DAWIN CRT', type: 'icon', icon: 'Tv', color: '#140E24', bg: '#FFAA47' },
];
