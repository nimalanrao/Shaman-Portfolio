import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Languages as LangIcon, 
  Award, 
  ChevronDown, 
  MessageSquare,
  Zap,
  Shield,
  Target,
  Users,
  MessageCircle,
  TrendingUp,
  Settings,
  Heart
} from 'lucide-react';
import ThreeScene from './components/ThreeScene';

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-24 relative ${className}`}>
    {children}
  </section>
);

const SkillBadge = ({ title }: { title: string }) => (
  <span className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-sunset-orange hover:text-white transition-all cursor-default">
    {title}
  </span>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  return (
    <div ref={containerRef} className="relative font-sans text-stardust">
      <ThreeScene />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cosmic-teal rounded-full flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter uppercase">SD</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-[0.3em] opacity-50">
          <a href="#summary" className="hover:text-sunset-orange transition-colors">Summary</a>
          <a href="#skills" className="hover:text-sunset-orange transition-colors">Skills</a>
          <a href="#experience" className="hover:text-sunset-orange transition-colors">Experience</a>
          <a href="#education" className="hover:text-sunset-orange transition-colors">Education</a>
        </div>
        <a href="mailto:hehebouy12@gmail.com" className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Contact Me
        </a>
      </nav>

      {/* Hero Section */}
      <Section className="items-center text-center">
        <motion.div style={{ opacity, scale }} className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="font-mono text-sunset-orange text-sm uppercase tracking-[0.4em] mb-6 block">
              Professional Portfolio
            </span>
            <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-8 uppercase">
              SHAMAN <br />
              <span className="gradient-text">DYSINGGAR</span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-mono opacity-60 mb-12">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Kuala Lumpur, Malaysia</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> 010-280 6842</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hehebouy12@gmail.com</div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#experience" className="group px-8 py-4 bg-cosmic-teal text-white rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-all">
                View Experience <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                Download Resume
              </button>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </Section>

      {/* Professional Summary */}
      <Section id="summary" className="bg-slate-900/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-sunset-orange/20 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-sunset-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">Professional Summary</h2>
          </div>
          <p className="text-xl md:text-2xl text-stardust/70 leading-relaxed font-light">
            Highly motivated and adaptable <span className="text-white font-medium">SPM graduate</span> with a proven track record in high-pressure retail operations and real estate client relations. 
            Possessing a diverse linguistic profile and a strong work ethic, I am seeking a short-term opportunity to contribute to a dynamic team environment. 
            Recognized for delivering exceptional customer service, managing logistical workflows, and maintaining professional composure in fast-paced settings.
          </p>
        </div>
      </Section>

      {/* Core Competencies & Skills */}
      <Section id="skills">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-cosmic-teal/20 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-cosmic-teal" />
              </div>
              <h2 className="text-3xl font-display font-bold uppercase">Interpersonal & Communication</h2>
            </div>
            <div className="space-y-8">
              {[
                { title: "Multilingual Fluency", desc: "Professional proficiency in English and Bahasa Melayu; conversational competency in Chinese and Tamil." },
                { title: "Client Relationship Management (CRM)", desc: "Skilled in identifying client needs and providing tailored solutions." },
                { title: "Conflict Resolution", desc: "Experienced in navigating high-stress environments and resolving customer concerns efficiently." }
              ].map((skill, i) => (
                <div key={i} className="glass-panel p-6 hover:border-cosmic-teal/50 transition-colors">
                  <h4 className="font-bold text-lg mb-2 text-cosmic-teal">{skill.title}</h4>
                  <p className="text-stardust/50 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-sunset-orange/20 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-sunset-orange" />
              </div>
              <h2 className="text-3xl font-display font-bold uppercase">Operational & Technical</h2>
            </div>
            <div className="space-y-8">
              {[
                { title: "Logistics & Inventory Support", desc: "Background in managing stock flow and retail floor organization (LSO)." },
                { title: "Sales & Negotiation", desc: "Fundamental understanding of real estate market dynamics and persuasive communication." },
                { title: "Time Management", desc: "Ability to prioritize tasks and meet deadlines in demanding workplace cultures." },
                { title: "Digital Literacy", desc: "Proficient in mobile communication tools and basic administrative software." }
              ].map((skill, i) => (
                <div key={i} className="glass-panel p-6 hover:border-sunset-orange/50 transition-colors">
                  <h4 className="font-bold text-lg mb-2 text-sunset-orange">{skill.title}</h4>
                  <p className="text-stardust/50 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Professional Experience */}
      <Section id="experience" className="bg-slate-900/40 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Professional Experience</h2>
        </div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-sm font-mono opacity-20 group-hover:opacity-40 transition-opacity">
              Jan 2026 – March 2026
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Loss Prevention & Operations Support (LSO)</h3>
              <div className="text-sunset-orange font-mono uppercase tracking-widest text-sm mb-8">Lotus’s Menjalara</div>
              <ul className="space-y-4 text-stardust/60 max-w-3xl">
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-sunset-orange rounded-full mt-2 shrink-0" />
                  Streamlined floor operations to ensure seamless customer traffic and inventory security.
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-sunset-orange rounded-full mt-2 shrink-0" />
                  Demonstrated extreme resilience by managing extended operational hours and maintaining high performance under peak-period pressure.
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-sunset-orange rounded-full mt-2 shrink-0" />
                  Collaborated with a multi-departmental team to uphold corporate standards and service excellence.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-sm font-mono opacity-20 group-hover:opacity-40 transition-opacity">
              Dec 2025 – Jan 2026
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Junior Sales Associate (Real Estate)</h3>
              <div className="text-cosmic-teal font-mono uppercase tracking-widest text-sm mb-8">Independent Agency</div>
              <ul className="space-y-4 text-stardust/60 max-w-3xl">
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-cosmic-teal rounded-full mt-2 shrink-0" />
                  Engaged in direct client outreach and conducted property briefings to potential buyers.
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-cosmic-teal rounded-full mt-2 shrink-0" />
                  Assisted in the preparation of property documentation and market research.
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-cosmic-teal rounded-full mt-2 shrink-0" />
                  Developed strong foundational skills in professional networking and lead generation.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Education & Languages */}
      <Section id="education">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold uppercase">Education</h2>
            </div>
            <div className="glass-panel p-8">
              <h3 className="text-xl font-bold mb-2">Sijil Pelajaran Malaysia (SPM)</h3>
              <p className="text-stardust/50 mb-6 italic">Completed secondary education with a focus on core academic excellence.</p>
              <p className="text-stardust/70 leading-relaxed">
                Developed strong discipline and analytical skills during rigorous examination preparation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <LangIcon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold uppercase">Languages</h2>
            </div>
            <div className="glass-panel p-8 grid grid-cols-2 gap-6">
              {[
                { lang: "English", level: "Advanced / Professional" },
                { lang: "Bahasa Melayu", level: "Native / Professional" },
                { lang: "Chinese", level: "Intermediate" },
                { lang: "Tamil", level: "Intermediate" }
              ].map((l, i) => (
                <div key={i}>
                  <div className="font-bold text-sunset-orange">{l.lang}</div>
                  <div className="text-xs font-mono opacity-50 uppercase tracking-widest">{l.level}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Skills Matrix */}
      <Section className="bg-slate-900/40 backdrop-blur-sm">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold uppercase mb-4">Core Attributes</h2>
          <p className="text-stardust/50">A comprehensive overview of my professional mindset and execution capabilities.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              category: "Communication & Influence",
              icon: MessageSquare,
              color: "text-cosmic-teal",
              bg: "bg-cosmic-teal/10",
              skills: ["Interpersonal Diplomacy", "Active Listening", "Persuasive Negotiation", "Linguistic Versatility", "Verbal Articulation", "Cross-Cultural Communication", "Public Speaking"]
            },
            {
              category: "Execution & Operations",
              icon: Settings,
              color: "text-sunset-orange",
              bg: "bg-sunset-orange/10",
              skills: ["Operational Excellence", "Strategic Prioritization", "Workflow Optimization", "Crisis Management", "Logistical Coordination", "Rapid Problem-Solving", "High-Pressure Resilience", "Detail-Oriented Execution"]
            },
            {
              category: "Professionalism & Mindset",
              icon: Heart,
              color: "text-white",
              bg: "bg-white/10",
              skills: ["Emotional Intelligence (EQ)", "Adaptive Learning", "Professional Integrity", "Team Synergy", "Autonomy & Initiative", "Growth Mindset", "Conflict De-escalation", "Performance Optimization"]
            },
            {
              category: "Sales & Service",
              icon: TrendingUp,
              color: "text-cosmic-teal",
              bg: "bg-cosmic-teal/10",
              skills: ["Needs Discovery", "Consumer Insights", "Value Proposition Delivery", "Service Excellence", "Consultative Selling", "Retention Strategy", "Market Navigation"]
            }
          ].map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 flex flex-col h-full hover:border-white/20 transition-all group"
            >
              <div className={`w-12 h-12 ${group.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <group.icon className={`w-6 h-6 ${group.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-tight">{group.category}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.skills.map((skill, j) => (
                  <span key={j} className="text-[10px] font-mono uppercase tracking-wider opacity-40 bg-white/5 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Additional Information & CTA */}
      <Section id="cta" className="items-center text-center">
        <div className="max-w-4xl glass-panel p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cosmic-teal/10 to-sunset-orange/10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase tracking-tighter">
              Ready to <span className="text-sunset-orange italic">Collaborate?</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-sunset-orange" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">Availability</h4>
                </div>
                <p className="text-stardust/60 text-sm">Immediate (Full-time availability for the next 2 months).</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-cosmic-teal" />
                  <h4 className="font-bold uppercase tracking-widest text-sm">Attributes</h4>
                </div>
                <p className="text-stardust/60 text-sm">Quick learner, culturally adaptable, and committed to operational excellence.</p>
              </div>
            </div>
            <a 
              href="https://wa.me/60102806842" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-sunset-orange hover:text-white transition-all shadow-2xl shadow-sunset-orange/20"
            >
              WhatsApp Me
            </a>
          </div>
        </div>
      </Section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/60102806842"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Footer */}
      <footer className="px-6 md:px-24 py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-950">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-sunset-orange" />
          <span className="font-display font-bold uppercase tracking-tighter">Shaman Dysinggir</span>
        </div>
        <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest opacity-40">
          <a href="mailto:hehebouy12@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a href="tel:0102806842" className="hover:text-white transition-colors">Call</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-widest opacity-20">
          © 2026 Shaman Dysinggir. All rights reserved.
        </div>
      </footer>
    </div>
  );
}


