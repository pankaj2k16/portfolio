import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Terminal, 
  Users, 
  Lightbulb, 
  Layers, 
  Database, 
  Brain, 
  Cloud, 
  Globe, 
  Verified, 
  Zap, 
  BrainCircuit, 
  Network,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Mail,
  Sun,
  Moon
} from "lucide-react";

// --- Components ---

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => (
  <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm border-b border-outline-variant transition-colors duration-500">
    <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="text-lg font-bold tracking-tighter text-on-surface">Pankaj Kumar</div>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors" href="#about">About</a>
        <a className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors" href="#experience">Experience</a>
        <a className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors" href="#skills">Skills</a>
        <a className="text-on-surface-variant hover:text-primary font-medium text-sm transition-colors" href="#certifications">Certifications</a>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-all duration-300"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "dark" : "light"}
              initial={{ y: 10, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -10, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </AnimatePresence>
        </button>
        <a className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20" href="mailto:pk@epankaj.com">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-surface transition-colors duration-500">
    <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-8"
      >
        <span className="text-xs text-primary font-bold tracking-widest uppercase mb-4 block">Technical Manager @ EY</span>
        <h1 className="text-display-lg text-on-surface mb-8 transition-colors duration-500">Scaling the Future with Code & Strategy</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed transition-colors duration-500">
          Driving enterprise digital transformation through expert technical leadership, specializing in robust architectures and scalable cloud solutions.
        </p>
        <div className="flex gap-4">
          <a className="bg-primary text-on-primary px-8 py-4 rounded-full font-semibold hover:bg-primary-container transition-all flex items-center gap-2 shadow-lg shadow-primary/20" href="#experience">
            View Career Timeline
            <ArrowRight className="w-5 h-5" />
          </a>
          <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-semibold hover:bg-surface-container-high transition-all ghost-border">
            Download CV
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        whileHover={{ rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:col-span-4 hidden md:block"
      >
        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-surface-container-low transition-colors duration-500">
          <img 
            alt="Pankaj Kumar" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDymVUsFehZE_dAbBIoECt_M08GoSQiGFbqL-YkI-3AcCLuCba5iP5hc_eTvdK3zTR7jDbSYhDqKUHxha2_OF94HC-vIm1_YERNolJmsCNJSVcDDh8ATWj-tzTf8hpJLr9biJR0zsMKZQYuGGJg4qjubievbIchVGqmes4sIrlPGZYk7UXa-8Bu1tKm5jOZ9c5-7quGNF8M8gOrdv4RzHmtdvAr91uyHSkdT7Fh4M8L7QZXjJh7qk6ka2znP7fB38haVZWI6_XwPFJM"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 px-6 bg-surface-container-low transition-colors duration-500" id="about">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-headline-lg mb-8 text-on-surface transition-colors duration-500">Architecting Impactful Solutions</h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed transition-colors duration-500">
            <p>With over a decade of experience across global technology leaders, I bridge the gap between complex engineering challenges and strategic business objectives.</p>
            <p>My journey from a developer to a Technical Manager has been fueled by a passion for automation, cloud-native design, and building high-performing cross-functional teams.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">12+</div>
              <div className="text-xs font-medium uppercase tracking-widest text-on-surface-variant/60 transition-colors duration-500">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs font-medium uppercase tracking-widest text-on-surface-variant/60 transition-colors duration-500">Projects Delivered</div>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <FeatureCard icon={<Terminal className="w-8 h-8 text-primary" />} title="Technical Rigor" description="Deep expertise in backend and cloud ecosystems." />
            <FeatureCard icon={<Users className="w-8 h-8 text-primary" />} title="Leadership" description="Mentoring teams to deliver excellence at scale." />
          </div>
          <div className="space-y-4">
            <FeatureCard icon={<Lightbulb className="w-8 h-8 text-primary" />} title="Innovation" description="Integrating GenAI and automation in workflows." />
            <FeatureCard icon={<Layers className="w-8 h-8 text-primary" />} title="Strategy" description="Aligning tech stacks with long-term goals." />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 ghost-border"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="font-bold mb-2 text-on-surface transition-colors duration-500">{title}</h3>
    <p className="text-sm text-on-surface-variant transition-colors duration-500">{description}</p>
  </motion.div>
);

const Experience = () => (
  <section className="py-24 px-6 bg-surface transition-colors duration-500" id="experience">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-headline-lg text-on-surface transition-colors duration-500">Career Evolution</h2>
        <p className="text-on-surface-variant mt-4 transition-colors duration-500">A decade of engineering excellence and leadership</p>
      </div>
      <div className="space-y-12">
        <TimelineItem 
          title="Technical Manager" 
          company="EY" 
          description="Leading digital transformation initiatives, managing engineering teams, and overseeing large-scale project lifecycles within the global consultancy framework."
          isCurrent
          isFirst
        />
        <TimelineItem 
          title="Senior Engineer" 
          company="Rajlee Electronics" 
          description="Specialized in embedded systems and hardware-software integration for industrial automation."
        />
        <TimelineItem 
          title="Project Lead" 
          company="OATI" 
          description="Managed smart grid technology implementations and high-availability energy management systems."
        />
        <TimelineItem 
          title="Technical Lead" 
          company="Apptio" 
          description="Architected SaaS-based financial management solutions for IT infrastructure."
        />
        <TimelineItem 
          title="Software Engineer" 
          company="Claysol Media Labs | Aceic Design Technologies" 
          description="Early career focused on multimedia systems and verification engineering."
          isLast
          isGhost
        />
      </div>
    </div>
  </section>
);

const TimelineItem = ({ title, company, description, isCurrent, isLast, isGhost }: any) => (
  <div className={`relative pl-12 ${!isLast ? "before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-surface-container-high transition-colors" : ""}`}>
    <motion.div 
      whileHover={{ scale: 1.2 }}
      className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-surface z-10 transition-all duration-500 ${isCurrent ? "bg-primary shadow-[0_0_15px_rgba(0,88,188,0.4)]" : "bg-surface-container-highest"}`}
    ></motion.div>
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ y: -4, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      whileTap={{ scale: 0.995 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${isGhost ? "bg-surface-container opacity-70" : isCurrent ? "bg-surface-container-lowest ghost-border" : "bg-surface-container"} p-8 rounded-2xl cursor-default transition-all duration-500`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
        </div>
        {isCurrent && (
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-primary-fixed text-on-primary-fixed px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider self-start shadow-sm"
          >
            Current Role
          </motion.span>
        )}
      </div>
      <p className="text-on-surface-variant leading-relaxed transition-colors duration-500">{description}</p>
    </motion.div>
  </div>
);

const Skills = () => (
  <section className="py-24 px-6 bg-surface-container-low transition-colors duration-500" id="skills">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-headline-lg mb-16 text-center text-on-surface transition-colors duration-500">Technical Ecosystem</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Backend/Data */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 md:row-span-2 bg-surface-container-lowest p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 ghost-border"
        >
          <Database className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-2xl font-bold mb-6 text-on-surface transition-colors duration-500">Backend & Data</h3>
          <div className="flex flex-wrap gap-3">
            {["Python", "Node.js", "PostgreSQL", "GraphQL", "Redis", "Apache Kafka", "Elasticsearch"].map(skill => (
              <span key={skill} className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-500">{skill}</span>
            ))}
          </div>
          <div className="mt-10 p-6 bg-surface-container rounded-2xl transition-colors duration-500">
            <p className="text-sm text-on-surface-variant italic transition-colors duration-500">"Optimizing for sub-second latency and high throughput in distributed architectures."</p>
          </div>
        </motion.div>
        
        {/* Leadership */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col justify-between transition-colors duration-500 ghost-border"
        >
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-on-surface transition-colors duration-500">
              <Brain className="w-6 h-6 text-primary" />
              Leadership
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Agile/Scrum", "Stakeholder Management", "Mentorship", "Risk Mitigation"].map(tag => (
                <span key={tag} className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-500">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cloud */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-primary text-on-primary p-8 rounded-3xl shadow-lg flex flex-col justify-between"
        >
          <Cloud className="w-8 h-8" />
          <div>
            <h3 className="font-bold mb-2">Cloud</h3>
            <p className="text-xs opacity-80">AWS, Azure, Docker, Kubernetes</p>
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-surface-container-highest p-8 rounded-3xl flex flex-col justify-between transition-colors duration-500 ghost-border"
        >
          <Globe className="w-8 h-8 text-on-surface transition-colors duration-500" />
          <div>
            <h3 className="font-bold mb-2 text-on-surface transition-colors duration-500">Frontend</h3>
            <p className="text-xs text-on-surface-variant transition-colors duration-500">React, Vue, Tailwind CSS</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section className="py-24 px-6 bg-surface transition-colors duration-500" id="certifications">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-xl">
          <h2 className="text-headline-lg text-on-surface transition-colors duration-500">Professional Validation</h2>
          <p className="text-on-surface-variant mt-4 transition-colors duration-500">Continuous learning in Project Management and Cutting-edge AI Technologies.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CertCard icon={<Verified className="w-6 h-6 text-primary" />} title="PMP®" description="Project Management Professional certification from PMI." status="Verified" />
        <CertCard icon={<Zap className="w-6 h-6 text-primary" />} title="n8n Automation" description="Mastery in workflow automation and low-code integration." status="Certified" />
        <CertCard icon={<BrainCircuit className="w-6 h-6 text-primary" />} title="Generative AI" description="Implementing LLMs and prompt engineering for enterprise." status="Expertise" />
        <CertCard icon={<Network className="w-6 h-6 text-primary" />} title="LangGraph" description="Building cyclic, stateful AI agents and workflows." status="Specialization" />
      </div>
    </div>
  </section>
);

const CertCard = ({ icon, title, description, status }: any) => (
  <motion.div 
    whileHover={{ borderColor: "var(--color-primary-fixed-dim)" }}
    className="bg-surface-container-low p-8 rounded-2xl border border-transparent transition-all duration-500 group ghost-border"
  >
    <div className="w-12 h-12 bg-surface-container-lowest rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
      {icon}
    </div>
    <h3 className="font-bold mb-2 text-on-surface transition-colors duration-500">{title}</h3>
    <p className="text-sm text-on-surface-variant mb-4 transition-colors duration-500">{description}</p>
    <span className="text-xs font-bold text-primary tracking-widest uppercase">{status}</span>
  </motion.div>
);

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/epankaj-com/", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/pankaj2k16", label: "GitHub" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@pankajprasar", label: "YouTube" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/for_pankaj/", label: "Instagram" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:pk@epankaj.com", label: "Email" },
  ];

  return (
    <footer className="bg-surface-container-low py-16 px-8 border-t border-surface-container-high transition-colors duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <div className="text-lg font-bold tracking-tighter text-on-surface mb-2 transition-colors duration-500">Pankaj Kumar</div>
          <div className="text-xs font-medium uppercase tracking-widest text-on-surface-variant/60 transition-colors duration-500">
            © 2024 Pankaj Kumar. All Rights Reserved.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:shadow-md rounded-2xl transition-all duration-500 flex items-center justify-center ghost-border"
              title={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-surface transition-colors duration-500">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  );
}
