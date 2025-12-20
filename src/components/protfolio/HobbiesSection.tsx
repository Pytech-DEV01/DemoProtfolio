import { Music, Gamepad2, Camera, BookOpen, Plane, Coffee, Headphones, Palette, Dumbbell, Film, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const hobbies = [
  { name: 'Gaming', icon: Gamepad2, color: 'from-purple-500 to-pink-500', description: 'Exploring virtual worlds' },
  { name: 'Music', icon: Headphones, color: 'from-blue-500 to-cyan-500', description: 'All genres, all vibes' },
  { name: 'Photography', icon: Camera, color: 'from-orange-500 to-yellow-500', description: 'Capturing moments' },
  { name: 'Reading', icon: BookOpen, color: 'from-green-500 to-emerald-500', description: 'Tech & Fiction' },
  { name: 'Traveling', icon: Plane, color: 'from-sky-500 to-blue-500', description: 'Exploring new places' },
  { name: 'Coffee', icon: Coffee, color: 'from-amber-600 to-orange-500', description: 'Fuel for coding' },
  { name: 'Art', icon: Palette, color: 'from-pink-500 to-rose-500', description: 'Digital & Traditional' },
  { name: 'Fitness', icon: Dumbbell, color: 'from-red-500 to-orange-500', description: 'Staying active' },
  { name: 'Movies', icon: Film, color: 'from-indigo-500 to-purple-500', description: 'Sci-Fi enthusiast' },
  { name: 'Podcasts', icon: Music, color: 'from-teal-500 to-cyan-500', description: 'Tech & Stories' },
  { name: 'IoT Projects', icon: Cpu, color: 'from-emerald-500 to-teal-500', description: 'Building IoT projects' },
  { name: 'Cool Stuff', icon: Sparkles, color: 'from-violet-500 to-fuchsia-500', description: 'Creating cool stuff' },
];

const HobbiesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

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
            BEYOND CODE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Hobbies & <span className="text-gradient">Interests</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            When I'm not coding, here's what keeps me inspired and creative
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
        >
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative cursor-pointer"
              >
                <div className="relative glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500">
                  {/* Glow Effect */}
                  <motion.div 
                    className={`absolute -inset-0.5 bg-gradient-to-r ${hobby.color} rounded-2xl blur`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${hobby.color} flex items-center justify-center mb-4`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 6,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Name */}
                    <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {hobby.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-muted-foreground">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HobbiesSection;
