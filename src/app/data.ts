import { StaticImageData } from "next/image";

import {
  DubAIImage,
  ShapeDrawerImage,
  BusETicketImage,
  WeatherAppImage,
  CancerDetectionImage,
  SignboardDetectionImage,
  PickAndPlaceImage,
} from "@/assets";

export interface IProjectData {
  ID: string;
  TITLE: string;
  DESCRIPTION: string;
  LONG_DESCRIPTION: string;
  FEATURES: string[];
  TECHNOLOGIES: string[];
  CATEGORY: string;
  IMAGE: StaticImageData;
  GITHUB?: string;
  DEMO?: string;
  FEATURED: boolean;
}

interface ICourse {
  NAME: string;
  LINK: string;
}

export interface IBlogData {
  TYPE: "certification" | "specialization" | "skill-track" | "award";
  DATE: string;
  LINK?: string;
  DESCRIPTION: string;
  COURSES?: ICourse[];
  FEATURED?: boolean;
}

// Age Calculation
const currentYear = new Date().getFullYear();
const birthYear = 2000;
const dynamicAge = currentYear - birthYear;

export const DATA = {
  HEADER: {
    NAME: "Abdul Munnaf Rafsan",
    AGE: dynamicAge,
    PRONOUN: "he/him",
    HEADLINE:
      "AI Engineer specializing in LLMs, Voice AI, and production-ready AI systems.",
    RESUME: "/Rafsan_Resume.pdf",
    EMAIL: "mailto:abrafsan21@gmail.com",
    GITHUB: "https://github.com/RafsanMunnaf",
    LINKEDIN: "https://www.linkedin.com/in/abdul-munnaf-rafsan-a92167339/",
    PHONE: "(+880) 1647254677",
    PHONE_ALT: "+8801647254677",
    ADDRESS: "1240/6/A, East Monipur, Mirpur, Dhaka-1216",
  },

  ABOUT_ME: {
    INTRO:
      "AI Engineer and Python Developer with strong experience in fine-tuning Large Language Models (LLMs), building intelligent voice agents and developing production-ready AI systems. Proficient in TensorFlow, PyTorch, RAG architectures, OCR pipelines and Generative AI workflows for transforming complex data into practical products. Experienced in real-time voice API integration, scalable backend development and containerized deployment for business automation and user-centric AI applications.",
    EXPERTISE:
      "My expertise lies in LLM fine-tuning, RAG pipelines, Voice AI engineering, deep learning model development, and building end-to-end AI solutions — from research prototypes to production deployments.",
  },

  EXPERIENCE: {
    "Join Venture AI": {
      WEBSITE: "https://joinventureai.com/",
      ROLES: [
        {
          POSITION: "Jr. AI Developer",
          LOCATION: "Dhaka, Bangladesh",
          DURATION: "Jan, 2025 - Present",
          DESCRIPTION: [
            "Fine-tuned Large Language Models (LLMs) using Unsloth to improve contextual understanding, response quality and trend prediction.",
            "Developed Retrieval-Augmented Generation (RAG) powered chatbots that produced accurate, context-aware responses across multi-domain datasets.",
            "Engineered realistic voice AI solutions using ElevenLabs, Coqui TTS and Whisper for voice cloning, transcription and natural conversational flow.",
            "Built AI-driven conversational agents and automated calling systems using Vapi and Twilio for business communication workflows.",
            "Developed and deployed deep learning models with TensorFlow and PyTorch while maintaining reproducible production environments using Docker.",
            "Optimized OCR pipelines with Tesseract and EasyOCR for high-accuracy text extraction from complex documents and images.",
            "Designed custom AI avatars and Generative AI workflows using Stable Diffusion and GPT to improve product engagement and user interaction.",
          ],
          TECH_STACK: ["Python", "LLMs", "RAG", "Voice AI", "TensorFlow", "PyTorch", "Docker", "OCR", "Generative AI", "Vapi", "Twilio", "FastAPI"],
        },
      ],
    },
  },

  PROJECTS: [
    {
      ID: "ivr-automation",
      TITLE: "Agentic AI IVR Automation",
      DESCRIPTION: "Automated IVR appointment and interaction platform with agentic voice conversations.",
      LONG_DESCRIPTION: "Built an automated IVR appointment and interaction platform using Django REST Framework and PostgreSQL for scheduling and user management. Created agentic voice conversations with Vapi and ElevenLabs to dynamically handle caller intent and generate realistic speech responses. Integrated Django APIs with the voice layer for real-time slot availability, automated booking and workflow orchestration. Containerized the application with Docker and supported deployment workflows through CI/CD-ready infrastructure.",
      FEATURES: [
        "Automated IVR appointment scheduling",
        "Agentic voice conversations via Vapi & ElevenLabs",
        "Real-time slot availability & booking API",
        "Django REST Framework & PostgreSQL backend",
        "Docker containerization & CI/CD deployment"
      ],
      TECHNOLOGIES: ["Python", "Django REST", "PostgreSQL", "Vapi", "ElevenLabs", "Docker"],
      CATEGORY: "Voice AI & Automation",
      IMAGE: WeatherAppImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "https://agenticai.betopialimited.com/",
      FEATURED: true
    },
    {
      ID: "nutra-ai",
      TITLE: "Nutra AI Calorie Counter",
      DESCRIPTION: "AI-powered calorie tracking system using computer vision and smartphone depth sensing.",
      LONG_DESCRIPTION: "Built an AI-powered calorie tracking system using computer vision and smartphone depth sensing to identify food, estimate volume and calculate macronutrients. Integrated barcode scanning and nutrition APIs to retrieve precise dietary information across different meal types and packaged products. Developed backend services for low-latency image inference and long-term user health log management.",
      FEATURES: [
        "Food identification via computer vision",
        "Volume estimation & macronutrient calculation",
        "Barcode scanning & nutrition APIs integration",
        "Low-latency image inference backend",
        "User health log management"
      ],
      TECHNOLOGIES: ["Python", "Computer Vision", "FastAPI", "External APIs"],
      CATEGORY: "Computer Vision & AI",
      IMAGE: PickAndPlaceImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "https://nutraai.app/",
      FEATURED: true
    },
    {
      ID: "fondify",
      TITLE: "Fondify – Intelligent Credit Analysis",
      DESCRIPTION: "AI-driven financial platform using GPT to analyze credit reports and generate strategies.",
      LONG_DESCRIPTION: "Built an AI-driven financial platform using GPT to analyze credit reports and generate business growth strategies for users. Integrated secure document processing and matching logic to evaluate credit profiles against suitable financial institutions. Implemented a Retrieval-Augmented Generation (RAG) pipeline to query financial documents and deliver context-aware credit insights.",
      FEATURES: [
        "GPT-powered credit report analysis",
        "Strategic business growth generation",
        "Secure document processing & profile matching",
        "RAG pipeline for financial document querying",
        "Context-aware credit insights"
      ],
      TECHNOLOGIES: ["Python", "OpenAI GPT", "RAG", "LangChain"],
      CATEGORY: "AI & FinTech",
      IMAGE: DubAIImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "https://fondify.io/",
      FEATURED: true
    },
    {
      ID: "travel-planner-ai",
      TITLE: "Travel Planner AI",
      DESCRIPTION: "Multilingual travel assistant generating personalized itineraries through natural language.",
      LONG_DESCRIPTION: "Built a multilingual travel assistant that generates personalized itineraries through natural language conversations in English and Chinese. Integrated real-time travel data and third-party APIs such as Booking.com to capture preferences and curate complete travel plans. Implemented robust conversational logic to process complex user inputs and return end-to-end customized schedules.",
      FEATURES: [
        "Multilingual conversational assistant (EN/ZH)",
        "Personalized itinerary generation",
        "Real-time Booking.com API integration",
        "Complex user intent processing",
        "End-to-end customized travel schedules"
      ],
      TECHNOLOGIES: ["Python", "LLMs", "NLP", "Booking.com API"],
      CATEGORY: "Agents & NLP",
      IMAGE: BusETicketImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "https://mtravel.ai/",
      FEATURED: true
    },
    {
      ID: "alzheimer-detection",
      TITLE: "Neuro-Symbolic AI for Alzheimer's Detection",
      DESCRIPTION: "A hybrid neural-symbolic AI system for early detection of Alzheimer's disease achieving 95.45% accuracy.",
      LONG_DESCRIPTION: "Developed a Neuro-Symbolic AI system for early detection of Alzheimer's disease, achieving 95.45% accuracy through a hybrid neural-symbolic architecture. Built an audio-processing pipeline extracting MFCC, ZCR and Spectral Centroid features from voice samples for robust signal representation. Combined CNN-LSTM based learning with symbolic reasoning to improve both predictive performance and interpretability of the diagnostic output.",
      FEATURES: [
        "Hybrid neural-symbolic architecture",
        "Audio feature extraction (MFCC, ZCR, Spectral Centroid)",
        "CNN-LSTM deep learning pipeline",
        "Symbolic reasoning for interpretability",
        "95.45% detection accuracy"
      ],
      TECHNOLOGIES: ["Python", "TensorFlow", "PyTorch", "CNN", "LSTM", "Signal Processing"],
      CATEGORY: "Research & Healthcare",
      IMAGE: CancerDetectionImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "",
      FEATURED: false
    },
  ],

  EDUCATION: {
    "BRAC University": {
      DEGREE: "Bachelor of Science in Computer Science and Engineering",
      LOCATION: "Dhaka, Bangladesh",
      DURATION: "2020 - 2025",
      GRADE: "",
      ACHIEVEMENTS: [],
      EXTRA_CURRICULARS: [
        "Completed Project Associate program at Social Impact Lab, BRAC University",
        "Lead of Clean Bangladesh 2.0 project at Korail",
      ],
    },
  },

  RESEARCH: {
    "Neuro-Symbolic AI for Early Detection of Alzheimer's Disease": {
      STATUS: "Completed",
      COLLABORATORS: [],
      DESCRIPTION:
        "Developed a Neuro-Symbolic AI system for early detection of Alzheimer's disease, achieving 95.45% accuracy through a hybrid neural-symbolic architecture. Built an audio-processing pipeline extracting MFCC, ZCR and Spectral Centroid features from voice samples for robust signal representation. Combined CNN-LSTM based learning with symbolic reasoning to improve both predictive performance and interpretability of the diagnostic output.",
      LINK: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0321291",
      PUBLICATION: "",
    },
  },

  "AWARDS & CERTIFICATIONS": {},

  SKILLS: {
    Languages: ["Bengali (Native)", "English (Fluent)"],
    "Programming Languages": ["Python", "JavaScript", "C", "C++"],
    "AI & Machine Learning": ["Model Training", "Fine-tuning", "Feature Engineering", "TensorFlow", "PyTorch", "Scikit-Learn", "LangChain", "LangGraph"],
    "Deep Learning & NLP": ["Transformers", "Generative AI", "Computer Vision", "OCR", "Document Classification", "Text Parsing", "Chatbot Development", "OpenAI GPT", "Hugging Face", "Rasa"],
    "Backend & Integration": ["Flask", "FastAPI", "Django", "Node.js", "RESTful APIs", "Voice API Workflows"],
    "Frontend & Web": ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React.js"],
    "Databases & Analytics": ["MySQL", "PostgreSQL", "NoSQL", "Pandas", "Matplotlib", "Seaborn"],
    "MLOps & Deployment": ["Docker", "MLflow", "DVC", "Google Cloud Platform (GCP)", "CI/CD Workflow Basics"],
    "Additional Technologies": ["Git", "GitHub", "Agile Workflows", "n8n", "Softr", "Data Structures", "Dynamic Programming"],
  },
};
