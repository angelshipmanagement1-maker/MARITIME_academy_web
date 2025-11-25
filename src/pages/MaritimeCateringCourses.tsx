import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MaritimeCateringCourses = () => {
  const cateringCourses = [
    {
      title: "Food And Hygienic Coures",
      description: "General Introduction.Topics related to Food Poisoning and Food-Borne Disease.Preventing Physical Contamination of Food.Proper Food Storage and Temperature Control.Techniques for Food Preservation.Considerations in the Design and Construction of Food Premises and Equipment.The importance of Cleaning...",
      image: "/placeholder.svg"
    },
    {
      title: "Advance Food And Hygienic Coures",
      description: "The course successfully meets the minimum requirements outlined in Resolution ADM No. 068-2013, specifically addressing Regulation 3.2, Rule A3.2, and Line B3.2 in accordance with the Maritime Labour Convention (MLC), 2006. It covers a range of important topics, commencing with a general introduction before delving into more specific subjects...",
      image: "/placeholder.svg"
    },
    {
      title: "Food Handling Coures",
      description: "The course is designed to meet the essential standards set forth in Resolution ADM No. 068-2013, particularly addressing Regulation 3.2, Rule A3.2, and Line B3.2 in accordance with the Maritime Labour Convention (MLC), 2006. It encompasses a broad spectrum of vital subjects, commencing with a comprehensive introduction and extending to more specific areas of knowledge...",
      image: "/placeholder.svg"
    },
    {
      title: "Advance Food Handling Course",
      description: "The course fully complies with the minimal stipulations outlined in Resolution ADM No. 068-2013, specifically addressing Regulation 3.2, Rule A3.2, and Line B3.2 as laid out in the Maritime Labour Convention (MLC), 2006. It offers a comprehensive educational experience, commencing with a broad introductory perspective and then proceeding to delve into specific areas of critical knowledge.",
      image: "/placeholder.svg"
    },
    {
      title: "Hazards Analysis And Critical Control Point (HACCP)",
      description: "The course curriculum revolves around the HACCP system, a proactive approach to ensuring food safety. It initiates with an introduction to the HACCP system, shedding light on its fundamental principles and providing guidelines for its practical implementation. Participants will gain insights into how to effectively apply the principles of the HACCP system in various food safety scenarios. This comprehensive program spans over a duration of two days, equipping attendees with a thorough understanding of this crucial food safety framework and its practical application.",
      image: "/placeholder.svg"
    },
    {
      title: "Housekeeping Training Program",
      description: "The course curriculum covers a wide array of topics essential for effective housekeeping. It begins with an introduction to the principles of housekeeping, guiding participants on how to prepare for manual housekeeping operations. The course then proceeds to instruct on the manual cleaning of various areas, including floors, toilets, bathrooms, furniture, fittings, and other vertical surfaces, along with the replenishment of supplies.",
      image: "/placeholder.svg"
    },
    {
      title: "Cook's Trade Test",
      description: "The Ship Cook Trade Test is conducted in accordance with company specifications and requirements. Our Training Center oversees the culinary evaluation, which includes various aspects of the cuisine test. This comprehensive examination takes place over the course of one day, ensuring that candidates are thoroughly assessed based on industry standards and company expectations.",
      image: "/placeholder.svg"
    },
    {
      title: "Messman/Steward Training",
      description: "This course has been meticulously designed to align with the stipulated requirements outlined in MLC 2006 Regulation 3.2, which specifically addresses the essential aspects of food and catering, including training courses, food and personal hygiene, food storage, stock control, environmental protection, and catering health and safety. It is tailored to meet the needs of stewards working on merchant vessels, ensuring their compliance with the MLC 2006 standards. The course encompasses various critical subjects, commencing with an introduction to...",
      image: "/placeholder.svg"
    },
    {
      title: "Food And Hygienic Coures",
      description: "This course is fully aligned with and satisfies the minimum prerequisites specified in Resolution ADM No. 068-2013, including Regulation 3.2, Rule A3.2, and Line B3.2, as mandated by the Maritime Labour Convention (MLC), 2006. The curriculum provides a comprehensive understanding of various critical aspects, commencing with a general introduction and extending to more specific subjects.",
      image: "/placeholder.svg"
    },
    {
      title: "Cookery Classes (For Fresher /Saloon Rating)",
      description: "This course is meticulously crafted to adhere to the stipulations set forth in MLC 2006 Regulation 3.2, focusing on Food and Catering. It encompasses a comprehensive training program that encompasses practical cooking, food and personal hygiene, food storage, stock control, environmental protection, and catering health and safety.",
      image: "/placeholder.svg"
    },
    {
      title: "Ship Cook Coures For Chief Cook",
      description: "This specialized course, whether in Indian, Continental, Filipino, Italian, or Bakery cuisine, is designed to meet the specific criteria outlined in Resolution ADM No-068. 2013, Regulation 3.2, Rule A 3.2, as mandated by the Maritime Labour Convention (MLC) 2006. It provides comprehensive coverage of essential subjects crucial to catering in the maritime industry ...",
      image: "/placeholder.svg"
    },
    {
      title: "Laundryman Training Program",
      description: "The course curriculum spans a comprehensive array of topics essential for effective ship service activities. Over a duration of six days, participants will engage with subjects such as the administration of ship service activities, the organization and management of laundry operations, understanding fibers and fabrics, techniques for extracting and drying, flatwork ironing, pressing, and finishing.",
      image: "/placeholder.svg"
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

export default MaritimeCateringCourses;