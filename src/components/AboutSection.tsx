import { motion } from "framer-motion";

const skills = [
  { category: "Research", items: ["User Interviews", "Usability Testing", "Survey Design", "Journey Mapping", "A/B Testing"] },
  { category: "Design", items: ["Wireframing", "Prototyping", "Information Architecture", "Design Systems", "Figma"] },
  { category: "Development", items: ["React", "TypeScript", "CSS/Tailwind", "Accessibility", "Performance"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl text-foreground mb-6"
            >
              About
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body text-muted-foreground leading-relaxed mb-4"
            >
              With a dual background in UX research and frontend development, 
              I bring a unique perspective to product teams. I don't just uncover 
              insights — I help translate them into interfaces that feel intuitive 
              and performant.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-body text-muted-foreground leading-relaxed"
            >
              I believe the best digital products emerge when research and 
              engineering share the same language.
            </motion.p>
          </div>
          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-3 gap-10">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
