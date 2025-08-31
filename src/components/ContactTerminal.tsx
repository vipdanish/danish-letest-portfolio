import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ContactTerminal = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const commands = [
    'echo "Deployment Successful – Engineer Ready for Hire!"',
    'echo "+919420862286 | techdansih001@gmail.com"',
    'echo "linkedin.com/in/techdanish | github.com/vipdanish"',
    'echo "Thank you for visiting! Let\'s build something amazing together."'
  ];

  const outputs = [
    '✅ Deployment Successful – Engineer Ready for Hire!',
    '📞 +919420862286 | ✉️ techdansih001@gmail.com',
    '🔗 linkedin.com/in/techdanish | 💻 github.com/vipdanish',
    '🚀 Thank you for visiting! Let\'s build something amazing together.'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentCommand < commands.length) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setCurrentCommand(prev => prev + 1);
        }, 1500);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentCommand, commands.length]);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-terminal-bg border border-terminal-border rounded-lg shadow-terminal overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-terminal-header px-4 py-3 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-destructive rounded-full"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-3 h-3 bg-pipeline-success rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-muted-foreground text-sm font-mono">deployment@complete:~</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm space-y-3 min-h-[200px]">
          {commands.slice(0, currentCommand).map((command, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-1">
                <span className="text-primary mr-2">$</span>
                <span className="text-foreground">{command}</span>
              </div>
              <div className="text-pipeline-success ml-4">
                {outputs[index]}
              </div>
            </motion.div>
          ))}
          
          {currentCommand < commands.length && (
            <div className="flex items-center">
              <span className="text-primary mr-2">$</span>
              <span className="text-foreground">
                {isTyping ? (
                  <>
                    {commands[currentCommand]}
                    <span className="animate-cursor-blink">|</span>
                  </>
                ) : (
                  <span className="animate-cursor-blink">|</span>
                )}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactTerminal;