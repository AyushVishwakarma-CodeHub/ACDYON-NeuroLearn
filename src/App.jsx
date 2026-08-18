import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProductShowcase from './components/ProductShowcase';
import PersonalizationDemo from './components/PersonalizationDemo';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-ink">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ProductShowcase />
        <PersonalizationDemo />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
