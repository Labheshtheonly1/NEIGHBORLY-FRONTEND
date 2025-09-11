
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import FeaturesPage from "./components/features";
import Faq from "./components/faq";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Fixed Navbar - this stays at the top */}
      <Navbar />
      
      {/* Main Content - with proper spacing */}
      <main className="relative">
        {/* Landing Page Section */}
        <LandingPage />
        
        {/* Features Page Section */}
        <FeaturesPage />
        
        {/* FAQ Section */}
        <Faq />
        
        {/* Footer Section */}
        <Footer />
      </main>
    </div>
  );
}
