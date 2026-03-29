"use client";

import { Calendar } from "lucide-react";

export function Contact() {
  return (
    <section className="py-10">
      <div className="space-y-6 text-center relative p-6 sm:p-8 rounded-lg border border-primary/10 bg-gradient-to-br from-muted/30 to-background backdrop-blur-sm overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="space-y-4">
          <h2 className="font-bold text-3xl text-primary">
            Let&apos;s work together.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-base">
            I&apos;m always interested in new opportunities and exciting
            projects. Whether you have a project or a research idea in mind or just want to chat
            about tech, I&apos;d love to hear from you.
          </p>
        </div>
        <button
          onClick={() => window.open('mailto:abrafsan21@gmail.com', '_blank')}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2 relative overflow-hidden group/btn"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Book a call
          </span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
        </button>
      </div>
    </section>
  );
}
