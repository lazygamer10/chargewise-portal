
import { CheckCircle, Clock, Zap } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const Progress = () => {
  return (
    <section id="progress" className="py-20 bg-wattzy-softGray">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            Current Status
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">Our Progress</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            We've made significant strides in developing our MVP and securing key relationships.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <ScrollReveal direction="right">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border h-full">
              <h3 className="text-xl font-medium mb-6">MVP Development</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-green-100 mt-1">
                    <CheckCircle className="text-green-600" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Booking Model Ready</h4>
                    <p className="text-muted-foreground">Our booking system, allowing users to reserve charging stations, is fully operational.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-wattzy-lightBlue mt-1">
                    <Clock className="text-wattzy-blue" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">ML Models in Testing</h4>
                    <p className="text-muted-foreground">Machine learning models are currently being tested for optimal charger placement and demand forecasting.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-wattzy-lightBlue mt-1">
                    <Zap className="text-wattzy-blue" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Final MVP for Beta Testing</h4>
                    <p className="text-muted-foreground">We are in the process of integrating the booking system with our ML models to create a fully functional MVP, which will undergo beta testing soon.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border h-full">
              <h3 className="text-xl font-medium mb-6">Recognition & Support</h3>
              
              <div className="mb-8">
                <h4 className="font-medium mb-3">Received Grant from Hyundai Hope</h4>
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                  <img 
                    src="https://www.hyundai.com/content/dam/hyundai/ww/en/images/hyundai-logo-footer.png" 
                    alt="Hyundai Logo" 
                    className="h-8 object-contain opacity-70"
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Institutional Advisors:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <h5 className="text-sm font-medium mb-1">V. Kamakoti</h5>
                    <p className="text-xs text-muted-foreground">Director of IIT Madras</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <h5 className="text-sm font-medium mb-1">Radha Krishna Ganti</h5>
                    <p className="text-xs text-muted-foreground">Prof, IIT Madras EE Dept</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg text-center">
                    <h5 className="text-sm font-medium mb-1">Prabhu Rajagopal</h5>
                    <p className="text-xs text-muted-foreground">Prof, IIT Madras ME Dept</p>
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

export default Progress;
