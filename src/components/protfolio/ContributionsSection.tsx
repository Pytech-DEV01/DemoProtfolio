import { GitPullRequest, GitMerge, Star, Users, Trophy, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Pull Requests', value: '1', icon: GitPullRequest, color: 'primary' },
  { label: 'Merged PRs', value: '0', icon: GitMerge, color: 'secondary' },
  { label: 'Repositories', value: '8-10', icon: Star, color: 'accent' },
  { label: 'Contributors Helped', value: '5', icon: Users, color: 'primary' },
];

const contributions = [
  {
    project: 'Movie "MAX"',
    type: 'Video Editing',
    description: 'Involved in the Movie Video Visualization editing and Color grading',
    date: 'Dec 2024',
    status: 'merged',
    duration: '1 week',
  },
];

const ContributionsSection = () => {
  return (
    <section id="contributions" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
      
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
            GIVING BACK
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Open Source <span className="text-gradient">Contributions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Contributing to the developer community and making open source better
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 border border-border/50 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-display font-bold text-gradient mb-1"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contributions Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold mb-8 text-center"
          >
            Recent Contributions
          </motion.h3>
          
          <div className="space-y-4">
            {contributions.map((contribution, index) => (
              <motion.div
                key={contribution.project + index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary))' }}
                className="group glass rounded-xl p-6 border border-border/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GitMerge className="w-5 h-5 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-display font-bold group-hover:text-primary transition-colors">
                          {contribution.project}
                        </h4>
                        <motion.span 
                          className="px-2 py-0.5 text-xs font-mono rounded-full bg-muted text-muted-foreground"
                          whileHover={{ scale: 1.1 }}
                        >
                          {contribution.type}
                        </motion.span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {contribution.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Status & Date */}
                  <div className="text-right flex-shrink-0">
                    <motion.span 
                      className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                        contribution.status === 'merged'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {contribution.status === 'merged' ? 'Merged' : 'In Review'}
                    </motion.span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {contribution.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-display font-bold mb-6">Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Trophy, label: 'Da Vinci Pro', color: 'from-yellow-500 to-amber-500' },
              { icon: Target, label: 'Proud Athlete', color: 'from-purple-500 to-pink-500' },
              { icon: Star, label: 'Built Basic Projects', color: 'from-blue-500 to-cyan-500' },
              { icon: Star, label: 'Blender Basics', color: 'from-orange-500 to-red-500' },
              { icon: Trophy, label: 'Capcut Pro', color: 'from-pink-500 to-rose-500' },
              { icon: Star, label: 'Contributed in Movies Color Grading', color: 'from-emerald-500 to-teal-500' },
            ].map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-default"
              >
                <motion.div 
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <badge.icon className="w-4 h-4 text-white" />
                </motion.div>
                <span className="text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContributionsSection;
