
import { useState } from 'react';
import { Check, Send } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailSubscribe, setEmailSubscribe] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSubscribe) {
      // In a real app, you would send this to your backend
      console.log('Subscription email:', emailSubscribe);
      setIsSubscribed(true);
      setEmailSubscribe('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-wattzy-softGray to-white">
      <div className="section-container">
        <ScrollReveal>
          <div className="highlight-chip mx-auto mb-6">
            Get In Touch
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <h2 className="section-title">Join the EV Revolution</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="section-subtitle">
            Interested in partnerships, investment opportunities, or learning more about Wattzy? We'd love to hear from you.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <ScrollReveal direction="right">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-xl font-medium mb-6">Contact Us</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-wattzy-blue/40 focus:border-wattzy-blue focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-wattzy-blue/40 focus:border-wattzy-blue focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground/80 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-wattzy-blue/40 focus:border-wattzy-blue focus:outline-none transition-all"
                    placeholder="Your company or organization"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-wattzy-blue/40 focus:border-wattzy-blue focus:outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    isSubmitted ? 'bg-green-500 hover:bg-green-500' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : isSubmitted ? (
                    <>
                      <Check size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border h-full flex flex-col">
              <h3 className="text-xl font-medium mb-6">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest updates on Wattzy's progress, EV industry insights, and exclusive partnership opportunities.
              </p>
              
              <form onSubmit={handleSubscribe} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={emailSubscribe}
                    onChange={(e) => setEmailSubscribe(e.target.value)}
                    required
                    className="flex-grow px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-wattzy-blue/40 focus:border-wattzy-blue focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className={`btn-primary whitespace-nowrap ${
                      isSubscribed ? 'bg-green-500 hover:bg-green-500' : ''
                    }`}
                  >
                    {isSubscribed ? (
                      <>
                        <Check size={18} className="inline-block mr-1" />
                        Subscribed!
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
              </form>
              
              <div className="mt-auto">
                <h4 className="font-medium mb-4">Connect With Us</h4>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="p-3 bg-gray-100 hover:bg-wattzy-lightBlue rounded-full transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wattzy-blue">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-gray-100 hover:bg-wattzy-lightBlue rounded-full transition-colors" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wattzy-blue">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-gray-100 hover:bg-wattzy-lightBlue rounded-full transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wattzy-blue">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
