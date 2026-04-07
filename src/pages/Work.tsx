import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import projects from "@/data/projects";
import ContactSection from "@/components/ContactSection";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Work
            </h1>
            <p className="font-body text-muted-foreground max-w-xl leading-relaxed">
              A selection of projects spanning UX research, design systems, and
              frontend development.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                <Link to={`/work/${project.slug}`}>
                  <Card className="group h-full border-border bg-card hover:border-primary/30 transition-colors duration-300 cursor-pointer">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-body text-xs text-muted-foreground tracking-widest">
                          {project.number}
                        </span>
                        <span className="font-body text-xs tracking-widest uppercase text-primary">
                          {project.role}
                        </span>
                      </div>

                      <h2 className="font-display text-lg md:text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>

                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <p className="font-body text-xs font-medium text-foreground">
                          {project.impact}
                        </p>
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
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Work;
