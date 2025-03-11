
import { TrendingUp, Zap } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const Financials = () => {
  return (
    <section id="financials" className="py-20 bg-gradient-to-b from-white to-wattzy-softGray">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            Growth Projections
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">Financial Projections</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            Wattzy is currently focused on beta testing, strategic partnerships, and initial revenue generation with clear growth targets.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <ScrollReveal direction="right">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-xl font-medium mb-6">Projected Financials (Next 6 Months)</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-wattzy-lightBlue mt-1">
                    <Zap className="text-wattzy-blue" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Charger Integrations</h4>
                    <p className="text-muted-foreground">Onboard 50-100 charging locations in metro cities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-wattzy-lightBlue mt-1">
                    <TrendingUp className="text-wattzy-blue" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">User Growth</h4>
                    <p className="text-muted-foreground">Target 5,000-10,000 bookings through partnerships & marketing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-wattzy-lightBlue mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wattzy-blue">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Revenue Projections</h4>
                    <p className="text-muted-foreground">₹10-25 lakh, primarily from:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 ml-4">
                      <li>Booking fees (₹5-15 lakh)</li>
                      <li>B2B subscriptions (₹3-7 lakh)</li>
                      <li>Real estate partnerships & analytics services (₹2-3 lakh)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <div className="h-80 relative bg-white p-6 rounded-2xl shadow-lg border border-border">
              <h3 className="text-lg font-medium mb-6">Charger Integrations Over 6 Months</h3>
              <div className="absolute inset-0 flex items-end justify-around p-6 pt-16">
                <div className="w-full">
                  <div className="flex items-end justify-between h-full">
                    {[10, 20, 32, 45, 62, 80].map((height, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div 
                          className="w-8 md:w-12 bg-gradient-to-t from-wattzy-blue to-wattzy-teal rounded-t-md transition-all duration-1000 ease-out"
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
                  <div className="flex justify-between mt-4">
                    <span className="text-xs text-muted-foreground">Min charges</span>
                    <span className="text-xs text-muted-foreground">Max charges</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Financials;
