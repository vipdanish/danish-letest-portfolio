import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
  onComplete?: () => void;
}

const Terminal = ({ onComplete }: TerminalProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const commands = [
    "git clone github.com/vipdanish/portfolio",
    "cd portfolio",
    "./deploy.sh",
    "",
    "🚀 Starting CI/CD Pipeline...",
    "✅ Repository cloned successfully",
    "✅ Dependencies installed",
    "✅ Build completed",
    "✅ Starting deployment pipeline..."
  ];

  useEffect(() => {
    if (currentLine < commands.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, currentLine < 3 ? 1000 : 800);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      setTimeout(() => {
        onComplete?.();
      }, 1500);
    }
  }, [currentLine, commands.length, isComplete, onComplete]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div 
        className="bg-terminal-bg border border-terminal-border rounded-lg shadow-terminal overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Terminal Header */}
        <div className="bg-terminal-header px-4 py-3 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-destructive rounded-full"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-3 h-3 bg-pipeline-success rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-muted-foreground text-sm font-mono">danish@portfolio:~</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
          {commands.slice(0, currentLine).map((command, index) => (
            <motion.div 
              key={index}
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {command.startsWith('✅') || command.startsWith('🚀') ? (
                <span className="text-pipeline-success">{command}</span>
              ) : command === "" ? (
                <span>&nbsp;</span>
              ) : (
                <>
                  <span className="text-primary mr-2">$</span>
                  <span className="text-foreground">{command}</span>
                </>
              )}
            </motion.div>
          ))}
          
          {currentLine < commands.length && (
            <div className="flex items-center">
              <span className="text-primary mr-2">$</span>
              <span className="text-foreground">
                {commands[currentLine]?.substring(0, Math.min(commands[currentLine].length, 50))}
                <span className="animate-cursor-blink">|</span>
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Terminal;