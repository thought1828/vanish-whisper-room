
import { Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-slate-50"></div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Logo/Brand */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-slate-900 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">VanishRoom</h1>
          </div>
        </div>

        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Private Conversations
          <span className="block text-slate-600">
            That Vanish
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          End-to-end encrypted messaging, voice, and video calls that leave no trace. 
          No accounts, no storage, no surveillance. Just pure, private communication.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 text-lg group"
          >
            Start Private Room
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Zero Data Collection</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Open Source Security</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>No Registration Required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
