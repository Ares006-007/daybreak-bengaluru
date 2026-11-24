import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, User, Users, Terminal, ArrowRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'solo' | 'team'>('solo');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '16',
    city: 'Bengaluru',
    track: 'open-projects',
    teamName: '',
    github: '',
    idea: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playChime();

    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#2DDFFF', '#F5F474', '#E33CC7', '#FFAA47', '#F54D28'],
      });
    } catch {
      // Ignore
    }

    setSubmitted(true);
  };

  const handleClose = () => {
    sound.playClick();
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-cream-50 border-4 border-ink-950 rounded-3xl shadow-brutal-xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-daybreak-orange border-b-3 border-ink-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-daybreak-dragon border border-ink-950"></span>
            <span className="font-mono text-xs font-black text-ink-950 uppercase tracking-wider">
              DAYBREAK 2026 REGISTRATION
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1 rounded-lg border-2 border-ink-950 bg-cream-50 hover:bg-cream-200 text-ink-950 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            /* Success State */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-daybreak-sunny border-3 border-ink-950 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-brutal">
                <CheckCircle2 className="w-10 h-10 text-daybreak-dragon" />
              </div>

              <h3 className="font-title font-black text-3xl text-ink-950 tracking-tight">
                YOU'RE REGISTERED!
              </h3>
              <p className="mt-2 text-sm text-ink-700 font-sans max-w-sm mx-auto">
                We've received your application for <strong>DAYBREAK: The New Year Edition</strong>. Check your inbox for confirmation and Discord invite!
              </p>

              <div className="mt-6 p-4 bg-cream-200 border-2 border-ink-950 rounded-2xl text-left text-xs font-mono">
                <div className="font-bold text-ink-950 mb-1">NEXT STEPS:</div>
                <div className="text-ink-800">1. Join the ShipIt Teens Discord server</div>
                <div className="text-ink-800">2. Customize your attendee badge below</div>
                <div className="text-ink-800">3. Form or find your squad in #daybreak-matchmaking</div>
              </div>

              <button
                onClick={handleClose}
                className="mt-6 px-6 py-3 bg-ink-950 text-white font-display font-bold text-sm rounded-xl border-2 border-ink-950 shadow-brutal cursor-pointer"
              >
                Back to Website
              </button>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-title font-black text-2xl text-ink-950">
                  Join the 24-Hour Build
                </h3>
                <p className="text-xs text-ink-700 font-sans mt-0.5">
                  December 31 – January 1 • Bengaluru, India • Teen makers aged 13–19
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex p-1 bg-cream-200 border-2 border-ink-950 rounded-xl">
                <button
                  type="button"
                  onClick={() => setMode('solo')}
                  className={`flex-1 py-1.5 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    mode === 'solo' ? 'bg-ink-950 text-white shadow-xs' : 'text-ink-900'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Solo Hacker</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('team')}
                  className={`flex-1 py-1.5 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    mode === 'team' ? 'bg-ink-950 text-white shadow-xs' : 'text-ink-900'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Squad / Team (1–4)</span>
                </button>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ada Lovelace"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-cream-100 border-2 border-ink-950 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-daybreak-dragon"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ada@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 bg-cream-100 border-2 border-ink-950 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-daybreak-dragon"
                  />
                </div>
              </div>

              {/* Age & Track */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                    Age (Must be 13–19) *
                  </label>
                  <select
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3.5 py-2 bg-cream-100 border-2 border-ink-950 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-daybreak-dragon"
                  >
                    {[13, 14, 15, 16, 17, 18, 19].map((a) => (
                      <option key={a} value={a}>
                        {a} years old
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                    Interested Track *
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-3.5 py-2 bg-cream-100 border-2 border-ink-950 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-daybreak-dragon"
                  >
                    <option value="open-projects">Open Projects (Software/Apps)</option>
                    <option value="hardware-hacks">Hardware Hacks (Circuits/Robotics)</option>
                    <option value="demo-day">Demo Day & Storytelling</option>
                  </select>
                </div>
              </div>

              {/* Team Name if team mode */}
              {mode === 'team' && (
                <div>
                  <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                    Team Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dawn Raiders"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full px-3.5 py-2 bg-cream-100 border-2 border-ink-950 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-daybreak-dragon"
                  />
                </div>
              )}

              {/* GitHub / Portfolio */}
              <div>
                <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                  GitHub / Portfolio / Social Link (Optional)
                </label>
                <input
                  type="text"
                  placeholder="https://github.com/username"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full px-3.5 py-2 bg-cream-100 border-2 border-ink-950 rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-daybreak-dragon"
                />
              </div>

              {/* Idea Prompt */}
              <div>
                <label className="block text-xs font-mono font-bold text-ink-muted uppercase mb-1">
                  What idea excites you to build before sunrise?
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us a quick sentence about what you'd love to make..."
                  value={formData.idea}
                  onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                  className="w-full px-3.5 py-2 bg-cream-100 border-2 border-ink-950 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-daybreak-dragon resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-daybreak-orange hover:bg-daybreak-dragon text-ink-950 hover:text-white font-title font-black text-base rounded-xl border-2 border-ink-950 shadow-brutal transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>SUBMIT APPLICATION</span>
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center text-[11px] font-mono text-ink-muted">
                100% Free • Acceptance notification sent within 48 hours
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
