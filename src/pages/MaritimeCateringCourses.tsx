import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MaritimeCateringCourses = () => {
  const cateringCourses = [
    {
      title: "Food And Hygienic Coures",
      description: "General Introduction.Topics related to Food Poisoning and Food-Borne Disease.Preventing Physical Contamination of Food.Proper Food Storage and Temperature Control.Techniques for Food Preservation.Considerations in the Design and Construction of Food Premises and Equipment.The importance of Cleaning...",
      image: "/MaritimeCateringCourses/Food And Hygienic Coures.png"
    },
    {
      title: "Advance Food And Hygienic Coures",
      description: "The course successfully meets the minimum requirements outlined in Resolution ADM No. 068-2013, specifically addressing Regulation 3.2, Rule A3.2, and Line B3.2 in accordance with the Maritime Labour Convention (MLC), 2006. It covers a range of important topics, commencing with a general introduction before delving into more specific subjects...",
      image: "/MaritimeCateringCourses/Advance Food And Hygienic Coures.webp"
    },
    {
      title: "Food Handling Coures",
      description: "The course is designed to meet the essential standards set forth in Resolution ADM No. 068-2013, particularly addressing Regulation 3.2, Rule A3.2, and Line B3.2 in accordance with the Maritime Labour Convention (MLC), 2006. It encompasses a broad spectrum of vital subjects, commencing with a comprehensive introduction and extending to more specific areas of knowledge...",
      image: "/MaritimeCateringCourses/Food Handling Coures.jpeg"
    },
    {
      title: "Advance Food Handling Course",
      description: "The course fully complies with the minimal stipulations outlined in Resolution ADM No. 068-2013, specifically addressing Regulation 3.2, Rule A3.2, and Line B3.2 as laid out in the Maritime Labour Convention (MLC), 2006. It offers a comprehensive educational experience, commencing with a broad introductory perspective and then proceeding to delve into specific areas of critical knowledge.",
      image: "/MaritimeCateringCourses/Advance Food Handling Course.png"
    },
    {
      title: "Hazards Analysis And Critical Control Point (HACCP)",
      description: "The course curriculum revolves around the HACCP system, a proactive approach to ensuring food safety. It initiates with an introduction to the HACCP system, shedding light on its fundamental principles and providing guidelines for its practical implementation. Participants will gain insights into how to effectively apply the principles of the HACCP system in various food safety scenarios. This comprehensive program spans over a duration of two days, equipping attendees with a thorough understanding of this crucial food safety framework and its practical application.",
      image: "/MaritimeCateringCourses/Hazards Analysis And Critical Control Point.webp"
    },
    {
      title: "Housekeeping Training Program",
      description: "The course curriculum covers a wide array of topics essential for effective housekeeping. It begins with an introduction to the principles of housekeeping, guiding participants on how to prepare for manual housekeeping operations. The course then proceeds to instruct on the manual cleaning of various areas, including floors, toilets, bathrooms, furniture, fittings, and other vertical surfaces, along with the replenishment of supplies.",
      image: "/MaritimeCateringCourses/Housekeeping Training Program.jpg"
    },
    {
      title: "Cook's Trade Test",
      description: "The Ship Cook Trade Test is conducted in accordance with company specifications and requirements. Our Training Center oversees the culinary evaluation, which includes various aspects of the cuisine test. This comprehensive examination takes place over the course of one day, ensuring that candidates are thoroughly assessed based on industry standards and company expectations.",
      image: "/MaritimeCateringCourses/Cook's Trade Test.jpg"
    },
    {
      title: "Messman/Steward Training",
      description: "This course has been meticulously designed to align with the stipulated requirements outlined in MLC 2006 Regulation 3.2, which specifically addresses the essential aspects of food and catering, including training courses, food and personal hygiene, food storage, stock control, environmental protection, and catering health and safety. It is tailored to meet the needs of stewards working on merchant vessels, ensuring their compliance with the MLC 2006 standards. The course encompasses various critical subjects, commencing with an introduction to...",
      image: "/MaritimeCateringCourses/Messman-Steward Training.webp"
    },
    {
      title: "Cookery Classes (For Fresher /Saloon Rating)",
      description: "This course is meticulously crafted to adhere to the stipulations set forth in MLC 2006 Regulation 3.2, focusing on Food and Catering. It encompasses a comprehensive training program that encompasses practical cooking, food and personal hygiene, food storage, stock control, environmental protection, and catering health and safety.",
      image: "/MaritimeCateringCourses/Cookery Classes For Fresher-Saloon Rating.webp"
    },
    {
      title: "Ship Cook Coures For Chief Cook",
      description: "This specialized course, whether in Indian, Continental, Filipino, Italian, or Bakery cuisine, is designed to meet the specific criteria outlined in Resolution ADM No-068. 2013, Regulation 3.2, Rule A 3.2, as mandated by the Maritime Labour Convention (MLC) 2006. It provides comprehensive coverage of essential subjects crucial to catering in the maritime industry ...",
      image: "/MaritimeCateringCourses/Ship Cook Coures For Chief Cook.jpg"
    },
    {
      title: "Laundryman Training Program",
      description: "The course curriculum spans a comprehensive array of topics essential for effective ship service activities. Over a duration of six days, participants will engage with subjects such as the administration of ship service activities, the organization and management of laundry operations, understanding fibers and fabrics, techniques for extracting and drying, flatwork ironing, pressing, and finishing.",
      image: "/MaritimeCateringCourses/Laundryman Training Program.png"
    },
    {
      title: "Bakery",
      description: "Training focused on baking techniques, including breads, pastries, cakes, and desserts. Covers hygiene, ingredient handling, and kitchen safety. Practical sessions emphasize quality and presentation.",
      image: "/MaritimeCateringCourses/Bakery.jpg"
    },
    {
      title: "CERTIFICATE COURSE IN HOUSEKEEPING MANAGEMENT",
      description: "A formal program teaching professional housekeeping skills for hospitality and shipboard settings. Includes cleaning procedures, inventory management, team supervision, and maintaining hygiene standards.",
      image: "/MaritimeCateringCourses/CERTIFICATE COURSE IN HOUSEKEEPING MANAGEMENT.webp"
    },
    {
      title: "CERTIFICATE OF PROFICIENCY IN SHIPS COOK",
      description: "An official certification for ship cooks, demonstrating the ability to manage galley operations, prepare meals, maintain hygiene standards, and follow safety regulations aboard vessels.",
      image: "/MaritimeCateringCourses/CERTIFICATE OF PROFICIENCY IN SHIPS COOK.jpg"
    },
    {
      title: "CULINARY",
      description: "Practical and theoretical training in cooking, food preparation, menu planning, and kitchen management. Covers hygiene, nutrition, and modern culinary techniques for professional kitchens.",
      image: "/MaritimeCateringCourses/CULINARY.jpg"
    },
    {
      title: "FOOD HANDLING - HYGIENE & SAFETY",
      description: "Training on safe food handling practices, personal hygiene, preventing contamination, and complying with food safety regulations. Emphasizes both theory and practical application.",
      image: "/MaritimeCateringCourses/FOOD HANDLING - HYGIENE & SAFETY.jpg"
    },
    {
      title: "Food Handling and Food Hygiene",
      description: "Covers proper food storage, handling, preparation, and hygiene practices to ensure safe consumption and prevent foodborne illnesses. Practical examples are included.",
      image: "/MaritimeCateringCourses/Food Handling and Food Hygiene.png"
    },
    {
      title: "HACCP - Level 3",
      description: "Advanced training in Hazard Analysis and Critical Control Points (HACCP), focusing on identifying food hazards, controlling risks, and ensuring food safety compliance at a management level.",
      image: "/MaritimeCateringCourses/HACCP - Level 3.avif"
    },
    {
      title: "HACCP Training Program",
      description: "Comprehensive program on implementing HACCP principles in food operations. Teaches hazard analysis, monitoring critical control points, and maintaining food safety standards.",
      image: "/MaritimeCateringCourses/HACCP Training Program.jpg"
    },
    {
      title: "Housekeeping (Include practical with food and accommodation)",
      description: "Practical training in cleaning and maintaining both accommodation and food service areas. Includes proper sanitation, use of cleaning equipment, and maintaining hygienic standards in shipboard or hospitality environments.",
      image: "/MaritimeCateringCourses/Housekeeping - Include practical with food and accommodation.webp"
    },
    {
      title: "MESSMAN & GALLEY STAFF TRAINING PROGRAM",
      description: "Training for messmen and galley staff covering food service, cleaning, inventory management, and hygiene practices. Emphasizes teamwork and efficient kitchen operations.",
      image: "/MaritimeCateringCourses/MESSMAN & GALLEY STAFF TRAINING PROGRAM.jpg"
    },
    {
      title: "ORIENTATION COURSE FOR CATERING PERSONNEL (OCCP)",
      description: "Introductory course for new catering staff on shipboard food operations. Covers basic cooking, hygiene, safety, and familiarization with galley equipment and procedures.",
      image: "/MaritimeCateringCourses/ORIENTATION COURSE FOR CATERING PERSONNEL.jpg"
    },
    {
      title: "Ship’s Cook",
      description: "Practical and theoretical training for ship cooks, covering meal planning, preparation, food storage, hygiene, and compliance with maritime food safety standards.",
      image: "/MaritimeCateringCourses/Ship’s Cook.webp"
    },
    {
      title: "SHIPBOARD CATERING MANAGEMENT COURSE",
      description: "Advanced course for managing shipboard catering operations, including menu planning, galley management, budgeting, food procurement, hygiene, and staff supervision.",
      image: "/MaritimeCateringCourses/SHIPBOARD CATERING MANAGEMENT COURSE.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Maritime Catering Courses
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Professional culinary and hospitality training
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cateringCourses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <img src={course.image} alt={course.title} className="w-full h-32 object-contain rounded-md mb-4" />
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

export default MaritimeCateringCourses;