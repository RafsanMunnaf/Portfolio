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
    RESUME: "/Resume.pdf",
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
      CATEGORY: "AI & NLP",
      IMAGE: CancerDetectionImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "",
      FEATURED: true
    },
    {
      ID: "rag-chatbot",
      TITLE: "RAG-Powered Chatbot",
      DESCRIPTION: "Context-aware chatbot using Retrieval-Augmented Generation for accurate multi-domain responses.",
      LONG_DESCRIPTION: "Developed a Retrieval-Augmented Generation (RAG) powered chatbot that produces accurate, context-aware responses across multi-domain datasets. Integrated vector databases for semantic search, document retrieval and LLM-based answer generation for production use cases.",
      FEATURES: [
        "Multi-domain knowledge retrieval",
        "Context-aware response generation",
        "Vector database integration",
        "Semantic search capabilities",
        "Production-ready architecture"
      ],
      TECHNOLOGIES: ["Python", "LangChain", "LangGraph", "OpenAI GPT", "FAISS", "FastAPI"],
      CATEGORY: "AI & NLP",
      IMAGE: DubAIImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "",
      FEATURED: true
    },
    {
      ID: "voice-ai-agent",
      TITLE: "Voice AI Conversational Agent",
      DESCRIPTION: "Realistic voice AI solution with voice cloning, transcription and automated calling for business workflows.",
      LONG_DESCRIPTION: "Engineered realistic voice AI solutions using ElevenLabs, Coqui TTS and Whisper for voice cloning, transcription and natural conversational flow. Built AI-driven conversational agents and automated calling systems using Vapi and Twilio for business communication workflows.",
      FEATURES: [
        "Voice cloning with ElevenLabs & Coqui TTS",
        "Speech-to-text with Whisper",
        "Automated calling via Vapi & Twilio",
        "Natural conversational flow",
        "Business communication automation"
      ],
      TECHNOLOGIES: ["Python", "ElevenLabs", "Coqui TTS", "Whisper", "Vapi", "Twilio"],
      CATEGORY: "Agents & Automation",
      IMAGE: WeatherAppImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "",
      FEATURED: true
    },
    {
      ID: "ocr-pipeline",
      TITLE: "Intelligent OCR Pipeline",
      DESCRIPTION: "High-accuracy OCR system for text extraction from complex documents and images.",
      LONG_DESCRIPTION: "Optimized OCR pipelines with Tesseract and EasyOCR for high-accuracy text extraction from complex documents and images. Includes preprocessing, layout analysis and post-processing for structured data output.",
      FEATURES: [
        "Multi-engine OCR (Tesseract & EasyOCR)",
        "Complex document processing",
        "Image preprocessing pipeline",
        "Structured data extraction",
        "High accuracy text recognition"
      ],
      TECHNOLOGIES: ["Python", "Tesseract", "EasyOCR", "OpenCV", "FastAPI"],
      CATEGORY: "AI & NLP",
      IMAGE: SignboardDetectionImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "",
      FEATURED: true
    },
    {
      ID: "generative-ai-avatars",
      TITLE: "AI Avatar & Generative Workflows",
      DESCRIPTION: "Custom AI avatars and Generative AI workflows using Stable Diffusion and GPT for product engagement.",
      LONG_DESCRIPTION: "Designed custom AI avatars and Generative AI workflows using Stable Diffusion and GPT to improve product engagement and user interaction. Includes text-to-image generation, style transfer and automated content pipelines.",
      FEATURES: [
        "Custom AI avatar generation",
        "Stable Diffusion integration",
        "GPT-powered content workflows",
        "Style transfer capabilities",
        "Automated content pipelines"
      ],
      TECHNOLOGIES: ["Python", "Stable Diffusion", "OpenAI GPT", "ComfyUI", "Docker"],
      CATEGORY: "Agents & Automation",
      IMAGE: ShapeDrawerImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "",
      FEATURED: true
    },
    {
      ID: "llm-finetuning",
      TITLE: "LLM Fine-Tuning Pipeline",
      DESCRIPTION: "Production-ready pipeline for fine-tuning Large Language Models using Unsloth for improved performance.",
      LONG_DESCRIPTION: "Fine-tuned Large Language Models (LLMs) using Unsloth to improve contextual understanding, response quality and trend prediction. Built reproducible training pipelines with evaluation metrics and deployment automation.",
      FEATURES: [
        "Unsloth-based fine-tuning",
        "Custom dataset preparation",
        "Evaluation metrics tracking",
        "Model deployment automation",
        "Performance optimization"
      ],
      TECHNOLOGIES: ["Python", "Unsloth", "Hugging Face", "PyTorch", "Docker"],
      CATEGORY: "AI & NLP",
      IMAGE: PickAndPlaceImage,
      GITHUB: "https://github.com/RafsanMunnaf",
      DEMO: "",
      FEATURED: false
    },
    {
      ID: "deep-learning-models",
      TITLE: "Deep Learning Model Suite",
      DESCRIPTION: "Collection of deep learning models built with TensorFlow and PyTorch for various AI applications.",
      LONG_DESCRIPTION: "Developed and deployed deep learning models with TensorFlow and PyTorch while maintaining reproducible production environments using Docker. Covers image classification, NLP tasks and time-series prediction.",
      FEATURES: [
        "TensorFlow & PyTorch implementations",
        "Docker containerized deployment",
        "Image classification models",
        "NLP task models",
        "Production-ready environments"
      ],
      TECHNOLOGIES: ["Python", "TensorFlow", "PyTorch", "Docker", "MLflow"],
      CATEGORY: "AI & NLP",
      IMAGE: BusETicketImage,
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
      LINK: "",
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
