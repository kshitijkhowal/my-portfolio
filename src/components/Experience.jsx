import React, { useState } from 'react';
import { Calendar, ChevronDown, Globe2, Smartphone } from 'lucide-react';
import { getExperiences } from '../lib/portfolioData';
import ProductPhone from './ProductPhone';

export default function Experience() {
  const experiences = getExperiences();
  const [expandedExperiences, setExpandedExperiences] = useState({});

  const toggleHighlights = (id) => {
    setExpandedExperiences((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-darkBg">
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] rounded-full bg-androidGreen/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] rounded-full bg-accentOrange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-12">
          <h2 className="text-xs font-mono tracking-widest text-accentOrange uppercase mb-2">03 / Journey</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white">
            WORK EXPERIENCE
          </h3>
          <div className="w-12 h-[2px] bg-accentOrange mt-3" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedExperiences[exp.id];
            const visibleHighlights = isExpanded ? exp.highlights : exp.highlights.slice(0, 3);
            const linkedProducts = exp.products.flatMap((product) =>
              Object.entries(product.storeLinks || {})
                .filter(([, href]) => Boolean(href))
                .map(([platform, href]) => ({ product, platform, href })),
            );
            const internalProducts = exp.products.filter(
              (product) => !Object.values(product.storeLinks || {}).some(Boolean),
            );

            return (
              <article
                key={exp.id}
                className="glass-card glass-card-hover relative overflow-hidden rounded-3xl border border-white/[0.07]"
              >
                <div
                  className={`absolute inset-y-0 left-0 w-1 ${
                    idx === 0 ? 'bg-accentOrange' : 'bg-androidGreen'
                  }`}
                />
                <div className="absolute right-0 top-0 h-40 w-40 bg-gradient-to-bl from-accentOrange/10 to-transparent pointer-events-none" />

                <div className="grid lg:grid-cols-[0.9fr_1.35fr]">
                  <div className="relative flex min-h-[320px] flex-col border-b border-white/[0.07] bg-white/[0.025] p-6 md:p-8 lg:border-b-0 lg:border-r">
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-androidGreen">
                          Products shipped
                        </p>
                        <p className="mt-1 text-sm text-white/40">
                          {linkedProducts.length
                            ? 'Tap a device to view the app'
                            : 'Private and internal products'}
                        </p>
                      </div>
                      <Smartphone className="h-5 w-5 text-white/20" />
                    </div>

                    {linkedProducts.length > 0 && (
                      <div className="flex flex-1 flex-wrap items-center justify-center gap-7 md:gap-9">
                        {linkedProducts.map(({ product, platform, href }) => (
                          <ProductPhone
                            key={`${product.name}-${platform}`}
                            product={product}
                            platform={platform}
                            href={href}
                            logo={exp.icon}
                            brandColor={exp.brandColor}
                          />
                        ))}
                      </div>
                    )}

                    {internalProducts.length > 0 && (
                      <div className={`${linkedProducts.length ? 'mt-7' : 'my-auto'} grid gap-2`}>
                        {internalProducts.map((product) => (
                          <div
                            key={product.name}
                            className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/10 px-4 py-3"
                          >
                            <Globe2 className="h-4 w-4 flex-shrink-0 text-accentOrange" />
                            <div>
                              <p className="text-sm font-semibold text-white/80">{product.name}</p>
                              <p className="text-[10px] font-mono uppercase tracking-wider text-white/35">
                                {product.platforms.join(' / ')} · Internal
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative p-6 md:p-8 lg:p-10">
                    <div className="mb-8 flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <h5 className="text-2xl font-outfit font-extrabold text-white mb-1">
                        {exp.role}
                        <span className="text-sm font-normal text-white/40 ml-2">({exp.type})</span>
                      </h5>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-sans font-medium text-accentOrange hover:underline cursor-none"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-lg font-sans font-medium text-accentOrange">{exp.company}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-xl text-xs font-mono text-white/80">
                      <Calendar className="w-3.5 h-3.5 text-androidGreen" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                    <div>
                    <h6 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
                        Key highlights
                    </h6>
                      <ul className="space-y-3">
                        {visibleHighlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-androidGreen" />
                            <span className="text-sm leading-relaxed text-white/65 md:text-[15px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                      {exp.highlights.length > 3 && (
                        <button
                          type="button"
                          onClick={() => toggleHighlights(exp.id)}
                          aria-expanded={Boolean(isExpanded)}
                          className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accentOrange transition-colors hover:text-white cursor-none"
                        >
                          {isExpanded ? 'Show less' : `Read more (${exp.highlights.length - 3})`}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
