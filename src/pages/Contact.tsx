
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/sections/FooterSection';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-4">
                Have questions, feedback, or need help? Here are a few ways to connect with us.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Community Support</h3>
                  <p className="text-muted-foreground">
                    Join our community server for help from the team and other users.
                  </p>
                  <Button variant="outline" className="mt-3">
                    Join Community Server
                  </Button>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">GitHub</h3>
                  <p className="text-muted-foreground">
                    Report bugs, request features or contribute to the project.
                  </p>
                  <a href="https://github.com/Axon-Chat" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="mt-3">
                      <Github className="mr-2 h-4 w-4" />
                      Axon on GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/40 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-2 bg-background border border-border rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 bg-background border border-border rounded-md"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full p-2 bg-background border border-border rounded-md"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    className="w-full p-2 bg-background border border-border rounded-md min-h-[120px]"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-axon-purple hover:bg-axon-dark-purple">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Contact;
