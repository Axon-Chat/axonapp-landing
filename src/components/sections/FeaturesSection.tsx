
import { FeatureCard } from '@/components/features/FeatureCard';
import { Cpu, Globe, Lock, Users } from 'lucide-react';
import React from 'react';

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Designed for <span className="gradient-text">Performance</span> and <span className="gradient-text">Freedom</span>
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            With its Rust backend and open architecture, Axon gives you unprecedented control over your communication platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            title="Rust-Powered Backend"
            description="Built with Rust for blazing-fast performance, reliability and security. Our backend handles millions of messages with minimal latency."
            icon={Cpu} />
          <FeatureCard 
            title="Open API Ecosystem"
            description="Connect with a wide range of custom bots and integrations through our comprehensive RESTful API and WebSocket connections."
            icon={Globe} />
          <FeatureCard 
            title="Security First"
            description="Comprehensive permission systems, secured storage of all information, and regular security checks ensure your data is always safe."
            icon={Lock} />
          <FeatureCard 
            title="Community-Driven"
            description="Open source at its core, with an active community of developers constantly improving the platform."
            icon={Users} />
        </div>
      </div>
    </section>
  );
}
