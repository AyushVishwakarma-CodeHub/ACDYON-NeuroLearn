import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'AI Quiz', href: '#features' },
    { label: 'For Students', href: '#personalization' },
    { label: 'Pricing', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Resources: [
    { label: 'Guides', href: '#' },
    { label: 'Help center', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Updates', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-ink border-t border-white/[0.06]" role="contentinfo">
      <div className="container-main py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 md:gap-6">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-terracotta rounded-lg flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18V6l12 12V6" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="6" r="2" fill="white"/>
                  <circle cx="18" cy="18" r="2" fill="white"/>
                  <circle cx="6" cy="18" r="2" fill="white"/>
                  <circle cx="18" cy="6" r="2" fill="white"/>
                </svg>
              </div>
              <span className="text-body-sm font-semibold text-white">
                NeuroLearn <span className="text-white/40 font-normal">AI</span>
              </span>
            </div>
            <p className="text-body-sm text-white/40 mb-6 max-w-[240px] leading-relaxed">
              AI-powered learning that adapts to how you learn.
            </p>

            {/* Newsletter */}
            <div className="mb-2">
              <div className="text-caption font-semibold text-white/70 mb-3">Stay updated</div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 bg-white/[0.06] border border-white/[0.1] rounded-lg px-3.5 py-2 text-body-sm text-white placeholder:text-white/30 focus:outline-none focus:border-terracotta/50 transition-colors"
                  aria-label="Email for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="bg-terracotta hover:bg-[#d14e34] text-white rounded-lg px-3 py-2 transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={16} />
                </button>
              </form>
              {subscribed && (
                <p className="text-caption text-terracotta mt-2">Thanks for subscribing!</p>
              )}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <div className="text-caption font-semibold text-white/70 mb-4 uppercase tracking-wider">
                {category}
              </div>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-sm text-white/40 hover:text-white/70 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-caption text-white/25">
            © {new Date().getFullYear()} NeuroLearn AI. Built for ACDYON Technologies assignment.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-caption text-white/25 hover:text-white/50 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-caption text-white/25 hover:text-white/50 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
