import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ChatBot } from "@/components/ui/chatbot";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafsan.vercel.app"),
  title: {
    default: "Abdul Munnaf Rafsan | AI Engineer",
    template: "%s | Abdul Munnaf Rafsan",
  },
  description:
    "AI Engineer specializing in LLMs, Voice AI, RAG architectures, and production-ready AI systems. Building intelligent solutions with deep learning, NLP, and generative AI.",
  keywords: [
    "Abdul Munnaf Rafsan",
    "Rafsan",
    "AI Engineer",
    "Python Developer",
    "Machine Learning Engineer",
    "NLP Engineer",
    "Natural Language Processing",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "LangChain",
    "LangGraph",
    "PyTorch",
    "TensorFlow",
    "RAG Systems",
    "LLM Fine-tuning",
    "Voice AI",
    "Generative AI",
    "OCR",
    "FastAPI",
    "Hugging Face",
    "Portfolio",
    "Next.js",
    "React",
    "BRAC University",
    "Join Venture AI",
  ],
  authors: [{ name: "Abdul Munnaf Rafsan", url: "https://rafsan.vercel.app" }],
  creator: "Abdul Munnaf Rafsan",
  publisher: "Abdul Munnaf Rafsan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdul Munnaf Rafsan | AI Engineer",
    description:
      "AI Engineer specializing in LLMs, Voice AI, RAG architectures, and production-ready AI systems. Building intelligent solutions with deep learning, NLP, and generative AI.",
    url: "https://rafsan.vercel.app/",
    siteName: "Abdul Munnaf Rafsan",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Munnaf Rafsan | AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Munnaf Rafsan | AI Engineer",
    description:
      "AI Engineer specializing in LLMs, Voice AI, RAG architectures, and production-ready AI systems. Building intelligent solutions with deep learning, NLP, and generative AI.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true, 
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Munnaf Rafsan",
    url: "https://rafsan.vercel.app",
    image: "https://rafsan.vercel.app/opengraph-image.png",
    jobTitle: "AI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Join Venture AI",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "BRAC University",
    },
    sameAs: [
      "https://github.com/RafsanMunnaf",
      "https://www.linkedin.com/in/abdul-munnaf-rafsan-a92167339/",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "LLM Fine-tuning",
      "Voice AI",
      "Generative AI",
      "RAG Systems",
      "OCR",
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "Docker",
    ],
  };

  return (
    <html lang="en" className={`${outfit.variable} overflow-x-hidden`} suppressHydrationWarning >
      <head>
        <meta name="theme-color" content="#0b1021" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f9fafb" media="(prefers-color-scheme: light)" />
        <meta name="application-name" content="Abdul Munnaf Rafsan" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Abdul Munnaf Rafsan | AI Engineer',
              url: 'https://rafsan.vercel.app',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.google.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden bg-background `}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ChatBot />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
