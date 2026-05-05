const navLinks = [
  { id: "hero",        title: "Home" },
  { id: "about",       title: "About" },
  { id: "work",        title: "Projects" },
  { id: "services",    title: "Services" },
  { id: "experience",  title: "Experience" },
];

const words = [
  { text: "Stories",  imgPath: "/images/ideas.svg" },
  { text: "Moments",  imgPath: "/images/concepts.svg" },
  { text: "Brands",   imgPath: "/images/designs.svg" },
  { text: "Visions",  imgPath: "/images/code.svg" },
  { text: "Stories",  imgPath: "/images/ideas.svg" },
  { text: "Moments",  imgPath: "/images/concepts.svg" },
  { text: "Brands",   imgPath: "/images/designs.svg" },
  { text: "Visions",  imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 7,   suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 50,  suffix: "+", label: "Clients Worldwide" },
  { value: 98,  suffix: "%", label: "Client Satisfaction" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Cinematic Quality",
    desc: "Every frame crafted with precision — delivering polished, broadcast-ready video content.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "Keeping you in the loop at every stage — transparent, responsive, and collaborative.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Fast turnarounds without cutting corners. Quality delivered on your schedule.",
  },
];

const services = [
  {
    number: "01",
    title: "Video Editing",
    desc: "End-to-end video editing — from raw footage to polished final cut. Colour grading, sound sync, pacing, and storytelling that captures your brand's voice.",
  },
  {
    number: "02",
    title: "Motion Graphics",
    desc: "Dynamic animated titles, lower thirds, transitions, and brand motion kits that make your content stand out across every platform.",
  },
  {
    number: "03",
    title: "Podcast Editing",
    desc: "Multi-track audio cleanup, noise removal, punchy cuts, and B-roll integration to produce engaging podcast episodes ready to publish.",
  },
  {
    number: "04",
    title: "Short & Long-form Content",
    desc: "Reels, YouTube long-form, brand stories, ad creatives — optimised for each platform's format and algorithm.",
  },
];

// Video editor tools (replacing tech stack)
const techStackImgs = [
  { name: "Premiere Pro",   imgPath: "/images/logos/react.png" },
  { name: "After Effects",  imgPath: "/images/logos/python.svg" },
  { name: "DaVinci Resolve",imgPath: "/images/logos/node.png" },
  { name: "Photoshop",      imgPath: "/images/logos/three.png" },
  { name: "Audition",       imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  {
    name: "Premiere Pro",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "After Effects",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "DaVinci Resolve",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Photoshop",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Audition",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Pratham elevated our brand content with cinematic edits that drove real engagement. His ability to tell a story through footage is unmatched.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Senior Video Editor — NDTV",
    date: "January 2022 – Present",
    responsibilities: [
      "Led post-production for daily news packages, live coverage, and documentary segments.",
      "Collaborated with producers and directors to develop visual storytelling frameworks.",
      "Managed an archive of 10,000+ hours of footage with precision metadata workflows.",
    ],
  },
  {
    review:
      "Working with Pratham on our brand campaigns was seamless. He delivered polished, platform-optimised content on very tight deadlines.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Video Editor — Cureskin",
    date: "June 2020 – December 2021",
    responsibilities: [
      "Produced 100+ social video ads, product explainers, and influencer campaign edits.",
      "Built motion graphic templates to standardise brand visual language across platforms.",
      "Reduced average delivery time by 40% through template-driven workflows.",
    ],
  },
  {
    review:
      "Pratham brought a high level of creativity and technical skill. Our YouTube channel's watch time doubled after his edits.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Freelance Video Editor",
    date: "March 2018 – May 2020",
    responsibilities: [
      "Edited YouTube content, short films, and event highlight reels for 20+ clients.",
      "Developed a signature colour-grading style that clients have requested as a consistent look.",
      "Handled full post-production pipeline: assembly, rough-cut, fine-cut, audio, and export.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

// Featured video projects
const videoProjects = [
  {
    id: 1,
    title: "Brand Video",
    category: "Brand",
    desc: "A premium brand film distilling identity, values, and vision into a 90-second cinematic statement — colour-graded for emotion, scored for impact.",
    thumbnail: "/images/project1.png",
    videoUrl: "",
    tags: ["Brand", "Cinematic", "Colour Grade"],
  },
  {
    id: 2,
    title: "Summer Vibes Festival Campaign",
    category: "Brand Video",
    desc: "Created a cinematic campaign for the Summer Vibes Festival — shooting highlights, colour grading for a golden-hour aesthetic, and cutting to a bespoke music track.",
    thumbnail: "/images/project2.png",
    videoUrl: "",
    tags: ["Colour Grading", "Motion Graphics", "Brand"],
  },
  {
    id: 3,
    title: "Cureskin Product Launch",
    category: "Social Media",
    desc: "Fast-paced product launch video with animated infographics, before-after sequences, and UGC integration designed for Instagram and YouTube.",
    thumbnail: "/images/project3.png",
    videoUrl: "",
    tags: ["Social Media", "Animation", "Product"],
  },
  {
    id: 4,
    title: "NDTV Documentary Short",
    category: "Documentary",
    desc: "A 12-minute documentary short covering grassroots sports in India — hand-held cinematography, interview sync, and archival footage woven into a narrative arc.",
    thumbnail: "/images/exp1.png",
    videoUrl: "",
    tags: ["Documentary", "Narrative", "News"],
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Pratham has an incredible eye for storytelling. He took our raw footage and transformed it into something that genuinely moved our audience. Outstanding work.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Pratham was a game-changer. Our YouTube engagement jumped 3× after his edits. He doesn't just cut footage — he crafts experiences.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Pratham's attention to pacing, colour, and sound design is top-tier. He delivered our brand campaign video two days early and it exceeded every benchmark we set.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Highly professional and communicative throughout. Pratham nailed the mood we were going for and the final output was broadcast-ready from day one.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "From podcast editing to full-length YouTube videos, Pratham handles everything with consistency and creativity. He's become our go-to editor for all content.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "The motion graphics Pratham designed for our product launch were stunning. Clean, modern, and perfectly on-brand. A true visual storyteller.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  { name: "insta",    imgPath: "/images/insta.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" },
  { name: "x",        imgPath: "/images/x.png" },
  { name: "fb",       imgPath: "/images/fb.png" },
];

export {
  words,
  abilities,
  services,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  videoProjects,
};
