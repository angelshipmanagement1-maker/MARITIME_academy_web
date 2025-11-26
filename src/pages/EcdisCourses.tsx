import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EcdisCourses = () => {
  const ecdisCourses = [
    {
      title: "ECDIS (STCW A-II/1 IMO/MC 1.27)",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "JRC JAN-701/701B/901/901B/901M/2000",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Sperry Marine",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "TRANSAS NAVIGATOR SAILOR 4000 ECDIS",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Chatworld",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Sam Electronics",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Martek",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Consillium",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Imteck",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Kelvin Hughes",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Simrad",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Maris",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "OPERATIONAL USE OF ECDIS",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "RADAR OBSERVER SIMULATOR & ARPA",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "TOTEM PLUS TYPE SPECIFIC ECDIS TRAINING",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "WARTSILA SAM ECDIS PILOT PLATINUM",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Voyage Planning using ECDIS",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "DGT (TRANSPORT OF DANGEROUS GOODS - HAZMAT)",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Radar Navigation, Plotting and ARPA",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "RADAR OBSERVER SIMULATOR & ARPA",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Automatic Radar Plotting Aids",
      description: "",
      image: "/placeholder.svg"
    },
    {
      title: "Radar Observer Simulator",
      description: "",
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