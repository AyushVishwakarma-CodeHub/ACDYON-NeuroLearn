import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-terracotta text-white hover:bg-[#d14e34] shadow-soft hover:shadow-card',
  secondary: 'bg-transparent text-ink border border-border hover:border-ink/30',
  ghost: 'bg-transparent text-warm-gray hover:text-ink',
  dark: 'bg-white text-ink hover:bg-ivory',
  'dark-outline': 'bg-transparent text-white/80 border border-white/20 hover:border-white/40 hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-body-sm',
  md: 'px-6 py-3 text-body-sm font-medium',
  lg: 'px-8 py-3.5 text-body font-medium',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 cursor-pointer';
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className={classes}
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      {...props}
    >
      {children}
    </Component>
  );
}
