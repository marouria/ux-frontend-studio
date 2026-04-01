export interface Project {
  slug: string;
  number: string;
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
    slug: "ecommerce-checkout-redesign",
    number: "01",
    title: "E-commerce Checkout Redesign",
    role: "Lead UX Researcher",
    description: "Reduced cart abandonment by 34% through iterative usability testing and A/B experimentation across 12 markets.",
    tags: ["User Testing", "A/B Testing", "Prototyping"],
    impact: "34% reduction in cart abandonment",
    timeline: "Jan 2023 — Jun 2023",
    team: "2 Designers, 3 Engineers, 1 PM",
    overview: "A comprehensive redesign of the checkout experience for a global e-commerce platform serving millions of users across 12 international markets. The project aimed to simplify the purchase flow and reduce friction points identified through quantitative and qualitative research.",
    problem: "The existing checkout flow had a 68% cart abandonment rate, significantly above industry benchmarks. Users reported confusion around shipping options, payment methods, and order summaries. The flow was originally designed for a single market and had been patched incrementally for international expansion, resulting in inconsistent experiences.",
    targetUsers: "Online shoppers across 12 markets, ranging from tech-savvy millennials to older demographics less comfortable with digital transactions. Key segments included first-time buyers, returning customers, and mobile-first users in emerging markets.",
    contribution: [
      "Planned and conducted 24 moderated usability sessions across 4 markets",
      "Designed and analyzed A/B tests for 6 checkout flow variations",
      "Created journey maps and identified 14 friction points in the existing flow",
      "Collaborated with designers to iterate on prototypes based on research findings",
      "Presented insights and recommendations to C-level stakeholders",
    ],
    process: [
      { title: "Discovery", description: "Analyzed existing analytics data, conducted stakeholder interviews, and performed competitive benchmarking across 8 competitors." },
      { title: "Research", description: "Ran 24 moderated usability sessions, deployed a survey to 2,000+ users, and mapped the end-to-end journey for 4 key user segments." },
      { title: "Synthesis", description: "Identified 14 friction points, prioritized them using an impact/effort matrix, and created actionable design recommendations." },
      { title: "Validation", description: "Designed and ran 6 A/B tests over 8 weeks, iterating on the checkout flow based on quantitative results and qualitative feedback." },
    ],
    outcomes: [
      "34% reduction in cart abandonment rate",
      "22% increase in checkout completion on mobile",
      "12-point improvement in post-purchase NPS score",
      "Research framework adopted by 3 other product teams",
    ],
  },
  {
    slug: "design-system-component-library",
    number: "02",
    title: "Design System & Component Library",
    role: "Frontend Developer",
    description: "Built a React-based design system serving 8 product teams, with full accessibility compliance and comprehensive documentation.",
    tags: ["React", "TypeScript", "Accessibility"],
    impact: "8 teams unified under one system",
    timeline: "Mar 2022 — Dec 2022",
    team: "2 Designers, 2 Engineers",
    overview: "A unified design system and component library built with React and TypeScript, designed to replace fragmented UI implementations across 8 product teams. The system includes 60+ components, comprehensive documentation, and automated accessibility testing.",
    problem: "Each product team maintained its own UI components, leading to visual inconsistency, duplicated effort, and accessibility gaps. New features took 40% longer to build due to lack of reusable components, and the brand experience varied significantly across products.",
    targetUsers: "Internal product teams (designers and developers) who build customer-facing applications. Secondary users include QA engineers who test for accessibility and consistency.",
    contribution: [
      "Architected the component library structure and API design",
      "Implemented 40+ React components with full TypeScript support",
      "Set up automated accessibility testing with axe-core and Storybook",
      "Created comprehensive documentation and migration guides",
      "Led adoption workshops for 8 product teams",
    ],
    process: [
      { title: "Audit", description: "Catalogued existing components across all teams, identifying 120+ unique UI elements with significant overlap and inconsistency." },
      { title: "Architecture", description: "Defined the component API, theming system, and token structure. Established accessibility requirements (WCAG 2.1 AA) as a non-negotiable baseline." },
      { title: "Implementation", description: "Built components iteratively, starting with primitives and composing complex patterns. Each component included unit tests, a11y tests, and Storybook documentation." },
      { title: "Adoption", description: "Ran workshops, created migration guides, and embedded with teams during their first sprint using the new system." },
    ],
    outcomes: [
      "8 product teams migrated to the unified system",
      "40% reduction in time-to-build for new features",
      "Full WCAG 2.1 AA compliance across all components",
      "60+ components with 95% test coverage",
    ],
  },
  {
    slug: "patient-portal-discovery",
    number: "03",
    title: "Patient Portal Discovery",
    role: "UX Researcher",
    description: "Led generative research with 40+ participants to define the information architecture of a healthcare patient portal.",
    tags: ["Interviews", "Journey Mapping", "IA"],
    impact: "40+ participant research study",
    timeline: "Jun 2022 — Oct 2022",
    team: "1 Designer, 2 Engineers, 1 Clinical Advisor",
    overview: "A generative research project to inform the design of a new patient portal for a regional healthcare provider. The portal needed to serve diverse patient populations while meeting strict regulatory and accessibility requirements.",
    problem: "Patients had no centralized digital access to their health records, appointment scheduling, or provider communication. The existing system relied on phone calls and paper forms, leading to long wait times, missed appointments, and low patient satisfaction scores.",
    targetUsers: "Patients aged 18–80+ with varying levels of digital literacy, including elderly patients managing chronic conditions, young professionals seeking convenience, and caregivers managing family members' health needs.",
    contribution: [
      "Designed and conducted 40+ semi-structured interviews across 5 patient segments",
      "Facilitated card sorting and tree testing sessions to define the information architecture",
      "Created detailed journey maps for 4 primary user flows",
      "Synthesized findings into a research report with prioritized design recommendations",
      "Presented findings to clinical and executive stakeholders",
    ],
    process: [
      { title: "Planning", description: "Defined research questions, recruited diverse participants across 5 segments, and developed interview and activity guides." },
      { title: "Generative Research", description: "Conducted 40+ semi-structured interviews, 3 focus groups, and diary studies with 12 participants over 2 weeks." },
      { title: "Information Architecture", description: "Ran card sorting sessions with 30 participants and validated the resulting IA with tree testing across key user flows." },
      { title: "Synthesis & Handoff", description: "Created journey maps, personas, and a comprehensive research report. Facilitated design workshops to translate insights into product requirements." },
    ],
    outcomes: [
      "Defined the IA for 6 core portal sections",
      "Identified 3 previously unknown patient needs",
      "Research directly informed the MVP feature set",
      "92% task completion rate in tree testing validation",
    ],
  },
  {
    slug: "mobile-banking-redesign",
    number: "04",
    title: "Mobile Banking App Redesign",
    role: "UX Researcher & Designer",
    description: "Conducted contextual inquiries and usability studies to reimagine the mobile banking experience for underserved communities.",
    tags: ["Contextual Inquiry", "Prototyping", "Usability Testing"],
    impact: "4.6★ app store rating post-launch",
    timeline: "Sep 2021 — Mar 2022",
    team: "2 Designers, 4 Engineers, 1 PM",
    overview: "A ground-up redesign of a mobile banking application focused on financial inclusion. The project prioritized accessibility, simplicity, and trust to serve communities historically underserved by digital banking.",
    problem: "The existing app had poor adoption among target demographics due to complex navigation, jargon-heavy language, and a lack of features relevant to users' financial realities (e.g., cash-based budgeting, remittances). The app store rating was 2.8★ with frequent complaints about usability.",
    targetUsers: "Adults in underserved communities with limited banking history, including gig workers, immigrants sending remittances, and older adults transitioning from cash-only financial management.",
    contribution: [
      "Conducted 16 contextual inquiries in users' homes and workplaces",
      "Designed low and high-fidelity prototypes based on research insights",
      "Ran 3 rounds of usability testing with 30+ participants",
      "Advocated for plain-language content and culturally appropriate design patterns",
      "Collaborated with engineers to ensure feasibility of proposed solutions",
    ],
    process: [
      { title: "Contextual Research", description: "Visited 16 participants in their homes and workplaces to understand how they manage money, what barriers they face, and what trust means in the context of digital banking." },
      { title: "Design Exploration", description: "Created personas, mapped financial journeys, and explored design concepts through rapid sketching and low-fidelity prototyping." },
      { title: "Iterative Testing", description: "Ran 3 rounds of moderated usability testing, each followed by design iterations. Tested in both English and Spanish." },
      { title: "Launch & Measurement", description: "Supported the engineering team during implementation and set up post-launch analytics to measure adoption and satisfaction." },
    ],
    outcomes: [
      "App store rating improved from 2.8★ to 4.6★",
      "52% increase in monthly active users within 3 months",
      "35% increase in successful first-time transactions",
      "Featured in a case study on financial inclusion design",
    ],
  },
  {
    slug: "saas-onboarding-optimization",
    number: "05",
    title: "SaaS Onboarding Optimization",
    role: "UX Researcher",
    description: "Redesigned the onboarding flow using funnel analysis and moderated testing, increasing activation rates by 28%.",
    tags: ["Funnel Analysis", "Moderated Testing", "Heuristic Evaluation"],
    impact: "28% increase in activation rate",
    timeline: "Apr 2021 — Aug 2021",
    team: "1 Designer, 2 Engineers, 1 Data Analyst",
    overview: "An optimization project focused on improving the onboarding experience for a B2B SaaS platform. The goal was to increase the percentage of new users who reach their 'aha moment' within the first session.",
    problem: "Only 31% of new signups completed the onboarding flow, and even fewer reached the activation milestone. Funnel analysis revealed significant drop-offs at account setup and first-project creation. Users reported feeling overwhelmed by options and unclear about next steps.",
    targetUsers: "B2B SaaS users, primarily product managers and team leads at mid-size companies. Users ranged from tech-savvy early adopters to less technical stakeholders evaluating the tool for their teams.",
    contribution: [
      "Conducted heuristic evaluation of the existing onboarding flow",
      "Analyzed funnel data to identify key drop-off points",
      "Ran 12 moderated usability sessions with new users",
      "Collaborated with the designer on 4 redesign iterations",
      "Defined success metrics and measurement framework",
    ],
    process: [
      { title: "Analysis", description: "Reviewed funnel analytics, conducted a heuristic evaluation, and interviewed customer success managers to understand common onboarding challenges." },
      { title: "User Research", description: "Ran 12 moderated sessions with new users, observing their first experience with the product and capturing pain points and moments of delight." },
      { title: "Redesign", description: "Worked with the designer on 4 iterations of the onboarding flow, progressively simplifying the experience and adding contextual guidance." },
      { title: "Validation", description: "A/B tested the new flow against the original, measuring activation rate, time-to-activation, and user satisfaction." },
    ],
    outcomes: [
      "28% increase in activation rate",
      "40% reduction in time-to-first-value",
      "15-point increase in onboarding satisfaction score",
      "Approach became the template for future feature onboarding",
    ],
  },
  {
    slug: "accessibility-audit-remediation",
    number: "06",
    title: "Accessibility Audit & Remediation",
    role: "Frontend Developer",
    description: "Performed a comprehensive WCAG 2.1 AA audit and led remediation across a suite of web applications.",
    tags: ["WCAG 2.1", "Screen Readers", "Semantic HTML"],
    impact: "Full AA compliance achieved",
    timeline: "Nov 2020 — Feb 2021",
    team: "1 Designer, 3 Engineers",
    overview: "A comprehensive accessibility audit and remediation project across a suite of 5 web applications. The goal was to achieve full WCAG 2.1 AA compliance and establish ongoing accessibility practices within the engineering team.",
    problem: "An external audit revealed 200+ accessibility violations across the application suite, including missing alt text, keyboard navigation failures, insufficient color contrast, and improper use of ARIA attributes. The company faced potential legal risk and was losing users who relied on assistive technologies.",
    targetUsers: "End users who rely on assistive technologies (screen readers, keyboard navigation, voice control), users with low vision or color blindness, and users with motor impairments. Secondarily, internal developers who needed to maintain accessibility standards going forward.",
    contribution: [
      "Conducted a detailed audit of 5 web applications using automated and manual testing",
      "Prioritized 200+ violations by severity and user impact",
      "Led remediation of critical and major violations across the codebase",
      "Established coding standards and linting rules for ongoing compliance",
      "Trained 12 developers on accessible development practices",
    ],
    process: [
      { title: "Audit", description: "Used axe-core, WAVE, and manual testing (screen readers, keyboard-only navigation) to identify and document all violations across 5 applications." },
      { title: "Prioritization", description: "Categorized violations by WCAG level, severity, and user impact. Created a remediation roadmap with clear milestones." },
      { title: "Remediation", description: "Fixed 200+ violations over 10 weeks, focusing on semantic HTML, keyboard navigation, ARIA patterns, and color contrast improvements." },
      { title: "Prevention", description: "Set up axe-core in CI/CD, created ESLint rules for accessibility, and conducted training sessions for the engineering team." },
    ],
    outcomes: [
      "Full WCAG 2.1 AA compliance across all 5 applications",
      "Zero critical accessibility regressions in 6 months post-remediation",
      "12 developers trained on accessible development",
      "Automated a11y testing integrated into CI/CD pipeline",
    ],
  },
];

export default projects;
