import { FC } from 'react';

export const AboutSection: FC = () => {
  const stats = [
    { label: 'Cumulative GPA', value: '3.58 / 4.0' },
    { label: 'Active Clubs', value: '2 CLB' },
    { label: 'Joy & New Experiences', value: '99,99%' },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-12 md:px-20 bg-[#0a0a0a] text-white relative border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mb-2 font-mono">01 // ABOUT NGUYEN KHANHLINH</span>
            <h2 className="font-instrument-serif text-5xl sm:text-6xl md:text-7xl font-normal text-white">
              Shaping the Future of Audit &amp; Assurance.
            </h2>
          </div>
          <p className="text-white/70 text-base md:text-lg max-w-md font-light leading-relaxed">
            Oriented towards becoming a professional <span className="text-white font-medium underline underline-offset-4 decoration-green-400">Future Auditor</span> with strong analytical acumen, scientific rigor, and high ethical standards.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="liquid-glass rounded-2xl p-8 space-y-4 md:col-span-2">
            <h3 className="text-2xl font-semibold text-white">Future Auditor &amp; ACCA Candidate</h3>
            <p className="text-white/75 leading-relaxed text-sm md:text-base">
              Hi, I&apos;m Nguyen KhanhLinh, a student of K62 Accounting and Auditing with ACCA orientation. With a solid academic foundation (GPA 3.58/4.0) and 7/9 ACCA Applied Skill Papers cleared, I combine theoretical financial reporting mastery with practical leadership and research capabilities.
            </p>
            <div className="pt-4 flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/90">ACCA Track (7/9 Papers)</span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/90">Financial Audit &amp; Assurance</span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/90">ESG Research &amp; Analytics</span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/90">Club Leadership (CFAA)</span>
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs text-white/50 font-mono uppercase block mb-1">Career Orientation</span>
              <h4 className="text-xl font-semibold text-white">Big 4 Auditor &amp; ESG Assurance Specialist</h4>
            </div>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Dedicated to continuous learning, exploring the intersection of ESG performance, media attention, and corporate financial resilience.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:underline underline-offset-4"
            >
              <span>Connect with KhanhLinh</span>
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          {stats.map((stat) => (
            <div key={stat.label} className="liquid-glass rounded-xl p-8 text-center space-y-2 border border-white/10">
              <div className="font-instrument-serif text-4xl sm:text-5xl text-white font-bold tracking-tight">{stat.value}</div>
              <div className="text-xs text-white/60 uppercase tracking-widest font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
