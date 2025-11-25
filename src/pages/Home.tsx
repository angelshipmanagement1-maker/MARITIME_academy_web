import { Anchor, Award, Users, Building2, TrendingUp, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-ship.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            ANGEL MARITIME ACADEMY PVT. LTD.
          </h1>
          <p className="text-xl md:text-2xl font-light animate-fade-in">
            Your Gateway to Maritime Excellence
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            WELCOME TO ANGEL MARITIME ACADEMY PVT. LTD.
          </h2>
          <div className="prose prose-lg max-w-none text-foreground space-y-4">
            <p>
              Welcome to Angel Maritime Academy, your gateway to a world of opportunities in the maritime industry. Established with a vision to provide top-notch maritime education and training, we are committed to shaping the future of aspiring maritime professionals.
            </p>
            <p>
              At Angel Maritime Academy, we understand that the maritime sector is dynamic and ever-evolving. That's why our courses are designed to meet international standards and industry demands, ensuring that our students are well-prepared for successful careers at sea and ashore.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-maritime-teal hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-maritime-gold mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Mission and Legacy</h3>
                <p className="text-muted-foreground">
                  Our mission is to empower individuals with the knowledge, skills, and confidence needed to excel in maritime careers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-maritime-teal hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-maritime-gold mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Our faculty consists of experienced maritime professionals who bring real-world insights to the classroom.
                </p>
              </CardContent>
            </Card>

            <Card className="border-maritime-teal hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-maritime-gold mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">State-of-the-Art Facilities</h3>
                <p className="text-muted-foreground">
                  We offer modern training facilities equipped with the latest technology and equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-maritime-teal hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-maritime-gold mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">International Standards</h3>
                <p className="text-muted-foreground">
                  Our courses meet international maritime standards and are recognized globally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-maritime-teal hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-maritime-gold mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Career Growth</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive career support and placement assistance to our graduates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-maritime-teal hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Anchor className="h-12 w-12 text-maritime-gold mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Industry Partnerships</h3>
                <p className="text-muted-foreground">
                  Strong connections with leading maritime companies ensure excellent job opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Academic Excellence
          </h2>
          <div className="prose prose-lg max-w-none text-foreground space-y-4">
            <p>
              We offer a comprehensive range of maritime courses, from pre-sea training to advanced certification programs. Each course is meticulously crafted to cover theoretical knowledge as well as hands-on practical training.
            </p>
            <p>
              Whether you aspire to become a deck officer, an engineer, or pursue a specialized role in the maritime sector, we have the right program for you.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Partnerships Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Industry Partnerships
          </h2>
          <p className="text-lg leading-relaxed">
            We have established strong relationships with leading shipping companies, maritime organizations, and industry experts. These partnerships facilitate internships, placements, and collaborative projects, giving our students a competitive edge in the job market.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Join Us on Your Maritime Journey
          </h2>
          <p className="text-lg text-foreground mb-8">
            Choosing Angel Maritime Academy means choosing a future filled with exciting opportunities and rewarding experiences. Join us and embark on a journey that will not only shape your career but also contribute to the growth of the maritime industry.
          </p>
          <p className="text-lg font-semibold text-primary">
            We look forward to welcoming you aboard!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
