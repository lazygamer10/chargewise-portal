
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold font-display bg-gradient-to-r from-wattzy-blue to-wattzy-green text-transparent bg-clip-text">
                Wattzy
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Connecting EV charging providers with the right locations through AI-powered site selection, seamless booking, and business integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-100 hover:bg-wattzy-lightBlue rounded-full transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wattzy-blue">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="p-2 bg-gray-100 hover:bg-wattzy-lightBlue rounded-full transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wattzy-blue">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="p-2 bg-gray-100 hover:bg-wattzy-lightBlue rounded-full transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wattzy-blue">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="text-muted-foreground hover:text-wattzy-blue transition-colors">The Problem</a>
              </li>
              <li>
                <a href="#solution" className="text-muted-foreground hover:text-wattzy-blue transition-colors">Our Solution</a>
              </li>
              <li>
                <a href="#market" className="text-muted-foreground hover:text-wattzy-blue transition-colors">Market Opportunity</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-wattzy-blue transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-wattzy-blue transition-colors">Team</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-wattzy-blue transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-wattzy-blue shrink-0 mt-1" size={18} />
                <span className="text-muted-foreground">IIT Madras Research Park, Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-wattzy-blue shrink-0" size={18} />
                <a href="mailto:info@wattzy.com" className="text-muted-foreground hover:text-wattzy-blue transition-colors">info@wattzy.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-wattzy-blue shrink-0" size={18} />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-wattzy-blue transition-colors">+91 9876543210</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Wattzy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-wattzy-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-wattzy-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
