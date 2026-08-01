import { FC, useState } from 'react';

export const ContactSection: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = "khanhlinh.ftu@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 md:px-20 bg-[#060606] text-white border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mb-2 font-mono">04 // GET IN TOUCH</span>
            <h2 className="font-instrument-serif text-5xl sm:text-6xl md:text-7xl text-white font-normal">
              Let&apos;s Connect &amp; Collaborate.
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-md font-light">
            Open to audit career opportunities, academic research discussions, and professional networking.
          </p>
        </div>

        {/* Grid: Form & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="liquid-glass rounded-2xl p-8 space-y-6">
            <h3 className="text-xl font-semibold text-white">Send a Message to KhanhLinh</h3>
            
            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/40 rounded-xl p-6 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-green-400/20 text-green-400 mx-auto flex items-center justify-center font-bold text-lg">✓</div>
                <h4 className="text-lg font-semibold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-white/70">Thank you for reaching out. Nguyen KhanhLinh will respond to your email promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-white/60 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruiter / Collaborator" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-white/60 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@organization.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-white/60 mb-1">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your opportunity, question, or research collaboration..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="liquid-glass w-full py-3.5 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Email & Social Links */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="liquid-glass rounded-2xl p-8 space-y-4">
              <span className="text-xs font-mono text-white/50 uppercase block">Direct Contact Email</span>
              <div className="flex items-center justify-between gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="font-mono text-xs sm:text-sm text-white truncate">{email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/10 text-white hover:bg-white/20 transition-colors flex-shrink-0"
                >
                  {copied ? 'Copied! ✓' : 'Copy Email'}
                </button>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Future Auditor candidate open to Big 4 internship programs, financial audit opportunities, and ESG research initiatives.
              </p>
            </div>

            {/* Social Channels */}
            <div className="liquid-glass rounded-2xl p-8 space-y-4">
              <span className="text-xs font-mono text-white/50 uppercase block">Professional Networks</span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                  { name: 'ACCA Portal', href: 'https://accaglobal.com' },
                  { name: 'Facebook', href: 'https://facebook.com' },
                  { name: 'ResearchGate', href: 'https://researchgate.net' },
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-between text-sm text-white/80 hover:text-white"
                  >
                    <span>{social.name}</span>
                    <span className="text-xs font-mono text-white/40">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 256 256" fill="white">
              <path d="M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z" />
            </svg>
            <span className="font-instrument-serif text-lg text-white">Nguyen Khanh Linh</span>
          </div>
          <div>© 2026 Nguyen Khanh Linh. All rights reserved. K62 Accounting and Auditing (ACCA orientation).</div>
        </div>

      </div>
    </section>
  );
};
