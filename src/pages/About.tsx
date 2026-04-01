import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = [
  { category: "Research", items: ["User Interviews", "Usability Testing", "Survey Design", "Journey Mapping", "A/B Testing"] },
  { category: "Design", items: ["Wireframing", "Prototyping", "Information Architecture", "Design Systems", "Figma"] },
  { category: "Development", items: ["React", "TypeScript", "CSS/Tailwind", "Accessibility", "Performance"] },
];

const experiences = [
  {
    period: "2022 — Present",
    role: "Senior UX Researcher",
    company: "Company Name",
    description: "Leading end-to-end research initiatives across multiple product lines. Established a research operations framework adopted by 4 cross-functional teams.",
  },
  {
    period: "2020 — 2022",
    role: "UX Researcher & Frontend Developer",
    company: "Company Name",
    description: "Conducted user research while contributing to the frontend codebase. Built and maintained a component library used across 3 products.",
  },
  {
    period: "2018 — 2020",
    role: "Frontend Developer",
    company: "Company Name",
    description: "Developed responsive web applications with React and TypeScript. Collaborated closely with designers to implement pixel-perfect interfaces.",
  },
  {
    period: "2016 — 2018",
    role: "Junior Developer",
    company: "Company Name",
    description: "Built and maintained client-facing web applications. Gained foundational skills in JavaScript, HTML, and CSS.",
  },
];

const certifications = [
  { year: "2023", title: "Google UX Design Professional Certificate", issuer: "Google / Coursera" },
  { year: "2022", title: "Certified Usability Analyst (CUA)", issuer: "Human Factors International" },
  { year: "2021", title: "Interaction Design Specialization", issuer: "UC San Diego / Coursera" },
  { year: "2018", title: "M.Sc. Human-Computer Interaction", issuer: "University Name" },
  { year: "2016", title: "B.Sc. Computer Science", issuer: "University Name" },
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

      {/* Header */}
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
            The person behind
            <br />
            the <span className="text-primary italic">pixels</span>.
          </motion.h1>
        </div>
      </section>

      {/* Section 1 — Bio with picture */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="md:col-span-5"
            >
              <div className="aspect-[4/5] rounded bg-muted overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground font-body text-sm">
                  Your photo here
                </div>
              </div>
            </motion.div>
            <div className="md:col-span-7">
              <motion.h2
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="font-display text-3xl text-foreground mb-6"
              >
                Hello, I'm <span className="text-primary">Your Name</span>
              </motion.h2>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body text-muted-foreground leading-relaxed mb-4"
              >
                With a dual background in UX research and frontend development, 
                I bring a unique perspective to product teams. I don't just uncover 
                insights — I help translate them into interfaces that feel intuitive 
                and performant.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-muted-foreground leading-relaxed mb-4"
              >
                I believe the best digital products emerge when research and 
                engineering share the same language. My work sits at that intersection —
                where data-driven decisions meet craft and empathy.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-muted-foreground leading-relaxed"
              >
                When I'm not designing or coding, you'll find me exploring new cities,
                reading about cognitive psychology, or experimenting with generative art.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Skills */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl text-foreground mb-12"
          >
            Skills & Expertise
          </motion.h2>
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
                    <li key={item} className="font-body text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Experience */}
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

      {/* Section 4 — Certifications & Education */}
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

      <Footer />
    </div>
  );
};

export default About;
