import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description?: string;
  delay?: number;
}

const ExperienceCard = ({ title, company, duration, description, delay = 0 }: ExperienceCardProps) => {
  return (
    <motion.div
      className="bg-card border border-card-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <h4 className="text-lg text-primary mb-2">{company}</h4>
          
          <div className="flex items-center space-x-2 mb-3">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-mono">{duration}</span>
          </div>
          
          {description && (
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;