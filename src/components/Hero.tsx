
import { Shield, ArrowRight, Sparkles, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Theme Toggle */}
      <div className="absolute top-8 right-8 z-10">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 dark:bg-black/10 dark:border-white/10 dark:hover:bg-black/20"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 text-yellow-500" />
          ) : (
            <Moon className="h-4 w-4 text-slate-700" />
          )}
        </Button>
      </div>

      {/* Stylish background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.05)_50%,transparent_75%)]"></div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Modern brand logo */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center space-x-4 p-6 rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/20 dark:bg-slate-900/80 dark:border-slate-700/50">
            <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-purple-600 dark:to-pink-600 rounded-2xl shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              VanishRoom
            </h1>
          </div>
        </div>

        {/* Modern headline */}
        <div className="mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 dark:bg-purple-900/30 text-blue-700 dark:text-purple-300 text-sm font-semibold mb-8 border border-blue-200 dark:border-purple-700/50">
            <Sparkles className="w-4 h-4 mr-2" />
            Privacy-first communication platform
          </div>
          
          <h2 className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white mb-8 leading-[0.85] tracking-tighter">
            Private
            <span className="block bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-400 dark:to-slate-200 bg-clip-text text-transparent font-light">
              Conversations
            </span>
            <span className="block text-2xl md:text-4xl font-medium text-slate-600 dark:text-slate-300 mt-6 tracking-normal">
              That Vanish Without a Trace
            </span>
          </h2>
        </div>

        {/* Enhanced description */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
          End-to-end encrypted messaging, voice, and video calls that leave no digital footprint. 
          <br className="hidden md:block" />
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            No accounts. No storage. No surveillance.
          </span>
        </p>

        {/* Stylish CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-purple-600 dark:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700 text-white font-bold px-12 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 group border-0"
          >
            Start Private Room
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 font-bold px-12 py-8 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>

        {/* Enhanced trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { text: "Zero Data Collection", emoji: "🔒" },
            { text: "Open Source Security", emoji: "🛡️" }, 
            { text: "No Registration Required", emoji: "⚡" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/30 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="text-3xl">{feature.emoji}</span>
              <span className="text-slate-700 dark:text-slate-200 font-semibold text-lg">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
