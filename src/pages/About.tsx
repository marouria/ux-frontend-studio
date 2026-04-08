import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const skills = [
  {
    category: "Research",
    items: [
      "User Interviews",
      "Usability Testing",
      "Survey Design",
      "Journey Mapping",
      "A/B Testing",
    ],
  },
  {
    category: "Design",
    items: [
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "Design Systems",
      "Figma",
    ],
  },
  {
    category: "Development",
    items: [
      "Vue.js",
      "TypeScript",
      "CSS/Tailwind",
      "Accessibility",
      "Storybook",
    ],
  },
];

const experiences = [
  {
    period: "2026 — Present",
    role: "UX Researcher",
    company: "Independent",
    description:
      "Plan and conduct qualitative research to understand user behaviors, needs, and pain points. Synthesize insights and translate them into actionable opportunities through prototyping and iterative testing.",
  },
  {
    period: "2023 — 2025",
    role: "Frontend Developer",
    company: "Beta.gouv, Crédit Agricole, Vera",
    description:
      "Develop and maintain user-centered interfaces with a focus on usability, performance, and accessibility. Collaborate with design and product teams to implement intuitive and scalable solutions.",
  },
  {
    period: "2021 — 2023",
    role: "Fullstack Developer",
    company: "Web agency Captive",
    description:
      "Built and maintained web applications across frontend and backend. Collaborated with cross-functional teams to deliver reliable, user-friendly solutions in fast-paced, client-driven environments.",
  },
  {
    period: "2016 — 2020",
    role: "Project Manager",
    company: "NGO sector (multiple organizations)",
    description:
      "Led and coordinated multi-site programs, facilitating workshops and supporting participants in developing practical skills. Designed and improved program structures based on field feedback and user needs.",
  },
];

const certifications = [
  {
    year: "2026",
    title: "Product Design Certificate (RNCP Level 6)",
    issuer: "OpenClassroom",
  },
  {
    year: "2021",
    title: "Web development Certificate (RNCP Level 6)",
    issuer: "Le Wagon",
  },
  {
    year: "2015",
    title: "Master's Degree in International Affairs",
    issuer: "University Aix-Marseille",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-4"
          >
            About me
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display text-4xl md:text-6xl text-foreground"
          >
            The person who turns
            <br />
            user insights into{" "}
            <span className="text-primary italic">better decisions</span>.
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="md:col-span-5"
            >
              <div className="aspect-[4/5] rounded bg-muted overflow-hidden">
                <img
                  src="/about.jpg"
                  alt="Marie"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <div className="md:col-span-7">
              <motion.h2
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="font-display text-3xl text-foreground mb-6"
              >
                Hello, I'm <span className="text-primary">Marie</span>
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body text-muted-foreground leading-relaxed mb-4"
              >
                With a background in both UX research and frontend development,
                I work at the intersection of understanding people and building
                the experiences they interact with.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-muted-foreground leading-relaxed mb-4"
              >
                I don’t just uncover insights — I turn them into tangible,
                intuitive, and performant products.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-muted-foreground leading-relaxed mb-4"
              >
                My approach is deeply rooted in real-world contexts. Before
                working in tech, I led entrepreneurship programs in Southeast
                Asia, designing hands-on learning experiences with young adults
                facing social and economic barriers. That experience shaped the
                way I approach design today: grounded in reality, shaped by
                people, and driven by impact.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-muted-foreground leading-relaxed mb-4"
              >
                I believe the best products come from bridging disciplines —
                where research, design, and engineering work together to create
                experiences that truly make sense for users.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-muted-foreground leading-relaxed"
              >
                When I’m not designing or coding, you’ll find me exploring new
                cities, reading about cognitive psychology, or hiking.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-foreground mb-12"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-muted-foreground leading-relaxed"
            >
              The past 10 years of work experiences brought me a structured yet
              empathetic user practice that helps transform insights into
              meaningful, usable solutions. I pay particular attention to
              aligning user needs with business goals, ensuring that solutions
              are not only desirable but also viable and impactful.
            </motion.p>
            <div className="grid sm:grid-cols-3 gap-10">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <h3 className="font-body text-xs tracking-widest uppercase text-primary mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="font-body text-sm text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-foreground mb-12"
          >
            Experience
          </motion.h2>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="grid md:grid-cols-12 gap-4 py-8 border-b border-border last:border-b-0"
              >
                <div className="md:col-span-3">
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display text-xl text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-body text-sm text-primary mb-3">
                    {exp.company}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-foreground mb-12"
          >
            Certifications & Education
          </motion.h2>
          <div className="space-y-0">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="grid md:grid-cols-12 gap-4 py-6 border-b border-border last:border-b-0"
              >
                <div className="md:col-span-2">
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                    {cert.year}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-display text-lg text-foreground">
                    {cert.title}
                  </h3>
                </div>
                <div className="md:col-span-4 md:text-right">
                  <p className="font-body text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
