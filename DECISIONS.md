# DECISIONS.md

## 1. Why did you choose this approach instead of the obvious alternative?

The obvious alternative would have been a page full of marketing copy — bold claims, testimonials, logos, and stock imagery. Instead, I chose a **product-first approach** where the strongest visual elements are actual product UI mockups built with real HTML/CSS.

The hero section features a realistic NeuroLearn dashboard (not an illustration or screenshot). The product showcase section renders a working quiz UI with correct/incorrect answer states, a flashcard component, performance analytics, and AI recommendations. The personalization demo is a live interactive element where users can switch between Beginner, Intermediate, and Advanced explanations of the same topic.

This approach is harder to execute — building realistic product UIs from scratch takes more time than dropping in stock images — but it communicates the product far more convincingly. An evaluator can immediately see what NeuroLearn does rather than reading about it.

I also chose the **Ivory + Ink + Burnt Orange** color system over the more common blue/purple SaaS palette to create visual distinction. Most AI/EdTech products default to blue gradients. The warm, editorial direction stands apart while still feeling professional and trustworthy.

## 2. What trade-off did you make because of the time limit?

The biggest trade-off was **depth of interactivity**. With more time, I would have:

- Made the hero dashboard interactive (clickable sidebar items that switch views)
- Added a working flashcard flip animation with front/back content
- Created more micro-interactions in the quiz UI (hover states on options, animated score counting)
- Built a dark mode toggle
- Added page transition animations between anchor scroll targets

I also chose Tailwind CSS over a custom CSS system. Tailwind speeds up development significantly, but means the codebase depends on a utility framework rather than a bespoke design system. For a production product, I might prefer CSS Modules or a custom system — but for this assignment, Tailwind was the right trade-off for speed without sacrificing quality.

The product UI mockups use static demo data rather than fetching from an API or using interactive state management. This was intentional — the assignment calls for a marketing homepage, not a functional application, and adding unnecessary complexity would not improve the result.

## 3. Where did you use AI, and what did I personally verify/change afterward?

I used AI (Claude) as a coding assistant throughout the project. Here's what AI helped with and what I verified:

**AI-assisted:**
- Component scaffolding and boilerplate code
- Tailwind class composition for responsive layouts
- Framer Motion animation configuration
- Content generation for the personalization demo explanations (Beginner/Intermediate/Advanced derivatives content)
- Quiz question and answer option content

**What I personally verified and adjusted:**
- All color values match the locked design spec exactly
- Typography hierarchy renders correctly at all breakpoints
- The dashboard mockup looks like a real SaaS product (not a generic template)
- Responsive behavior at 390px, 768px, and 1440px — I tested in-browser and fixed layout issues
- No fake social proof, fake testimonials, or unsupported claims appear anywhere
- The personalization demo tab switching works smoothly with proper AnimatePresence transitions
- Production build completes with zero errors and zero warnings
- All interactive elements have proper ARIA labels and keyboard accessibility
- The educational content in the personalization demo is technically accurate

AI accelerated the implementation significantly, but every visual decision, layout choice, and content decision was reviewed and adjusted to meet the assignment's quality bar.
