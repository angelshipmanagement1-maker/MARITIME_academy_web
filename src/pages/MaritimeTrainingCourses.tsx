import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MaritimeTrainingCourses = () => {
  const maritimeCourses = [
    {
      title: "liquid cargo handling (LCHS) simulator courses",
      description: "The STCW Convention and Code are international standards that set the minimum training, certification, and watchkeeping requirements for seafarers to ensure their competence and safety at sea. Regulation L/12 and the associated sections and tables likely pertain to specific requirements for the course content and certification.",
      image: "/placeholder.svg"
    },
    {
      title: "ISM AUDITOR",
      description: "The ISM Code is a set of international guidelines for the safe management and operation of ships. Compliance with the ISM Code is mandatory for all ships engaged in international voyages. Your course likely covers the audit and verification requirements related to ISM compliance.",
      image: "/placeholder.svg"
    },
    {
      title: "IGF",
      description: "The aim of the course is to provide training to meet the minimum mandatory requirements for training and certification for masters, officers, ratings and other personnel for service on ships using fuels covered within the IGF Code, as per Regulation A-V/3 and Section A-V/3-1 of the International Convention on Standards of Training, Certification and Watchkeeping",
      image: "/placeholder.svg"
    },
    {
      title: "Advance Training On Chemical Tanker Opration",
      description: "The course aligns with the stipulations set forth in Regulation V/1-1 Paragraph 6.3, Section A-V/1-1 Paragraph 3, and Table A-V/1-1-3 of the 2010 amended version of the STCW Convention and Code, with a duration of 3 days.",
      image: "/placeholder.svg"
    },
    {
      title: "Crude Oil Washing and Inert Gas System Course",
      description: "Upon completion of this training, attendees should possess the capability to exhibit competence in fulfilling their duties while overseeing the loading, unloading, and safe transit or handling of cargo aboard an oil tanker. The course content includes the following topics: - Compliance with conventions and regulations - Application of applied science - Understanding Inert Gas Systems (IGS) - Knowledge of inert gas plant components - Proficiency in operating gas monitoring equipment - Familiarity with the Inert Gas distribution system, and more.",
      image: "/placeholder.svg"
    },
    {
      title: "Advance Training On Gas Tanker Opration",
      description: "The course aligns with the standards outlined in Regulation V/1-2 Paragraph 4, Section A-V/1-2 Paragraph 2, and Table A-V/1-2-2 of the STCW Convention and Code, which were amended in 2010. These standards pertain specifically to the handling of Liquefied Gas Tanker Cargo Operations. The course duration is set at 3 days.",
      image: "/placeholder.svg"
    },
    {
      title: "Advance Traning On Oil Tanker Opration",
      description: "The course aligns with the stipulations outlined in Regulation V/1-1 Paragraph 4, Section A-V/1-1 Paragraph 2, and Table A-V/1-1-2 of the STCW Convention and Code, which were amended in 2010, specifically addressing Oil Tanker Cargo Operations. The course duration spans a period of 3 days.",
      image: "/placeholder.svg"
    },
    {
      title: "Security Awareness",
      description: "The course is designed to empower all mariners to attain the essential level of proficiency in security awareness, as delineated in the ISPS Code, STCW Convention Table A-VI/6-1, and IMO Model course 3.27. The duration of the course is set at 2 days.",
      image: "/placeholder.svg"
    },
    {
      title: "Port State Control",
      description: "This training program is designed to prepare officers who will receive authorization from their respective governments to conduct port State control inspections in accordance with various international regulations, including SOLAS 74 (regulations 1/19 and XI/4), MARPOL 73/78 (articles 5 and 6 and regulations 114, 11/10, 111/8, and V/8), IC II 66 (article 21), STCW 78 (article X, Regulation 1/4), and Tonnage 69 (Article 12). These qualifications are based on the IMO standards and requirements.",
      image: "/placeholder.svg"
    },
    {
      title: "Marine Environment Protection Course(MEPC)",
      description: "In the realm of global efforts to safeguard marine ecosystems, there exists the International Agreement on Air and Water Pollution caused by Marine Vessels, which is overseen by the International Maritime Organization (IMO). This initiative underscores the critical importance of environmental protection. Moreover, the Environmental Management Policy, along with the Environment Management System, is integral to the effective implementation of MARPOL Annexes I to VI, including the latest updates and amendments. Additionally, the inclusion of recent case studies serves to further illustrate the ongoing efforts and challenges in marine environmental conservation.",
      image: "/placeholder.svg"
    },
    {
      title: "Free Fall Lifebote Training",
      description: "This course offers comprehensive training in the operation of free-fall lifeboats, in alignment with the guidelines laid out in table A-VI/2-1 of the STCW Code. Upon completing this course, participants will possess the skills and knowledge necessary to safely operate free-fall lifeboats both during and after launch. The course spans a duration of two days.",
      image: "/placeholder.svg"
    },
    {
      title: "Maritime Labour Convention (MLC-2006)",
      description: "The course offers comprehensive training to individuals tasked with overseeing and guaranteeing adherence to the guidelines outlined in the ILO Maritime Labour Convention (MLC). It encompasses a range of critical subjects, including gaining insight into the background and rationale behind the regulations, duties, and operations established by the MLC. Participants will also become well-versed in the MLC's contents, enabling them to effectively...",
      image: "/placeholder.svg"
    },
    {
      title: "Accident Investigation",
      description: "This course adheres to IMO regulation A.849 (20) and aligns with the code for investigating marine casualties and incidents. It addresses the legal mandates and offers insights into best practices for conducting investigations. Participants will acquire valuable skills in systematically gathering evidence, including effective interviewing techniques. Additionally, the course covers the process of reconstructing accident sequences and identifying causal factors, followed by a comprehensive exploration of root cause analysis and subsequent actions.",
      image: "/placeholder.svg"
    },
    {
      title: "VOC",
      description: "This course provides an overview of key maritime regulations, including SOLAS, MARPOL, STCW, and ISGOTT. It delves into topics such as the definition of biologically generated VOCs, sources of anthropogenic VOCs, and associated health risks. The curriculum also includes discussions on VOC sensors and chemical fingerprinting techniques, emphasizing accuracy and traceability. The course spans a duration of 2 days to ensure comprehensive coverage.",
      image: "/placeholder.svg"
    },
    {
      title: "ERS",
      description: "This course adheres to the guidelines set forth in IMO Model Course 2.07 and aligns with the latest stipulations of STCW 2010 section A-VIII/2, Part 4-2. It has been thoughtfully crafted to fully satisfy the Engine Room simulator prerequisites as outlined in Table A-III/1 and A-III/2 of the 2010 Manila amendments to the STCW Convention and Code.",
      image: "/placeholder.svg"
    },
    {
      title: "Crowd and Crisis Management",
      description: "This course, spanning a duration of three days, adheres to the guidelines outlined in the STCW Code, specifically in sections V/2.8, V/3.8, and annexes A-V/2.5, A-V/3.5. Its primary objective is to equip participants with vital knowledge and skills related to effectively managing and organizing large groups of individuals during emergency situations.",
      image: "/placeholder.svg"
    },
    {
      title: "Maritime English",
      description: "This course, spanning one day, aligns with the ISM Code and STCW 95 regulations, encompassing the following key areas: Course Introduction, ISM/STCW 95 CODE Requirements Familiarization, General English Familiarization, and Maritime English Familiarization.",
      image: "/placeholder.svg"
    },
    {
      title: "Rigging and Slinging",
      description: "This two-day course encompasses a comprehensive range of subjects, including: an introduction to Rigging and Slinging, an exploration of accidents arising from lifting operations, the examination of fall arrest devices, winches, and wire rope sockets, an in-depth discussion of various Rigging and Slinging methods, the adoption of safe work practices for lifting, and hands-on practical exercises involving the planning and execution of lifts for objects of varying shapes and sizes.",
      image: "/placeholder.svg"
    },
    {
      title: "Safe Working Practice",
      description: "This course covers the following topics: - Safe Working Practices for Merchant Seamen Introduction to ISM Code Introduction to Health and Safety legislation Means of access and safe movement Safe systems of work Emergency procedures Human Factors in Accident Investigation Duration: 3 days",
      image: "/placeholder.svg"
    },
    {
      title: "Intergated Saftey Training For Rating",
      description: "This certification is well-suited for individuals in introductory roles within the maritime sector, where they serve as essential crew members aboard ships. In this capacity, their responsibilities encompass performing maintenance tasks and maintaining a vigilant lookout on the decks and within the engine rooms of commercial vessels.",
      image: "/placeholder.svg"
    },
    {
      title: "Security Awareness",
      description: "The STCW Proficiency in Maritime Security Awareness (MSA) course is specifically crafted to equip individuals serving on merchant vessels without assigned security responsibilities with the fundamental training in MSA. This training program is meticulously structured to align with the knowledge, comprehension, and proficiency criteria outlined in the STCW Code. It is imperative that all seafarers employed or engaged in... undergo MSA training.",
      image: "/placeholder.svg"
    },
    {
      title: "Root Cause Analysis",
      description: "This one-day course delves into several critical areas, including Root Cause Analysis, the foundational principles of Accident Investigation, the role of Human Factors in Accident Investigation, various methods employed in Accident Investigation, honing interviewing and investigative skills, and practical learning through real-world case studies and live exercises focused on Accident Investigation.",
      image: "/placeholder.svg"
    },
    {
      title: "Fast Rescue Boat",
      description: "This three-day course is designed to fulfill the Training and Practical Assessment requirements outlined in accordance with the Guidelines for Fast Rescue Boats, as specified in IMO module 1.24 and STCW-2010 VI/2, A-VI/2 paragraphs 7-12, and Table A-VI/2-2.",
      image: "/placeholder.svg"
    },
    {
      title: "Passenger Ship Familiarization",
      description: "This course adheres to the guidelines outlined in IMO module 1.28 and is designed to offer Passenger Ship Familiarization training in accordance with the pertinent regulations found in Section A-V/3 of the STCW Code 95 and its amendments. It encompasses the acquisition of knowledge and skills necessary for ensuring the secure embarkation and disembarkation of passengers, proficient organization of shipboard emergency procedures, and the optimization of...",
      image: "/placeholder.svg"
    },
    {
      title: "Oil Pollution Act",
      description: "This two-day course encompasses a comprehensive range of subjects, including an in-depth overview of the Oil Pollution Act of 1990, Level 1 and Level 2 training for oil spill response, the utilization of containment and recovery equipment and techniques, shoreline cleanup procedures and disposal methods, and the study of the physical, chemical, and toxicological properties of oil.",
      image: "/placeholder.svg"
    },
    {
      title: "High Voltage Safety",
      description: "This one-day course ensures compliance with the stipulations set forth in Regulation III/1, III/2, and III/3 of the International Convention on the Standards of Training, Certification and Watchkeeping for Seafarers 1978, as amended (including the Manila 2010 amendments). It also aligns with the requirements outlined in Section A-III/1, A-III/2, A-III/3, and Table A-III/1.",
      image: "/placeholder.svg"
    },
    {
      title: "Marpol",
      description: "This one-day course encompasses regulations focused on the prevention and reduction of ship pollution, addressing both unplanned incidents and pollution stemming from regular operational activities. The curriculum currently encompasses six technical Annexes, with particular emphasis on designated high-priority regions where stringent controls on operational discharges are applied across most Annexes.",
      image: "/placeholder.svg"
    },
    {
      title: "Tanker Vetting Courses",
      description: "This one-day course provides a comprehensive overview of SOLAS, MARPOL, STCW, and ISGOTT, tailored for loading masters and mooring pilots responsible for inspecting oil, chemical, and liquefied gas tankers.",
      image: "/placeholder.svg"
    },
    {
      title: "HELM (Operationl level)",
      description: "The HELM course is structured to include various components such as case studies, role-playing, scenarios, simulations, and team exercises, all in accordance with STCW Regulation II/1, III/1, and III/6. The course encompasses several learning objectives, which comprise the recognition of best practices in shipboard human resource management and workload management (including planning). It also highlights the significance of the 'human element' in maritime operations.",
      image: "/placeholder.svg"
    },
    {
      title: "Disignatd Person Ashore",
      description: "This two-day course is aligned with the \"Guideline for Implementation Ashore of the International Safety Management Code (ISM Code)\" as outlined in IMO MSC-MEPC.7/Circ.6. It focuses on imparting knowledge and fostering an understanding of the ISM Code.",
      image: "/placeholder.svg"
    },
    {
      title: "Ship Security Officer",
      description: "This three-day course is designed to align with international training standards for Shipboard Safety Officers, following the criteria specified in the STCW Code Tables A-11/2 and A-III/3, as well as adhering to the guidelines established in IMO Model Course 3.11 and the Code of Safe Working Practices (in accordance with Marine Accident & Incident Investigation standards).",
      image: "/placeholder.svg"
    },
    {
      title: "Ship safety Officer",
      description: "The aim of this three-day course is to equip individuals with the necessary knowledge to effectively fulfill the roles and responsibilities of a Ship Security Officer (SSO), in accordance with the provisions outlined in section A/2.1.6 (and section A/12) of the ISPS Code and section A-VI/S of the STCW Code, as amended. This course is structured in alignment with the guidelines established in IMO Model Course 3.19.",
      image: "/placeholder.svg"
    },
    {
      title: "Ship Medicare",
      description: "This ten-day course is in full compliance with the stipulated requirements specified in Regulation VI/4, Section A-VI/4, paragraphs 4-6, and Table A-VI/4-2 of the STCW Convention and Code, as amended in 2010.",
      image: "/placeholder.svg"
    },
    {
      title: "Risk Assessment and Risk Managemnt",
      description: "This two-day course falls under the purview of SOLAS Chapter IX, specifically addressing Paragraph 1.2.2.2 of the ISM Code. Its primary objective is to provide guidance and practical training in risk identification, risk analysis, and risk evaluation. The course encompasses a comprehensive set of topics, including the rationale behind Risk Assessment, the qualifications required for conducting it, the definition of hazards, the step-by-step process of Risk Assessment, and the importance of maintaining records.",
      image: "/placeholder.svg"
    },
    {
      title: "ISPS",
      description: "In accordance with the SOLAS Convention of 1974, as amended and approved by the IMO under Chapter XI-2, this course is specifically designed to provide candidates with an extensive grasp of the International Ship and Port Security (ISPS) Code. It delves into the Code's relevance to security officers, both aboard the vessel and those designated by the company at port facilities. Duration: [Please specify the duration].",
      image: "/placeholder.svg"
    },
    {
      title: "ISM Awareness",
      description: "This course falls under SOLAS Chapter IX, as per Resolution A.741(18), which has been subsequently amended by MSC.104(73), MSC.179(79), MSC.195(80), MSC.273(85), and MSC.353(92). The course curriculum encompasses a wide range of topics, including an introduction to the ISM Code, emphasizing safe ship operation and pollution prevention, a comprehensive understanding of the STCW '95 conventions, and in-depth knowledge of the ISM Code, including a detailed exploration of each of its elements.",
      image: "/placeholder.svg"
    },
    {
      title: "ICE Navigation",
      description: "This course covers SOLAS requirements, as well as regulations set forth by IMO, STCW, MARPOL, and the Polar Code. It addresses various aspects of ice navigation, including the formation and types of ice, recognizing signs of ice and utilizing ice detection methods, preparing for entry into ice-prone areas, conducting thorough passage planning for navigating in icy conditions, adhering to reporting procedures, mastering ship handling techniques in ice-covered waters, collaborating with icebreakers and escort vessels, and understanding the impact of human factors on performance in icy conditions.",
      image: "/placeholder.svg"
    },
    {
      title: "FRAMO",
      description: "This program falls under the STCW Operational, Management, and Support category. It encompasses a comprehensive set of subject areas, including the Pump and the Cargo Handling System, Purging, Loading, Initiating the Pump, Parallel Pumping, Concluding the Discharge, Stripping, Tank Cleaning, and the processes of Filling and Circulating the Cofferdam. The course duration is two days.",
      image: "/placeholder.svg"
    },
    {
      title: "Engine Room Team Management",
      description: "This course incorporates the subjects outlined in the guidance concerning watchkeeping arrangements and principles, as outlined in Chapter III, Table A-III/1 and Table A-III/2 of the STCW 2010 code. Additionally, it places significant emphasis on the following key aspects: understanding the Error Chain and effective error management, enhancing communication skills, fostering situational awareness, time management, workload assessment, delegation, and planning. The course also covers contingency planning, leadership qualities, and effective decision-making. Numerous practical case studies are integrated to reinforce these principles.",
      image: "/placeholder.svg"
    },
    {
      title: "Engine Room Resources Management",
      description: "The course syllabus aligns with IMO Model Course 2.07 and caters to the contemporary demands outlined in STCW 95 Section A-VIII/2, Part 4-2. It is meticulously crafted to fulfill the Engine Room Resource Management prerequisites as elucidated in Table A-III/1 and A-III/2 of the 2010 Manila amendments to the STCW Convention and Code. The duration of this course spans a period of five days.",
      image: "/placeholder.svg"
    },
    {
      title: "Enclosed space Entry",
      description: "The course syllabus adheres to SOLAS Regulation III/19, encompassing mandatory confined space entry drills and rescue procedures. It encompasses critical aspects like risk assessment, work authorization, general precautions, atmospheric testing, work safety measures, utilization of SCBA (Self-Contained Breathing Apparatus), and emergency escape equipment. This comprehensive training program spans a duration of five days.",
      image: "/placeholder.svg"
    },
    {
      title: "Container Familiarzation",
      description: "This course aims to acquaint participants with specialized terminology associated with container ships, including container type indices, crane operations, container arrangement in bays, rows, and tiers, as well as lashing equipment and safety protocols aboard container vessels. The curriculum encompasses a range of topics, including the utilization of pertinent Maritime English vocabulary and expressions essential for daily operations aboard container ships.",
      image: "/placeholder.svg"
    },
    {
      title: "Company Security Officer (CSO) Course",
      description: "This course aligns seamlessly with the competency standards outlined in the Guidelines on Training and Certification for Company Security Officers, as set forth in MSC/Circ.1154, and also adheres to the structure and content of the IMO Model Course 3.20. The course is designed to be completed within a concise duration of two days.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Maritime Training Courses
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Comprehensive maritime training programs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {maritimeCourses.map((course, index) => (
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

export default MaritimeTrainingCourses;