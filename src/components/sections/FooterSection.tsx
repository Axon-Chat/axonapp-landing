
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export function FooterSection() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-axon-purple to-indigo-400 flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold">Axon</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              The open source chat platform with unlimited customization potential
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Axon-Chat" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#api" className="text-muted-foreground hover:text-foreground">API</a></li>
              <li><a href="#clients" className="text-muted-foreground hover:text-foreground">Clients</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-foreground">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://docs.axonapp.chat" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Axon. Released under MIT License.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
