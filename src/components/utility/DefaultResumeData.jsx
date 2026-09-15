const DefaultResumeData = {
  name: "ALEX MORGAN",
  position: "AI Engineer",
  contactInformation: "+1 (555) 019-2834",
  email: "alex.morgan@example.com",
  address: "San Francisco, CA",
  profilePicture: "",
  socialMedia: [
    {
      socialMedia: "Github",
      link: "github.com/alexmorgan",
    },
    {
      socialMedia: "LinkedIn",
      link: "linkedin.com/in/alexmorgan",
    },
  ],
  summary:
    "AI Engineer with 2+ years of experience building and deploying production LLM and agentic systems. Slashed per-request inference cost by 80% and reduced latency by 83% on a system serving 1M+ API requests. Expert in Multimodal AI, RAG pipelines, SLMs, and cloud-native serverless architecture across Azure, AWS, and GCP.",
  education: [
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      startYear: "2020-08-01",
      endYear: "2024-05-01",
    },
  ],
  workExperience: [
    {
      company: "Apex Solutions Inc.",
      position: "Artificial Intelligence Engineer",
      description: "San Francisco, CA",
      keyAchievements:
        "<b>Asset Validation System:</b> Scaled multimodal LLM verification pipeline on Azure Function Apps serving 1M+ requests; cut inference costs by 80% ($0.02 → $0.004) via prompt-caching and Gemini 3.1 Flash-Lite, and cut latency by 83% (60s to 10s) using FastAPI.\n<b>Invoice Data Extraction:</b> Built multimodal document-extraction pipeline achieving 90% accuracy across scanned and digital invoices; automated PO categorization and asset generation, saving ~160 hours monthly.\n<b>Text-to-SQL Conversational Agent:</b> Developed production NL-to-SQL system using Llama 3.3 (Groq API) with function calling, parameterized SQL generation, and multi-tenant Redis session persistence.",
      startYear: "2025-01-01",
      endYear: "",
    },
    {
      company: "Apex Solutions Inc.",
      position: "Artificial Intelligence Engineer Intern",
      description: "San Francisco, CA",
      keyAchievements:
        "<b>Asset Audit System:</b> Developed two-stage temporal audit pipeline using Gemini 2.0 Flash for baseline vs. current image comparison, barcode detection, and condition scoring.\n<b>Serverless Backend:</b> Implemented asynchronous microservices on Azure Function Apps with queue-based processing, enabling high-concurrency image analysis.",
      startYear: "2024-06-01",
      endYear: "2024-12-01",
    },
  ],
  projects: [
    {
      name: "Autonomous Multi-Agent Travel Planner",
      link: "github.com/alexmorgan/agent-travel",
      description: "",
      keyAchievements:
        "Developed multi-agent system using Gemini 2.0 Flash for parallel location research, real-time Wikipedia API retrieval, and Play.ht TTS audio synthesis.",
      startYear: "2025-01-01",
      endYear: "2025-02-01",
    },
    {
      name: "Vision + LLM Customer Support Assistant",
      link: "github.com/alexmorgan/vision-support",
      description: "",
      keyAchievements:
        "Built multimodal support agent combining computer vision and LLMs to classify product defect images and automate replacement workflows.",
      startYear: "2024-08-01",
      endYear: "2024-12-01",
    },
  ],
  skills: [
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Critical Thinking",
        "Team Collaboration",
        "Time Management",
        "Adaptability",
        "Research",
        "Product Lifecycle",
        "Cross-Functional Collaboration",
      ],
    },
    {
      title: "Technical",
      skills: [
        "Python",
        "FastAPI",
        "LangChain",
        "LLMs (Gemini, GPT, Llama 3.3)",
        "RAG",
        "Agentic AI",
        "NLP",
        "Multimodal Vision",
        "OCR",
        "YOLO",
        "PyTorch",
        "Prompt Caching",
        "Vector Databases",
      ],
    },
    {
      title: "Cloud & Tools",
      skills: [
        "Azure (Function Apps, VM, Web App, Redis)",
        "AWS (Lambda)",
        "GCP (Vision API)",
        "Docker",
        "Git",
        "LangSmith",
        "MLflow",
        "Redis",
      ],
    },
  ],
  languages: ["English", "Spanish", "French"],
  certifications: [
    "Machine Learning Specialization | DeepLearning.AI (2024)",
    "AWS Certified Solutions Architect - Associate (2024)",
    "Generative AI Fundamentals | Databricks (2024)",
  ],
  achievements: [],
  sectionTitles: {
    profile: "SUMMARY",
    skills: "SKILLS",
    education: "EDUCATION",
    certifications: "CERTIFICATIONS",
    experience: "WORK EXPERIENCE",
    projects: "PROJECTS",
    achievements: "ACHIEVEMENTS",
    languages: "LANGUAGES",
  },
  hiddenSections: [],
};

export default DefaultResumeData;