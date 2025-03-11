
import { CreditCard, Briefcase, Building } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const RevenueCard = ({ 
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
    <ScrollReveal delay={index === 0 ? 'none' : index === 1 ? 'sm' : 'md'}>
      <div className="feature-card h-full">
        <div className="mb-4 p-3 w-12 h-12 flex items-center justify-center rounded-full bg-wattzy-lightBlue">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </ScrollReveal>
  );
};

const BusinessModel = () => {
  const revenueStreams = [
    {
      icon: <CreditCard className="text-wattzy-blue" size={24} />,
      title: "Booking Fees",
      description: "We earn a commission on each successful EV charger booking processed through our platform."
    },
    {
      icon: <Briefcase className="text-wattzy-blue" size={24} />,
      title: "B2B Subscription Model",
      description: "Charging providers pay a subscription fee for access to our AI-driven site selection insights and marketplace."
    },
    {
      icon: <Building className="text-wattzy-blue" size={24} />,
      title: "Real Estate Partnerships",
      description: "We share revenue with businesses and property owners who adopt chargers through our marketplace."
    }
  ];

  return (
    <section id="business-model" className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            Revenue Strategy
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">Business Model</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            Our multi-stream revenue model ensures sustainable growth while delivering value to all stakeholders.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {revenueStreams.map((stream, index) => (
            <RevenueCard 
              key={index}
              icon={stream.icon}
              title={stream.title}
              description={stream.description}
              index={index}
            />
          ))}
        </div>

        <ScrollReveal delay="lg">
          <div className="mt-16 p-6 bg-wattzy-blue/5 border border-wattzy-blue/20 rounded-2xl">
            <h3 className="text-xl font-medium mb-4 text-center">Projected Growth</h3>
            <div className="relative h-80">
              <div className="absolute inset-0 flex items-end justify-around p-6">
                <div className="w-full max-w-4xl mx-auto">
                  <div className="flex items-end justify-between h-full">
                    {[10, 25, 40, 60, 75, 85].map((height, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className="w-10 md:w-16 bg-gradient-to-t from-wattzy-blue to-wattzy-teal rounded-t-md transition-all duration-1000 ease-out"
                          style={{ 
                            height: `${height}%`,
                            opacity: 0,
                            animation: `fade-in 0.5s ease-out ${index * 0.1 + 0.5}s forwards`
                          }}
                        ></div>
                        <span className="text-xs md:text-sm mt-2 text-muted-foreground">M{index + 1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center text-sm text-muted-foreground">
                    Months
                  </div>
                </div>
              </div>
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-6">
                <span className="text-xs text-muted-foreground">₹25L</span>
                <span className="text-xs text-muted-foreground">₹10L</span>
                <span className="text-xs text-muted-foreground">₹0</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BusinessModel;
