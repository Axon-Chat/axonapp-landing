
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/sections/FooterSection';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose prose-sm md:prose-base max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">Introduction</h2>
            <p>
              Axon ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how your personal information is collected, used, and disclosed by Axon.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you use our services.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>Account information: username, email, and password</li>
              <li>Profile information: display name, avatar, and bio</li>
              <li>Content: messages, files, and other content you submit</li>
              <li>Usage data: how you interact with our services</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you technical notices and updates</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against harmful conduct</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Privacy Policy, please contact us.
            </p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Privacy;
