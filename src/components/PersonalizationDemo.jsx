import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, GraduationCap, BookOpen, Atom } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const levels = [
  {
    id: 'beginner',
    label: 'Beginner',
    icon: BookOpen,
    topic: 'Derivatives',
    tagline: 'Simple explanation',
    explanation:
      'Imagine you\'re driving a car and watching the speedometer. The derivative is like your speedometer — it tells you how fast something is changing at any given moment. If you plot your car\'s position over time on a graph, the derivative at any point is the steepness of the line at that spot. A steeper line means you\'re going faster. A flat line means you\'re stopped.',
    keyIdea: 'A derivative measures how fast something changes — like a speedometer for math.',
    visualLabel: 'Speed of change at a point',
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    icon: GraduationCap,
    topic: 'Derivatives',
    tagline: 'Mathematical concept',
    explanation:
      'The derivative of a function f(x) measures its instantaneous rate of change at a point. For f(x) = x², the derivative f\'(x) = 2x tells us the slope of the tangent line at any point. At x = 3, the slope is 6, meaning the function is increasing at a rate of 6 units per unit change in x. The power rule states: if f(x) = xⁿ, then f\'(x) = nxⁿ⁻¹.',
    keyIdea: 'The derivative gives the slope of the tangent line — the instantaneous rate of change of a function.',
    visualLabel: 'f\'(x) = lim[h→0] (f(x+h) − f(x)) / h',
  },
  {
    id: 'advanced',
    label: 'Advanced',
    icon: Atom,
    topic: 'Derivatives',
    tagline: 'Formal definition',
    explanation:
      'The derivative of f at a is defined as the limit f\'(a) = lim[h→0] (f(a+h) − f(a)) / h, provided this limit exists. This is equivalent to the Fréchet derivative in ℝ¹. A function is differentiable at a if and only if it is locally approximable by a linear map — i.e., f(a+h) = f(a) + f\'(a)h + o(h). Differentiability implies continuity, but not vice versa (e.g., f(x) = |x| at x = 0).',
    keyIdea: 'Differentiability requires the existence of a linear approximation — a stronger condition than continuity.',
    visualLabel: 'f\'(a) = lim[h→0] Δf/Δx ∈ L(ℝ,ℝ)',
  },
];

export default function PersonalizationDemo() {
  const [activeLevel, setActiveLevel] = useState('beginner');
  const current = levels.find((l) => l.id === activeLevel);

  return (
    <section className="py-20 md:py-28 border-b border-border/40" id="personalization">
      <div className="container-main">
        <SectionHeading
          eyebrow="Personalization in action"
          heading={
            <>
              The same topic,
              <br />
              explained <span className="font-editorial italic font-normal text-terracotta inline-block whitespace-nowrap">for you.</span>
            </>
          }
          description="NeuroLearn adapts explanations to the learner's level so concepts are easier to understand and remember."
        />

        <div className="max-w-3xl mx-auto">
          {/* Level Selector */}
          <div className="flex justify-center mb-8 w-full">
            <div className="inline-flex bg-white rounded-xl border border-border/60 p-1 sm:p-1.5 shadow-soft max-w-full">
              {levels.map((level) => (
                <motion.button
                  key={level.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveLevel(level.id)}
                  className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-caption sm:text-body-sm font-medium transition-all duration-200 cursor-pointer min-h-[44px] ${
                    activeLevel === level.id
                      ? 'text-white'
                      : 'text-warm-gray hover:text-ink'
                  }`}
                  aria-pressed={activeLevel === level.id}
                  aria-label={`${level.label} level explanation`}
                >
                  {activeLevel === level.id && (
                    <motion.div
                      className="absolute inset-0 bg-terracotta rounded-lg"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <level.icon size={14} className="flex-shrink-0" />
                    {level.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Explanation Panel with scale zoom */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: 'spring', stiffness: 500, damping: 16 }}
            className="bg-white rounded-2xl border border-border/60 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 md:px-6 py-4 border-b border-border/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-terracotta/10 rounded-lg flex items-center justify-center">
                  <Sparkles size={16} className="text-terracotta" />
                </div>
                <div>
                  <div className="text-body-sm font-semibold text-ink">AI Explanation</div>
                  <div className="text-caption text-warm-gray">Topic: {current.topic}</div>
                </div>
              </div>
              <span className="text-caption text-terracotta bg-terracotta/[0.08] px-2.5 py-1 rounded-lg font-medium capitalize">
                {current.label}
              </span>
            </div>

            {/* Content */}
            <div className="px-5 md:px-6 py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="text-[11px] uppercase tracking-wider text-warm-gray mb-3">
                    {current.tagline}
                  </div>
                  <p className="text-body text-ink leading-relaxed mb-5">
                    {current.explanation}
                  </p>

                  {/* Key Idea Card */}
                  <div className="bg-peach/30 rounded-xl p-4 border border-peach/50">
                    <div className="text-[11px] uppercase tracking-wider text-terracotta font-semibold mb-2">
                      Key Takeaway
                    </div>
                    <p className="text-body-sm text-ink font-medium">
                      {current.keyIdea}
                    </p>
                  </div>

                  {/* Visual formula/label */}
                  <div className="mt-4 flex items-center gap-2 px-3.5 py-2.5 bg-[#FDFBF7] rounded-lg border border-border/30 w-fit">
                    <div className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                    <span className="text-caption text-warm-gray font-mono">
                      {current.visualLabel}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Context label */}
          <div className="flex justify-center mt-4">
            <span className="text-caption text-warm-gray">
              Try switching levels to see how NeuroLearn adapts explanations.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
