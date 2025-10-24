import { Brain, Database, Cpu, TrendingUp,Zap,Rocket,Trophy,Award,Star,Medal,Target ,Code,Layers} from 'lucide-react';


const projectsData = [
  {
    title: "LaLiga Player Analysis & Scouting Tool",
    description: "Tool for player comparison, analysis, and scouting based on 23-24 season data. Planning to scale for multiple leagues and seasons.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    icon: Cpu,
    gradient: "from-green-500 to-emerald-500",
    link: "#" 
  },
  {
    title: "Sherlocked Rd1 - CYOA Detective Website",
    description: "Website-based story game where you play as a detective, solve cryptography and SQL challenges to uncover a murder mystery.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Netlify"],
    icon: Zap,
    gradient: "from-violet-500 to-purple-500",
    link: "https://sherlockedr1.netlify.app/"
  },
    {
    title: "Next Word Prediction – LSTM",
    description: "Using LSTM to predict the next word in a sentence. Currently trained on Hamlet, aiming to scale for larger datasets.",
    tech: ["Python", "TensorFlow", "Keras", "NLP"],
    icon: Brain,
    gradient: "from-blue-500 to-cyan-500",
    link: "#" 
  },
    {
    title: "Shopper – E-commerce Platform",
    description: "Full-stack e-commerce website built with MERN stack, Stripe API integration, secure authentication and order management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe API"],
    icon: Rocket,
    gradient: "from-purple-500 to-pink-500",
    link: "https://ecommerce-website-proto-frontend.onrender.com/" 
  },
    {
    title: "Customer Churn Prediction – ANN",
    description: "Artificial Neural Network to predict customer churn. Deployed as a web app on Streamlit for easy access.",
    tech: ["Python", "TensorFlow", "Keras", "Streamlit"],
    icon: TrendingUp,
    gradient: "from-orange-500 to-red-500",
    link: "https://ann-churning-3qscf8oygurw7xtnltp9fe.streamlit.app/"
  }
];




const skillsData = [
  {
    icon: Code,
    title: "Programming Languages",
    description: "Skilled in writing efficient, scalable, and maintainable code across multiple programming languages.",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "Java", "SQL", "HTML5", "CSS3"],
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    borderColor: "border-purple-500/20"
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    description: "Experienced in building modern full-stack and ML applications using industry-leading frameworks.",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Redux", "TensorFlow", "PyTorch", "Django"],
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    borderColor: "border-blue-500/20"
  },
  {
    icon: Database,
    title: "DevOps, Databases & Tools",
    description: "Proficient in cloud, containerization, databases, and backend tooling for scalable deployments.",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Docker", "Kafka", "Git", "AWS", "Linux", "Winston"],
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
    borderColor: "border-green-500/20"
  }
];





const achievementsData = [
  {
    title: "Best Research Paper Award",
    organization: "ICDMAI 2025",
    description: "Won Best Research Paper for MER NET (Music Emotion Recognition) with 98.4% accuracy using hybrid LSTM + Feedforward architecture.",
    date: "Jan 2025",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-500",
    accentColor: "border-yellow-500/20"
  },
  {
    title: "Best UI/UX Award",
    organization: "HackForge 2024",
    description: "Awarded Best UI/UX for designing a highly intuitive interface among 100+ participating teams.",
    date: "Nov 2024",
    icon: Award,
    gradient: "from-blue-500 to-purple-500",
    accentColor: "border-blue-500/20"
  },
  {
    title: "GATE CS 2025 – AIR 2713",
    organization: "IIT GATE Committee",
    description: "Secured 98.4 percentile in GATE CS 2025 while in 3rd year of undergrad.",
    date: "Feb 2025",
    icon: Medal,
    gradient: "from-pink-500 to-rose-500",
    accentColor: "border-pink-500/20"
  },
  {
    title: "Data Science Hackathon Finalist",
    organization: "IIT Kharagpur",
    description: "Ranked 17th out of 500+ teams in Kharagpur Data Science Hackathon 2024.",
    date: "Aug 2024",
    icon: Target,
    gradient: "from-cyan-500 to-blue-500",
    accentColor: "border-cyan-500/20"
  },
  {
    title: "Event Head – Sherlocked",
    organization: "Srijan 2025, JU",
    description: "Organized cryptography + SQL flagship event with 500+ participants as Event Head.",
    date: "Mar 2025",
    icon: Star,
    gradient: "from-green-500 to-emerald-500",
    accentColor: "border-green-500/20"
  },
  {
    title: "Published Researcher – MER NET",
    organization: "International Conference (ICDMAI)",
    description: "Published research on Music Emotion Recognition at ICDMAI 2025, improving inference accuracy across 3 benchmark datasets.",
    date: "Jan 2025",
    icon: Zap,
    gradient: "from-violet-500 to-purple-500",
    accentColor: "border-violet-500/20"
  }
];



export default {projectsData,skillsData,achievementsData};