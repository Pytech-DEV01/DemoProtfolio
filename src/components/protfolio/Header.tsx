import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contributions', href: '#contributions' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass py-3 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center overflow-hidden animate-glow-pulse">
              <img 
                src="https://github.com/Pytech-DEV01.png" 
                alt="Vinay V"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity" />
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg group ${
                activeSection === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {item.label}
              <span 
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 rounded-full ${
                  activeSection === item.href.slice(1) ? 'w-6' : 'w-0 group-hover:w-6'
                }`} 
              />
            </a>
          ))}
        </nav>

        {/* Name Badge */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <h2 className="font-display font-bold text-lg text-gradient">VINAY V</h2>
            <span className="text-xs text-muted-foreground font-mono">2nd Year Student</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
