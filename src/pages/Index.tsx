
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { APISection } from '@/components/sections/APISection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { FooterSection } from '@/components/sections/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <APISection />
        <ClientsSection />
        <CommunitySection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
