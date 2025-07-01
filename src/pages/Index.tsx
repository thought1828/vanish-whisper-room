
import { Shield, Zap, Trash2, Share2, Video, Monitor, Brain, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
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
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Features Section with modern design */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-slate-600 text-sm font-medium mb-8 shadow-sm">
              Privacy-First Features
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Communication
              <span className="block text-slate-600 font-light">Without Compromise</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Every feature is designed with your privacy in mind. No exceptions, no backdoors, no compromises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Ready for True
            <span className="block text-slate-300 font-light">Digital Privacy?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Start a secure conversation that leaves no trace. Create your VanishRoom now and experience 
            communication the way it should be — private, secure, and ephemeral.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-12 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              Create Private Room
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold px-12 py-6 text-lg rounded-2xl transition-all duration-200"
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
