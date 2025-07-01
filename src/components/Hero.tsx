
import { Shield, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Brand logo with modern styling */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
            <div className="p-3 bg-slate-900 rounded-xl shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">VanishRoom</h1>
          </div>
        </div>

        {/* Modern headline with better typography */}
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Privacy-first communication platform
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tight">
            Private
            <span className="block text-slate-500 font-light">
              Conversations
            </span>
            <span className="block text-2xl md:text-3xl font-normal text-slate-600 mt-4">
              That Vanish Without a Trace
            </span>
          </h2>
        </div>

        {/* Modern description */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          End-to-end encrypted messaging, voice, and video calls that leave no digital footprint. 
          <br className="hidden md:block" />
          <span className="font-medium">No accounts. No storage. No surveillance.</span>
        </p>

        {/* Modern CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-10 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group border-0"
          >
            Start Private Room
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 font-semibold px-10 py-6 text-lg rounded-2xl transition-all duration-200"
          >
            Learn More
          </Button>
        </div>

        {/* Modern trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            "Zero Data Collection",
            "Open Source Security", 
            "No Registration Required"
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-100">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-slate-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
