"use client";

import { AuroraBackground } from "@/components/aceternityui/aurora-background";
import { AuroraText } from "@/components/magicui/aurora-text";
import BlurFade from "@/components/magicui/blur-fade";
import { AnimatedBeamDemo } from "@/components/magicui/integration";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/project-cards";
import { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

const BLUR_FADE_DELAY = 0.04;

const Page = () => {
  const recentProjectsRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (recentProjectsRef.current) {
      const annotation = annotate(recentProjectsRef.current, {
        type: 'box',
        color: '#FF0000',
        strokeWidth: 3,
      });
      annotation.show();
    }
  }, []);

  return (
    <>
      {/* Fixed Aurora background overlay (does not scroll) */}
      <AuroraBackground className="fixed inset-0 -z-10 pointer-events-none h-screen" showRadialGradient>
        <></>
      </AuroraBackground>

      {/* Content */}
      <section id="more_projects" className="relative z-0 w-full min-h-screen pt-16 pb-16">
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm select-none">
                  Projects
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                  Check out <AuroraText className="font-bold">My Projects</AuroraText>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Below are some works that I&apos;ve developed over
                  the past few months.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="flex flex-col gap-8 max-w-[800px] mx-auto">
            <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
              <div className="h-[300px] w-full">
                <AnimatedBeamDemo />
              </div>
            </BlurFade>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.more_projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;