import { GraduationCap, MapPin, Calendar, Heart, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-xs font-mono tracking-widest text-secondary mb-4">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Know Me <span className="text-gradient">Better</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image/Avatar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Decorative rings */}
              <motion.div 
                className="absolute -inset-4 border-2 border-primary/30 rounded-3xl rotate-3"
                animate={{ rotate: [3, -3, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -inset-8 border border-accent/20 rounded-3xl -rotate-3"
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main avatar container */}
              <motion.div 
                className="relative glass rounded-3xl p-8 border border-border/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://github.com/Pytech-DEV01.png" 
                    alt="Vinay V"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-bold shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  2nd Year 🎓
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass border border-border/50 text-sm font-medium"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-green-400">●</span> Open to Opportunities
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-display font-bold">
              Hi! I'm <span className="text-gradient">Vinay V</span>
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              A passionate computer science student in my 2nd year, diving deep into the world of 
              web development and software engineering. I love building things that live on the 
              internet and contributing to open-source projects.
            </motion.p>

            {/* Info Cards */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, label: 'Education', value: 'B.Tech in CSE', color: 'primary' },
                { icon: Calendar, label: 'Year', value: '2nd Year (2024-2028)', color: 'secondary' },
                { icon: MapPin, label: 'Location', value: 'Mysuru', color: 'accent' },
                { icon: Heart, label: 'Interests', value: 'AI/ML, Web & App Dev, Entrepreneurship', color: 'primary' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                  transition={{ duration: 0.2 }}
                  className="glass rounded-xl p-4 border border-border/50 flex items-center gap-3 group cursor-default"
                >
                  <motion.div 
                    className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <item.icon className={`w-5 h-5 text-${item.color}`} />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Fun Facts */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-xl p-6 border border-border/50"
            >
              <h4 className="font-display font-bold mb-4 flex items-center gap-2">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Zap className="w-5 h-5 text-accent" />
                </motion.div>
                Quick Facts
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  { text: 'Goal: To become an Entrepreneur and build my own Start-Up', color: 'primary' },
                  { text: 'Currently learning: Python (Flask), MongoDB, FastAPI', color: 'secondary' },
                  { text: 'Fun: I debug with coffee ☕', color: 'accent' },
                ].map((fact, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Target className={`w-4 h-4 text-${fact.color}`} />
                    {fact.text}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
