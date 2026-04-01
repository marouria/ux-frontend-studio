import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "E-commerce Checkout Redesign",
    role: "Lead UX Researcher",
    description: "Reduced cart abandonment by 34% through iterative usability testing and A/B experimentation across 12 markets.",
    tags: ["User Testing", "A/B Testing", "Prototyping"],
  },
  {
    number: "02",
    title: "Design System & Component Library",
    role: "Frontend Developer",
    description: "Built a React-based design system serving 8 product teams, with full accessibility compliance and comprehensive documentation.",
    tags: ["React", "TypeScript", "Accessibility"],
  },
  {
    number: "03",
    title: "Patient Portal Discovery",
    role: "UX Researcher",
    description: "Led generative research with 40+ participants to define the information architecture of a healthcare patient portal.",
    tags: ["Interviews", "Journey Mapping", "IA"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 border-t border-border">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl text-foreground mb-20"
        >
          Selected Work
        </motion.h2>
        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group grid md:grid-cols-12 gap-8 md:gap-12 pb-20 border-b border-border last:border-b-0 last:pb-0"
            >
              <div className="md:col-span-1">
                <span className="font-body text-xs text-muted-foreground tracking-widest">
                  {project.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-xs tracking-widest uppercase text-primary">
                  {project.role}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
