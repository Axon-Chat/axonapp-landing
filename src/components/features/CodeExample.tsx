
import React from 'react';

interface CodeExampleProps {
  language: string;
  code: string;
  caption?: string;
}

export function CodeExample({ language, code, caption }: CodeExampleProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-border bg-axon-dark/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-muted">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs font-medium text-muted-foreground">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-white font-jetbrains">{code}</code>
      </pre>
      {caption && <div className="px-4 py-2 bg-muted/50 border-t border-border">
        <p className="text-xs text-muted-foreground">{caption}</p>
      </div>}
    </div>
  );
}
