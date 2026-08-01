import { FC } from 'react';

export const SkillsSection: FC = () => {
  const accaPapers = [
    { code: 'FR', name: 'Financial Reporting', status: 'Passed ✓' },
    { code: 'AA', name: 'Audit & Assurance', status: 'Passed ✓' },
    { code: 'PM', name: 'Performance Management', status: 'Passed ✓' },
    { code: 'FM', name: 'Financial Management', status: 'Passed ✓' },
    { code: 'TX', name: 'Taxation', status: 'Passed ✓' },
    { code: 'LW', name: 'Corporate & Business Law', status: 'Passed ✓' },
    { code: 'BT/MA/FA', name: 'Applied Knowledge Papers', status: 'Exempt / Passed ✓' },
  ];

  const skillCategories = [
    {
      title: 'Accounting & Auditing',
      skills: ['IFRS & VAS Standards', 'Internal Controls & Risk Assessment', 'Audit Documentation & Testing', 'Financial Statement Analysis'],
    },
    {
      title: 'Research & Analytical',
      skills: ['ESG Performance Evaluation', 'Empirical Data Analytics', 'Econometric Modeling (Stata/R)', 'Literature Review & Synthesis'],
    },
    {
      title: 'Leadership & Media',
      skills: ['Club Operations (CFAA Head of Media)', 'Event Branding & Promotion', 'Public Relations & Communication', 'Cross-functional Team Lead'],
    },
    {
      title: 'Tools & Software',
      skills: ['ACCA Exam Practice Platform', 'Microsoft Excel (Advanced & VLOOKUP/Pivot)', 'Stata / SPSS Data Tools', 'Canva / Adobe Photoshop'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 md:px-20 bg-[#0a0a0a] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Section Header */}
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mb-2 font-mono">03 // ACCA TRACK &amp; CAPABILITIES</span>
          <h2 className="font-instrument-serif text-5xl sm:text-6xl md:text-7xl text-white font-normal">
            ACCA Progress &amp; Expertise
          </h2>
        </div>

        {/* ACCA 7/9 Papers Highlight */}
        <div className="liquid-glass rounded-2xl p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">ACCA Applied Skills Progress</h3>
              <p className="text-xs font-mono text-green-400 mt-1">7 out of 9 Applied Skill Papers Completed</p>
            </div>
            <span className="px-4 py-1.5 rounded-full text-xs font-mono bg-green-400/20 text-green-400 border border-green-500/30 self-start sm:self-auto">
              Track Status: 77.8% Completed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
            {accaPapers.map((paper) => (
              <div key={paper.code} className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/50">{paper.code}</span>
                  <span className="text-xs font-semibold text-green-400">{paper.status}</span>
                </div>
                <div className="text-sm font-medium text-white">{paper.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="liquid-glass rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-3">{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-white/75 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
