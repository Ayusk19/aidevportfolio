import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'

type SkillGroup = {
  title: string
  items: string[]
}

type Project = {
  title: string
  description: string
  features: string[]
  tags: string[]
  categories: string[]
  links?: { label: string; href: string }[]
}

type TimelineItem = {
  role: string
  org: string
  details: string[]
}

const heroTypingPhrases = [
  'AI-Integrated Full Stack Developer',
  'RAG + LLM Solutions Builder',
  'Scalable Frontend to Backend Architect',
]

const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'TailwindCSS',
      'Redux',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'AI / ML',
    items: [
      'LangChain',
      'RAG Pipelines',
      'LLMs',
      'Whisper',
      'Ollama',
      'Vector Databases',
    ],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Docker', 'Kubernetes', 'Git', 'Linux', 'AWS', 'Vercel'],
  },
  {
    title: 'Learning',
    items: ['ASP.NET Core', 'C#', 'SQL Server'],
  },
]

const projects: Project[] = [
  {
    title: 'Agent Mistey',
    description:
      'Award-winning AI assistive platform for differently-abled users.',
    features: [
      'RAG pipeline with LangChain',
      'Voice interaction using Whisper',
      'Ollama local LLM integration',
      'Multilingual accessibility',
      'Context-aware AI responses',
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'Whisper', 'Ollama', 'PostgreSQL'],
    categories: ['AI', 'Full Stack'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Ayusk19' },
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    title: 'Tech Fest Event Management Platform',
    description:
      'Modern event management dashboard with smooth admin workflows and responsive UI.',
    features: [
      'React frontend',
      'Event management dashboard',
      'Responsive design',
      'High-performance UI',
    ],
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    categories: ['Web'],
  },
  {
    title: 'E-Commerce Shopping Platform',
    description:
      'Feature-rich commerce experience with intuitive product discovery and checkout flows.',
    features: [
      'Product catalog',
      'Cart functionality',
      'Search system',
      'Authentication',
      'Context API state management',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Full Stack', 'Web'],
  },
]

const experience: TimelineItem[] = [
  {
    role: 'AI Application Developer Intern',
    org: 'ProvatSoft',
    details: [
      'Worked on AI-powered assistive systems',
      'Built RAG pipelines',
      'Worked with Whisper, LangChain, Ollama',
      'Hybrid local/cloud inference setup',
    ],
  },
  {
    role: 'AI & ML Intern',
    org: 'Edunet Foundation',
    details: [
      'Fraud detection ML models',
      'Hyperparameter tuning',
      'Accuracy optimization',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    org: 'TeachNook',
    details: [
      'Responsive frontend development',
      'Performance optimization',
      'SEO improvements',
    ],
  },
]

const achievements = [
  '2nd Place - Innovate Bharat Hackathon 2026',
  'IEEE Research Publication',
  'AI-powered assistive platform development',
]

const research = [
  'React.js vs Next.js Performance using Docker & Kubernetes',
  'CNN-based Pearl Millet Disease Detection',
  'DevSecOps Practices for Safe Delivery',
]

const projectFilters = ['All', 'AI', 'Web', 'Full Stack']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const particlePositions = [
  { left: '10%', top: '20%', delay: '0s' },
  { left: '25%', top: '70%', delay: '1s' },
  { left: '40%', top: '35%', delay: '0.4s' },
  { left: '65%', top: '25%', delay: '0.8s' },
  { left: '78%', top: '60%', delay: '1.2s' },
  { left: '90%', top: '35%', delay: '0.6s' },
]

const useTypewriter = (phrases: string[], speed = 80, pause = 1600) => {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    const isAtEnd = text === current
    const isAtStart = text.length === 0
    const delay = isAtEnd && !isDeleting ? pause : isDeleting ? speed / 2 : speed

    const timeout = setTimeout(() => {
      if (isAtEnd && !isDeleting) {
        setIsDeleting(true)
        return
      }

      if (isAtStart && isDeleting) {
        setIsDeleting(false)
        setPhraseIndex((index) => (index + 1) % phrases.length)
        return
      }

      const nextText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1)
      setText(nextText)
    }, delay)

    return () => clearTimeout(timeout)
  }, [phrases, phraseIndex, text, isDeleting, speed, pause])

  return text
}

const IconGithub = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M12 2C6.48 2 2 6.74 2 12.5c0 4.63 2.87 8.56 6.84 9.95.5.1.69-.22.69-.5v-1.75c-2.78.63-3.36-1.36-3.36-1.36-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.08 1.54 1.08 1.54 1.08.9 1.58 2.36 1.12 2.94.86.09-.68.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.07.8-.23 1.65-.35 2.5-.35.85 0 1.7.12 2.5.35 1.9-1.35 2.75-1.07 2.75-1.07.55 1.41.2 2.45.1 2.71.64.73 1.03 1.66 1.03 2.79 0 3.98-2.35 4.86-4.58 5.11.36.33.68.98.68 1.98v2.93c0 .28.18.6.7.5C19.14 21.06 22 17.13 22 12.5 22 6.74 17.52 2 12 2z" />
  </svg>
)

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M20.45 2H3.55C2.7 2 2 2.7 2 3.56v16.88C2 21.3 2.7 22 3.55 22h16.9c.86 0 1.55-.7 1.55-1.56V3.56C22 2.7 21.3 2 20.45 2zM7.34 19.1H4.68V9.2h2.66v9.9zM6 8.04a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08zM19.32 19.1h-2.66v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.54v4.9h-2.66V9.2h2.55v1.35h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.25 1.83 3.25 4.2v5.75z" />
  </svg>
)

const IconMail = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.2l8 4.9 8-4.9V6H4zm16 12V8.5l-7.45 4.56a1 1 0 0 1-1.1 0L4 8.5V18h16z" />
  </svg>
)

const IconSpark = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
    <path
      d="M12 2l2.4 6.4L21 10l-6.6 1.6L12 20l-2.4-8.4L3 10l6.6-1.6L12 2z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
)

const IconChip = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
    <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" stroke="currentColor" strokeWidth="1.2" />
  </svg>
)

const LoadingScreen = ({ isVisible }: { isVisible: boolean }) => (
  <AnimatePresence>
    {isVisible ? (
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-[color:var(--bg)]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative h-20 w-20">
            <div className="pulse-ring" />
            <div className="pulse-ring" style={{ animationDelay: '1.2s' }} />
            <div className="absolute inset-0 flex items-center justify-center text-[color:var(--accent)]">
              <IconChip />
            </div>
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Initializing
          </p>
        </div>
      </motion.div>
    ) : null}
  </AnimatePresence>
)

const SectionHeader = ({ kicker, title, description }: { kicker: string; title: string; description?: string }) => (
  <div className="mb-10">
    <p className="section-kicker">{kicker}</p>
    <h2 className="section-title mt-4">{title}</h2>
    {description ? <p className="mt-4 max-w-2xl text-[color:var(--muted)]">{description}</p> : null}
  </div>
)

const App = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('ayush-theme')
    return stored === 'light' ? 'light' : 'dark'
  })
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')
  const { scrollYProgress } = useScroll()

  const typedTitle = useTypewriter(heroTypingPhrases)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('ayush-theme', theme)
  }, [theme])

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timeout)
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }
    return projects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <div className="relative overflow-hidden">
      <LoadingScreen isVisible={isLoading} />

      <motion.div
        className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)]"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[color:var(--bg)]/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--accent)]">
              <IconSpark />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[color:var(--accent)]">AYUSH</p>
              <p className="text-xs text-[color:var(--muted)]">AI-Integrated Full Stack Developer</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-[color:var(--muted)] md:flex">
            {['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'research', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="transition hover:text-[color:var(--text)]">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <a
              href="/resume.pdf"
              className="rounded-full bg-[color:var(--accent)]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[color:var(--accent)]"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="grid-glow" />
          </div>
          <div className="absolute inset-0">
            <div className="particles">
              {particlePositions.map((particle) => (
                <span
                  key={particle.left + particle.top}
                  style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:py-28">
            <motion.div
              className="relative z-10 flex-1"
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              <motion.p className="section-kicker" variants={fadeUp}>
                AI-Integrated Full Stack Developer
              </motion.p>
              <motion.h1
                className="mt-4 text-4xl font-semibold leading-tight text-[color:var(--text)] md:text-6xl"
                variants={fadeUp}
              >
                Ayush Kumar
              </motion.h1>
              <motion.p
                className="mt-4 text-xl text-[color:var(--accent)]"
                variants={fadeUp}
              >
                <span className="border-r border-[color:var(--accent)] pr-2">{typedTitle}</span>
              </motion.p>
              <motion.p className="mt-6 max-w-xl text-[color:var(--muted)]" variants={fadeUp}>
                Building scalable web applications and AI-powered systems using React, Python, FastAPI, and modern backend
                technologies.
              </motion.p>
              <motion.div className="mt-8 flex flex-wrap gap-4" variants={fadeUp}>
                <a
                  href="#projects"
                  className="rounded-full bg-[color:var(--accent)]/90 px-6 py-3 text-sm font-semibold text-black transition hover:bg-[color:var(--accent)]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:border-white/40"
                >
                  Contact Me
                </a>
              </motion.div>
              <motion.div className="mt-8 flex items-center gap-4" variants={fadeUp}>
                <a
                  href="https://github.com/Ayusk19"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
                  aria-label="GitHub"
                >
                  <IconGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayushreactdev/"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
                  aria-label="LinkedIn"
                >
                  <IconLinkedIn />
                </a>
                <a
                  href="mailto:ayushkumar12030@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
                  aria-label="Email"
                >
                  <IconMail />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative z-10 flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card relative overflow-hidden rounded-3xl p-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--glow)] blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[color:var(--accent-2)]/30 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 text-[color:var(--accent)]">
                    <IconChip />
                    <span className="text-sm uppercase tracking-[0.3em]">AI Systems</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">Futuristic engineering mindset</h3>
                  <p className="mt-4 text-[color:var(--muted)]">
                    Delivering premium digital experiences with intelligent automation, rapid prototyping, and production-ready
                    architecture.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                    <div className="glass-card rounded-2xl px-4 py-3">
                      <p className="text-xs uppercase text-[color:var(--muted)]">AI Focus</p>
                      <p className="mt-2 font-semibold">RAG + LLM Apps</p>
                    </div>
                    <div className="glass-card rounded-2xl px-4 py-3">
                      <p className="text-xs uppercase text-[color:var(--muted)]">Stack</p>
                      <p className="mt-2 font-semibold">React / FastAPI</p>
                    </div>
                    <div className="glass-card rounded-2xl px-4 py-3">
                      <p className="text-xs uppercase text-[color:var(--muted)]">Delivery</p>
                      <p className="mt-2 font-semibold">Vercel Ready</p>
                    </div>
                    <div className="glass-card rounded-2xl px-4 py-3">
                      <p className="text-xs uppercase text-[color:var(--muted)]">Collab</p>
                      <p className="mt-2 font-semibold">Startup & Enterprise</p>
                    </div>
                  </div>
                  <div className="terminal-panel mt-6">
                    <div className="terminal-header">ayush@portfolio ~</div>
                    <div className="terminal-body">
                      <p>$ whoami</p>
                      <p>AI-Integrated Full Stack Developer</p>
                      <p>$ focus --2026</p>
                      <p>RAG, LLM systems, scalable web apps</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-pad">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              kicker="About"
              title="Crafting AI-first full stack experiences"
              description="Strategic, recruiter-friendly positioning with a premium and minimal aesthetic."
            />
            <motion.div
              className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div className="glass-card rounded-3xl p-8" variants={fadeUp}>
                <p className="text-[color:var(--muted)]">
                  M.Tech Software Engineering student at Sharda University with a strong frontend foundation in the React
                  ecosystem. Experienced in building AI applications using RAG, LangChain, Whisper, and Ollama.
                </p>
                <p className="mt-4 text-[color:var(--muted)]">
                  Interested in scalable backend systems and AI integrations, with a passion for solving real-world problems
                  using AI + Full Stack Development.
                </p>
              </motion.div>
              <motion.div className="glass-card rounded-3xl p-8" variants={fadeUp}>
                <h3 className="text-lg font-semibold">What I bring</h3>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
                  <li>AI-integrated product mindset and fast iteration cycles.</li>
                  <li>Full stack delivery from data pipelines to polished UI.</li>
                  <li>Modern architecture with focus on reliability and scale.</li>
                </ul>
                <div className="mt-6 flex items-center gap-3 text-[color:var(--accent)]">
                  <IconSpark />
                  <span className="text-sm uppercase tracking-[0.3em]">Future Ready</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section-pad bg-[color:var(--bg-alt)]">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              kicker="Skills"
              title="Tools to build AI-native products"
              description="Categorized expertise curated for recruiter-friendly scanning."
            />
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {skills.map((group) => (
                <motion.div
                  key={group.title}
                  className="glass-card rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/20"
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">{group.items.length}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="section-pad">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              kicker="Projects"
              title="Featured builds"
              description="High-impact projects showcasing AI + full stack capability."
            />
            <div className="mb-8 flex flex-wrap gap-3">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    activeFilter === filter
                      ? 'border-transparent bg-[color:var(--accent)]/90 text-black'
                      : 'border-white/10 bg-white/5 text-[color:var(--muted)] hover:text-[color:var(--text)]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <motion.div
              className="grid gap-6 lg:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  className="glass-card flex h-full flex-col rounded-3xl p-6"
                  variants={fadeUp}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <IconChip />
                  </div>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">{project.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                    {project.features.map((feature) => (
                      <li key={feature}>- {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.links ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="experience" className="section-pad bg-[color:var(--bg-alt)]">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              kicker="Experience"
              title="Impactful roles"
              description="Timeline of AI-first engineering contributions."
            />
            <div className="timeline space-y-6">
              {experience.map((item) => (
                <motion.div
                  key={item.role}
                  className="glass-card timeline-item rounded-3xl p-6"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{item.role}</h3>
                      <p className="text-sm text-[color:var(--accent)]">{item.org}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      Timeline
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                    {item.details.map((detail) => (
                      <li key={detail}>- {detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section-pad">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              kicker="Achievements"
              title="Recognitions"
              description="Highlights that reinforce credibility and impact."
            />
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement}
                  className="glass-card rounded-3xl p-6 text-sm text-[color:var(--muted)]"
                  variants={fadeUp}
                >
                  {achievement}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="research" className="section-pad bg-[color:var(--bg-alt)]">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              kicker="Research"
              title="Publications & deep dives"
              description="Modern research initiatives that complement product engineering."
            />
            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              {research.map((item) => (
                <motion.div key={item} className="glass-card rounded-3xl p-6" variants={fadeUp}>
                  <h3 className="text-lg font-semibold">{item}</h3>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">
                    Exploring performance, security, and AI-driven outcomes.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              kicker="Contact"
              title="Let’s build impactful AI-powered products together."
              description="Open to internships, full-time roles, and collaborative AI-driven projects."
            />
            <motion.div
              className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.form
                className="glass-card rounded-3xl p-6"
                variants={fadeUp}
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)]"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)]"
                  />
                </div>
                <textarea
                  placeholder="Tell me about your project"
                  rows={5}
                  className="mt-4 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--accent)]"
                />
                <button
                  type="submit"
                  className="mt-4 w-full rounded-2xl bg-[color:var(--accent)]/90 px-4 py-3 text-sm font-semibold text-black"
                >
                  Send Message
                </button>
              </motion.form>
              <motion.div className="glass-card rounded-3xl p-6" variants={fadeUp}>
                <h3 className="text-lg font-semibold">Quick links</h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  Prefer async conversations? Reach out via GitHub or LinkedIn.
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href="https://github.com/Ayusk19"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--muted)]"
                  >
                    GitHub
                    <IconGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayushreactdev/"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--muted)]"
                  >
                    LinkedIn
                    <IconLinkedIn />
                  </a>
                  <a
                    href="mailto:ayushkumar12030@gmail.com"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[color:var(--muted)]"
                  >
                    Email
                    <IconMail />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[color:var(--bg-alt)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[color:var(--muted)] md:flex-row">
          <p>Designed for premium AI engineering roles.</p>
          <p>© 2026 Ayush Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
