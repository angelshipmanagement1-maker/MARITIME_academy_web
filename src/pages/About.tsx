import { Award, Target, BookOpen, Users, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-maritime.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const sections = [
    {
      title: "Our History",
      icon: BookOpen,
      content: "Angel Maritime Academy was founded with a clear vision: to create a world-class maritime training institute that bridges the gap between education and industry requirements. Over the years, we have grown into a trusted name in maritime education, known for our commitment to excellence and student success."
    },
    {
      title: "Accreditation and Recognition",
      icon: Shield,
      content: "We are proud to be recognized by leading maritime authorities and organizations. Our courses are approved by relevant maritime bodies, ensuring that our certifications are accepted worldwide. This recognition is a testament to our dedication to maintaining the highest standards of maritime education."
    },
    {
      title: "Our Mission",
      icon: Target,
      content: "Our mission is to empower individuals with the knowledge, skills, and confidence needed to excel in maritime careers. We strive to create a learning environment that fosters innovation, professionalism, and lifelong learning."
    },
    {
      title: "Expert Faculty and Staff",
      icon: Users,
      content: "At Angel Maritime Academy, we believe that great teachers make great students. Our faculty comprises seasoned maritime professionals with years of industry experience. They bring real-world insights into the classroom, making learning both practical and engaging."
    }
  ];

  const programs = [
    "Pre-Sea Training Programs",
    "STCW Courses",
    "Advanced Maritime Certifications",
    "Offshore Safety Training",
    "ECDIS Training",
    "Maritime Catering Courses",
    "Specialized Technical Training"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            ABOUT ANGEL MARITIME ACADEMY PVT. LTD.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Introduction */}
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              Angel Maritime Academy Pvt. Ltd. is a premier maritime training institution dedicated to providing world-class education and training to aspiring maritime professionals. Since our establishment, we have been committed to excellence in maritime education, helping thousands of students achieve their dreams of working in the global maritime industry.
            </p>
          </div>

          {/* Key Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="border-maritime-teal hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-maritime-gold/10">
                        <Icon className="h-8 w-8 text-maritime-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3">{section.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Programs Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Our Programs and Courses
            </h2>
            <Card className="border-maritime-teal">
              <CardContent className="pt-6">
                <p className="text-foreground mb-6 leading-relaxed">
                  We offer a comprehensive range of maritime courses designed to meet the diverse needs of students at various stages of their careers. Our programs include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programs.map((program, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-maritime-teal flex-shrink-0" />
                      <span className="text-foreground">{program}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information Accordion */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Choose Us
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-maritime-teal rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary">
                  State-of-the-Art Facilities
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our training center is equipped with modern simulators, laboratories, and equipment that replicate real-world maritime environments. This allows students to gain hands-on experience in a safe and controlled setting, preparing them for the challenges they will face at sea.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-maritime-teal rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary">
                  Industry Connections and Placement Support
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We have established strong partnerships with leading shipping companies, manning agencies, and maritime organizations. These connections provide our students with valuable networking opportunities, internships, and job placements. Our dedicated placement cell works tirelessly to ensure that every graduate finds suitable employment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-maritime-teal rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary">
                  Student-Centric Approach
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  At Angel Maritime Academy, students are at the heart of everything we do. We maintain small class sizes to ensure personalized attention and support. Our faculty and staff are always available to help students with their academic and career-related queries.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-maritime-teal rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-primary">
                  Continuous Learning and Development
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  The maritime industry is constantly evolving, and so are we. We regularly update our curriculum to reflect the latest industry trends, regulations, and technologies. Additionally, we offer refresher courses and advanced training programs for professionals looking to upgrade their skills.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Goals Section */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-12 w-12 text-maritime-gold" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Our Goals</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="leading-relaxed">
                <strong>Excellence in Education:</strong> To provide the highest quality maritime education that meets international standards.
              </p>
              <p className="leading-relaxed">
                <strong>Industry Alignment:</strong> To stay ahead of industry trends and ensure our courses remain relevant and up-to-date.
              </p>
              <p className="leading-relaxed">
                <strong>Global Recognition:</strong> To establish Angel Maritime Academy as a globally recognized name in maritime education.
              </p>
              <p className="leading-relaxed">
                <strong>Student Success:</strong> To support our students in achieving their career goals and becoming leaders in the maritime industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Join the Angel Maritime Academy Family
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Whether you are just starting your maritime career or looking to advance your skills, Angel Maritime Academy is here to guide you every step of the way. We invite you to explore our programs, meet our team, and discover how we can help you achieve your dreams.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
