const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex items-center justify-between">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Designed & built with care
        </p>
        <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
