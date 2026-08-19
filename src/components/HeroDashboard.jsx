import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BarChart3,
  Bot,
  BrainCircuit,
  Layers,
  BookOpen,
  Wand2,
  Calendar,
  Trophy,
  ShoppingBag,
  Settings,
  Sparkles,
  Flame,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';

const sidebarGroups = [
  {
    category: null,
    items: [
      { icon: LayoutDashboard, label: 'Dashboard' },
    ],
  },
  {
    category: 'LEARNING',
    items: [
      { icon: BarChart3, label: 'Analytics' },
      { icon: Bot, label: 'AI Tutor' },
      { icon: BrainCircuit, label: 'Quizzes' },
      { icon: Layers, label: 'Flashcards' },
    ],
  },
  {
    category: 'TOOLS',
    items: [
      { icon: BookOpen, label: 'My Library' },
      { icon: Wand2, label: 'AI Generator' },
      { icon: Calendar, label: 'Study Planner' },
    ],
  },
  {
    category: 'PERSONAL',
    items: [
      { icon: Trophy, label: 'Achievements' },
      { icon: ShoppingBag, label: 'Store' },
      { icon: Settings, label: 'Settings' },
    ],
  },
];

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const weekActivity = [65, 80, 45, 90, 70, 30, 55];

const initialPlan = [
  { id: 1, title: 'Review: Linear Algebra basics', time: '25 min', done: true },
  { id: 2, title: 'Practice: Probability questions', time: '15 min', done: false },
  { id: 3, title: 'Read: Intro to Neural Networks', time: '20 min', done: false },
];

export default function HeroDashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [tasks, setTasks] = useState(initialPlan);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Crisp Application Container */}
      <div className="bg-white rounded-2xl shadow-dashboard hover:shadow-card-hover border border-border/60 overflow-hidden transition-shadow duration-300 relative z-10">
        {/* Mobile Horizontal Navigation Bar */}
        <div className="md:hidden flex items-center gap-1.5 overflow-x-auto p-2.5 bg-[#FDFBF7] border-b border-border/40 scrollbar-none">
          {[
            { label: 'Dashboard', icon: LayoutDashboard },
            { label: 'Analytics', icon: BarChart3 },
            { label: 'AI Tutor', icon: Bot },
            { label: 'Quizzes', icon: BrainCircuit },
            { label: 'Flashcards', icon: Layers },
            { label: 'My Library', icon: BookOpen },
            { label: 'AI Generator', icon: Wand2 },
            { label: 'Study Planner', icon: Calendar },
            { label: 'Achievements', icon: Trophy },
            { label: 'Store', icon: ShoppingBag },
            { label: 'Settings', icon: Settings },
          ].map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                onClick={() => setActiveNav(item.label)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors flex-shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-terracotta text-white font-semibold shadow-xs'
                    : 'bg-white border border-border/50 text-warm-gray hover:text-ink'
                }`}
              >
                <item.icon size={13} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex min-h-[440px] md:min-h-[480px]">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col w-[210px] bg-[#FDFBF7] border-r border-border/50 p-3.5">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4 px-1">
              <div className="w-6 h-6 bg-terracotta rounded-md flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18V6l12 12V6" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="6" r="2" fill="white"/>
                  <circle cx="18" cy="18" r="2" fill="white"/>
                  <circle cx="6" cy="18" r="2" fill="white"/>
                  <circle cx="18" cy="6" r="2" fill="white"/>
                </svg>
              </div>
              <span className="text-body-sm font-semibold text-ink">NeuroLearn <span className="text-terracotta">AI</span></span>
            </div>

            {/* Nav Groups */}
            <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-0.5">
              {sidebarGroups.map((group, gIdx) => (
                <div key={gIdx} className="flex flex-col gap-0.5">
                  {group.category && (
                    <div className="text-[9px] font-bold uppercase tracking-wider text-warm-gray/70 px-2.5 py-1">
                      {group.category}
                    </div>
                  )}
                  {group.items.map((item) => {
                    const isActive = activeNav === item.label;

                    return (
                      <motion.button
                        key={item.label}
                        onClick={() => setActiveNav(item.label)}
                        whileHover={{ x: 2 }}
                        className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[12px] font-medium transition-colors text-left w-full cursor-pointer ${
                          isActive
                            ? 'bg-terracotta/10 text-terracotta font-semibold'
                            : 'text-warm-gray hover:text-ink hover:bg-ink/[0.03]'
                        }`}
                      >
                        <item.icon size={14} strokeWidth={isActive ? 2 : 1.5} />
                        <span>{item.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-2.5 px-2 py-2 mt-2 pt-2 border-t border-border/40 rounded-lg hover:bg-ink/[0.03] transition-colors cursor-default">
              <div className="w-8 h-8 bg-terracotta/15 rounded-lg flex items-center justify-center font-bold text-body-sm text-terracotta">
                A
              </div>
              <div className="min-w-0">
                <div className="text-caption font-semibold text-ink truncate leading-tight">Ayush</div>
                <div className="text-[10px] text-warm-gray leading-tight">Level 3 Scholar</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 md:p-5 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-caption text-warm-gray">Welcome back</div>
                <div className="text-body-sm font-semibold text-ink">
                  {activeNav === 'Dashboard' ? 'Your Dashboard' : activeNav}
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-peach/50 border border-terracotta/10 rounded-lg cursor-default"
              >
                <Sparkles size={13} className="text-terracotta" />
                <span className="text-[11px] font-medium text-terracotta">AI Insights</span>
              </motion.div>
            </div>

            {/* Content Conditional View */}
            {activeNav !== 'Dashboard' ? (
              <div className="p-4 bg-[#FDFBF7] rounded-xl border border-border/40 text-center py-10">
                <BrainCircuit size={28} className="text-terracotta mx-auto mb-2" />
                <h4 className="text-body-sm font-semibold text-ink mb-1">{activeNav} Active</h4>
                <p className="text-caption text-warm-gray mb-4">Showing simulated real-time {activeNav.toLowerCase()} telemetry.</p>
                <button
                  onClick={() => setActiveNav('Dashboard')}
                  className="text-caption text-terracotta font-semibold underline cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <>
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {/* Learning Progress */}
                  <motion.div whileHover={{ y: -2 }} className="bg-[#FDFBF7] rounded-xl p-3 border border-border/40 transition-transform">
                    <div className="text-[10px] uppercase tracking-wider text-warm-gray mb-2">Progress</div>
                    <div className="flex items-end gap-2">
                      <span className="text-heading-sm font-bold text-ink leading-none">72%</span>
                      <TrendingUp size={14} className="text-terracotta mb-0.5" />
                    </div>
                    {/* Progress bar */}
                    <div className="mt-2.5 h-1.5 bg-border/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-terracotta rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '72%' }}
                        transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>

                  {/* Study Streak */}
                  <motion.div whileHover={{ y: -2 }} className="bg-[#FDFBF7] rounded-xl p-3 border border-border/40 transition-transform">
                    <div className="text-[10px] uppercase tracking-wider text-warm-gray mb-2">Streak</div>
                    <div className="flex items-end gap-1.5">
                      <span className="text-heading-sm font-bold text-ink leading-none">12</span>
                      <span className="text-caption text-warm-gray mb-px">days</span>
                    </div>
                    <div className="flex items-center gap-0.5 mt-2.5">
                      <Flame size={12} className="text-terracotta" />
                      <span className="text-[10px] text-terracotta font-medium">Best: 18 days</span>
                    </div>
                  </motion.div>

                  {/* Concept Mastery */}
                  <motion.div whileHover={{ y: -2 }} className="bg-[#FDFBF7] rounded-xl p-3 border border-border/40 transition-transform">
                    <div className="text-[10px] uppercase tracking-wider text-warm-gray mb-2">Mastery</div>
                    <div className="flex items-end gap-2">
                      <span className="text-heading-sm font-bold text-ink leading-none">64%</span>
                    </div>
                    <div className="mt-2.5 h-1.5 bg-border/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-ink/70 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '64%' }}
                        transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Today's Plan */}
                  <div className="bg-[#FDFBF7] rounded-xl p-3.5 border border-border/40">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-caption font-semibold text-ink">Today&apos;s Plan</span>
                      <span className="text-[10px] text-warm-gray">{tasks.filter(t => t.done).length}/{tasks.length} done</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {tasks.map((item) => (
                        <motion.div
                          key={item.id}
                          onClick={() => toggleTask(item.id)}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2.5 cursor-pointer group"
                        >
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                            item.done
                              ? 'bg-terracotta border-terracotta'
                              : 'border-border group-hover:border-terracotta'
                          }`}>
                            {item.done && (
                              <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                                <path d="M3 6L5.5 8.5L9 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className={`text-[11px] leading-tight transition-colors ${
                              item.done ? 'text-warm-gray line-through' : 'text-ink group-hover:text-terracotta'
                            }`}>{item.title}</div>
                          </div>
                          <span className="text-[10px] text-warm-gray flex-shrink-0">{item.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Weekly Activity */}
                  <div className="bg-[#FDFBF7] rounded-xl p-3.5 border border-border/40">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-caption font-semibold text-ink">Weekly Activity</span>
                      <span className="text-[10px] text-warm-gray">This week</span>
                    </div>
                    <div className="flex items-end justify-between gap-1.5 h-[72px]">
                      {weekDays.map((day, i) => (
                        <div key={i} className="flex flex-col items-center gap-1.5 flex-1 group">
                          <motion.div
                            className="w-full rounded-md bg-terracotta/80 group-hover:bg-terracotta transition-colors"
                            style={{ minHeight: 4 }}
                            initial={{ height: 0 }}
                            animate={{ height: `${weekActivity[i]}%` }}
                            transition={{ duration: 0.8, delay: 1.0 + i * 0.08, ease: 'easeOut' }}
                          />
                          <span className="text-[9px] text-warm-gray group-hover:text-ink transition-colors">{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Insight */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="mt-4 bg-terracotta/[0.06] border border-terracotta/15 rounded-xl p-3.5 flex items-start gap-3 transition-colors hover:bg-terracotta/10 cursor-pointer"
                >
                  <div className="w-7 h-7 bg-terracotta/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BrainCircuit size={14} className="text-terracotta" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-ink mb-0.5">AI Insight</div>
                    <div className="text-[11px] text-warm-gray leading-relaxed">
                      You learn best in 25-min focused sessions. Consider reviewing Linear Algebra before your quiz tomorrow.
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-warm-gray mt-1.5 flex-shrink-0" />
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Demo label */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-ivory border border-border rounded-full px-3 py-1 shadow-soft z-20">
        <span className="text-[10px] text-warm-gray font-medium">Product demo preview</span>
      </div>
    </motion.div>
  );
}
