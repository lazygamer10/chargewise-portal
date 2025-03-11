
import { ArrowRight, Zap } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="blurred-circle w-[400px] h-[400px] top-[-100px] right-[-100px] bg-wattzy-blue/30"></div>
      <div className="blurred-circle w-[300px] h-[300px] bottom-[-50px] left-[-50px] bg-wattzy-green/20"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <div className="highlight-chip mb-6">
                AI-Powered EV Charging Marketplace
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                Connecting EV Charging Providers with the <span className="gradient-text">Right Locations</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay="sm">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Through AI-powered site selection, seamless booking, and business integration, we're revolutionizing the EV charging infrastructure.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay="md">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                  Join the EV Revolution <ArrowRight size={18} />
                </a>
                <a href="#how-it-works" className="btn-secondary flex items-center justify-center gap-2">
                  Learn How It Works
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative z-10 glass-card p-1 rounded-2xl overflow-hidden shadow-xl animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1697284758940-7d80ad5b4c0c?q=80&w=2670&auto=format&fit=crop" 
                    alt="EV Charging" 
                    className="w-full h-auto rounded-xl"
                    style={{ maxWidth: '500px' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
                    <div className="flex items-center gap-2 text-white">
                      <Zap className="text-wattzy-blue animate-pulse" size={20} />
                      <span className="text-sm font-medium">AI-optimized locations for maximum charging efficiency</span>
                    </div>
                  </div>
                </div>
                
                {/* Animated Elements */}
                <div className="absolute -top-6 -left-6 glass-card p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-wattzy-blue/20 flex items-center justify-center">
                      <Zap size={16} className="text-wattzy-blue" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Active Stations</div>
                      <div className="text-sm font-medium">324 Available</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-xs text-muted-foreground mb-1">Charging Sessions</div>
                  <div className="h-2 w-32 bg-wattzy-blue/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-wattzy-blue to-wattzy-green rounded-full animate-charging"></div>
                  </div>
                  <div className="text-xs font-medium mt-1">1,254 Today</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
