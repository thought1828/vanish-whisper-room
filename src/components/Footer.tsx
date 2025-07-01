
import { Shield, Github, Twitter, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-24 px-6 border-t border-slate-800 dark:border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Brand section */}
          <div className="md:col-span-6">
            <div className="flex items-center space-x-4 mb-10">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-purple-600 dark:to-pink-600 rounded-2xl shadow-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-4xl font-black text-white tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                VanishRoom
              </span>
            </div>
            <p className="text-slate-300 dark:text-slate-400 mb-10 max-w-lg text-xl leading-relaxed font-light">
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
                  className="p-4 rounded-2xl bg-slate-800 dark:bg-slate-800/50 text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-8 text-xl">Product</h4>
            <ul className="space-y-5">
              {["Features", "Security", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 dark:text-slate-400 hover:text-white hover:text-blue-400 dark:hover:text-purple-400 transition-colors duration-300 flex items-center group text-lg">
                    {item}
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-8 text-xl">Support</h4>
            <ul className="space-y-5">
              {["Documentation", "FAQ", "Contact", "Status"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 dark:text-slate-400 hover:text-white hover:text-blue-400 dark:hover:text-purple-400 transition-colors duration-300 flex items-center group text-lg">
                    {item}
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 dark:border-slate-700 mt-20 pt-16 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 dark:text-slate-500 font-light text-lg">
            © 2024 VanishRoom. Built for privacy advocates, by privacy advocates.
          </p>
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex items-center space-x-3 px-6 py-3 rounded-full bg-slate-800/50 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
              <span className="text-3xl">🔒</span>
              <span className="text-slate-300 text-sm font-semibold">Zero-knowledge architecture</span>
            </div>
            <div className="flex items-center space-x-3 px-6 py-3 rounded-full bg-slate-800/50 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">
              <span className="text-3xl">🛡️</span>
              <span className="text-slate-300 text-sm font-semibold">Military-grade encryption</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
