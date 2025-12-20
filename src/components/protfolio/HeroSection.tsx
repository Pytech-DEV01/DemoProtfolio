import { Github, FileText, ArrowDown, Sparkles, Code2, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="w-12 h-12 text-primary/40" />
        </motion.div>
        <motion.div 
          className="absolute top-40 right-32"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="w-8 h-8 text-accent/50" />
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-32"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Rocket className="w-10 h-10 text-secondary/40" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Welcome Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-primary/30 mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="font-display text-sm tracking-widest text-primary">WELCOME TO MY PORTFOLIO</span>
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6"
        >
          <motion.span 
            className="text-foreground inline-block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I'm{" "}
          </motion.span>
          <motion.span 
            className="text-gradient inline-block"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 200
            }}
          >
            {"VINAY V".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + index * 0.08,
                  type: "spring",
                  stiffness: 300
                }}
                className="inline-block"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light"
        >
          A passionate <span className="text-primary font-semibold">2nd Year Student</span> exploring the realms of
        </motion.p>
        
        {/* Animated Tech Stack */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['AI/ML', 'Graphic Designing', 'App Development', 'Video Editing'].map((tech, index) => (
            <motion.span 
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                borderColor: 'hsl(var(--primary))',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-full glass text-sm font-mono text-foreground/80 border border-border/50 hover:text-primary transition-colors duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 font-semibold px-8"
              onClick={() => window.open('https://github.com/Pytech-DEV01', '_blank')}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub Profile
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold px-8"
              onClick={() => window.open('/resume.jpeg', '_blank')}
            >
              <FileText className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              View Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a 
          href="#about" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.2, duration: 0.6 },
            y: { delay: 1.2, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="inline-block"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <span className="text-xs font-mono tracking-wider">SCROLL DOWN</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </motion.a>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
