import { motion } from 'framer-motion';
import { ExternalLink, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CertificateCardProps {
  title: string;
  status: 'completed' | 'in-progress';
  url: string;
  delay?: number;
}

const CertificateCard = ({ title, status, url, delay = 0 }: CertificateCardProps) => {
  return (
    <motion.div
      className="bg-card border border-card-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {status === 'completed' ? (
            <div className="w-12 h-12 bg-pipeline-success/20 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-pipeline-success" />
            </div>
          ) : (
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-accent" />
            </div>
          )}
          
          <div>
            <span className={`inline-block px-3 py-1 text-xs font-mono rounded-full ${
              status === 'completed' 
                ? 'bg-pipeline-success/20 text-pipeline-success border border-pipeline-success/30' 
                : 'bg-accent/20 text-accent border border-accent/30'
            }`}>
              {status === 'completed' ? '✅ COMPLETED' : '🟡 IN PROGRESS'}
            </span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-4">{title}</h3>

      <Button 
        variant="default" 
        className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
        asChild
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 mr-2" />
          View Certificate
        </a>
      </Button>
    </motion.div>
  );
};

export default CertificateCard;