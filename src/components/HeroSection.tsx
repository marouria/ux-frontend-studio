import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground my-6"
            >
              UX Researcher | Problem Solver
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-display text-5xl md:text-7xl leading-tight text-foreground mb-8"
            >
              Don't build what
              <br />
              users <span className="text-primary italic">won't</span> use.
              <br />
              Research first.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="font-body text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              I bridge the gap between what you build and what your users need —
              so your product performs and your service truly works.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 flex gap-6"
            >
              <a
                href="#work"
                className="font-body text-sm tracking-wide border-b border-foreground pb-1 text-foreground hover:text-primary hover:border-primary transition-colors"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
          <div className="md:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-sm tracking-widest uppercase text-muted-foreground mb-6"
            >
              <div className="aspect-[4/5] rounded bg-muted overflow-hidden max-h-[600px] m-auto">
                <img
                  src="/hero.jpg"
                  alt="UX"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
