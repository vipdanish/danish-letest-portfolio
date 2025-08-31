import { motion } from 'framer-motion';

const techStackIcons = [
  {
    name: 'Linux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
  },
  {
    name: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'GitHub',
    src: 'https://www.vectorlogo.zone/logos/github/github-icon.svg'
  },
  {
    name: 'GitLab',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
  },
  {
    name: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  {
    name: 'Kubernetes',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
  },
  {
    name: 'Helm',
    src: 'https://www.vectorlogo.zone/logos/helmsh/helmsh-icon.svg'
  },
  {
    name: 'Ansible',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg'
  },
  {
    name: 'Terraform',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg'
  },
  {
    name: 'Jenkins',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
  },
  {
    name: 'Prometheus',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg'
  },
  {
    name: 'Grafana',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg'
  },
  {
    name: 'ArgoCD',
    src: 'https://argo-cd.readthedocs.io/en/stable/assets/argo.png'
  },
  {
    name: 'AWS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  },
  {
    name: 'Azure',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
  },
  {
    name: 'Google Cloud',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
  },
  {
    name: 'Nginx',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
  },
  {
    name: 'Maven',
    src: 'https://maven.apache.org/images/maven-logo-black-on-white.png'
  }
];

const TechStackGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          ☁️ Tech Stack 🛠️🚀
        </h2>
        <p className="text-muted-foreground font-mono">
          Technologies and tools I work with
        </p>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4 md:gap-6 justify-items-center">
        {techStackIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="group flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-card/50 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <img
                src={tech.src}
                alt={tech.name}
                className={`w-full h-full object-contain transition-all duration-300 group-hover:drop-shadow-glow ${
                  tech.name === 'AWS' ? 'w-16 h-12 md:w-20 md:h-14' : 
                  tech.name === 'Maven' ? 'w-16 h-8 md:w-20 md:h-10' : ''
                }`}
                loading="lazy"
              />
            </div>
            <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStackGrid;