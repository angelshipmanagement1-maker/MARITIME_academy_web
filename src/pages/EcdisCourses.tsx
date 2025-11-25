import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EcdisCourses = () => {
  const ecdisCourses = [
    
    {
      title: "TYPE SPECIFIC ECDIS",
      description: "Type-specific ECDIS training focuses on particular ECDIS system models and their unique features. This course provides in-depth knowledge of specific ECDIS equipment and manufacturer-specific functionalities.",
      image: "/placeholder.svg"
    },
    {
      title: "FURUNO TYPE-SPECIFIC ECDIS",
      description: "Specialized training for Furuno ECDIS systems, covering the specific features, operation, and maintenance of Furuno navigation equipment. This course ensures proficiency in Furuno's ECDIS technology.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          ECDIS Courses
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Electronic Chart Display and Information System training
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {ecdisCourses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
                <CardTitle className="text-lg">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcdisCourses;