import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "E-commerce Checkout Redesign",
    role: "Lead UX Researcher",
    description:
      "Reduced cart abandonment by 34% through iterative usability testing and A/B experimentation across 12 markets.",
    tags: ["User Testing", "A/B Testing", "Prototyping"],
    impact: "34% reduction in cart abandonment",
  },
  {
    number: "02",
    title: "Design System & Component Library",
    role: "Frontend Developer",
    description:
      "Built a React-based design system serving 8 product teams, with full accessibility compliance and comprehensive documentation.",
    tags: ["React", "TypeScript", "Accessibility"],
    impact: "8 teams unified under one system",
  },
  {
    number: "03",
    title: "Patient Portal Discovery",
    role: "UX Researcher",
    description:
      "Led generative research with 40+ participants to define the information architecture of a healthcare patient portal.",
    tags: ["Interviews", "Journey Mapping", "IA"],
    impact: "40+ participant research study",
  },
  {
    number: "04",
    title: "Mobile Banking App Redesign",
    role: "UX Researcher & Designer",
    description:
      "Conducted contextual inquiries and usability studies to reimagine the mobile banking experience for underserved communities.",
    tags: ["Contextual Inquiry", "Prototyping", "Usability Testing"],
    impact: "4.6★ app store rating post-launch",
  },
  {
    number: "05",
    title: "SaaS Onboarding Optimization",
    role: "UX Researcher",
    description:
      "Redesigned the onboarding flow using funnel analysis and moderated testing, increasing activation rates by 28%.",
    tags: ["Funnel Analysis", "Moderated Testing", "Heuristic Evaluation"],
    impact: "28% increase in activation rate",
  },
  {
    number: "06",
    title: "Accessibility Audit & Remediation",
    role: "Frontend Developer",
    description:
      "Performed a comprehensive WCAG 2.1 AA audit and led remediation across a suite of web applications.",
    tags: ["WCAG 2.1", "Screen Readers", "Semantic HTML"],
    impact: "Full AA compliance achieved",
  },
];

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
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
