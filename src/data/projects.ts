export interface Project {
  slug: string;
  number: string;
  image?: string;
  link?: string;
  client: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  impact: string;
  timeline: string;
  team: string;
  overview: string;
  problem: string;
  targetUsers: string;
  contribution: string[];
  process: { title: string; description: string }[];
  outcomes: string[];
}

const projects: Project[] = [
  {
    slug: "gamified-skills-assessment-platform",
    image: "/eva.png",
    number: "06",
    link: "https://eva.anlci.gouv.fr/",
    client: "Beta.gouv",
    title: "Gamification Platform 🎮",
    role: "Frontend Developer",
    description:
      "Developed interactive and gamified assessment tools to help identify literacy and numeracy gaps, enabling counselors to deliver more personalized and effective support.",
    tags: [
      "Frontend Development",
      "Gamification",
      "Data Visualization",
      "Accessibility",
    ],
    impact:
      "Improved assessment efficiency and quality of support provided to beneficiaries",
    timeline: "Oct 2021 — Jan 2025",
    team: "2 Designers, 4 Engineers",
    overview:
      "The EVA platform supports both individuals in social and employment integration programs and the professionals guiding them. This project focused on designing and developing gamified modules to assess literacy and numeracy skills, provide actionable insights, and support personalized guidance. It included interactive experiences for users, configurable tools for administrators, and data dashboards for analysis.",
    problem:
      "How might we help employment counselors assess literacy and numeracy challenges in an engaging, reliable, and actionable way?",
    targetUsers:
      "Adults facing literacy and numeracy challenges, as well as employment counselors who need structured, reliable insights to guide support and training programs.",
    contribution: [
      "Developed interactive and gamified user interfaces to assess core skills",
      "Collaborated with public institutions to translate evaluation frameworks into functional digital experiences",
      "Designed responsive and accessible experiences for both end users and administrators",
      "Implemented progression systems with levels and real-time skill evaluation",
      "Built a configurable admin interface to create and manage assessment modules",
      "Developed scoring logic aligned with official evaluation criteria",
      "Created dashboards to visualize user competency profiles",
      "Enabled data export features to support analysis and reporting workflows",
    ],
    process: [
      {
        title: "Understanding",
        description:
          "Collaborated with public institutions and domain experts to understand evaluation frameworks and translate them into digital requirements.",
      },
      {
        title: "Design",
        description:
          "Designed interactive and engaging assessment flows with the UI Designer using gamification mechanics to encourage user engagement and reduce friction.",
      },
      {
        title: "Implementation",
        description:
          "Developed scalable front-end modules, including game logic, progression systems, and responsive interfaces for multiple user types.",
      },
      {
        title: "Data Analysis",
        description:
          "Built dashboards and configurable tools enabling counselors to analyze results, track progress, and adapt support strategies.",
      },
      {
        title: "Validation",
        description:
          "Iterated on features based on user feedback and field usage to improve usability, clarity of results, and overall effectiveness.",
      },
    ],
    outcomes: [
      "Reduced time required for skill assessment and reporting",
      "Enabled more accurate and structured identification of literacy and numeracy gaps",
      "Improved guidance toward tailored training and support programs",
      "Enhanced engagement through gamified evaluation experiences",
      "Increased quality and consistency of support provided by counselors",
      "Average user satisfaction rating: 8.8 / 10",
    ],
  },
  {
    slug: "women-hiking-safety-research",
    number: "07",
    link: "https://shecanhike.com/en",
    title: "Women’s Hiking Experience & Safety Research",
    role: "UX Researcher",
    client: "She Can Hike",
    description:
      "Conducting exploratory user research to understand the barriers, motivations, and safety perceptions of women hiking, with the goal of identifying opportunities to support more confident and independent outdoor experiences.",
    tags: [
      "User Research",
      "Qualitative Research",
      "Interviews",
      "Field Observation",
    ],
    impact:
      "Uncovered key insights into safety perception, social dynamics, and confidence barriers shaping women’s hiking behaviors",
    timeline: "Apr 2025 — Present",
    team: "Independent project",
    overview:
      "This ongoing research explores how women experience hiking, focusing on emotional, social, and safety-related factors. Through interviews and real-world observations, the project aims to better understand the gap between the desire for independence and the constraints that limit outdoor experiences.",
    problem:
      "How might we enable women to hike while feeling safe, confident, and at ease?",
    targetUsers:
      "Women interested in hiking, ranging from beginners to experienced hikers, who may face psychological, social, or safety-related barriers when considering solo or group outings.",
    contribution: [
      "Conducted in-depth interviews to explore motivations, fears, and decision-making processes",
      "Organized and facilitated group hiking sessions to observe real behaviors and social dynamics",
      "Collected qualitative insights on perceived vs actual safety concerns",
      "Identified patterns in preparation, risk assessment, and emotional triggers",
      "Documented early insights to inform future product or service opportunities",
    ],
    process: [
      {
        title: "Exploration",
        description:
          "Defined the research scope around hiking, safety perception, and emotional barriers specific to women.",
      },
      {
        title: "User Interviews",
        description:
          "Conducted qualitative interviews to understand personal experiences, motivations, and fears related to hiking.",
      },
      {
        title: "Field Observation",
        description:
          "Organized and participated in group hikes to observe behaviors, interactions, and decision-making in real contexts.",
      },
      {
        title: "Synthesis",
        description:
          "Analyzed recurring themes around safety perception, confidence, and social dynamics shaping outdoor practices.",
      },
      {
        title: "Insight Generation",
        description:
          "Identified key opportunity areas to support safer and more empowering hiking experiences.",
      },
    ],
    outcomes: [
      "Identified key psychological and situational barriers preventing women from hiking alone",
      "Revealed the importance of perceived safety over actual risk in decision-making",
      "Highlighted the role of preparation, environment, and social reassurance in building confidence",
      "Uncovered opportunities to support safer and more autonomous outdoor experiences",
      "Established a strong foundation for future product or service design",
    ],
  },
  {
    slug: "virtual-wardrobe-mobile-app",
    image: "/vera.jpg",
    number: "04",
    link: "https://www.elle.fr/Mode/Les-news-mode/Vera-l-application-de-dressing-virtuel-qui-permet-de-redecouvrir-sa-garde-robe-4007854",
    title: "Virtual Wardrobe & Outfit Recommendation App",
    role: "Frontend Developer",
    client: "Vera",
    description:
      "Contributed to the development of a mobile app helping users manage their wardrobe and receive contextual outfit suggestions, reducing decision fatigue and encouraging more sustainable fashion habits.",
    tags: ["Mobile App", "User Experience", "Analytics", "Performance"],
    impact:
      "Reached 10,000+ users and validated strong interest in digital wardrobe tools that simplify outfit decisions and promote more mindful clothing usage",
    timeline: "Jan 2023 — May 2024",
    team: "1 Designer, 4 Engineers, 1 PM, 1 PO",
    overview:
      "Vera is a mobile app that enables users to digitize their wardrobe and receive personalized outfit suggestions based on context such as weather, season, and preferences. The product focuses on simplifying daily decision-making while encouraging users to better use what they already own, supporting more sustainable fashion behaviors.",
    problem:
      "How might we help users make better use of their existing wardrobe while reducing the cognitive load of daily outfit decisions?",
    targetUsers:
      "People who feel overwhelmed by outfit choices despite owning many clothes, and who are interested in simplifying their routines and adopting more mindful consumption habits.",
    contribution: [
      "Developed key interfaces for wardrobe browsing and outfit visualization",
      "Collaborated closely with design and product teams to deliver intuitive and user-friendly flows",
      "Implemented analytics tracking to better understand user behavior and inform product decisions",
      "Optimized navigation and performance to ensure a smooth and responsive mobile experience",
      "Contributed to improving the clarity and usability of core user journeys",
    ],
    process: [
      {
        title: "User Understanding",
        description:
          "Analyzed user needs around wardrobe management, decision fatigue, and daily routines to inform key product features.",
      },
      {
        title: "Experience Design",
        description:
          "Collaborated with designers to shape intuitive flows for adding clothes, browsing outfits, and receiving recommendations.",
      },
      {
        title: "Implementation",
        description:
          "Developed mobile interfaces with a focus on usability, performance, and smooth navigation across core journeys.",
      },
      {
        title: "Measurement",
        description:
          "Implemented analytics tracking to monitor user behavior, engagement, and key interaction flows.",
      },
      {
        title: "Iteration",
        description:
          "Improved features based on user insights and team feedback to enhance usability and engagement.",
      },
    ],
    outcomes: [
      "Validated strong user interest with 10,000+ active users",
      "Reduced friction in daily outfit selection through simplified user flows",
      "Improved user engagement through personalized outfit recommendations",
      "Enhanced app performance and navigation, leading to a smoother user experience",
      "Encouraged more mindful and sustainable clothing usage behaviors",
    ],
  },
  {
    slug: "3d-virtual-experience",
    number: "01",
    link: "https://artaufeminin.fr/",
    title: "Immersive 3D Art Discovery Experience",
    role: "UX Designer",
    client: "Art au féminin",
    description:
      "Designed an immersive and intuitive 3D art exploration experience, iteratively refined through usability testing with a community of 8,000 art enthusiasts.",
    tags: [
      "User Research",
      "Usability Testing",
      "Prototyping",
      "3D Experience",
    ],
    impact: "800 applications for the first exhibition",
    timeline: "Feb 2026 — Present",
    team: "1 Designer, 1 Developer",
    overview:
      "Designed an immersive online exhibition platform to increase visibility for women artists and enable users to seamlessly discover and purchase artworks.",
    problem:
      "How might we design an online art gallery that enables users to explore, discover, and purchase artworks through an intuitive and engaging digital experience?",
    targetUsers:
      "Art enthusiasts interested in discovering emerging artists, engaging with art in meaningful ways, and purchasing pieces online. Key segments included first-time buyers and regular collectors.",
    contribution: [
      "Validated key user journeys through interactive prototype testing",
      "Synthesized user feedback into actionable design improvements",
      "Built the first MVP, translating concepts into a functional product experience",
      "Iterated on prototypes in close collaboration with users based on research insights",
      "Presented research findings and design recommendations to stakeholders",
    ],
    process: [
      {
        title: "Discovery",
        description:
          "Defined how a 3D virtual exhibition could support both art discovery and purchasing behaviors, aligning product goals with artists’ visibility needs.",
      },
      {
        title: "Research",
        description:
          "Conducted usability tests with a community of 8,000 art enthusiasts to understand how users explore, navigate, and engage with artworks in a 3D environment.",
      },
      {
        title: "Synthesis",
        description:
          "Identified key friction points in navigation, spatial orientation, and purchase intent, shaping core user flows for exploration and buying.",
      },
      {
        title: "Ideation",
        description:
          "Designed and iterated on 3D interaction patterns and gallery layouts to create a balance between immersion and usability.",
      },
      {
        title: "Validation",
        description:
          "Continuously tested prototypes to improve discoverability of artworks and reduce friction in the transition from exploration to purchase.",
      },
    ],
    outcomes: [],
  },
  {
    slug: "social-innovation-entrepreneurship-program",
    number: "03",
    link: "https://www.lp4y.org/",
    title: "Entrepreneurship Program Design for Disadvantaged Youth",
    role: "Project Manager",
    client: "LP4Y",
    description:
      "Led user-centered entrepreneurship programs enabling youth facing social and economic barriers to develop job-ready skills through hands-on business creation and iterative learning.",
    tags: ["Service Design", "User Research", "Facilitation", "Social Impact"],
    impact:
      "Improved employability and autonomy of participants through experiential learning programs",
    timeline: "Jul 2017 — Sept 2019",
    team: "Cross-functional teams across 17 programs",
    overview:
      "LP4Y develops programs where young adults build and manage micro-enterprises to gain professional and entrepreneurial skills. This role focused on designing and scaling user-centered learning experiences that combine real-world business activity, skill development, and continuous feedback.",
    problem:
      "How might we help out-of-school young adults build job-ready skills and confidence through hands-on, real-world entrepreneurial experiences?",
    targetUsers:
      "Young adults living in informal settlements with limited access to education and employment opportunities, often facing social and economic barriers.",
    contribution: [
      "Led and coordinated 17 entrepreneurship programs across Southeast Asia",
      "Designed learning frameworks and tools adapted to low-resource environments",
      "Facilitated workshops to help participants ideate, test, and iterate on micro-businesses",
      "Coached both participants and local trainers in developing sustainable business activities",
      "Translated field insights into continuous improvements of the programs",
      "Created structured learning journeys combining experimentation, feedback, and skill-building",
    ],
    process: [
      {
        title: "User Understanding",
        description:
          "Immersed in local contexts to understand participants’ needs, constraints, motivations, and barriers to employment.",
      },
      {
        title: "Co-creation",
        description:
          "Facilitated workshops to help participants ideate and shape their own micro-business concepts based on their skills and environment.",
      },
      {
        title: "Experimentation",
        description:
          "Supported rapid testing of business ideas through real-world implementation and iteration.",
      },
      {
        title: "Learning Design",
        description:
          "Structured learning journeys combining practical experience, feedback loops, and skill development.",
      },
      {
        title: "Iteration & Scaling",
        description:
          "Continuously improved program frameworks based on field feedback and scaled them across multiple locations.",
      },
    ],
    outcomes: [
      "Enabled participants to develop job-ready and entrepreneurial skills through hands-on experience",
      "Increased participants’ confidence and autonomy in professional environments",
      "Improved success rate of micro-business initiatives through iterative testing",
      "Scaled programs across 17 locations with consistent learning frameworks",
      "Strengthened alignment between training programs and real-world economic opportunities",
    ],
  },
  {
    slug: "design-system-component-implementation",
    image: "/credit_agricole.png",
    number: "02",
    link: "https://propulsebyca.fr/",
    title: "Design System & Component Library Implementation",
    role: "Frontend Developer",
    client: "Crédit Agricole",
    description:
      "Developed a scalable and accessible design system for an online banking platform, enabling consistent UI implementation and faster product development.",
    tags: ["Vuejs", "TypeScript", "Design System", "Accessibility"],
    impact: "Reduced UI inconsistencies and improved development efficiency",
    timeline: "Apr 2024 — Sept 2024",
    team: "1 Designers, 2 Engineers",
    overview:
      "Built a unified design system and component library using Vue.js and TypeScript to replace fragmented UI implementations across the platform. Delivered 60+ reusable components, comprehensive documentation, and integrated accessibility standards to ensure consistency, scalability, and compliance.",
    problem:
      "How might we standardize UI components across multiple banking interfaces to ensure consistency, accessibility, and scalability while improving developer efficiency?",
    targetUsers:
      "Frontend developers and designers working on the banking platform, needing reliable, reusable, and accessible UI components to build consistent user experiences.",
    contribution: [
      "Developed 40+ reusable Vue.js components with full TypeScript support",
      "Collaborated with designers to translate UI specifications into scalable components",
      "Set up automated accessibility testing within Storybook to ensure WCAG compliance",
      "Documented components, usage guidelines, and migration paths for adoption",
      "Contributed to improving consistency and reducing duplication across interfaces",
    ],
    process: [
      {
        title: "Architecture",
        description:
          "Defined the structure of the design system, including component taxonomy, naming conventions, and scalability principles.",
      },
      {
        title: "Foundation",
        description:
          "Established core design tokens (colors, typography, spacing) to ensure visual consistency across all components.",
      },
      {
        title: "Implementation",
        description:
          "Built reusable and typed Vue.js components aligned with design specifications and engineering best practices.",
      },
      {
        title: "Documentation",
        description:
          "Created clear usage guidelines, examples, and migration documentation to support adoption by developers.",
      },
      {
        title: "Validation",
        description:
          "Performed regular reviews to ensure compliance and component reliability.",
      },
    ],
    outcomes: [
      "Full WCAG 2.1 AA compliance across all components",
      "Decreased time-to-build for new product features",
      "Accelerated UI implementation through reusable components",
      "Reduced development time for new features by 25%",
    ],
  },
];

export default projects;
