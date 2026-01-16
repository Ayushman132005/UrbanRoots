import { Leaf, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-xl font-semibold">UrbanRoot</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Grow Trust. Eat Organic. Bringing 100% trusted organic vegetables to urban homes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('landing')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('consultation')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Expert Consultation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('home-farming')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home Farming
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('crops')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Crop Recommendations
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Expert Consultation</li>
              <li className="text-primary-foreground/80">Home Organic Farming</li>
              <li className="text-primary-foreground/80">Crop Recommendations</li>
              <li className="text-primary-foreground/80">Surplus Produce Resale</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">hello@urbanroot.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">123 Green Street, Urban City, UC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>&copy; 2026 UrbanRoot. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-primary-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-primary-foreground transition-colors">Terms of Service</button>
            <button className="hover:text-primary-foreground transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
