import { motion } from "framer-motion";

const socials = [
  { libelle: "LinkedIn", link: "https://www.linkedin.com/in/marieleuliette/" },
  { libelle: "Github", link: "https://github.com/marouria" },
  { libelle: "Malt", link: "https://www.malt.fr/profile/marieleuliette" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="container">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl text-foreground mb-6"
          >
            Let's connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-muted-foreground leading-relaxed mb-10"
          >
            Open to new opportunities and collaborations. If you’re building
            something meaningful and want to make it truly work for your users —
            I’d love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <a
              href="mailto:marie.leuliette@gmail.com"
              className="font-body text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors inline-block w-fit"
            >
              marie.leuliette@gmail.com
            </a>
            <div className="flex gap-6 mt-4">
              {socials.map((social) => (
                <a
                  key={social.libelle}
                  href={social.link}
                  target="_blank"
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social.libelle}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
