
import { CheckCircle2, XCircle } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

interface CompetitorData {
  feature: string;
  wattzy: boolean;
  stati: boolean;
  chargeZon: boolean;
  charze: boolean;
  evgo: boolean;
}

const CompetitiveEdge = () => {
  const competitors: CompetitorData[] = [
    {
      feature: "AI-powered location intelligence",
      wattzy: true,
      stati: false,
      chargeZon: false,
      charze: false,
      evgo: false
    },
    {
      feature: "Real-time booking system",
      wattzy: true,
      stati: false,
      chargeZon: true,
      charze: true,
      evgo: true
    },
    {
      feature: "Marketplace for multiple providers",
      wattzy: true,
      stati: false,
      chargeZon: false,
      charze: false,
      evgo: false
    },
    {
      feature: "Independent (not tied to specific hardware)",
      wattzy: true,
      stati: false,
      chargeZon: false,
      charze: false,
      evgo: false
    },
    {
      feature: "Business analytics for hosting sites",
      wattzy: true,
      stati: false,
      chargeZon: true,
      charze: false,
      evgo: true
    }
  ];

  return (
    <section id="competitive-edge" className="py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            Our Advantage
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">Competitive Landscape</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            Wattzy stands apart from competitors with our unique AI-powered marketplace approach.
          </p>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="mt-12 overflow-x-auto pb-4">
            <table className="w-full min-w-[768px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left text-muted-foreground font-medium">Features</th>
                  <th className="p-4 text-center text-wattzy-blue font-semibold">Wattzy</th>
                  <th className="p-4 text-center text-muted-foreground font-medium">Stati</th>
                  <th className="p-4 text-center text-muted-foreground font-medium">ChargeZon</th>
                  <th className="p-4 text-center text-muted-foreground font-medium">Charze</th>
                  <th className="p-4 text-center text-muted-foreground font-medium">EVgo</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4 text-left font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.wattzy ? (
                        <CheckCircle2 className="text-wattzy-blue mx-auto" size={20} />
                      ) : (
                        <XCircle className="text-muted-foreground/40 mx-auto" size={20} />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.stati ? (
                        <CheckCircle2 className="text-wattzy-blue/60 mx-auto" size={20} />
                      ) : (
                        <XCircle className="text-muted-foreground/40 mx-auto" size={20} />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.chargeZon ? (
                        <CheckCircle2 className="text-wattzy-blue/60 mx-auto" size={20} />
                      ) : (
                        <XCircle className="text-muted-foreground/40 mx-auto" size={20} />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.charze ? (
                        <CheckCircle2 className="text-wattzy-blue/60 mx-auto" size={20} />
                      ) : (
                        <XCircle className="text-muted-foreground/40 mx-auto" size={20} />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.evgo ? (
                        <CheckCircle2 className="text-wattzy-blue/60 mx-auto" size={20} />
                      ) : (
                        <XCircle className="text-muted-foreground/40 mx-auto" size={20} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay="md">
          <div className="mt-12 p-6 glass-card">
            <h3 className="text-xl font-medium mb-4 text-center">Wattzy's Unique Edge</h3>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto">
              We are an AI-powered marketplace, NOT a charging company. We help providers scale FAST by matching them with the right locations. Real-time booking ensures higher utilization and user convenience.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CompetitiveEdge;
