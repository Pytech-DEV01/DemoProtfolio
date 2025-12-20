import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Pytech-DEV01', color: 'hover:bg-gray-700' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/vinay-v-b69938330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:bg-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
  { name: 'Email', icon: Mail, href: 'mailto:vinayvishwa98@gmail.com', color: 'hover:bg-red-500' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full glass text-xs font-mono tracking-widest text-accent mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">
                Let's build something amazing together!
              </h3>
              <p className="text-muted-foreground">
                I'm always excited to collaborate on interesting projects, 
                contribute to open source, or just have a friendly chat about tech.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a 
                href="mailto:vinayvishwa98@gmail.com"
                className="glass rounded-xl p-4 border border-border/50 flex items-center gap-4 group hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">vinayvishwa98@gmail.com</p>
                </div>
              </a>
              
              <div className="glass rounded-xl p-4 border border-border/50 flex items-center gap-4 group hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Mysuru, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-display font-bold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 rounded-xl glass border border-border/50 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-transparent hover:scale-110`}
                    >
                      <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="glass rounded-2xl p-8 border border-border/50">
            <h4 className="font-display font-bold text-xl mb-6">Contact for More Information</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="John Doe"
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
