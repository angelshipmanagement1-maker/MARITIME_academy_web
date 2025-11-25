import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          CONTACT US
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-maritime-teal">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-maritime-gold" />
                  <span>Phone Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-foreground">022 31494349</p>
                <p className="text-foreground">+91 7977399459</p>
                <p className="text-foreground">+91 7208319719</p>
              </CardContent>
            </Card>

            <Card className="border-maritime-teal">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-maritime-gold" />
                  <span>Email Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:info@angelmaritimeacademy.com"
                  className="text-maritime-teal hover:text-maritime-teal-light transition-colors"
                >
                  info@angelmaritimeacademy.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-maritime-teal">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-maritime-gold" />
                  <span>Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Off. No. 3, Punit Tower 2 Co OP HSG Ltd.,<br />
                  Near K Star Hotel, Sector 11,<br />
                  CBD Belapur, Navi Mumbai-400614
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-maritime-teal">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-maritime-teal hover:bg-maritime-teal-light text-primary-foreground"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section - Placeholder */}
        <div className="mt-12">
          <Card className="border-maritime-teal">
            <CardContent className="p-0">
              <div className="h-96 bg-muted rounded-b-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Map integration will be added here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
