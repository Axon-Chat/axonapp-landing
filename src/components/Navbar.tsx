import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Smartphone } from "lucide-react";
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { name: "Features", href: "/#features" },
  { name: "API", href: "/#api" },
  { name: "Clients", href: "/#clients" },
  { name: "Community", href: "/#community" },
];

const desktopDownloadOptions = [
  { name: "Windows", url: "https://cdn.axonapp.chat/download/windows" },
  { name: "macOS", url: "https://cdn.axonapp.chat/download/mac" },
  { name: "Linux", url: "https://cdn.axonapp.chat/download/linux" },
  { name: "Use Browser", url: "https://app.axonapp.chat" },
];

const mobileDownloadOptions = [
  { name: "Android", url: "https://cdn.axonapp.chat/download/android" },
  { name: "iOS", url: "https://cdn.axonapp.chat/download/ios" },
  { name: "Use Browser", url: "https://app.axonapp.chat" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadDialogOpen, setDownloadDialogOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const isMobile = useIsMobile();

  // Detect if user is on a mobile device
  useEffect(() => {
    const checkMobileDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobileUA = /android|iphone|ipad|ipod|windows phone/i.test(userAgent);
      setIsMobileDevice(isMobileUA);
    };
    
    checkMobileDevice();
  }, []);

  const downloadOptions = isMobileDevice ? mobileDownloadOptions : desktopDownloadOptions;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-axon-purple to-indigo-400 flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <span className="text-xl font-bold">Axon</span>
          </Link>
          <div className="hidden md:flex gap-x-8">
            {navItems.map((item) => (
                <a href={item.href} key={item.name} className="text-sm font-medium leading-6 hover:text-axon-purple transition-colors">
                  {item.name}
                </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a 
            href="https://docs.axonapp.chat" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block" >
            <Button variant="outline" size="sm">
              Documentation
            </Button>
          </a>
          <Button 
            size="sm" 
            className="hidden md:flex bg-axon-purple hover:bg-axon-dark-purple"
            onClick={() => setDownloadDialogOpen(true)} >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <button
            type="button"
            className="md:hidden rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)} >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu - fullscreen with improved visibility */}
      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="sm:max-w-full max-h-screen h-screen m-0 p-0 rounded-none border-0" aria-describedby="mobile-menu-description">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-axon-purple to-indigo-400 flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-xl font-bold">Axon</span>
              </Link>
              {/*<button*/}
              {/*  type="button"*/}
              {/*  className="rounded-md p-2.5 text-foreground"*/}
              {/*  onClick={() => setMobileMenuOpen(false)} >*/}
              {/*  <span className="sr-only">Close menu</span>*/}
              {/*  <X className="h-6 w-6" />*/}
              {/*</button>*/}
            </div>
            <div className="flex-grow overflow-y-auto p-4" id="mobile-menu-description">
              <div className="space-y-6">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 text-lg font-medium hover:bg-muted rounded-md"
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }} >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <div className="px-4 py-3">
                    <ThemeToggle />
                  </div>
                  <a 
                    href="https://docs.axonapp.chat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full" >
                    <Button variant="outline" className="w-full py-6 text-lg">
                      Documentation
                    </Button>
                  </a>
                  <Button 
                    className="w-full py-6 text-lg bg-axon-purple hover:bg-axon-dark-purple"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setDownloadDialogOpen(true);
                    }} >
                    <Download className="mr-2 h-5 w-5" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Download Dialog */}
      <Dialog open={downloadDialogOpen} onOpenChange={setDownloadDialogOpen}>
        <DialogContent className="sm:max-w-md" aria-describedby="download-dialog-description">
          <DialogHeader>
            <DialogTitle className="text-2xl">Download Axon</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4" id="download-dialog-description">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {downloadOptions.map((option) => (
                <a 
                  key={option.name}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline" >
                  <Button 
                    variant={option.name === "Open in browser" ? "outline" : "default"} 
                    className={cn(
                      "w-full h-16 text-lg justify-center",
                      option.name !== "Open in browser" && "bg-axon-purple hover:bg-axon-dark-purple"
                    )} >
                    {option.name === "Android" || option.name === "iOS" ? (
                      <Smartphone className="mr-3 h-5 w-5" />
                    ) : (
                      <Download className="mr-3 h-5 w-5" />
                    )}
                    <span className="ml-3">{option.name}</span>
                  </Button>
                </a>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Free and open source under the MIT license.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
