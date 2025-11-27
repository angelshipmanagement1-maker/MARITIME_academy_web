import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          CONTACT US
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="text-maritime-teal hover:text-maritime-teal-light transition-colors break-all sm:break-normal"
                >
                  info@angelmaritimeacademy.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-maritime-teal">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-maritime-gold" />
                  <span>Operational Address</span>
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

            <Card className="border-maritime-teal">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-maritime-gold" />
                  <span>Registered Address</span>
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
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="border-maritime-teal">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-maritime-gold" />
                <span>Find Us Here</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 rounded-b-lg overflow-hidden">
                <iframe
                  src={`https://maps.google.com/maps?q=19.01444909250755,73.04052405820048&z=17&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Angel Maritime Academy Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
