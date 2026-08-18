import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'center',
  dark = false,
}) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      className={`max-w-2xl ${alignClasses} mb-16`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {eyebrow && (
        <span className={`block text-eyebrow uppercase tracking-widest mb-4 ${
          dark ? 'text-white/50' : 'text-warm-gray'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-display-sm md:text-display-md font-semibold tracking-tight mb-5 ${
        dark ? 'text-white' : 'text-ink'
      }`}>
        {heading}
      </h2>
      {description && (
        <p className={`text-body-lg ${
          dark ? 'text-white/60' : 'text-warm-gray'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
