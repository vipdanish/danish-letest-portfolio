import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Instagram, Twitter, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Portfolio Website",
      url: "https://okdanish.xyz",
      icon: <Globe className="w-5 h-5" />
    },
    {
      name: "GitHub",
      url: "https://github.com/vipdanish",
      icon: <Github className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/techdanish/",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vip_danish_/",
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com/tech__danish",
      icon: <Twitter className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-card border border-card-border rounded-lg p-8 shadow-card max-w-4xl mx-auto">
      <motion.h3 
        className="text-2xl font-bold text-foreground mb-6 text-center"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Connect with Me
      </motion.h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              className="w-full h-auto p-4 rounded-lg flex flex-col items-center space-y-2 hover:shadow-glow transition-all duration-300 group"
              asChild
            >
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                  {link.icon}
                </div>
                <span className="text-sm font-medium">{link.name}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;