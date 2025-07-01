import { Shield, Zap, Trash2, Share2, Video, Monitor, Brain, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Every conversation on VanishRoom is completely private. Messages, files, and video streams are encrypted from the moment they leave your device until they reach the person you're talking to."
    },
    {
      icon: Zap,
      title: "No Account Required",
      description: "Forget signups, passwords, and email verifications. With VanishRoom, you can start a conversation instantly. Just share a private link and you're connected."
    },
    {
      icon: Trash2,
      title: "Stateless by Design",
      description: "Nothing lingers. Once a session ends, it's gone — permanently. We don't store your data, your files, or your chat history. Each room is temporary and vanishes after use."
    },
    {
      icon: Share2,
      title: "Private File Sharing",
      description: "Send documents or media safely between you and your contact — directly. Files are transferred securely without passing through or being saved on any server."
    },
    {
      icon: Video,
      title: "Voice & Video Calling",
      description: "Crystal-clear voice and video communication that feels personal and direct. Whether you're having a quick chat or a deep conversation, you'll feel connected."
    },
    {
      icon: Monitor,
      title: "Optional Screen Sharing",
      description: "Want to walk someone through something or show your screen? Share it securely with a single click — but only when you choose to. Screen sharing is fully optional and just as private."
    },
    {
      icon: Brain,
      title: "Focused on You, Not Your Data",
      description: "Unlike traditional platforms, VanishRoom doesn't collect personal data, usage analytics, or metadata. Your activity is your business — we don't track or monitor anything."
    },
    {
      icon: Globe,
      title: "Works Right from Your Browser",
      description: "No installations. No plugins. Just open the link and you're ready to talk. Whether you're on a phone, tablet, or computer, VanishRoom works seamlessly."
    },
    {
      icon: Lock,
      title: "Built for Privacy-Sensitive Use",
      description: "Whether you're a journalist, researcher, activist, or just someone who values their digital space — VanishRoom is made for you. A digital room that disappears when you're done."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Hero />
      
      {/* Features Section with enhanced styling */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white dark:bg-slate-800 text-blue-600 dark:text-purple-400 text-sm font-semibold mb-8 shadow-lg border border-blue-100 dark:border-purple-800/50">
              Privacy-First Features
            </div>
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter">
              Communication
              <span className="block bg-gradient-to-r from-slate-500 to-slate-700 dark:from-slate-400 dark:to-slate-200 bg-clip-text text-transparent font-light">
                Without Compromise
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              Every feature is designed with your privacy in mind. No exceptions, no backdoors, no compromises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 text-white relative overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]"></div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <h2 className="text-6xl md:text-7xl font-black mb-10 leading-tight tracking-tighter">
            Ready for True
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-light">
              Digital Privacy?
            </span>
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
            Start a secure conversation that leaves no trace. Create your VanishRoom now and experience 
            communication the way it should be — private, secure, and ephemeral.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/room')}
              className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 dark:text-white dark:hover:from-purple-700 dark:hover:to-pink-700 font-bold px-16 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Create Private Room
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/room')}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white font-bold px-16 py-8 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Join Existing Room
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
