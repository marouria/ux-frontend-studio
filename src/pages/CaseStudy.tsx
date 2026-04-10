import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import projects from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">
            Project not found
          </h1>
          <Link
            to="/work"
            className="font-body text-sm text-primary hover:underline"
          >
            ← Back to work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container max-w-3xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-body text-xs tracking-widest text-muted-foreground">
                {project.number}
              </span>
              <span className="font-body text-xs tracking-widest uppercase text-primary">
                {project.role}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              {project.title}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </motion.div>

          {/* Meta */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-6 py-8 border-y border-border mb-16"
          >
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                Timeline
              </p>
              <p className="font-body text-sm text-foreground">
                {project.timeline}
              </p>
            </div>
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                Team
              </p>
              <p className="font-body text-sm text-foreground">
                {project.team}
              </p>
            </div>
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                Client
              </p>
              <p className="font-body text-sm text-foreground">
                {project.client}
              </p>
            </div>
          </motion.div>

          {/* Problem */}
          <motion.section
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl text-foreground mb-4">
              The Problem
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </motion.section>

          <motion.section
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="overflow-hidden max-h-[500px] rounded">
              <img
                src={project.image}
                alt="Marie"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {/* Target Users */}
          <motion.section
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl text-foreground mb-4">
              Target Users
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              {project.targetUsers}
            </p>
          </motion.section>

          {/* My Contribution */}
          <motion.section
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl text-foreground mb-4">
              My Contribution
            </h2>
            <ul className="space-y-3">
              {project.contribution.map((item, i) => (
                <li
                  key={i}
                  className="font-body text-sm text-muted-foreground flex gap-3"
                >
                  <span className="text-primary mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Process */}
          <motion.section
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl text-foreground mb-8">
              Process
            </h2>
            <div className="space-y-0">
              {project.process.map((step, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-12 gap-4 py-6 border-b border-border last:border-b-0"
                >
                  <div className="md:col-span-1">
                    <span className="font-body text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-display text-lg text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Outcomes */}
          <motion.section
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl text-foreground mb-6">
              Outcomes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className="p-5 rounded bg-card border border-border"
                >
                  <p className="font-body text-sm text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Tags */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 pt-8 border-t border-border mb-16"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[11px] px-3 py-1 bg-secondary text-secondary-foreground rounded-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <div className="flex justify-center">
            <Link to={project.link} target="_blank">
              <Button variant="link">See project ↗️</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
