
import { Shield, Zap, Trash2, Share2, Video, Monitor, Brain, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Every conversation on VanishRoom is completely private. Messages, files, and video streams are encrypted from the moment they leave your device until they reach the person you're talking to. No one in between — not even us — can read or listen."
    },
    {
      icon: Zap,
      title: "No Account Required",
      description: "Forget signups, passwords, and email verifications. With VanishRoom, you can start a conversation instantly. Just share a private link and you're connected. It's fast, frictionless, and anonymous."
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
      description: "Crystal-clear voice and video communication that feels personal and direct. Whether you're having a quick chat or a deep conversation, you'll feel like you're in the same room — without any noise from the outside world."
    },
    {
      icon: Monitor,
      title: "Optional Screen Sharing",
      description: "Want to walk someone through something or show your screen? Share it securely with a single click — but only when you choose to. Screen sharing is fully optional and just as private."
    },
    {
      icon: Brain,
      title: "Focused on You, Not Your Data",
      description: "Unlike traditional platforms, VanishRoom doesn't collect personal data, usage analytics, or metadata. Your activity is your business — we don't track, monitor, or remember anything about you."
    },
    {
      icon: Globe,
      title: "Works Right from Your Browser",
      description: "No installations. No plugins. Just open the link and you're ready to talk. Whether you're on a phone, tablet, or computer, VanishRoom works seamlessly."
    },
    {
      icon: Lock,
      title: "Built for Privacy-Sensitive Use",
      description: "Whether you're a journalist, researcher, activist, or just someone who values their digital space — VanishRoom is made for you. It's a digital room that disappears when you're done, leaving nothing behind."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Privacy-First Communication
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every feature is designed with your privacy in mind. No compromises, no exceptions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Truly Private Communication?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Start a secure conversation that leaves no trace. Create your VanishRoom now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3 text-lg"
            >
              Create Private Room
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-3 text-lg"
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
