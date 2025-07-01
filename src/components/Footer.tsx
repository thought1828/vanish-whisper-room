
import { Shield, Github, Twitter, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand section - takes more space */}
          <div className="md:col-span-6">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-white rounded-xl shadow-lg">
                <Shield className="w-7 h-7 text-slate-900" />
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">VanishRoom</span>
            </div>
            <p className="text-slate-300 mb-8 max-w-lg text-lg leading-relaxed font-light">
              The privacy-first communication platform that leaves no trace. 
              Secure, anonymous, and ephemeral by design.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "#" }
              ].map(({ icon: Icon, href }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4">
              {["Features", "Security", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                    {item}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-4">
              {["Documentation", "FAQ", "Contact", "Status"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group">
                    {item}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 mt-16 pt-12 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 font-light">
            © 2024 VanishRoom. Built for privacy advocates, by privacy advocates.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800">
              <span className="text-2xl">🔒</span>
              <span className="text-slate-300 text-sm font-medium">Zero-knowledge architecture</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800">
              <span className="text-2xl">🛡️</span>
              <span className="text-slate-300 text-sm font-medium">Military-grade encryption</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
