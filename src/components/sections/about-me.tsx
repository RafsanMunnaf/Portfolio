"use client";

import { FadeInSection } from "../ui/fade-in-section";

export function AboutMe({ data }: { data: Record<string, string> }) {
  return (
    <FadeInSection direction="up">
      <div 
        id="aboutme" 
        className="py-10 px-6 -mx-6 rounded-3xl transition-all duration-500 ease-out hover:bg-muted/30 hover:backdrop-blur-xl hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-transparent hover:border-primary/10 hover:-translate-y-1 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <h2 className="font-medium text-primary/90 text-base relative z-10">about me.</h2>

        {/* Remove extra padding to keep alignment consistent */}
        <div className="mt-4 relative z-10">
          <p className="font-normal text-muted-foreground text-base text-justify leading-relaxed">
            {data.INTRO}{" "}
            <span className="hidden sm:inline">{data.EXPERTISE}</span>
          </p>
        </div>
      </div>
    </FadeInSection>
  );
}