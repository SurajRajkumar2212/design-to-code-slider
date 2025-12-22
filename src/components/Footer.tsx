export const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-coral" />
          <span className="font-sans text-sm text-muted-foreground">
            Suraj Rajkumar
          </span>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Designed & Built with care
        </p>

        <div className="flex items-center gap-6">
          <a href="#hero" className="font-mono text-xs text-muted-foreground hover:text-coral transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
