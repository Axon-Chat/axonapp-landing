
import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Monitor, Smartphone } from 'lucide-react';
import React from 'react';

interface ClientCardProps {
  title: string;
  icon: React.ReactNode;
  benefits: string[];
  modifiable: string;
}

function ClientCard({ title, icon, benefits, modifiable }: ClientCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="font-semibold text-xl">{title}</h3>
        </div>
        <ul className="space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <svg className="h-5 w-5 flex-shrink-0 text-axon-purple" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground border-t pt-4">
            {modifiable}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ClientsSection() {
  return (
    <section id="clients" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="gradient-text">Open Source</span> Clients
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Fully customizable clients available for all major platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ClientCard 
            title="Web Client"
            icon={<Globe className="h-6 w-6 text-axon-purple" />}
            benefits={[
              "Accessible from any modern browser",
              "Progressive Web App support",
              "No installation required",
              "Built with React for maximum flexibility"
            ]}
            modifiable="Fully modifiable React codebase" />
          
          <ClientCard 
            title="Desktop App"
            icon={<Laptop className="h-6 w-6 text-axon-purple" />}
            benefits={[
              "Native experience on Windows, macOS, Linux",
              "Enhanced performance and integrations",
              "Background notifications",
              "Built with Tauri and Rust"
            ]}
            modifiable="Customizable UI with Tauri plugins" />
          
          <ClientCard 
            title="Mobile Apps"
            icon={<Smartphone className="h-6 w-6 text-axon-purple" />}
            benefits={[
              "Native iOS and Android applications",
              "Push notifications",
              "Offline message queuing",
              "Built with React Native and Kotlin/Swift"
            ]}
            modifiable="Open source native mobile code" />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Want to build your own client and possibly get featured in the future? <br />
            <span className="text-foreground font-medium">Fork our GitHub repository and get started!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
