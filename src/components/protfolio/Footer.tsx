import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center font-display font-bold text-sm text-white">
              VV
            </div>
            <div>
              <p className="font-display font-bold text-gradient">VINAY V</p>
              <p className="text-xs text-muted-foreground">
                © 2024 All rights reserved
              </p>
            </div>
          </div>

          {/* ...existing code... */}

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 rounded-lg glass border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 group-hover:text-primary group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
