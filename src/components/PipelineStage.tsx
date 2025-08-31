import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PipelineStageProps {
  title: string;
  status: 'pending' | 'running' | 'success' | 'error';
  children: ReactNode;
  delay?: number;
  stageNumber: number;
}

const statusColors = {
  pending: 'text-muted-foreground',
  running: 'text-pipeline-running',
  success: 'text-pipeline-success',
  error: 'text-pipeline-error'
};

const statusBorders = {
  pending: 'border-muted',
  running: 'border-pipeline-running',
  success: 'border-pipeline-success',
  error: 'border-pipeline-error'
};

const PipelineStage = ({ title, status, children, delay = 0, stageNumber }: PipelineStageProps) => {
  return (
    <motion.div
      className="relative mb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {/* Pipeline connector line */}
      {stageNumber > 1 && (
        <div className="absolute -top-8 left-6 w-0.5 h-8 bg-gradient-to-b from-pipeline-success to-transparent"></div>
      )}
      
      {/* Stage header */}
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 rounded-full border-2 ${statusBorders[status]} flex items-center justify-center mr-4 bg-card`}>
          <span className={`font-mono font-bold ${statusColors[status]}`}>
            {stageNumber}
          </span>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground mb-1">{title}</h2>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              status === 'running' ? 'bg-pipeline-running animate-pulse' :
              status === 'success' ? 'bg-pipeline-success' :
              status === 'error' ? 'bg-pipeline-error' :
              'bg-muted'
            }`}></div>
            <span className={`text-sm font-mono ${statusColors[status]}`}>
              {status === 'running' ? 'IN PROGRESS' :
               status === 'success' ? 'COMPLETED' :
               status === 'error' ? 'FAILED' :
               'PENDING'}
            </span>
          </div>
        </div>
      </div>

      {/* Stage content */}
      <div className="ml-16">
        {children}
      </div>
    </motion.div>
  );
};

export default PipelineStage;