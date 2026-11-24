import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Experience } from './components/Experience';
import { Tracks } from './components/Tracks';
import { Schedule } from './components/Schedule';
import { BadgeGenerator } from './components/BadgeGenerator';
import { StickerWall } from './components/StickerWall';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export const App: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-100 text-ink-950 font-sans selection:bg-daybreak-pink selection:text-white flex flex-col">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

        {/* The Manifesto */}
        <Manifesto />

        {/* The Experience */}
        <Experience />

        {/* Tracks */}
        <Tracks />

        {/* Schedule */}
        <Schedule />

        {/* Interactive Attendee Badge Generator (Inspired by Design Sheet) */}
        <BadgeGenerator />

        {/* Official Sticker Pack & Merch Concepts */}
        <StickerWall />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Final Call to Action */}
        <FinalCta onOpenRegister={() => setIsRegisterOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Registration Modal Dialog */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
};

export default App;
