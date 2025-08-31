import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Cloud, 
  Container, 
  GitBranch, 
  Monitor, 
  Settings,
  Database
} from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "Java", "C++", "JavaScript", "Bash"],
    color: "text-pipeline-running"
  },
  {
    title: "Web Development",
    icon: <Globe className="w-6 h-6" />,
    skills: ["MERN Stack", "REST APIs", "Tailwind CSS"],
    color: "text-pipeline-success"
  },
  {
    title: "Cloud Platforms",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "GCP", "Azure"],
    color: "text-accent"
  },
  {
    title: "Containerization",
    icon: <Container className="w-6 h-6" />,
    skills: ["Docker", "Kubernetes"],
    color: "text-primary"
  },
  {
    title: "CI/CD",
    icon: <GitBranch className="w-6 h-6" />,
    skills: ["GitHub Actions", "GitLab", "Jenkins"],
    color: "text-pipeline-running"
  },
  {
    title: "Monitoring",
    icon: <Monitor className="w-6 h-6" />,
    skills: ["Prometheus", "Grafana", "CloudWatch"],
    color: "text-pipeline-success"
  },
  {
    title: "Infrastructure as Code",
    icon: <Settings className="w-6 h-6" />,
    skills: ["Terraform", "CloudFormation"],
    color: "text-accent"
  },
  {
    title: "Version Control",
    icon: <Database className="w-6 h-6" />,
    skills: ["Git", "GitHub", "GitLab"],
    color: "text-primary"
  }
];

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skillCategories.map((category, index) => (
        <motion.div
          key={category.title}
          className="bg-card border border-card-border rounded-lg p-6 shadow-card hover:shadow-glow transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -3 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className={`${category.color}`}>
              {category.icon}
            </div>
            <h3 className="font-bold text-foreground">{category.title}</h3>
          </div>
          
          <div className="space-y-2">
            {category.skills.map((skill, skillIndex) => (
              <div 
                key={skill}
                className="px-3 py-2 bg-muted/50 rounded-md text-sm text-muted-foreground font-mono border border-border/50"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;