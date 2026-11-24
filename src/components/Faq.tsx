import React, { useState } from 'react';
import { FAQS } from '../data/eventData';
import { HelpCircle, ChevronDown, MessageSquare, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'general', label: 'General & Eligibility' },
    { id: 'teams', label: 'Teams & Matching' },
    { id: 'logistics', label: 'Venue & Safety' },
    { id: 'building', label: 'Building & Rules' },
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === selectedCategory);

  const toggleAccordion = (idx: number) => {
    sound.playClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream-50 border-b-4 border-ink-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-daybreak-sunny text-ink-950 border-2 border-ink-950 rounded-lg text-xs font-mono font-black shadow-xs mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-daybreak-dragon" />
            <span>GOT QUESTIONS?</span>
          </div>

          <h2 className="font-title font-black text-4xl sm:text-5xl text-ink-950 tracking-tight leading-tight">
            Frequently Asked<br />
            <span className="text-daybreak-orange">Questions.</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-ink-700 font-sans">
            Everything you need to know about Daybreak before packing your laptop on New Year's Eve.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat.id);
                setOpenIdx(0);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold border-2 border-ink-950 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-ink-950 text-white shadow-brutal -translate-y-0.5'
                  : 'bg-cream-100 text-ink-950 hover:bg-cream-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-cream-100 border-3 border-ink-950 rounded-2xl shadow-brutal transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-cream-200/50 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-ink-950 tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl border-2 border-ink-950 flex items-center justify-center bg-cream-50 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-daybreak-sunny' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-ink-950" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-ink-800 font-sans leading-relaxed border-t border-ink-950/15">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Discord / Support Box */}
        <div className="mt-12 p-6 bg-cream-200/70 border-2 border-dashed border-ink-950 rounded-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="font-display font-bold text-ink-950 text-base">
              Have a question not listed here?
            </div>
            <div className="text-xs font-sans text-ink-muted mt-0.5">
              Ask on the ShipIt Teens community Discord or send a quick note to the organizers.
            </div>
          </div>

          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-daybreak-pink text-white font-mono text-xs font-bold rounded-xl border-2 border-ink-950 shadow-brutal hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Join Discord Support</span>
          </a>
        </div>
      </div>
    </section>
  );
};
