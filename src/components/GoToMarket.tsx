
import { MapPin, Truck, Building2 } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const PhaseCard = ({ 
  phase, 
  icon, 
  title, 
  description 
}: { 
  phase: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="feature-card">
      <div className="flex items-center mb-4 gap-4">
        <div className="p-3 w-12 h-12 flex items-center justify-center rounded-full bg-wattzy-lightBlue shrink-0">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-wattzy-blue font-medium uppercase">{phase}</span>
          <h3 className="text-xl font-medium">{title}</h3>
        </div>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const GoToMarket = () => {
  return (
    <section id="go-to-market" className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            Expansion Strategy
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">Go-To-Market Strategy</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            Our phased approach ensures focused growth and strategic expansion into key markets.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <ScrollReveal>
            <PhaseCard 
              phase="Phase 1"
              icon={<MapPin className="text-wattzy-blue" size={24} />}
              title="Top Metro Cities"
              description="Initial focus on Delhi, Mumbai, Bangalore, and Hyderabad in the first 2 years, where EV adoption is highest."
            />
          </ScrollReveal>
          
          <ScrollReveal delay="sm">
            <PhaseCard 
              phase="Phase 2"
              icon={<Truck className="text-wattzy-blue" size={24} />}
              title="Tier-2 & Highways"
              description="Expansion to smaller cities and major highway corridors based on AI demand mapping and usage patterns."
            />
          </ScrollReveal>
          
          <ScrollReveal delay="md">
            <PhaseCard 
              phase="Phase 3"
              icon={<Building2 className="text-wattzy-blue" size={24} />}
              title="Fleet & Public Spaces"
              description="Integration with corporate parks, malls, hotels, housing societies, and fleet operators."
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delay="lg">
          <div className="mt-16 p-8 glass-card text-center">
            <h3 className="text-2xl font-medium mb-6">Join the EV Revolution with Wattzy</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Wattzy is positioned to become India's leading EV charging marketplace, connecting providers with optimal locations through AI-powered insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-6 bg-white shadow-sm rounded-xl">
                <h4 className="font-medium mb-2">Transform EV Charging</h4>
                <p className="text-sm text-muted-foreground">Revolutionize how India charges electric vehicles</p>
              </div>
              
              <div className="p-6 bg-white shadow-sm rounded-xl">
                <h4 className="font-medium mb-2">Connect the Ecosystem</h4>
                <p className="text-sm text-muted-foreground">Link providers with prime locations for maximum efficiency</p>
              </div>
              
              <div className="p-6 bg-white shadow-sm rounded-xl">
                <h4 className="font-medium mb-2">Optimize with AI</h4>
                <p className="text-sm text-muted-foreground">Leverage data-driven placement decisions</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GoToMarket;
