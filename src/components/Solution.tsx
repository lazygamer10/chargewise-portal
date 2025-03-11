
import { Zap, Link, Calendar, LayoutGrid } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const SolutionCard = ({ 
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
    <ScrollReveal direction="up" delay={index === 0 ? 'none' : index === 1 ? 'sm' : index === 2 ? 'md' : 'lg'}>
      <div className="feature-card h-full bg-white border-white/50 shadow-lg">
        <div className="mb-4 p-3 w-12 h-12 flex items-center justify-center rounded-full bg-wattzy-lightBlue">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </ScrollReveal>
  );
};

const Solution = () => {
  const solutions = [
    {
      icon: <Zap className="text-wattzy-blue" size={24} />,
      title: "AI-Driven Placement",
      description: "Our machine learning algorithms identify the best spots for charger installation based on traffic patterns and user demand."
    },
    {
      icon: <Link className="text-wattzy-blue" size={24} />,
      title: "EV Charger Marketplace",
      description: "We connect charging station providers with businesses and property owners looking to host charging stations."
    },
    {
      icon: <Calendar className="text-wattzy-blue" size={24} />,
      title: "Seamless Booking",
      description: "EV users can book chargers in real-time with integrated payments, eliminating waiting and improving convenience."
    },
    {
      icon: <LayoutGrid className="text-wattzy-blue" size={24} />,
      title: "End-to-End Ecosystem",
      description: "Our comprehensive platform solves problems for providers, businesses, and users in one integrated solution."
    }
  ];

  return (
    <section id="solution" className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            Our Approach
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">The Wattzy Platform</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            We've built a comprehensive ecosystem that solves the key challenges facing the EV charging industry today.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              index={index}
            />
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <a href="#how-it-works" className="btn-primary inline-flex items-center justify-center">
              See How It Works
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Solution;
