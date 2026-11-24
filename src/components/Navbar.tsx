import React, { useState, useEffect } from 'react';
import { DaybreakLogo } from './brand/DaybreakLogo';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playClick();
    }
  };

  const navLinks = [
    { label: 'About', href: '#manifesto' },
    { label: 'Experience', href: '#experience' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Badge', href: '#badge' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/95 backdrop-blur-md py-3 border-b-2 border-ink-950 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: DAYBREAK Logo & ShipIt Teens Affiliation */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                sound.playClick();
              }}
              className="group flex items-center gap-2"
            >
              <DaybreakLogo variant="full" size="sm" />
            </a>

            {/* Subtle ShipIt Teens Parent Badge */}
            <div className="hidden sm:flex items-center gap-1.5 pl-3 border-l-2 border-ink-950/20 text-xs font-mono font-medium text-ink-muted">
              <span>an initiative by</span>
              <a
                href="https://ship-it-teen.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink-950 hover:text-daybreak-pink flex items-center gap-0.5 transition-colors bg-cream-200/80 px-2 py-0.5 rounded border border-ink-950/20"
                title="ShipIt Teens Parent Organization"
              >
                <span>ShipIt Teens</span>
                <span className="text-daybreak-pink font-bold">&gt;</span>
              </a>
            </div>
          </div>

          {/* Right: Desktop Navigation Links & CTAs */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-display font-semibold text-ink-900 hover:text-daybreak-dragon tracking-tight transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-daybreak-dragon hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Sound FX Toggle Button */}
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-lg border-2 border-ink-950 bg-cream-50 hover:bg-daybreak-sunny transition-colors text-ink-950 shadow-brutal hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
              title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
              aria-label="Toggle Sound Effects"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-daybreak-dragon" />}
            </button>

            {/* Primary CTA: Register Now */}
            <button
              onClick={() => {
                sound.playChime();
                onOpenRegister();
              }}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-daybreak-orange hover:bg-daybreak-dragon text-ink-950 hover:text-white font-display font-bold text-sm tracking-wide rounded-xl border-2 border-ink-950 shadow-brutal transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer group"
            >
              <span>Register Now</span>
              <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            </button>
          </nav>

          {/* Mobile Right Controls: Sound + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-lg border-2 border-ink-950 bg-cream-50 text-ink-950"
              aria-label="Toggle Sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl border-2 border-ink-950 bg-cream-200 text-ink-950"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-cream-50 border-b-4 border-ink-950 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Subtle ShipIt Teens note */}
          <div className="mb-4 pb-3 border-b border-ink-950/15 flex items-center justify-between text-xs font-mono text-ink-muted">
            <span>SHIPIT TEENS PRESENTS</span>
            <span className="font-bold text-daybreak-pink bg-pink-100 px-2 py-0.5 rounded">NEW YEAR EDITION</span>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-lg font-display font-bold text-ink-950 hover:text-daybreak-dragon py-2 px-3 rounded-lg hover:bg-cream-200 flex items-center justify-between transition-colors border border-transparent hover:border-ink-950"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-ink-muted" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-ink-950/20">
              <button
                onClick={() => {
                  sound.playChime();
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-daybreak-orange hover:bg-daybreak-dragon text-ink-950 font-display font-black text-base rounded-xl border-2 border-ink-950 shadow-brutal"
              >
                <span>Register for Daybreak</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
