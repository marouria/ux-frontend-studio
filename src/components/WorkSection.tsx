import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import projects from "@/data/projects";

const featured = projects.slice(0, 4);

const WorkSection = () => {
  return (
    <section id="work" className="py-32">
      <div className="container">
        <div className="flex items-end justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl text-foreground"
          >
            Selected Work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/work"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border pb-1"
            >
              View all projects
            </Link>
          </motion.div>
        </div>

        {/* Alternating large/small layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, i) => {
            const isLarge = i % 3 === 0;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={isLarge ? "md:col-span-2" : ""}
              >
                <Link to={`/work/${project.slug}`} className="group block">
                  <div
                    className={`relative rounded bg-card overflow-hidden border border-transparent hover:border-primary/30 transition-all duration-300 ${
                      isLarge ? "p-10 md:p-14" : "p-8 md:p-10"
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <span className="font-body text-xs text-muted-foreground tracking-widest">
                          {project.number}
                        </span>
                        <span className="font-body text-xs tracking-widest uppercase text-primary">
                          {project.role}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    {/* Content */}
                    <h3
                      className={`font-display text-foreground mb-3 group-hover:text-primary transition-colors ${
                        isLarge ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`font-body text-muted-foreground leading-relaxed mb-6 ${
                        isLarge ? "max-w-2xl" : "max-w-md"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Bottom */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-body text-[11px] px-2.5 py-0.5 bg-secondary text-secondary-foreground rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="font-body text-xs font-medium text-foreground hidden sm:block">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
