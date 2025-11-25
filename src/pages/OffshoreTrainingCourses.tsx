import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OffshoreTrainingCourses = () => {
  const offshoreCourses = [
    {
      title: "Anchor Handling",
      description: "The course has been designed in accordance with the international convention STCW, which incorporates the Manila Amendments of 2010. Section B-V/E of this convention emphasizes the significance of training for officers and masters engaged in anchor handling operations. Furthermore, this course aligns with the guidelines provided by NWEA (Northwest European Activity) for the Safe Management of Offshore Supply and Rig Move Operations, specifically in accordance with section 9.1.4.",
      image: "/placeholder.svg"
    },
    {
      title: "Winch Operator",
      description: "The course delivers a comprehensive overview of winch operations performed during anchor handling and towing activities, encompassing emergency procedures. It encompasses various aspects such as the utilization and operation of different types of winches. Additionally, the course covers the introduction to winch system components and their layout, along with terminology, phrases, and abbreviations used in this context. Participants will also gain insights into the practical uses and limitations of winch computers, as well as learn about winch capacities and monitoring wire length, tension control, and load monitoring techniques.",
      image: "/placeholder.svg"
    },
    {
      title: "Offshore Rigging Scaffolding Tranning",
      description: "The course encompassed a comprehensive curriculum, incorporating both audio and video instructional materials, along with hands-on practical training in various areas. These topics covered rigging principles, terminology, and load management, as well as the inspection techniques for rigging equipment. Additionally, the course delved into the planning of lifting operations and explored requirements related to elevated areas, portable ladders, step ladders, scaffolding components, and the common requirements applicable to all types of scaffolds, including tube and coupler scaffolds, mobile scaffolds, tower scaffolds, and fabricated tubular frames.",
      image: "/placeholder.svg"
    },
    {
      title: "Banksman And Slinger Traning",
      description: "The course incorporates a blend of theoretical and hands-on sessions, where participants are expected to showcase their grasp of the training program's content. This includes comprehension of pertinent legislation and safe work systems, the ability to prepare lifting plans, conduct pre-use inspections of equipment, and safely and accurately operate equipment. It also encompasses the understanding of slinging principles and terminology.",
      image: "/placeholder.svg"
    },
    {
      title: "OEHTM",
      description: "The course covers various aspects of offshore fire and emergency response preparations. It delves into the responsibilities of Emergency Helideck Team Members, the equipment and procedures relevant to helicopter emergencies on the helideck, and the safe utilization and upkeep of helideck emergency equipment. Additionally, it provides instruction on dealing with various fire types, with a particular focus on fuel and electrical fires. The course also addresses the evacuation of individuals who may be trapped in emergency situations. The program has a duration of three days.",
      image: "/placeholder.svg"
    },
    {
      title: "HLO/HLA",
      description: "The purpose of this training is to provide delegates with the foundational knowledge, comprehension, and competencies necessary to execute the responsibilities of an Offshore Helicopter Landing Officer (HLO) or Helicopter Landing Assistant (HLA) in a secure and proficient manner. The course encompasses several key topics, including offshore helideck regulations and guidelines, the identification and management of helicopter and helideck hazards, and the duties and obligations of HLOs and HLAs during helicopter landings.",
      image: "/placeholder.svg"
    },
    {
      title: "Lifting And Hosting",
      description: "Evaluation of brakes, clutches, sheaves, and wire rope assemblies. Review of design studies and calculations. Conducting both dynamic and static load testing. Inspection of all structural load-bearing components, including sheaves. Examination of crane girders, rails, and columns for ensuring structural soundness in overhead cranes.Comprehensive surveys of line levels and span crane gantries.Non-destructive testing (NDT) of load hooks for..",
      image: "/placeholder.svg"
    },
    {
      title: "H2S",
      description: "Introduction, Hazards, and Characteristics of H2S.Detection Methods, both old and new.Precautions and Safety Measures for H2S handling and location safety.Advanced techniques for reducing H2S concentration on the drill floor.Understanding the role of CMS (Control and Monitoring System), SCBA (Self-Contained Breathing Apparatus), and various types of protective equipment. Exploring the physical and chemical properties of H2S. Developing contingency plans for managing H2S-related incidents.",
      image: "/placeholder.svg"
    },
    {
      title: "HUET",
      description: "Pre-Flight Familiarization.Communication Protocols with Helicopters. Procedures for Handling Helicopter Emergencies.Training for Helicopter Underwater Escape. Knowledge about Survival Equipment.Techniques for Abandonment in Emergency Situations. Rescue Procedures and a Summary of the Course.",
      image: "/placeholder.svg"
    },
    {
      title: "HAZMAT",
      description: "Understanding the construction and application of the IMDG Code.Hazard classification using the UN criteria.Familiarity with the Dangerous Goods List and Limited Quantities expectations.Knowledge of packing and tank provisions.Proficiency in consignment procedures.Comprehensive understanding of Dangerous Goods Declaration...",
      image: "/placeholder.svg"
    },
    {
      title: "Crane Operator",
      description: "Health and Safety Legislation.Foundational Crane Terminology. Principles of Stability.  Fundamental Mechanical Principles. Safe Working Loads.Utilization of British Standard Hand Signals.Understanding Rated Capacity Indicators Pre-operational Checks and Shutdown Procedures.Introduction to Wire Ropes.",
      image: "/placeholder.svg"
    },
    {
      title: "BOSIET",
      description: "This course encompasses the following elements and is designed to fulfill the essential criteria for Safety Induction, Sea Survival, Emergency First Aid, Fire Fighting and Self-Rescue, Helicopter Safety and Escape, as well as EBS requirements in accordance with IMO Resolution A.891(21). The course has a duration of three days.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Offshore Training Courses
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Specialized offshore training programs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {offshoreCourses.map((course, index) => (
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

export default OffshoreTrainingCourses;