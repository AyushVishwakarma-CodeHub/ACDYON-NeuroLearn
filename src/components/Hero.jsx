import { motion } from 'framer-motion';
import { Brain, Route, TrendingUp, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import HeroDashboard from './HeroDashboard';

const benefits = [
  {
    icon: Brain,
    title: 'Understand you',
    desc: 'AI analyzes learning strengths and gaps.',
  },
  {
    icon: Route,
    title: 'Personalized path',
    desc: 'Lessons adapt to your learning needs.',
  },
  {
    icon: TrendingUp,
    title: 'Track & improve',
    desc: 'Insights help you improve over time.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 overflow-hidden" id="hero">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column — Copy (45% ratio) */}
          <div className="lg:col-span-5 max-w-xl">
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peach/40 border border-terracotta/20 text-caption font-medium uppercase tracking-widest text-ink mb-6 shadow-soft"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="w-2 h-2 rounded-full bg-terracotta" />
              <span className="text-[11px] font-semibold">AI-Powered Personalized Learning</span>
            </motion.div>

            <motion.h1
              className="text-display-sm md:text-display font-bold text-ink tracking-tight mb-6 leading-[1.08]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Learning,{' '}
              <br />
              made <span className="font-editorial italic font-normal text-terracotta inline-block whitespace-nowrap">personal.</span>
            </motion.h1>

            <motion.p
              className="text-body-lg text-warm-gray mb-8 max-w-md leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              NeuroLearn AI understands how you learn, identifies what needs attention, and helps you focus on what matters next.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Button size="lg" className="shadow-soft hover:shadow-card">
                Start learning <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="lg" href="#how-it-works">
                See how it works
              </Button>
            </motion.div>

            {/* Benefits */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-2.5 p-2 rounded-xl transition-colors hover:bg-white/40 cursor-default"
                >
                  <div className="w-8 h-8 bg-peach/60 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <b.icon size={15} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="text-body-sm font-semibold text-ink leading-tight mb-0.5">{b.title}</div>
                    <div className="text-[12px] text-warm-gray leading-snug">{b.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Dominant Product Visual (55% ratio, 10-15% enlarged) */}
          <div className="lg:col-span-7 transform lg:scale-[1.05] transition-transform duration-300">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
