
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export function CommunitySection() {
  return (
    <section id="community" className="py-16 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Join the <span className="gradient-text">Community</span>
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Axon is built by the community, for the community
          </p>
        </div>
        
        <Card className="max-w-5xl mx-auto overflow-hidden border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Contribute to Axon</h3>
              <p className="mb-6 text-muted-foreground">
                Whether you're a Rust developer, frontend specialist, or just passionate about better communication platforms, there's a place for you in the Axon community.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-axon-purple/20 text-axon-purple flex items-center justify-center">1</span>
                  <span>Star and fork our GitHub repository</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-axon-purple/20 text-axon-purple flex items-center justify-center">2</span>
                  <span>Join our community server on Axon</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-axon-purple/20 text-axon-purple flex items-center justify-center">3</span>
                  <span>Submit issues, PRs, and feedback</span>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-axon-purple hover:bg-axon-dark-purple text-white" onClick={(e) => { e.preventDefault(); window.open("https://www.github.com/Axon-Chat", "_blank"); }} >
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block bg-axon-dark min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Axon Community" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-axon-purple/40 to-transparent" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
