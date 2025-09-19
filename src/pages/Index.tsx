import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Terminal from '@/components/Terminal';
import PipelineStage from '@/components/PipelineStage';
import ProjectCard from '@/components/ProjectCard';
import CertificateCard from '@/components/CertificateCard';
import SkillsGrid from '@/components/SkillsGrid';
import TechStackGrid from '@/components/TechStackGrid';
import ExperienceCard from '@/components/ExperienceCard';
import ContactTerminal from '@/components/ContactTerminal';

const Index = () => {
  const [showPipeline, setShowPipeline] = useState(false);

  const projects = [
    {
      title: "Serverless DevOps CI/CD Pipeline on AWS",
      description: "Built a complete serverless CI/CD pipeline using AWS services including Lambda, CodePipeline, and CloudFormation for automated deployment and scaling.",
      techStack: ["AWS Lambda", "CodePipeline", "CloudFormation", "S3", "IAM"],
      liveUrl: "#"
    },
    {
      title: "Three-Tier Web Application Deployment",
      description: "Designed and deployed a scalable three-tier architecture with load balancing, auto-scaling, and database optimization for high availability.",
      techStack: ["Docker", "Kubernetes", "NGINX", "MySQL", "Terraform"],
      liveUrl: "#"
    },
    {
      title: "Ansible Project – VM Monitoring & Email Alerts",
      description: "Automated infrastructure monitoring solution using Ansible playbooks with integrated email alerting system for proactive issue detection.",
      techStack: ["Ansible", "Python", "SMTP", "Cron", "Linux"],
      liveUrl: "#"
    },
    {
      title: "Ansible Corporate Project – Automated VM Health Monitoring",
      description: "Enterprise-level VM health monitoring system with automated remediation capabilities and comprehensive reporting dashboard.",
      techStack: ["Ansible", "Prometheus", "Grafana", "Python", "Jenkins"],
      liveUrl: "#"
    }
  ];

  const certificates = [
    {
      title: "Oracle Certified Foundation Associate",
      status: 'completed' as const,
      url: "https://drive.google.com/file/d/1daHHRFczASEVe-VVavZj9bdyzG_nPxCF/view?usp=drive_link"
    },
    {
      title: "Google Prompting Essentials",
      status: 'completed' as const,
      url: "https://drive.google.com/file/d/1BZNDtn6rlBnN9GZqaoIwJrQnocFQVvNA/view?usp=sharing"
    },
    {
      title: "DevOps Culture and Mindset",
      status: 'completed' as const,
      url: "https://drive.google.com/file/d/1BZNDtn6rlBnN9GZqaoIwJrQnocFQVvNA/view?usp=sharing"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      status: 'in-progress' as const,
      url: ""
    },
    {
      title: "AWS Solutions Architect Associate",
      status: 'in-progress' as const,
      url: ""
    },
    {
      title: "RHCE (Red Hat Certified Engineer) Exam",
      status: 'in-progress' as const,
      url: ""
    }
  ];

  const experiences = [
    {
      title: "DevOps Engineer Intern",
      company: "TechnoHacks Solutions Pvt. Ltd. (Remote)",
      duration: "Feb 2025 – Aug 2025",
      description: "Worked on cloud infrastructure, CI/CD pipelines, containerization, and automation tools. Set up and managed deployment workflows, version control, and monitoring systems. Improved development efficiency by streamlining processes with DevOps best practices. Gained structured mentorship and hands-on training in modern DevOps tools."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-foreground">
      {/* SEO Meta Tags */}
      <title>Syed Danish Syed Ishaque - DevOps Engineer Portfolio</title>
      
      {/* Landing Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-2 animate-fade-in">
              My Self ...
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 px-2 leading-tight py-2">
              Syed Danish Ishaque
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono px-4">
              DevOps & Cloud Enthusiast | Learning | Building | Automating
            </p>
          </motion.div>

          <AnimatePresence>
            {!showPipeline && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Terminal onComplete={() => setShowPipeline(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Pipeline Stages */}
      <AnimatePresence>
        {showPipeline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-12 space-y-16"
          >
            {/* About Me Stage */}
            <PipelineStage 
              title="About Me" 
              status="success" 
              stageNumber={1}
              delay={0.2}
            >
              <div className="bg-card border border-card-border rounded-lg p-8 shadow-card max-w-4xl mx-auto">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  As a <span className="text-primary font-semibold">fresher</span> i chose the challenging path of <span className="text-primary font-semibold">DevOps</span> out of passion. Over the past <span className="text-primary font-semibold">1.5 years</span>, I've built strong skills in <span className="text-primary font-semibold">Cloud, Linux, IaC, CI/CD, and automation</span>. I completed a <span className="text-primary font-semibold">6-month DevOps internship</span> and delivered <span className="text-primary font-semibold">4+ hands-on projects</span> that reflect real-world scenarios. My decision to pursue this field early in my career shows my <span className="text-primary font-semibold">enthusiasm, persistence, and long-term commitment</span> to becoming a top DevOps professional.
                </p>
              </div>
            </PipelineStage>

            {/* Education Stage */}
            <PipelineStage 
              title="Education" 
              status="success" 
              stageNumber={2}
              delay={0.4}
            >
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
                  <h3 className="text-xl font-bold text-foreground mb-2">B.Tech in Computer Science Engineering</h3>
                  <p className="text-primary font-semibold">Dr. Babasaheb Ambedkar Technological University</p>
                  <p className="text-muted-foreground">CGPA: 6.73/10 | Dec 2021 – June 2025</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
                    <h4 className="font-bold text-foreground mb-1">12th (Higher Secondary Education)</h4>
                    <p className="text-muted-foreground text-sm">Vilasrao Deshmukh Higher Secondary School</p>
                    <p className="text-muted-foreground">57% | Feb 2020 (Maharashtra State Board)</p>
                  </div>
                  <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
                    <h4 className="font-bold text-foreground mb-1">10th (Secondary Education)</h4>
                    <p className="text-muted-foreground text-sm">Vilasrao Deshmukh Urdu High School</p>
                    <p className="text-muted-foreground">84% | May 2018 (Maharashtra State Board)</p>
                  </div>
                </div>
              </div>
            </PipelineStage>

            {/* Projects Stage */}
            <PipelineStage 
              title="Projects" 
              status="success" 
              stageNumber={3}
              delay={0.6}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </PipelineStage>

            {/* Certifications Stage */}
            <PipelineStage 
              title="Certifications" 
              status="success" 
              stageNumber={4}
              delay={0.8}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {certificates.map((cert, index) => (
                  <CertificateCard
                    key={cert.title}
                    {...cert}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </PipelineStage>

            {/* Tech Stack Stage */}
            <PipelineStage 
              title="Tech Stack" 
              status="success" 
              stageNumber={5}
              delay={1.0}
            >
              <TechStackGrid />
            </PipelineStage>

            {/* Internship Stage */}
            <PipelineStage 
              title="Internship" 
              status="success" 
              stageNumber={6}
              delay={1.2}
            >
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <ExperienceCard
                    key={exp.title}
                    {...exp}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </PipelineStage>

            {/* Availability Stage */}
            <PipelineStage 
              title="Open to Work Opportunities" 
              status="success" 
              stageNumber={7}
              delay={1.4}
            >
              <div className="bg-card border border-card-border rounded-lg p-8 shadow-card max-w-4xl mx-auto">
                <p className="text-muted-foreground mb-6 text-lg">
                  I am currently available for internships and job opportunities in the following areas:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Junior DevOps Engineer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">DevOps Engineer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Cloud Engineer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Site Reliability Engineer (SRE)</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Looking for both <span className="text-primary font-semibold">remote and on-site opportunities</span>. Available for <span className="text-primary font-semibold">full-time roles immediately</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-lg"
                    asChild
                  >
                    <a href="tel:+919420862286">
                      📞 Contact Me
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-lg"
                    asChild
                  >
                    <a 
                      href="https://linkedin.com/in/techdanish" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      🔗 Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </PipelineStage>

            {/* Deploy to Career Stage */}
            <PipelineStage 
              title="Deploy to Career" 
              status="success" 
              stageNumber={8}
              delay={1.6}
            >
              <ContactTerminal />
            </PipelineStage>

            {/* Footer */}
            <motion.footer
              className="text-center py-8 px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground font-mono text-sm md:text-base">
                Designed by <span className="text-primary">ER Danish</span>
              </p>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
