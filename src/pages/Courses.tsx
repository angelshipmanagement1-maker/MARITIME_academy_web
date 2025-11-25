import { useNavigate } from "react-router-dom";
import { Ship, Waves, Utensils, Compass } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  const navigate = useNavigate();

  const courseCategories = [
    {
      title: "MARITIME TRAINING COURSES",
      icon: Ship,
      description: "Comprehensive maritime training programs covering all aspects of seafaring, navigation, and ship operations.",
      color: "text-maritime-teal"
    },
    {
      title: "OFFSHORE TRAINING COURSES",
      icon: Waves,
      description: "Specialized offshore training programs for oil and gas platforms, wind farms, and deep-sea operations.",
      color: "text-maritime-navy-light"
    },
    {
      title: "MARITIME CATERING COURSES",
      icon: Utensils,
      description: "Professional culinary and hospitality training specifically designed for maritime catering services.",
      color: "text-maritime-gold"
    },
    {
      title: "TYPES OF ECDIS COURSES",
      icon: Compass,
      description: "Electronic Chart Display and Information System training courses for modern navigation technology.",
      color: "text-secondary"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Value Added Courses
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Our Courses
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courseCategories.map((category, index) => {
            const Icon = category.icon;
            const isMaritime = category.title === "MARITIME TRAINING COURSES";
            const isOffshore = category.title === "OFFSHORE TRAINING COURSES";
            const isCatering = category.title === "MARITIME CATERING COURSES";
            const isEcdis = category.title === "TYPES OF ECDIS COURSES";
            const isClickable = isMaritime || isOffshore || isCatering || isEcdis;
            const navigatePath = isMaritime ? '/courses/maritime' : isOffshore ? '/courses/offshore' : isCatering ? '/courses/catering' : isEcdis ? '/courses/ecdis' : undefined;
            return (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-maritime-teal ${isClickable ? 'cursor-pointer' : ''}`}
                onClick={isClickable ? () => navigate(navigatePath) : undefined}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-muted ${category.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  {isClickable && (
                    <p className="text-sm text-primary mt-2">
                      Click to view all courses
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Choose Our Courses?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center leading-relaxed">
                All our courses are designed to meet international maritime standards and are recognized globally.
                We provide hands-on training with modern equipment and experienced instructors who bring
                real-world expertise to the classroom.
              </p>
              <p className="text-center leading-relaxed">
                Upon completion, students receive internationally recognized certifications that open doors
                to exciting career opportunities in the maritime industry worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;
