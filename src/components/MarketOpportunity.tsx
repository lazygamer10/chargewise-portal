
import { TrendingUp, Car, Wallet, Battery } from 'lucide-react';
import AnimatedCounter from './ui/AnimatedCounter';
import ScrollReveal from './ui/ScrollReveal';

const StatCard = ({ 
  icon, 
  value, 
  label, 
  prefix = '', 
  suffix = '',
  delay
}: { 
  icon: React.ReactNode; 
  value: number; 
  label: string; 
  prefix?: string;
  suffix?: string;
  delay: 'none' | 'sm' | 'md' | 'lg';
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="stat-container h-full">
        <div className="mb-4 p-3 w-16 h-16 flex items-center justify-center rounded-full bg-wattzy-blue/10">
          {icon}
        </div>
        <AnimatedCounter 
          value={value} 
          prefix={prefix} 
          suffix={suffix} 
          className="text-3xl md:text-4xl font-bold text-wattzy-blue mb-2"
        />
        <p className="text-center text-muted-foreground font-medium">{label}</p>
      </div>
    </ScrollReveal>
  );
};

const MarketOpportunity = () => {
  return (
    <section id="market" className="py-20 bg-gradient-to-b from-white to-wattzy-softGray">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            Growth Potential
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">Market Opportunity</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            India's EV market is experiencing explosive growth, creating tremendous opportunities for innovative charging solutions.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <StatCard 
            icon={<Wallet className="text-wattzy-blue" size={24} />} 
            value={2.4} 
            prefix="$" 
            suffix="B+" 
            label="Market Size" 
            delay="none"
          />
          <StatCard 
            icon={<Car className="text-wattzy-blue" size={24} />} 
            value={10} 
            suffix="M+" 
            label="EVs by 2030" 
            delay="sm"
          />
          <StatCard 
            icon={<TrendingUp className="text-wattzy-blue" size={24} />} 
            value={120} 
            suffix="K Cr" 
            label="Gov. Incentives" 
            delay="md"
          />
          <StatCard 
            icon={<Battery className="text-wattzy-blue" size={24} />} 
            value={400} 
            suffix="K" 
            label="Charging Stations by 2030" 
            delay="lg"
          />
        </div>

        <ScrollReveal delay="lg">
          <div className="mt-16 mx-auto max-w-3xl p-6 glass-card">
            <p className="text-center italic text-muted-foreground">
              "With 10M+ EVs projected by 2030 and only 15,000 charging stations today, India faces a significant infrastructure gap. Wattzy's AI-powered solution is perfectly positioned to help close this gap."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MarketOpportunity;
