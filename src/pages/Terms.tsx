
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { FooterSection } from '@/components/sections/FooterSection';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="prose prose-sm md:prose-base max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">1. Terms</h2>
            <p>
              By accessing and using Axon, you agree to be bound by these Terms of Service.
              If you disagree with any part of the terms, you may not access our services.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">2. Use License</h2>
            <p>
              Axon is an open-source software released under the MIT License:
            </p>
            <div className="bg-muted p-4 rounded-md my-4 text-sm">
              <p>MIT License</p>
              <p>Copyright (c) {new Date().getFullYear()} Axon</p>
              <p className="mt-2">
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>
              <p className="mt-2">
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
              </p>
              <p className="mt-2">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
              </p>
            </div>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">3. User Conduct</h2>
            <p>
              You are responsible for the content you post and your conduct while using our services.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-4">4. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will provide notice of significant changes.
            </p>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Terms;
