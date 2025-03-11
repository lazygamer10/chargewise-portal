
import { AlertTriangle, MapPin, UserX, Unlink } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const ProblemCard = ({ 
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

const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle className="text-wattzy-blue" size={24} />,
      title: "Poor Distribution",
      description: "Charging stations are metro-heavy. Tier-2 cities and highways remain underserved."
    },
    {
      icon: <Unlink className="text-wattzy-blue" size={24} />,
      title: "Disconnected Stakeholders",
      description: "Businesses willing to install chargers lack connection to providers."
    },
    {
      icon: <MapPin className="text-wattzy-blue" size={24} />,
      title: "Location Challenges",
      description: "EV charger providers struggle to find high demand locations for optimal placement."
    },
    {
      icon: <UserX className="text-wattzy-blue" size={24} />,
      title: "User Frustration",
      description: "Users experience long wait times and lack real-time booking options."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-wattzy-softGray">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            The Challenge
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">The EV Infrastructure Gap</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            As electric vehicles surge in popularity, the charging infrastructure is struggling to keep pace, creating significant gaps in the market.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {problems.map((problem, index) => (
            <ProblemCard 
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
