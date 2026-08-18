import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function FinalCTA() {
  return (
    <section className="bg-ink py-20 md:py-28 relative">
      <div className="container-main text-center relative z-10">
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="text-display-sm md:text-display-md font-semibold text-white tracking-tight mb-5">
            Your learning path
            <br />
            starts with <span className="font-editorial italic font-normal text-terracotta inline-block hover:scale-105 transition-transform">you</span>.
          </h2>
          <p className="text-body-lg text-white/55 mb-10 max-w-md mx-auto">
            Explore NeuroLearn and experience personalized learning built around your goals and progress.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="dark" size="lg">
              Start learning <ArrowRight size={16} />
            </Button>
            <Button variant="dark-outline" size="lg" href="#how-it-works">
              See how it works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
