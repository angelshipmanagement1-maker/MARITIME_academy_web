import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Angel Maritime Academy</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Premier maritime training institution offering certified courses in maritime, offshore, and catering training.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>022 31494349</p>
                  <p>+91 7977399459 / +91 7208319719</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>info@angelmaritimeacademy.com</p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>
                  Off. No. 3, Punit Tower 2 Co OP HSG Ltd.,
                  Near K Star Hotel, Sector 11, CBD Belapur,
                  Navi Mumbai-400614
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-maritime-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-maritime-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-maritime-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Legal</h4>
              <div className="text-sm">
                <a
                  href="/terms"
                  className="block hover:text-maritime-gold transition-colors"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Angel Maritime Academy Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
