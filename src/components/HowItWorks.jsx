import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, Target, Route, Trophy } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const steps = [
  {
    num: '01',
    icon: ScanSearch,
    title: 'Understand You',
    desc: 'Analyze learning behavior, performance and preferences to build your learner profile.',
  },
  {
    num: '02',
    icon: Target,
    title: 'Find What Matters',
    desc: 'Identify knowledge gaps and prioritize what needs attention first.',
  },
  {
    num: '03',
    icon: Route,
    title: 'Personalize Your Path',
    desc: 'Create a learning path tailored to your goals, pace, and strengths.',
  },
  {
    num: '04',
    icon: Trophy,
    title: 'Help You Master',
    desc: 'Practice, revise and track progress until concepts are truly understood.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: i * 0.06,
      ease: 'easeOut',
    },
  }),
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7]/85 backdrop-blur-[1px] border-y border-border/40" id="how-it-works">
      <div className="container-main">
        <SectionHeading
          eyebrow="How NeuroLearn Works"
          heading={
            <>
              A learning system that adapts to you,
              <br className="hidden sm:block" />
              <span className="text-warm-gray font-normal"> not the other way around.</span>
            </>
          }
          description="Four deliberate steps to transform how you absorb, practice, and master complex subjects."
        />

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-border/60 z-0">
            <motion.div
              className="h-full bg-terracotta"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep / 3) * 100}%` }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </div>

          {steps.map((step, i) => {
            const isActive = activeStep === i;

            return (
              <motion.div
                key={step.num}
                className="relative"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={i}
                onMouseEnter={() => setActiveStep(i)}
                onFocus={() => setActiveStep(i)}
              >
                <motion.div
                  whileHover={{ scale: 1.06, y: -8 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 16 }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  className={`bg-white rounded-2xl border p-6 h-full transition-all duration-200 cursor-pointer z-10 hover:z-30 relative flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
                    isActive
                      ? 'border-terracotta/40 shadow-card-hover bg-white'
                      : 'border-border/60 shadow-soft hover:shadow-card-hover hover:border-terracotta/30'
                  }`}
                >
                  <div>
                    {/* Step number + icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center relative z-10 transition-colors duration-200 ${
                          isActive
                            ? 'bg-terracotta text-white'
                            : 'bg-peach/40 text-warm-gray'
                        }`}
                      >
                        <step.icon size={18} className={isActive ? 'text-white' : 'text-warm-gray'} />
                      </div>
                      <span
                        className={`text-caption font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border transition-colors duration-200 ${
                          isActive
                            ? 'text-terracotta bg-peach/40 border-terracotta/20'
                            : 'text-warm-gray bg-ivory border-border/40'
                        }`}
                      >
                        {step.num}
                      </span>
                    </div>

                    <h3 className={`text-body-lg font-bold mb-2 transition-colors duration-200 ${
                      isActive ? 'text-ink' : 'text-ink/80'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-body-sm text-warm-gray leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>

                {/* Vertical connector (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2">
                    <div className={`w-px h-6 transition-colors duration-200 ${i < activeStep ? 'bg-terracotta' : 'bg-border'}`} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
