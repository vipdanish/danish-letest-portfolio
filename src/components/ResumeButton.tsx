import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Rocket } from 'lucide-react';

const ResumeButton = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const pipelineSteps = [
    'git push',
    'build',
    'test', 
    'deploy',
    'live ✅'
  ];

  const handleResumeClick = () => {
    setShowAnimation(true);
    setAnimationStep(0);
    
    // Animate through pipeline steps
    const stepInterval = setInterval(() => {
      setAnimationStep(prev => {
        if (prev >= pipelineSteps.length - 1) {
          clearInterval(stepInterval);
          // Hide animation after completion
          setTimeout(() => {
            setShowAnimation(false);
            setAnimationStep(0);
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    // Open resume link
    window.open('https://drive.google.com/file/d/1V-obAtXAbeEmtgGeNkaLoclILwFpOVMk/view?usp=sharing', '_blank');
  };

  return (
    <div className="relative">
      <Button
        onClick={handleResumeClick}
        className="bg-accent hover:bg-accent/80 text-accent-foreground font-mono"
        disabled={showAnimation}
      >
        <FileText className="w-4 h-4 mr-2" />
        View Resume
      </Button>

      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50"
          >
            <div className="bg-terminal-bg border border-terminal-border rounded-lg p-4 shadow-terminal min-w-[280px]">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Rocket className="w-6 h-6 text-accent" />
                </motion.div>
                <span className="text-accent font-mono text-sm">Deploying Resume...</span>
              </div>
              
              <div className="space-y-2">
                {pipelineSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    className={`flex items-center space-x-2 font-mono text-xs ${
                      index <= animationStep 
                        ? index === animationStep 
                          ? 'text-accent' 
                          : 'text-pipeline-success'
                        : 'text-muted-foreground'
                    }`}
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: index <= animationStep ? 1 : 0.3
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    <span>{step}</span>
                    {index <= animationStep && index < pipelineSteps.length - 1 && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-pipeline-success"
                      >
                        →
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeButton;