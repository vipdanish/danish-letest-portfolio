import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, techStack, liveUrl, githubUrl, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-card border border-card-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-muted text-muted-foreground text-xs font-mono rounded-full border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button 
          variant="default" 
          size="sm" 
          className="bg-primary hover:bg-primary/80 text-primary-foreground"
          asChild
        >
          <a href={liveUrl || "#"} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </Button>
        
        {githubUrl && (
          <Button 
            variant="outline" 
            size="sm"
            className="border-card-border hover:bg-muted"
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;