import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EcdisCourses = () => {
  const ecdisCourses = [
        {
      title: "ECDIS (STCW A-II/1 IMO/MC 1.27)",
      description: "Training on Electronic Chart Display and Information System (ECDIS) for safe navigation, including chart usage, route planning, and compliance with STCW and IMO regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "JRC JAN-701/701B/901/901B/901M/2000",
      description: "Type-specific ECDIS training for JRC models, focusing on operation, route planning, and practical navigation exercises onboard or in simulators.",
      image: "/placeholder.svg"
    },
    {
      title: "Sperry Marine",
      description: "Operational training on Sperry Marine ECDIS systems, covering navigation, route planning, chart management, and safety compliance.",
      image: "/placeholder.svg"
    },
    {
      title: "TRANSAS NAVIGATOR SAILOR 4000 ECDIS",
      description: "Hands-on training for Transas Navigator Sailor 4000 ECDIS, including chart plotting, route monitoring, and operational procedures for safe navigation.",
      image: "/placeholder.svg"
    },
    {
      title: "Chatworld",
      description: "Type-specific ECDIS training for Chatworld systems, covering operational functions, voyage planning, and compliance with maritime navigation standards.",
      image: "/placeholder.svg"
    },
    {
      title: "Sam Electronics",
      description: "Training on Sam Electronics ECDIS models with emphasis on practical operation, route planning, and safe navigation practices.",
      image: "/placeholder.svg"
    },
    {
      title: "Martek",
      description: "Hands-on ECDIS training for Martek systems, including chart usage, route monitoring, and safety compliance in line with IMO regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "Consillium",
      description: "Operational ECDIS training for Consillium systems focusing on practical navigation, chart management, and voyage planning.",
      image: "/placeholder.svg"
    },
    {
      title: "Imteck",
      description: "Type-specific ECDIS training for Imteck systems, emphasizing navigation safety, route planning, and proper chart management.",
      image: "/placeholder.svg"
    },
    {
      title: "Kelvin Hughes",
      description: "ECDIS operational training for Kelvin Hughes systems, covering practical usage, route planning, and compliance with maritime safety standards.",
      image: "/placeholder.svg"
    },
    {
      title: "Simrad",
      description: "Hands-on training for Simrad ECDIS systems, focusing on chart operation, navigation planning, and safe voyage execution.",
      image: "/placeholder.svg"
    },
    {
      title: "Maris",
      description: "ECDIS training for Maris systems, including chart usage, route planning, and monitoring to ensure safe navigation practices.",
      image: "/placeholder.svg"
    },
    {
      title: "OPERATIONAL USE OF ECDIS",
      description: "Training on practical operational procedures for ECDIS, including route planning, chart management, alarms, and compliance with IMO navigation regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "RADAR OBSERVER SIMULATOR & ARPA",
      description: "Simulator-based training on radar operation and Automatic Radar Plotting Aids (ARPA), covering target tracking, collision avoidance, and maritime safety procedures.",
      image: "/placeholder.svg"
    },
    {
      title: "TOTEM PLUS TYPE SPECIFIC ECDIS TRAINING",
      description: "Type-specific training for TOTEM PLUS ECDIS systems, including navigation, route planning, and operational safety exercises.",
      image: "/placeholder.svg"
    },
    {
      title: "WARTSILA SAM ECDIS PILOT PLATINUM",
      description: "Hands-on training for Wartsila SAM ECDIS Pilot Platinum systems, focusing on practical navigation, route planning, and chart monitoring.",
      image: "/placeholder.svg"
    },
    {
      title: "Voyage Planning using ECDIS",
      description: "Training on creating safe and efficient voyage plans using ECDIS, including route selection, risk assessment, and compliance with international navigation regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "DGT (TRANSPORT OF DANGEROUS GOODS - HAZMAT)",
      description: "Course on handling, transporting, and documenting dangerous goods and hazardous materials in compliance with international maritime regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "Radar Navigation, Plotting and ARPA",
      description: "Comprehensive training in radar navigation, manual plotting, and ARPA use for collision avoidance and safe maritime operations.",
      image: "/placeholder.svg"
    },
    {
      title: "Automatic Radar Plotting Aids",
      description: "Training on ARPA systems to track targets, predict movements, and enhance situational awareness for safe navigation.",
      image: "/placeholder.svg"
    },
    {
      title: "Radar Observer Simulator",
      description: "Simulator-based training for radar observers covering target detection, tracking, collision avoidance, and navigation safety procedures.",
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