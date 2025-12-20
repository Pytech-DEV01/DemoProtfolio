import { useState } from 'react';
import { Code, Palette, Database, Globe, Wrench, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Globe,
    color: 'primary',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Database,
    color: 'secondary',
    skills: [
      { name: 'Python FastAPI', level: 75 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    icon: Palette,
    color: 'accent',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'UI/UX', level: 75 },
      { name: 'Photoshop', level: 60 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: Wrench,
    color: 'primary',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'PyCharm', level: 75 },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: Code,
    color: 'secondary',
    skills: [
      { name: 'C', level: 75 },
      { name: 'Python', level: 80 },
    ],
  },
  {
    id: 'learning',
    title: 'Learning',
    icon: Brain,
    color: 'accent',
    skills: [
      { name: 'Machine Learning', level: 40 },
      { name: 'Cloud Computing', level: 50 },
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border' | 'from') => {
    const colors = {
      primary: {
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary',
        from: 'from-primary',
      },
      secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary',
        from: 'from-secondary',
      },
      accent: {
        bg: 'bg-accent',
        text: 'text-accent',
        border: 'border-accent',
        from: 'from-accent',
      },
    };
    return colors[color as keyof typeof colors][type];
  };

  const activeData = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-xs font-mono tracking-widest text-primary mb-4">
            MY EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? `${getColorClass(category.color, 'bg')} text-primary-foreground shadow-lg`
                    : 'glass hover:bg-muted text-foreground/70 hover:text-foreground'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? '' : 'group-hover:scale-110'} transition-transform`} />
                {category.title}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          {activeData && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <motion.div 
                className="glass rounded-2xl p-8 border border-border/50"
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.5)' }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div 
                    className={`w-14 h-14 rounded-xl ${getColorClass(activeData.color, 'bg')} flex items-center justify-center`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <activeData.icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-display font-bold">{activeData.title}</h3>
                    <p className="text-muted-foreground text-sm">{activeData.skills.length} skills</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {activeData.skills.map((skill, index) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <motion.span 
                          className={`font-mono text-sm ${getColorClass(activeData.color, 'text')}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${getColorClass(activeData.color, 'from')} to-transparent`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
