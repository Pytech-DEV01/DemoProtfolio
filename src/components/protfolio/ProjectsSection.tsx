import { ExternalLink, Github, Folder, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ECO-ROUTE',
    description: 'An eco-friendly route planning application for sustainable transportation and reduced carbon footprint.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    tags: ['Python', 'Flask', 'MongoDB'],
    github: 'https://github.com/Pytech-DEV01/ECO_ROUTE',
    live: '',
    stars: 0,
    forks: 0,
    color: 'primary',
    extraInfo: '',
  },
  {
    title: 'AI Chatbot Web',
    description: 'An intelligent AI-powered chatbot web application for interactive conversations and assistance.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['Python', 'AI/ML', 'FastAPI'],
    github: 'https://github.com/Pytech-DEV01',
    live: '',
    stars: 0,
    forks: 0,
    color: 'accent',
    extraInfo: '',
  },
  {
    title: 'GETRIDE',
    description: 'It replicates Uber but not Uber. We are aiming to connect people through free ride and creating a Sustainable City.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
    tags: ['React.js', 'MongoDB', 'FastAPI', 'Python (Django)', 'Vercel'],
    github: 'https://github.com/Pytech-DEV01',
    live: '',
    stars: 0,
    forks: 0,
    color: 'secondary',
    extraInfo: 'Yet to Build - But the research is done',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-xs font-mono tracking-widest text-accent mb-4">
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Folder Icon */}
                <motion.div 
                  className="absolute top-4 left-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>

                {/* Stats */}
                <div className="absolute top-4 right-4 flex gap-3">
                  <motion.div 
                    className="flex items-center gap-1 text-xs text-foreground/80 bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Star className="w-3 h-3 text-yellow-400" />
                    {project.stars}
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-1 text-xs text-foreground/80 bg-background/50 backdrop-blur-sm px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <GitFork className="w-3 h-3" />
                    {project.forks}
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors"
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                  {project.description}
                </p>
                {project.extraInfo && (
                  <motion.p 
                    className="text-primary text-xs font-medium mb-4 italic"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {project.extraInfo}
                  </motion.p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: tagIndex * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                      Code
                    </Button>
                  </motion.div>
                  {project.live && (
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-primary/30 hover:border-primary"
              onClick={() => window.open('https://github.com/Pytech-DEV01', '_blank')}
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
