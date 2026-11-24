import React from 'react';
import { DaybreakLogo } from './brand/DaybreakLogo';
import { ArrowUp, Heart, Github, Instagram, Twitter, Mail, ExternalLink } from 'lucide-react';
import { sound } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream-100 text-ink-950 border-t-4 border-ink-950 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-ink-950/20">
          {/* Col 1: Branding & ShipIt Teens (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <DaybreakLogo variant="full" size="md" />
              <p className="mt-4 text-sm font-sans text-ink-700 max-w-sm leading-relaxed">
                DAYBREAK is a 24-hour New Year teen hackathon in Bengaluru, India. Where young developers, hardware tinkerers, and designers welcome the dawn with running code.
              </p>

              {/* ShipIt Teens parent badge */}
              <div className="mt-5 p-3.5 bg-cream-50 border-2 border-ink-950 rounded-2xl inline-flex items-center gap-3">
                <span className="text-xs font-mono text-ink-muted">Organised by</span>
                <a
                  href="https://ship-it-teen.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold text-sm text-ink-950 hover:text-daybreak-pink flex items-center gap-1 transition-colors"
                >
                  <span>ShipIt Teens</span>
                  <ExternalLink className="w-3.5 h-3.5 text-daybreak-pink" />
                </a>
              </div>
            </div>

            <div className="mt-6 text-xs font-mono text-ink-muted">
              Bengaluru, Karnataka • 12.9716° N, 77.5946° E
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <div className="font-mono text-xs font-bold text-daybreak-dragon uppercase tracking-wider mb-4">
              QUICK NAVIGATION
            </div>
            <ul className="space-y-2.5 text-sm font-display font-semibold text-ink-900">
              <li>
                <a href="#manifesto" className="hover:text-daybreak-dragon transition-colors">
                  The Manifesto
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-daybreak-dragon transition-colors">
                  Experience & Perks
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-daybreak-dragon transition-colors">
                  Hackathon Tracks
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-daybreak-dragon transition-colors">
                  24-Hour Schedule
                </a>
              </li>
              <li>
                <a href="#badge" className="hover:text-daybreak-dragon transition-colors">
                  Attendee Badge Generator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-daybreak-dragon transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Socials (4 cols) */}
          <div className="md:col-span-4">
            <div className="font-mono text-xs font-bold text-daybreak-pink uppercase tracking-wider mb-4">
              COMMUNITY & SOCIALS
            </div>
            <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed mb-4">
              Follow Daybreak and ShipIt Teens for behind-the-scenes build logs, mentor reveals, and updates.
            </p>

            <div className="flex items-center gap-2.5 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cream-50 border-2 border-ink-950 rounded-xl hover:bg-daybreak-pink hover:text-white transition-all shadow-xs hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cream-50 border-2 border-ink-950 rounded-xl hover:bg-ink-950 hover:text-white transition-all shadow-xs hover:-translate-y-0.5"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Ares006-007/daybreak-bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-cream-50 border-2 border-ink-950 rounded-xl hover:bg-daybreak-sunny hover:text-ink-950 transition-all shadow-xs hover:-translate-y-0.5"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@shipitteens.org"
                className="p-2.5 bg-cream-50 border-2 border-ink-950 rounded-xl hover:bg-daybreak-orange hover:text-ink-950 transition-all shadow-xs hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="text-xs font-mono text-ink-muted">
              Contact: <strong>hello@shipitteens.org</strong>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div>
            © {new Date().getFullYear()} DAYBREAK. Organised with <Heart className="w-3.5 h-3.5 inline text-daybreak-dragon fill-daybreak-dragon" /> by ShipIt Teens. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">Code of Conduct</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 font-bold text-ink-950 hover:text-daybreak-dragon cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
