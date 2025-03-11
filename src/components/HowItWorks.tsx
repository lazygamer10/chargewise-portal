
import { Brain, ShoppingBag, Calendar, BarChart3 } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  index: number;
}) => {
  return (
    <ScrollReveal delay={index === 0 ? 'none' : index === 1 ? 'sm' : index === 2 ? 'md' : 'lg'}>
      <div className="feature-card">
        <div className="mb-4 p-3 w-12 h-12 flex items-center justify-center rounded-full bg-wattzy-lightBlue">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </ScrollReveal>
  );
};

const HowItWorks = () => {
  const features = [
    {
      icon: <Brain className="text-wattzy-blue" size={24} />,
      title: "AI-Powered Site Selection",
      description: "Uses machine learning and real-time data to find high-demand locations where chargers will see optimal usage."
    },
    {
      icon: <ShoppingBag className="text-wattzy-blue" size={24} />,
      title: "EV Charger Provider Marketplace",
      description: "Connects charger companies with businesses and real estate owners seeking to offer charging solutions."
    },
    {
      icon: <Calendar className="text-wattzy-blue" size={24} />,
      title: "Seamless Booking for EV Users",
      description: "Allows users to reserve, pay, and charge hassle-free through our platform, eliminating wait times."
    },
    {
      icon: <BarChart3 className="text-wattzy-blue" size={24} />,
      title: "Analytics & Monetization",
      description: "Provides detailed insights on utilization and revenue potential for businesses hosting chargers."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-wattzy-softGray">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            The Process
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">How Wattzy Works</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            Our integrated platform connects all stakeholders in the EV charging ecosystem through an intuitive, seamless process.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <ScrollReveal delay="lg">
          <div className="mt-16 relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1638248264543-68d8a41c9ed8?q=80&w=2574&auto=format&fit=crop" 
              alt="EV Charging Platform" 
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              <div className="p-6 md:p-10 text-white max-w-xl">
                <h3 className="text-2xl font-medium mb-2">The Complete EV Charging Ecosystem</h3>
                <p className="text-white/80">
                  Our platform brings together charger providers, location owners, and EV users in one seamless experience, all powered by sophisticated AI.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
