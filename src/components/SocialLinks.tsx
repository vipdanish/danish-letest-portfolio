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
      
      <div className="flex items-center justify-center gap-6">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              size="sm"
              className="w-12 h-12 rounded-full p-0 hover:shadow-glow hover:scale-110 transition-all duration-300 group"
              asChild
            >
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                title={link.name}
              >
                <div className="flex items-center justify-center w-full h-full group-hover:text-primary transition-colors duration-300">
                  {link.icon}
                </div>
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;