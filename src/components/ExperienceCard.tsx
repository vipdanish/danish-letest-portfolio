import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
          )}
          
          {/* Mobile message */}
          <div className="block md:hidden mb-4">
            <p className="text-sm text-muted-foreground italic">
              📱 View from laptop for best experience
            </p>
          </div>
          
          {/* Buttons for documents */}
          <div className="hidden md:flex gap-3 mt-4">
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-lg"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1hJuY_pwxLhFWI8kzr_XLtj3MZ1l3_ko3/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Offer Letter
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-lg"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1hJuY_pwxLhFWI8kzr_XLtj3MZ1l3_ko3/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Completion Certificate
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;