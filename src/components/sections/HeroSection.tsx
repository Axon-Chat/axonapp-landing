import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import React from 'react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden hero-pattern-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              The Next Generation <span className="gradient-text">Open Source</span> Chat Platform
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Powered by a blazing-fast Rust backend with an open API ecosystem for unlimited customisation
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-axon-purple hover:bg-axon-dark-purple text-white" size="lg" onClick={e => { e.preventDefault(); window.location.href = ("https://app.axonapp.chat"); }} >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-axon-purple hover:bg-axon-purple/10" onClick={(e) => { e.preventDefault(); window.open("https://www.github.com/Axon-Chat", "_blank"); }} >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-axon-purple/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    </section>
  );
}
