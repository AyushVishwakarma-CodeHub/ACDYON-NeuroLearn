import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BrainCircuit,
  Layers,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.05, ease: 'easeOut' },
  }),
};

export default function ProductShowcase() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-white border-y border-border/40" id="features">
      <div className="container-main">
        <SectionHeading
          eyebrow="The NeuroLearn AI Experience"
          heading={
            <>
              Everything you need in
              <br className="hidden sm:block" />
              one intelligent platform.
            </>
          }
          description="From AI-powered quizzes to smart flashcards and personalized analytics — NeuroLearn brings it all together."
        />

        {/* Product UI Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* AI Quiz Panel — Large */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-7 bg-white rounded-2xl border border-border/60 p-5 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-terracotta/10 rounded-lg flex items-center justify-center">
                    <BrainCircuit size={16} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="text-body-sm font-semibold text-ink">AI Quiz</div>
                    <div className="text-caption text-warm-gray">Data Structures — Question 4 of 10</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-caption font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                    selectedOption
                      ? selectedOption === 'B'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-peach/40 text-terracotta border-terracotta/20'
                      : 'text-warm-gray bg-[#FDFBF7] border-border/40'
                  }`}>
                    {selectedOption
                      ? selectedOption === 'B'
                        ? '1/1 Answered • Correct'
                        : '1/1 Answered • Incorrect'
                      : 'Select an Option'}
                  </span>
                  {selectedOption && (
                    <button
                      onClick={() => setSelectedOption(null)}
                      className="text-caption text-warm-gray hover:text-ink transition-colors px-2 py-1 rounded hover:bg-ink/[0.04] cursor-pointer"
                      title="Reset Quiz Option"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>

              <div className="bg-[#FDFBF7] rounded-xl p-4 mb-4 border border-border/30">
                <p className="text-body-sm text-ink font-medium mb-1">
                  What is the time complexity of searching for an element in a balanced binary search tree?
                </p>
                <p className="text-caption text-warm-gray">
                  {selectedOption ? 'Result recorded below.' : 'Click an option to test interactive feedback.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { label: 'A', text: 'O(n)' },
                  { label: 'B', text: 'O(log n)' },
                  { label: 'C', text: 'O(n log n)' },
                  { label: 'D', text: 'O(1)' },
                ].map((opt) => {
                  const isSelected = selectedOption === opt.label;
                  const isCorrect = opt.label === 'B';

                  return (
                    <button
                      key={opt.label}
                      onClick={() => setSelectedOption(opt.label)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-body-sm transition-all text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-terracotta ${
                        isSelected
                          ? isCorrect
                            ? 'bg-emerald-50/80 border-emerald-300 text-emerald-800 shadow-sm font-semibold'
                            : 'bg-red-50/70 border-red-300 text-red-700 shadow-sm'
                          : 'bg-white border-border/50 text-ink hover:border-border hover:bg-ink/[0.01]'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center text-caption font-semibold flex-shrink-0 transition-colors ${
                        isSelected
                          ? isCorrect
                            ? 'bg-emerald-200 text-emerald-800'
                            : 'bg-red-200 text-red-800'
                          : 'bg-ivory text-warm-gray'
                      }`}>
                        {opt.label}
                      </span>
                      <span>{opt.text}</span>
                      {isSelected && isCorrect && (
                        <CheckCircle2 size={16} className="text-emerald-600 ml-auto flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                {selectedOption && (
                  <motion.div
                    key={selectedOption}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 p-3.5 bg-peach/20 rounded-xl border border-terracotta/15 flex items-start gap-3"
                  >
                    <Lightbulb size={15} className="text-terracotta mt-0.5 flex-shrink-0" />
                    <div className="text-caption text-ink leading-relaxed">
                      <span className="font-semibold text-terracotta">
                        {selectedOption === 'B' ? 'Correct Answer! ' : 'Incorrect. '}
                      </span>
                      {selectedOption === 'B'
                        ? 'A balanced BST maintains O(log n) height, halving the search space at each comparison step.'
                        : 'In a balanced BST, tree height is strictly constrained to O(log n), so search complexity is O(log n).'}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column — Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Quiz Performance */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 16 }}
              className="bg-white rounded-2xl border border-border/60 p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={1}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 size={16} className="text-terracotta" />
                  <span className="text-body-sm font-semibold text-ink">Quiz Performance</span>
                </div>
                <span className="text-caption text-warm-gray">This session</span>
              </div>
              <div className="flex items-end gap-3 mb-3">
                <span className="text-display-sm font-bold text-ink leading-none">78%</span>
                <span className="text-body-sm text-warm-gray mb-1">accuracy</span>
              </div>
              <div className="h-2 bg-border/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-terracotta rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '78%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-warm-gray">7 correct</span>
                <span className="text-[10px] text-warm-gray">2 incorrect</span>
              </div>
            </motion.div>

            {/* Smart Flashcard with 3D Flip Animation */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 16 }}
              className="bg-white rounded-2xl border border-border/60 p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={2}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-terracotta" />
                  <span className="text-body-sm font-semibold text-ink">Smart Flashcard</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="flex items-center gap-1.5 text-caption font-medium text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-lg hover:bg-terracotta/20 transition-colors cursor-pointer"
                  aria-label="Flip flashcard"
                >
                  <RotateCcw size={13} className={`transition-transform duration-300 ${isFlipped ? 'rotate-180' : ''}`} />
                  {isFlipped ? 'Show Question' : 'Flip Answer'}
                </motion.button>
              </div>

              {/* 3D Animated Card Container */}
              <div className="perspective-1000">
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative min-h-[90px]"
                >
                  {/* Front Side */}
                  <div
                    className={`bg-[#FDFBF7] rounded-xl p-4 border border-border/30 min-h-[90px] flex items-center ${
                      isFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'
                    }`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-terracotta font-medium mb-1.5">Question</div>
                      <p className="text-body-sm text-ink font-medium">What is the difference between a stack and a queue?</p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 bg-terracotta/5 rounded-xl p-4 border border-terracotta/20 flex items-center ${
                      !isFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'
                    }`}
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                  >
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-emerald-600 font-medium mb-1.5">Answer</div>
                      <p className="text-body-sm text-ink font-medium leading-relaxed">
                        A stack follows <span className="font-semibold">LIFO</span> (Last In First Out), while a queue follows <span className="font-semibold">FIFO</span> (First In First Out).
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex gap-2 mt-3">
                <span className="text-[10px] px-2 py-0.5 bg-peach/50 text-terracotta rounded-md font-medium">Data Structures</span>
                <span className="text-[10px] px-2 py-0.5 bg-ivory text-warm-gray rounded-md border border-border/40">Review: 2 days</span>
              </div>
            </motion.div>

            {/* Weak Topics + Recommendation */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: 'spring', stiffness: 500, damping: 16 }}
              className="bg-white rounded-2xl border border-border/60 p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={3}
            >
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={15} className="text-terracotta" />
                <span className="text-body-sm font-semibold text-ink">Needs Attention</span>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                {[
                  { topic: 'Linear Algebra', score: 42 },
                  { topic: 'Calculus', score: 51 },
                  { topic: 'Probability', score: 58 },
                ].map((t) => (
                  <div key={t.topic} className="flex items-center justify-between">
                    <span className="text-body-sm text-ink">{t.topic}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-border/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-terracotta/70 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${t.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <span className="text-caption text-warm-gray w-8 text-right">{t.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-peach/30 rounded-xl p-3 flex items-start gap-2.5">
                <Lightbulb size={14} className="text-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-ink">Recommendation</div>
                  <div className="text-[11px] text-warm-gray">Practice 10 questions on Linear Algebra to strengthen your foundations.</div>
                </div>
                <ChevronRight size={14} className="text-warm-gray mt-0.5 flex-shrink-0" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

