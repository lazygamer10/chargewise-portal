
import ScrollReveal from './ui/ScrollReveal';

interface TeamMemberProps {
  name: string;
  role: string;
  affiliation: string;
  delay: 'none' | 'sm' | 'md';
}

const TeamMember = ({ name, role, affiliation, delay }: TeamMemberProps) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-wattzy-blue to-wattzy-green mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{name.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-semibold text-center mb-1">{name}</h3>
        <p className="text-center text-wattzy-blue font-medium mb-2">{role}</p>
        <p className="text-center text-sm text-muted-foreground">{affiliation}</p>
      </div>
    </ScrollReveal>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            Our Leadership
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">Meet Our Team</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            Founded by a team of passionate IIT Madras graduates dedicated to revolutionizing EV infrastructure.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <TeamMember 
            name="Deeptansh" 
            role="Co-founder" 
            affiliation="IIT Madras"
            delay="none"
          />
          <TeamMember 
            name="Ravish" 
            role="Co-founder" 
            affiliation="IIT Madras"
            delay="sm"
          />
          <TeamMember 
            name="Shishir" 
            role="Co-founder" 
            affiliation="IIT Madras"
            delay="md"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
