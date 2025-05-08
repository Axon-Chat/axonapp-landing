
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "relative p-6 rounded-xl border border-border bg-card/50 hover:shadow-md transition-all duration-300",
      "group hover:-translate-y-1",
      className
    )}>
      <div className="absolute -z-10 inset-0 rounded-xl opacity-0 group-hover:opacity-100 feature-gradient-bg transition-opacity duration-500" />
      <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4 text-axon-purple group-hover:bg-axon-purple group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
