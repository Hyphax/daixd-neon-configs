import { ArrowRight, Send, Shield, Globe, Lock, Zap, Server } from "lucide-react";

const Index = () => {
  const configs = [
    { name: "Office Depot", url: "https://www.officedepot.com" },
    { name: "Panera Bread", url: "https://www.panerabread.com" },
    { name: "Cafe Rio", url: "https://www.caferio.com" },
    { name: "Abercrombie & Fitch", url: "https://www.abercrombie.com" },
    { name: "Fandango", url: "https://www.fandango.com" },
    { name: "Winn-Dixie", url: "https://www.winndixie.com" },
    { name: "AMC Theatres", url: "https://www.amctheatres.com" },
    { name: "GameStop", url: "https://www.gamestop.com" },
    { name: "IHOP", url: "https://www.ihop.com" },
    { name: "DXL", url: "https://www.dxl.com" },
    { name: "DSW", url: "https://www.dsw.com" },
    { name: "Krispy Kreme", url: "https://www.krispykreme.com" },
    { name: "Ulta", url: "https://www.ulta.com" },
    { name: "Cinemark", url: "https://www.cinemark.com" },
    { name: "Red Roof Inn", url: "https://www.redroof.com" },
    { name: "Omaha Steaks", url: "https://www.omahasteaks.com" },
    { name: "Jersey Mike's", url: "https://www.jerseymikes.com" },
    { name: "Jack in the Box", url: "https://www.jackinthebox.com" },
    { name: "Carter's", url: "https://www.carters.com" },
    { name: "Bath & Body Works", url: "https://www.bathandbodyworks.com" },
    { name: "JCPenney", url: "https://www.jcpenney.com" },
    { name: "Papa John's", url: "https://www.papajohns.com" },
    { name: "Jimmy John's", url: "https://www.jimmyjohns.com" },
  ];

  const antiBot = [
    { name: "Akamai Web/BMP", icon: Shield },
    { name: "PerimeterX", icon: Globe },
    { name: "Incapsula", icon: Lock },
    { name: "Cloudflare", icon: Zap },
    { name: "Kasada", icon: Server },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-black scroll-smooth">
      {/* Header Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative bg-black text-white">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="gradient-border mb-8 inline-block">
            <div className="gradient-border-inner">
              <span className="text-sm font-medium text-gray-300">
                Trusted in the community · 5+ years experience
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
            JustDaixD
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
            OpenBullet2 Config Maker
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full neon-glow neon-glow-hover transition-all duration-300 inline-flex items-center gap-3"
          >
            Get a Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Available Websites Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Available Websites
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {configs.map((config) => (
              <a
                key={config.name}
                href={config.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 text-white px-6 py-3 rounded-full text-center font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 hover:bg-gray-800"
              >
                {config.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-Bot Specialties Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Anti-Bot Specialties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
            {antiBot.slice(0, 3).map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.name}
                  className="group bg-gray-900 rounded-lg p-8 text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <IconComponent className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-medium text-lg">{item.name}</h3>
                </div>
              );
            })}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {antiBot.slice(3).map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.name}
                  className="group bg-gray-900 rounded-lg p-8 text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <IconComponent className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-medium text-lg">{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Contact
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://t.me/justdaixd"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-full neon-glow neon-glow-hover transition-all duration-300 inline-flex items-center gap-3 min-w-[200px] justify-center"
            >
              <Send className="w-5 h-5" />
              @justdaixd
            </a>
            
            <a
              href="https://t.me/JustConfigs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-8 py-4 rounded-full neon-glow neon-glow-hover transition-all duration-300 inline-flex items-center gap-3 min-w-[200px] justify-center"
            >
              <Send className="w-5 h-5" />
              @JustConfigs
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 mb-2">
            © 2025 JustDaixD. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Made with ❤️ by JustDaixD
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
