import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from '@/components/Terminal';
import PipelineStage from '@/components/PipelineStage';
import ProjectCard from '@/components/ProjectCard';
import CertificateCard from '@/components/CertificateCard';
import SkillsGrid from '@/components/SkillsGrid';
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
      title: "AWS Certified Cloud Practitioner",
      status: 'completed' as const,
      url: "https://drive.google.com/file/d/1BZNDtn6rlBnN9GZqaoIwJrQnocFQVvNA/view?usp=sharing"
    },
    {
      title: "AWS Solutions Architect Associate",
      status: 'in-progress' as const,
      url: "https://drive.google.com/file/d/1daHHRFczASEVe-VVavZj9bdyzG_nPxCF/view?usp=drive_link"
    }
  ];

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Codveda Technology",
      duration: "Mar 2025 – Apr 2025"
    },
    {
      title: "Python Developer Intern",
      company: "CCA Techno Pvt Ltd",
      duration: "Apr 2023"
    },
    {
      title: "Frontend Developer Intern",
      company: "CCA Techno Pvt Ltd",
      duration: "Dec 2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark text-foreground">
      {/* SEO Meta Tags */}
      <title>Syed Danish Syed Ishaque - DevOps Engineer Portfolio</title>
      
      {/* Landing Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Syed Danish Syed Ishaque
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">
              DevOps Engineer | Cloud Architect | CI/CD Specialist
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
            {/* Education Stage */}
            <PipelineStage 
              title="Education" 
              status="success" 
              stageNumber={1}
              delay={0.2}
            >
              <div className="space-y-6">
                <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
                  <h3 className="text-xl font-bold text-foreground mb-2">B.Tech Computer Science & Engineering</h3>
                  <p className="text-primary font-semibold">Dr. Babasaheb Ambedkar Technological University (DBATU)</p>
                  <p className="text-muted-foreground">CGPA: 7.43/10 | 2021–2025</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
                    <h4 className="font-bold text-foreground mb-1">Higher Secondary Certificate (HSC)</h4>
                    <p className="text-muted-foreground">57% | 2020</p>
                  </div>
                  <div className="bg-card border border-card-border rounded-lg p-6 shadow-card">
                    <h4 className="font-bold text-foreground mb-1">Secondary School Certificate (SSC)</h4>
                    <p className="text-muted-foreground">84% | 2018</p>
                  </div>
                </div>
              </div>
            </PipelineStage>

            {/* Projects Stage */}
            <PipelineStage 
              title="Projects" 
              status="success" 
              stageNumber={2}
              delay={0.4}
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
              stageNumber={3}
              delay={0.6}
            >
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                {certificates.map((cert, index) => (
                  <CertificateCard
                    key={cert.title}
                    {...cert}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </PipelineStage>

            {/* Skills Stage */}
            <PipelineStage 
              title="Skills" 
              status="success" 
              stageNumber={4}
              delay={0.8}
            >
              <SkillsGrid />
            </PipelineStage>

            {/* Experience Stage */}
            <PipelineStage 
              title="Experience" 
              status="success" 
              stageNumber={5}
              delay={1.0}
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

            {/* Deploy to Career Stage */}
            <PipelineStage 
              title="Deploy to Career" 
              status="success" 
              stageNumber={6}
              delay={1.2}
            >
              <ContactTerminal />
            </PipelineStage>

            {/* Footer */}
            <motion.footer
              className="text-center py-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground font-mono">
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
