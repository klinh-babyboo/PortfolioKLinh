import { FC } from 'react';

export const ProjectsSection: FC = () => {
  const achievements = [
    {
      title: 'ACCA — Chartered Certified Accountant Track',
      category: 'Professional Certification',
      subtitle: '7/9 Applied Skill Papers Passed',
      description: 'Advanced track covering Financial Reporting (FR), Audit & Assurance (AA), Performance Management (PM), Taxation (TX), Financial Management (FM), and Business Law (LW).',
      image: '/images/acca-cert.jpg',
      fallbackImage: 'https://lh3.googleusercontent.com/d/1CZBE3NSos0jYlWul89-9SxuCV35gqQ2X',
      tags: ['ACCA Candidate', 'Audit & Assurance', 'IFRS', 'Financial Reporting'],
      link: 'https://drive.google.com/file/d/1CZBE3NSos0jYlWul89-9SxuCV35gqQ2X/view?usp=sharing',
    },
    {
      title: 'Champion of “Hanh Trang Ke Kiem 2026” Competition',
      category: 'National Competition Champion',
      subtitle: 'First Place Winner 🏆',
      description: 'Achieved 1st place in the prestigious nationwide Accounting & Auditing competition, solving complex financial audit scenarios and strategic business cases.',
      image: '/images/champion-2026.jpg',
      fallbackImage: 'https://lh3.googleusercontent.com/d/1x2KexX4PND6ktaqYGIjTfIAApesiBv4c',
      tags: ['1st Place Champion', 'Auditing Case Study', 'Financial Analysis', 'Leadership'],
      link: 'https://drive.google.com/file/d/1x2KexX4PND6ktaqYGIjTfIAApesiBv4c/view?usp=sharing',
    },
    {
      title: 'Scientific Research — National Conference Publication',
      category: 'Academic Publication',
      subtitle: 'Relationship among ESG Performance, Media Attention and Firm Resilience: Evidence from Vietnamese Listed Firms',
      description: 'Empirical research paper published in National Scientific Conference proceedings analyzing how ESG metrics and media coverage impact financial resilience during economic shocks.',
      image: '/images/esg-research.jpg',
      fallbackImage: 'https://lh3.googleusercontent.com/d/1BNTTDH2gho3fDl9H7Scbua8BYLcGlWC_',
      tags: ['ESG Performance', 'Media Attention', 'Firm Resilience', 'National Conference'],
      link: 'https://drive.google.com/file/d/1BNTTDH2gho3fDl9H7Scbua8BYLcGlWC_/view?usp=sharing',
    },
    {
      title: 'Head of Media — Club of Future Accountants and Auditors (CFAA)',
      category: 'Leadership & Community',
      subtitle: 'Executive Media Director',
      description: 'Led media communications, branding strategies, event promotions, and creative direction for academic competitions and workshops organized by CFAA.',
      image: '/images/cfaa-head-media.jpg',
      fallbackImage: 'https://lh3.googleusercontent.com/d/1y8A07TF9SuDajfu_kEadBgCLPAggPp-D',
      tags: ['Head of Media', 'CFAA Club', 'Event Management', 'Media Strategy'],
      link: 'https://drive.google.com/file/d/1y8A07TF9SuDajfu_kEadBgCLPAggPp-D/view?usp=sharing',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 md:px-20 bg-[#060606] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mb-2 font-mono">02 // HIGHLIGHTS &amp; PUBLICATIONS</span>
            <h2 className="font-instrument-serif text-5xl sm:text-6xl md:text-7xl text-white font-normal">
              Featured Achievements
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-md font-light">
            Highlighting academic research, national competition milestones, ACCA qualification progress, and organizational leadership.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <div 
              key={item.title}
              className="liquid-glass rounded-2xl overflow-hidden group hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/40">
                <img 
                  src={item.image} 
                  onError={(e) => {
                    // Fallback to Google Drive CDN if local path fails
                    (e.target as HTMLImageElement).src = item.fallbackImage;
                  }}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100" 
                />
                <div className="absolute top-4 right-4 liquid-glass px-3 py-1 rounded-full text-xs font-mono text-white/80">
                  0{idx + 1}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-mono bg-black/70 backdrop-blur-md text-green-400 border border-green-500/30">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-white transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-white/70 italic">
                    {item.subtitle}
                  </p>
                  <p className="text-white/75 text-sm leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono text-white/70 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title}`}
                    className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
