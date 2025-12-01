import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OffshoreTrainingCourses = () => {
  const offshoreCourses = [
    {
      title: "OEHTM – Offshore Emergency Helideck Team Member",
      description: "This course trains participants to operate safely on offshore helidecks during routine and emergency helicopter operations. It includes helideck safety procedures, communication, firefighting, emergency response, passenger handling, and hazard control to ensure safe helicopter landing and take-off operations.",
      image: "/OffshoreTrainingCourses/OEHTM – Offshore Emergency Helideck Team Member.jpg"
    },
    {
      title: "OERTL – Offshore Emergency Response Team Leader",
      description: "This advanced course prepares participants to lead and command offshore emergency response teams. It focuses on incident management, communication, team coordination, firefighting leadership, situational risk assessment, rescue planning, and decision-making during major offshore emergencies.",
      image: "/OffshoreTrainingCourses/OERTL – Offshore Emergency Response Team Leader.jpg"
    },
    {
      title: "Accident Investigation",
      description: "A professional course designed to teach the principles and techniques of investigating workplace and offshore accidents. Participants learn root-cause analysis, evidence collection, interview methods, incident reporting, corrective action planning, and how to prevent future accidents through systematic investigation.",
      image: "/OffshoreTrainingCourses/Accident Investigation.avif"
    },
    {
      title: "Advanced Training in Fire Fighting (STCW A-VI/3)",
      description: "This course provides advanced skills in marine firefighting techniques and command roles. Training includes fire behavior, Search & Rescue, breathing apparatus use, fire control, casualty rescue, incident command, and extinguishing various classes of fires onboard vessels as per STCW requirements.",
      image: "/OffshoreTrainingCourses/Advanced Training in Fire Fighting.webp"
    },
    {
      title: "AGT – Authorised Gas Tester",
      description: "This course trains participants to safely test and monitor the atmosphere in confined spaces or hazardous areas. Topics include gas measurement, working in dangerous atmospheres, interpreting readings, issuing permits, identifying flammable and toxic gases, and ensuring safety during hot work or entry operations.",
      image: "/OffshoreTrainingCourses/AGT – Authorised Gas Tester.jpeg"
    },
    {
      title: "AMC – Advanced Medical Course",
      description: "A comprehensive course focusing on advanced medical skills required onboard ships. It includes emergency patient care, trauma management, CPR, wound treatment, infection control, medication administration, and stabilizing sick or injured crew members until professional medical help is available.",
      image: "/OffshoreTrainingCourses/AMC – Advanced Medical Course.png"
    },
    {
      title: "Anchor Handling",
      description: "This specialized course provides knowledge and skills used in offshore anchor handling operations. Topics cover winch systems, wire handling, towing, risk management, anchor deployment/recovery, vessel maneuvering, deck safety, and operational planning for offshore support vessels (OSVs / AHTS).",
      image: "/OffshoreTrainingCourses/Anchor Handling.jpeg"
    },
    {
      title: "AED – Automated External Defibrillator Training",
      description: "This course teaches the proper use of an Automated External Defibrillator during cardiac emergencies. Participants learn CPR basics, AED operation, shock delivery, patient assessment, and emergency response steps to increase survival chances during sudden cardiac arrest situations.",
      image: "/OffshoreTrainingCourses/AED – Automated External Defibrillator Training.jpeg"
    },
    {
      title: "Basic First Aid",
      description: "An essential safety course that covers primary first aid skills for workplace and maritime environments. Participants learn bleeding control, CPR, bandaging, fractures, burns, shock management, and initial response techniques to stabilize a patient until professional medical help arrives.",
      image: "/OffshoreTrainingCourses/Basic First Aid.jpg"
    },
    {
      title: "BASIC OFFSHORE SAFETY INDUCTION AND EMERGENCY TRAINING (BOSIT / OSIT)",
      description: "This course provides essential safety knowledge for personnel entering offshore installations for the first time. Participants learn hazard awareness, safe working practices, emergency response, helicopter safety, sea survival, fire safety, and evacuation procedures required for offshore operations.",
      image: "/OffshoreTrainingCourses/BASIC OFFSHORE SAFETY INDUCTION AND EMERGENCY TRAINING.jpg"
    },
    {
      title: "BASIC SAFETY TRAINING (STCW A-VI/1)",
      description: "A mandatory safety course for all seafarers covering personal survival techniques, basic fire fighting, first aid, and personal safety & social responsibilities. It prepares participants to react safely during onboard emergencies and follow international maritime safety standards.",
      image: "/OffshoreTrainingCourses/BASIC SAFETY TRAINING.webp"
    },
    {
      title: "BFF – Basic Fire Fighting",
      description: "This course provides foundational skills in recognizing, responding to, and extinguishing workplace or onboard fires. Participants learn fire chemistry, use of extinguishers, hose handling, safety procedures, and practical techniques for controlling small fires safely.",
      image: "/OffshoreTrainingCourses/BFF – Basic Fire Fighting.webp"
    },
    {
      title: "BOC – Banksman Offshore Course",
      description: "Banksman training focuses on safely guiding crane operations on offshore platforms and vessels. It includes hand signals, load handling, communication with crane operators, risk identification, lifting procedures, and ensuring safe deck operations during cargo movement.",
      image: "/OffshoreTrainingCourses/BOC – Banksman Offshore Course.webp"
    },
    {
      title: "BOSIET – Basic Offshore Safety Induction and Emergency Training",
      description: "A core OPITO-approved course for offshore workers. Training includes helicopter safety & HUET, sea survival, fire safety, self-rescue, emergency breathing systems, first aid, and evacuation procedures required for working safely in offshore oil & gas installations.",
      image: "/OffshoreTrainingCourses/BOSIET – Basic Offshore Safety Induction and Emergency Training.webp"
    },
    {
      title: "CA-EBS – Initial Deployment Training",
      description: "This course trains offshore personnel in the correct use of the Compressed Air Emergency Breathing System (CA-EBS) during helicopter transport. It includes equipment familiarization, donning procedures, emergency air supply use, and survival techniques in water emergencies.",
      image: "/OffshoreTrainingCourses/CA-EBS – Initial Deployment Training.jpg"
    },
    {
      title: "Certificate in Carpentry (CC)",
      description: "A practical skills training course that teaches the fundamentals of carpentry work onboard or on-site. It includes measuring, cutting, fitting, basic joinery, tool handling, and construction safety practices required for marine and industrial carpentry tasks.",
      image: "/OffshoreTrainingCourses/Certificate in Carpentry (CC).jpg"
    },
    {
      title: "Certificate of Proficiency: Personal Safety & Social Responsibilities (PSSR)",
      description: "This mandatory STCW course teaches safe working practices, teamwork, communication, pollution prevention, and understanding shipboard organization. It prepares new seafarers to adapt to life onboard and work responsibly in a maritime environment.",
      image: "/OffshoreTrainingCourses/Certificate of Proficiency Personal Safety & Social Responsibilities PSSR.jpg"
    },
    {
      title: "Company Safety Officer",
      description: "A specialized course designed for personnel responsible for implementing and monitoring workplace safety. It covers hazard identification, safety documentation, risk assessments, emergency planning, safety audits, and improving safety culture within marine or offshore organizations.",
      image: "/OffshoreTrainingCourses/Company Safety Officer.png"
    },
    {
      title: "Company Security Officer (CSO)",
      description: "This course prepares participants to manage and maintain security measures under the ISPS Code. Training includes ship and port facility security, threat identification, access control, security risk assessments, incident reporting, and coordination with security agencies.",
      image: "/OffshoreTrainingCourses/Company Security Officer (CSO).webp"
    },
    {
      title: "Competent Person Lifting Operation",
      description: "This course trains participants to perform lifting operations safely and efficiently. It covers load assessment, lifting gear selection, rigging techniques, communication with crane operators, risk identification, and ensuring compliance with lifting operation standards on offshore and marine worksites.",
      image: "/OffshoreTrainingCourses/Competent Person Lifting Operation.jpg"
    },
    {
      title: "Confined Space Attender",
      description: "This course prepares personnel assigned to monitor workers entering confined spaces. Responsibilities include maintaining entry logs, communication, gas monitoring awareness, recognizing hazards, raising alarms during emergencies, and ensuring adherence to confined space entry procedures.",
      image: "/OffshoreTrainingCourses/Confined Space Attender.webp"
    },
    {
      title: "Confined Space Awareness Training",
      description: "An introductory course designed to provide basic knowledge about confined space hazards. Participants learn how to identify confined spaces, understand atmospheric risks, safe work practices, PPE requirements, and the importance of permits and supervision during confined space work.",
      image: "/OffshoreTrainingCourses/Confined Space Awareness Training.webp"
    },
    {
      title: "Confined Space Entry",
      description: "This course trains workers in the safe entry and work procedures for confined spaces. It includes atmospheric testing, permit-to-work systems, use of PPE, communication, rescue readiness, hazard control, and practical entry exercises ensuring safe operations in enclosed environments.",
      image: "/OffshoreTrainingCourses/Confined Space Entry.jpg"
    },
    {
      title: "Confined Space Entry Including Escape Breathing Apparatus (CSIEBA)",
      description: "A specialized course focused on confined space entry with the use of Escape Breathing Apparatus. Participants learn safe entry procedures, gas testing, emergency evacuation using EBA, hazard control, and how to exit quickly in case of oxygen deficiency or gas exposure.",
      image: "/OffshoreTrainingCourses/Confined Space Entry Including Escape Breathing Apparatus.jpg"
    },
    {
      title: "Confined Space Rescue",
      description: "This course covers rescue techniques for retrieving injured or unconscious personnel from confined spaces. Training includes rescue planning, equipment use, retrieval systems, atmospheric monitoring, casualty handling, and executing rescue operations safely without endangering rescuers.",
      image: "/OffshoreTrainingCourses/Confined Space Rescue.jpg"
    },
    {
      title: "CONFINED SPACE RESCUE (Advanced)",
      description: "An advanced-level rescue program emphasizing complex confined-space rescue missions. Participants learn high-risk retrieval techniques, rope and harness operations, emergency communication, multi-person rescue coordination, and advanced rescue equipment handling for industrial and offshore environments.",
      image: "/OffshoreTrainingCourses/CONFINED SPACE RESCUE (Advanced).jpg"
    },
    {
      title: "Crane Operator with Basic Maintenance",
      description: "This course trains participants to operate cranes safely while performing basic maintenance checks. It includes crane controls, load charts, pre-use inspections, lifting procedures, safe operating techniques, troubleshooting common faults, and maintaining lifting equipment to prevent breakdowns.",
      image: "/OffshoreTrainingCourses/Crane Operator with Basic Maintenance.jpg"
    },
    {
      title: "Crowd & Crisis Control Management",
      description: "This course provides skills to manage people during emergencies or critical situations onboard vessels or offshore facilities. Participants learn crowd behavior, evacuation procedures, communication strategies, emergency planning, and methods to reduce panic and maintain order during crises.",
      image: "/OffshoreTrainingCourses/Crowd & Crisis Control Management.png"
    },
    {
      title: "Crowd & Crisis Management (STCW/Marine)",
      description: "A mandatory course for passenger ship personnel focusing on managing crowds during emergencies. It includes passenger handling, mustering, communication, evacuation coordination, dealing with human behavior under stress, and ensuring orderly movement during shipboard crises.",
      image: "/OffshoreTrainingCourses/Crowd & Crisis Management STCW-Marine.jpg"
    },
    {
      title: "Dangerous Goods by Air and BEN",
      description: "This course trains participants to safely handle, package, label, declare, and transport dangerous goods by air according to ICAO & IATA regulations. It covers identification of hazardous materials, documentation requirements, emergency response steps, and safe loading/unloading procedures. Ideal for aviation cargo handlers, freight forwarders, and logistics staff.",
      image: "/OffshoreTrainingCourses/Dangerous Goods by Air and BEN.jpg"
    },
    {
      title: "Designated Person Ashore (DPA)",
      description: "This course provides knowledge aligned with the ISM Code for individuals responsible for monitoring the safe operation of ships from shore. Participants learn about safety management systems, incident reporting, environmental protection, risk assessment, and communication between ship and company. Essential for maritime company safety officers and compliance managers.",
      image: "/OffshoreTrainingCourses/Designated Person Ashore (DPA).webp"
    },
    {
      title: "DGT (Transport of Dangerous Goods – HAZMAT)",
      description: "This training focuses on the safe transport of dangerous goods by road, rail, and sea, following national and international standards. It covers hazard classes, segregation rules, documentation, packing instructions, emergency procedures, and PPE. Suitable for logistics operators, drivers, and warehouse staff handling hazardous cargo.",
      image: "/OffshoreTrainingCourses/DGT (Transport of Dangerous Goods – HAZMAT).png"
    },
    {
      title: "DP Vessel Maintainer Course",
      description: "This course is designed for technicians responsible for maintaining Dynamic Positioning (DP) systems. It teaches fault-finding, system setup, power distribution, troubleshooting, and preventive maintenance. Participants gain hands-on understanding of control systems, sensors, thrusters, and redundancy concepts used in DP vessels.",
      image: "/OffshoreTrainingCourses/DP Vessel Maintainer Course.webp"
    },
    {
      title: "Dynamic Positioning Induction (Basic DP)",
      description: "The Basic DP course introduces participants to Dynamic Positioning technology, DP system components, environmental sensors, and vessel control principles. It includes simulator exercises on manual and automatic positioning, alarms, emergency procedures, and operational planning. This is the first step toward becoming a certified DPO.",
      image: "/OffshoreTrainingCourses/Dynamic Positioning Induction (Basic DP).jpg"
    },
    {
      title: "Dynamic Positioning Maintenance",
      description: "A technical course for engineers and ETOs focusing on maintenance and troubleshooting of DP systems. Topics include hydraulic and electrical control systems, power management, communication networks, backup systems, and system redundancy. Practical diagnostic exercises ensure readiness for real vessel DP operations.",
      image: "/OffshoreTrainingCourses/Dynamic Positioning Maintenance.webp"
    },
    {
      title: "Emergency Response Team Leader (ERTL)",
      description: "This course prepares participants to lead emergency response operations during fire, gas leaks, confined space rescue, evacuation, and other offshore emergencies. It covers risk assessment, crew coordination, command skills, communication strategies, and incident reporting. Hands-on drills improve decision-making under pressure.",
      image: "/OffshoreTrainingCourses/Emergency Response Team Leader (ERTL).avif"
    },
    {
      title: "Enclosed Space Entry",
      description: "Provides essential knowledge for safely entering enclosed or poorly ventilated spaces. Topics include gas testing, oxygen level monitoring, PPE usage, communication procedures, and emergency rescue protocols. This training reduces the risk of suffocation, toxic exposure, or entrapment.",
      image: "/OffshoreTrainingCourses/Enclosed Space Entry.webp"
    },
    {
      title: "Enclosed/Confined Space Entry",
      description: "A combined course covering both enclosed space and confined space entry requirements. Participants learn hazard identification, use of gas detectors, ventilation, work permits, rescue methods, and risk assessment. Ideal for maritime, offshore, and industrial workers.",
      image: "/OffshoreTrainingCourses/Enclosed-Confined Space Entry.jpg"
    },
    {
      title: "Environmental Compliance Training",
      description: "This course teaches environmental regulations related to pollution prevention, waste management, MARPOL regulations, and company environmental policies. Participants learn proper handling of waste, oil-water separation, sewage treatment, and minimizing environmental impact during operations.",
      image: "/OffshoreTrainingCourses/Environmental Compliance Training.webp"
    },
    {
      title: "Environmental Safety Training",
      description: "Focuses on maintaining a safe and environmentally friendly workplace. Topics include environmental hazards, sustainability practices, spill response, chemical safety, and emergency procedures. Suitable for both offshore and onshore staff committed to environmental protection.",
      image: "/OffshoreTrainingCourses/Environmental Safety Training.jpg"
    },
    {
      title: "FAST RESCUE CRAFT (FRC) Training",
      description: "This course trains personnel in the operation and handling of fast rescue craft used for offshore and maritime emergencies. It covers launching procedures, navigation, man-overboard recovery, communication, safety checks, emergency drills, and rescue techniques to save lives at sea.",
      image: "/OffshoreTrainingCourses/FAST RESCUE CRAFT (FRC) Training.jpg"
    },
    {
      title: "Fire Man",
      description: "A practical course designed to develop basic firefighting skills for onboard personnel. Participants learn fire types, extinguisher use, hose handling, safety precautions, and emergency response techniques to control fires efficiently and prevent escalation.",
      image: "/OffshoreTrainingCourses/Fire Man.jpg"
    },
    {
      title: "Fire Prevention and Fire Fighting (FPFF)",
      description: "A comprehensive course covering both fire prevention measures and firefighting techniques onboard vessels. Topics include fire chemistry, detection systems, alarm handling, fire drills, extinguishing methods, and maintaining personal and team safety during fire emergencies.",
      image: "/OffshoreTrainingCourses/Fire Prevention and Fire Fighting (FPFF).jpg"
    },
    {
      title: "Fire Watcher Certificate",
      description: "This course certifies personnel to serve as fire watchers during hot work operations. Training includes monitoring potential fire hazards, using firefighting equipment, understanding fire prevention procedures, emergency reporting, and ensuring safe work environments.",
      image: "/OffshoreTrainingCourses/Fire Watcher Certificate.jpg"
    },
    {
      title: "FOET – Further Offshore Emergency Training",
      description: "An advanced offshore safety course for personnel with prior BOSIET training. Includes sea survival refresher, fire fighting, emergency response, helicopter safety, HUET refresher, and first aid updates, ensuring readiness for offshore emergencies.",
      image: "/OffshoreTrainingCourses/FOET – Further Offshore Emergency Training.jpg"
    },
    {
      title: "Forklift Operator Course",
      description: "This course teaches safe operation of forklifts and industrial lifting equipment in offshore and onshore environments. It covers controls, load handling, stability, hazard recognition, safety regulations, and maintenance checks to prevent accidents during material handling.",
      image: "/OffshoreTrainingCourses/Forklift Operator Course.jpg"
    },
    {
      title: "FRB – Expertise in Fast Rescue Boat",
      description: "An advanced course for personnel responsible for fast rescue boat operations. Includes boat handling, launching/recovery, navigation, man-overboard rescue, emergency drills, and team coordination during offshore emergencies.",
      image: "/OffshoreTrainingCourses/FRB – Expertise in Fast Rescue Boat.webp"
    },
    {
      title: "FRBC – Fast Rescue Boat/Craft Coxswain",
      description: "This course certifies personnel as FRB Coxswains, responsible for commanding and operating fast rescue boats. Training covers navigation, boat handling, emergency procedures, rescue operations, communication, and maintaining safety of crew and rescued persons.",
      image: "/OffshoreTrainingCourses/FRBC – Fast Rescue Boat-Craft Coxswain.webp"
    },
    {
      title: "Further Offshore Emergency Training with Compressed Air Emergency Breathing System (CA-EBS)",
      description: "An advanced offshore emergency training course focusing on CA-EBS deployment during helicopter transport. Covers equipment familiarization, safe use of emergency breathing systems, survival techniques, and emergency evacuation procedures in offshore environments.",
      image: "/OffshoreTrainingCourses/Further Offshore Emergency Training with Compressed Air Emergency Breathing System (CA-EBS).webp"
    },
    {
      title: "FWC – Fire Watcher Course",
      description: "A refresher or basic course certifying personnel as fire watchers. Training emphasizes monitoring for potential hazards during hot work, safe use of firefighting equipment, reporting procedures, and maintaining constant vigilance to prevent fire incidents.",
      image: "/OffshoreTrainingCourses/FWC – Fire Watcher Course.jpg"
    },
    {
      title: "Gas Testers Training",
      description: "This course provides practical skills for atmospheric gas testing in confined spaces or hazardous areas. Participants learn the use of gas detectors, identification of flammable/toxic gases, issuing safe entry permits, emergency response, and compliance with safety standards.",
      image: "/OffshoreTrainingCourses/Gas Testers Training.jpg"
    },
    {
      title: "H2S and B.A. Familiarisation Course",
      description: "This course provides participants with basic awareness of hydrogen sulphide (H2S) hazards and the use of breathing apparatus (BA). Training includes gas properties, detection methods, safety measures, emergency response, and practical BA drills to ensure safe working in H2S-prone environments.",
      image: "/OffshoreTrainingCourses/H2S and B.A. Familiarisation Course.webp"
    },
    {
      title: "Helicopter / HeliDeck Landing Assistant",
      description: "Trains personnel to safely assist with helicopter operations on offshore helidecks. Participants learn signaling, passenger handling, communication with pilots, safety procedures, and emergency response during take-off and landing operations.",
      image: "/OffshoreTrainingCourses/Helicopter - HeliDeck Landing Assistant.webp"
    },
    {
      title: "Helicopter / HeliDeck Landing Officer",
      description: "An advanced course for personnel responsible for supervising helideck operations. Covers landing officer duties, risk assessment, emergency planning, communication with helicopter crew, monitoring deck safety, and coordinating emergency evacuation.",
      image: "/OffshoreTrainingCourses/Helicopter - HeliDeck Landing Officer.jpg"
    },
    {
      title: "Helicopter Under Water Escape Sea Survival",
      description: "This course trains participants in survival techniques following a helicopter ditching at sea. Topics include underwater escape procedures, seatbelt release, flotation devices, underwater navigation, and post-escape survival until rescue.",
      image: "/OffshoreTrainingCourses/Helicopter Under Water Escape Sea Survival.jpg"
    },
    {
      title: "Helicopter Underwater Escape Training (HUET)",
      description: "A practical, simulator-based course designed to teach safe helicopter escape in water emergencies. Participants learn to evacuate, use breathing equipment, survival tactics, and emergency procedures during offshore helicopter incidents.",
      image: "/OffshoreTrainingCourses/Helicopter Underwater Escape Training (HUET).jpg"
    },
    {
      title: "Helideck Assistant Course",
      description: "This course certifies personnel to assist with safe helicopter operations on helidecks. Training includes signaling, deck hazard awareness, passenger safety, fire prevention, and emergency response during landings and take-offs.",
      image: "/OffshoreTrainingCourses/Helideck Assistant Course.jpg"
    },
    {
      title: "HERTL – Helideck Emergency Response Team Leader",
      description: "Prepares offshore personnel to lead helideck emergency response teams. Training includes incident command, emergency planning, firefighting, rescue coordination, risk assessment, and team supervision during helideck emergencies.",
      image: "/OffshoreTrainingCourses/HERTL – Helideck Emergency Response Team Leader.webp"
    },
    {
      title: "HERTM – Helideck Emergency Response Team Member",
      description: "Trains team members to respond effectively during helideck emergencies. Covers firefighting, passenger evacuation, first aid, communication, teamwork, and assisting the team leader during offshore helicopter incidents.",
      image: "/OffshoreTrainingCourses/HERTM – Helideck Emergency Response Team Member.jpg"
    },
    {
      title: "HOIT – Helideck Operations Initial Training",
      description: "This course introduces personnel to basic helideck operations, including safety procedures, signaling, helicopter handling, emergency preparedness, and operational awareness required to work safely on offshore helidecks.",
      image: "/OffshoreTrainingCourses/HOIT – Helideck Operations Initial Training.jpg"
    },
    {
      title: "HSS – Hydrogen Sulphide Safety",
      description: "A specialized safety course focusing on hydrogen sulphide (H2S) hazards, detection, risk mitigation, personal protection, emergency response, and proper work procedures in H2S-prone environments, essential for offshore oil and gas operations.",
      image: "/OffshoreTrainingCourses/HSS – Hydrogen Sulphide Safety.jpeg"
    },
    {
      title: "HUET with EBS (HUET-5095)",
      description: "Advanced Helicopter Underwater Escape Training with Emergency Breathing System (EBS). Participants learn underwater evacuation, EBS use, survival techniques, emergency escape procedures, and drills to enhance offshore helicopter safety awareness.",
      image: "/OffshoreTrainingCourses/HUET with EBS (HUET-5095).webp"
    },
    {
      title: "Hydrogen Sulphide Safety (H2S) – Offshore Safety Standards",
      description: "A safety-focused course covering the hazards of hydrogen sulphide in offshore environments. Participants learn gas properties, detection, personal protective equipment, emergency procedures, risk assessment, and mitigation strategies to safely work in H2S-prone areas.",
      image: "/OffshoreTrainingCourses/Hydrogen Sulphide Safety (H2S) – Offshore Safety Standards.webp"
    },
    {
      title: "IMIST – Proficiency in International Minimum Industrial Safety Training",
      description: "This course provides basic industrial safety knowledge as per international standards. Topics include hazard awareness, safe work practices, risk assessment, emergency preparedness, and compliance with workplace safety regulations for industrial and offshore personnel.",
      image: "/OffshoreTrainingCourses/IMIST – Proficiency in International Minimum Industrial Safety Training.jpg"
    },
    {
      title: "ISM Course – International Safety Management",
      description: "Trains participants on the implementation and compliance of the ISM Code onboard vessels. Covers safety management systems, documentation, risk assessment, incident reporting, environmental compliance, and promoting a safety culture onboard ships.",
      image: "/OffshoreTrainingCourses/ISM Course – International Safety Management.jpg"
    },
    {
      title: "ISO 14000",
      description: "An introductory course on ISO 14000 environmental management standards. Participants learn environmental policy development, legal compliance, pollution prevention, environmental impact assessment, and sustainability practices for maritime and industrial organizations.",
      image: "/OffshoreTrainingCourses/ISO 14000.jpg"
    },
    {
      title: "ISO 9001",
      description: "This course provides an overview of the ISO 9001 quality management system. Topics include process standardization, continuous improvement, documentation, audits, quality objectives, and customer and regulatory requirements.",
      image: "/OffshoreTrainingCourses/ISO 9001.png"
    },
    {
      title: "Lead Auditor ISO 14001:2015",
      description: "An advanced course designed to train participants as lead auditors for ISO 14001 environmental management systems. Covers audit planning, conducting audits, reporting, corrective actions, compliance evaluation, and promoting continual environmental improvement.",
      image: "/OffshoreTrainingCourses/Lead Auditor ISO 14001 2015.jpg"
    },
    {
      title: "Lead Auditor ISO 9001:2015",
      description: "This course trains participants as lead auditors for ISO 9001 quality management systems. Includes auditing principles, audit planning, conducting audits, reporting, corrective/preventive actions, and ensuring organizational compliance with quality standards.",
      image: "/OffshoreTrainingCourses/Lead Auditor ISO 9001 2015.webp"
    },
    {
      title: "Leadership and Teamwork",
      description: "A professional development course focusing on building effective leadership and teamwork skills. Topics include communication, conflict resolution, decision-making, team motivation, delegation, situational leadership, and creating a productive and safe work environment.",
      image: "/OffshoreTrainingCourses/Leadership and Teamwork.jpg"
    },
    {
      title: "Lifeguard Training",
      description: "A practical course teaching water rescue and lifesaving skills. Covers swimming rescue techniques, CPR, first aid, emergency response, hazard recognition, and rescue equipment use to ensure safety in offshore or coastal water environments.",
      image: "/OffshoreTrainingCourses/Lifeguard Training.jpg"
    },
    {
      title: "Major Emergency Management",
      description: "This course trains personnel in coordinating and responding to major emergencies onboard ships or offshore facilities. Topics include emergency planning, crisis communication, evacuation procedures, resource management, and team coordination during large-scale incidents.",
      image: "/OffshoreTrainingCourses/Major Emergency Management.webp"
    },
    {
      title: "Medic First Aid Training Program – Basic CPR and First Aid for Adults",
      description: "Provides fundamental CPR and first aid skills for adults. Participants learn cardiac arrest response, choking management, wound care, fractures, burns, and emergency response procedures for immediate life-saving assistance.",
      image: "/OffshoreTrainingCourses/Medic First Aid Training Program – Basic CPR and First Aid for Adults.jpg"
    },
    {
      title: "Medical Care",
      description: "An advanced course covering onboard medical care for seafarers and offshore personnel. Topics include emergency assessment, trauma management, illness treatment, medication administration, and stabilization until professional medical help is available.",
      image: "/OffshoreTrainingCourses/Medical Care.webp"
    },
    {
      title: "Medical First Aid",
      description: "Covers essential first aid practices onboard vessels or offshore facilities. Participants learn patient assessment, bleeding control, shock management, burns treatment, CPR, and initial response techniques in medical emergencies.",
      image: "/OffshoreTrainingCourses/Medical First Aid.png"
    },
    {
      title: "Mental Well-Being",
      description: "A course focused on psychological health in maritime and offshore environments. Topics include stress management, coping mechanisms, communication, mental resilience, recognizing signs of fatigue or stress, and maintaining mental well-being at work.",
      image: "/OffshoreTrainingCourses/Mental Well-Being.webp"
    },
    {
      title: "Mines Vocational Training (MVT)",
      description: "Provides practical knowledge and skills for safe operations in mining or resource extraction environments. Covers hazard recognition, safety procedures, equipment handling, risk assessment, and compliance with industry safety regulations.",
      image: "/OffshoreTrainingCourses/Mines Vocational Training (MVT).jpeg"
    },
    {
      title: "OHSE – Offshore Health, Safety, and Environment",
      description: "A comprehensive course covering health, safety, and environmental practices offshore. Topics include hazard identification, risk management, emergency preparedness, environmental compliance, and promoting a culture of safety onboard offshore installations.",
      image: "/OffshoreTrainingCourses/OHSE – Offshore Health, Safety, and Environment.webp"
    },
    {
      title: "Oil Spills and Pollution: Response & Recovery",
      description: "Trains personnel in responding to oil spills and marine pollution incidents. Topics include spill assessment, containment, recovery techniques, use of dispersants, safety measures, and environmental protection protocols.",
      image: "/OffshoreTrainingCourses/Oil Spills and Pollution  Response & Recovery.jpg"
    },
    {
      title: "OPRC Level II Training Course",
      description: "Advanced course under the International Convention on Oil Pollution Preparedness, Response and Cooperation (OPRC). Covers oil spill response planning, operational procedures, command structure, recovery techniques, and international compliance requirements.",
      image: "/OffshoreTrainingCourses/OPRC Level II Training Course.jpg"
    },
    {
      title: "Permit to Work (PTW)",
      description: "This course provides knowledge of safe work permits for hazardous operations. Participants learn the PTW system, risk assessment, control measures, documentation, authorization procedures, and monitoring to prevent accidents in offshore and industrial environments.",
      image: "/OffshoreTrainingCourses/Permit to Work (PTW).jpg"
    },
    {
      title: "Pre-Interview Orientation",
      description: "This course prepares candidates for offshore and maritime job interviews. Topics include industry expectations, safety awareness, behavioral preparation, communication skills, CV guidance, and tips to demonstrate competency and professionalism during interviews.",
      image: "/OffshoreTrainingCourses/Pre-Interview Orientation.webp"
    },
    {
      title: "Proficiency in Advanced Fire Fighting (STCW A-VI/3)",
      description: "An advanced firefighting course for seafarers, focusing on fire prevention, fire behavior, use of breathing apparatus, team coordination, fire control strategies, and handling major fire incidents onboard ships or offshore installations.",
      image: "/OffshoreTrainingCourses/Proficiency in Advanced Fire Fighting (STCW A-VI 3).jpg"
    },
    {
      title: "Proficiency in Survival at Sea (STCW A-VI/2)",
      description: "This course provides essential knowledge and practical skills for survival at sea. Topics include lifeboat and life raft use, personal survival techniques, signaling, emergency procedures, and handling adverse conditions until rescue.",
      image: "/OffshoreTrainingCourses/Proficiency in Survival at Sea (STCW A-VI 2).webp"
    },
    {
      title: "Proficiency in Survival Craft and Rescue Boats",
      description: "Covers the safe operation and management of lifeboats and rescue boats. Participants learn launching, recovery, navigation, rescue techniques, teamwork, and survival strategies during emergencies at sea.",
      image: "/OffshoreTrainingCourses/Proficiency in Survival Craft and Rescue Boats.jpg"
    },
    {
      title: "Proficiency in Survival Craft and Rescue Boats Other Than Fast Rescue Boats",
      description: "Specialized training in the handling of standard lifeboats and rescue boats excluding fast rescue boats. Focuses on safe launch, evacuation, onboard safety, crew coordination, and emergency survival procedures.",
      image: "/OffshoreTrainingCourses/Proficiency in Survival Craft and Rescue Boats Other Than Fast Rescue Boats.jpg"
    },
    {
      title: "Proficiency in Train the Trainer",
      description: "Designed for experienced professionals to train and assess other personnel. Topics include instructional techniques, learning methods, course planning, assessment, communication, and delivering effective safety or technical training.",
      image: "/OffshoreTrainingCourses/Proficiency in Train the Trainer.webp"
    },
    {
      title: "RAS – Risk Assessment & Safety",
      description: "This course teaches participants to identify hazards, assess risks, and implement control measures in offshore or maritime operations. Includes risk evaluation methods, reporting, mitigation strategies, and creating a safer workplace.",
      image: "/OffshoreTrainingCourses/RAS – Risk Assessment & Safety.webp"
    },
    {
      title: "Refresher Training: Fire Prevention and Fire Fighting",
      description: "A refresher course for seafarers to update fire safety knowledge and practical firefighting skills. Covers fire prevention, extinguisher use, hose handling, team coordination, and emergency response procedures.",
      image: "/OffshoreTrainingCourses/Refresher Training. Fire Prevention and Fire Fighting.jpg"
    },
    {
      title: "Refresher Training: Proficiency in Personal Survival Techniques",
      description: "Designed to refresh survival skills, including lifeboat and life raft use, emergency signaling, personal flotation, and survival strategies to ensure personnel remain competent during maritime emergencies.",
      image: "/OffshoreTrainingCourses/Refresher Training. Proficiency in Personal Survival Techniques.jpg"
    },
    {
      title: "Risk Assessment and Accident Investigation",
      description: "Focuses on systematic hazard analysis, accident investigation, and reporting. Participants learn root-cause analysis, corrective actions, documentation, and preventive measures to reduce accidents in offshore or maritime operations.",
      image: "/OffshoreTrainingCourses/Risk Assessment and Accident Investigation.webp"
    },
    {
      title: "Roustabout Training Course",
      description: "Provides basic skills for deck and offshore personnel, including handling cargo, maintenance tasks, equipment operation, safety awareness, and general offshore operational responsibilities.",
      image: "/OffshoreTrainingCourses/Roustabout Training Course.webp"
    },
    {
      title: "Safety Leadership Course",
      description: "This course enhances leadership skills with a focus on safety management. Topics include risk communication, team motivation, emergency planning, decision-making, and promoting a culture of safety within offshore and maritime organizations.",
      image: "/OffshoreTrainingCourses/Safety Leadership Course.webp"
    },
    {
      title: "SCBA – Self Contained Breathing Apparatus",
      description: "Trains participants in the proper use and maintenance of SCBA during firefighting and confined space operations. Includes equipment familiarization, donning and doffing, breathing techniques, and emergency procedures.",
      image: "/OffshoreTrainingCourses/SCBA – Self Contained Breathing Apparatus.avif"
    },
    {
      title: "Seafarers Enhancement Programme (SEP) – Soft Skills Course",
      description: "Focuses on developing communication, teamwork, leadership, conflict resolution, and personal development skills for seafarers to improve onboard efficiency, workplace harmony, and professional growth.",
      image: "/OffshoreTrainingCourses/Seafarers Enhancement Programme (SEP) – Soft Skills Course.jpg"
    },
    {
      title: "STHSC – Safety Training for High Speed Craft",
      description: "Provides safety knowledge for personnel working on high-speed vessels. Includes passenger management, evacuation drills, emergency procedures, fire and survival training, and operational safety for fast craft environments.",
      image: "/OffshoreTrainingCourses/STHSC – Safety Training for High Speed Craft.jpg"
    },
    {
      title: "TBOSIET – Tropical Basic Offshore Induction and Emergency Training",
      description: "An OPITO-approved course preparing offshore personnel for tropical environments. Covers sea survival, helicopter safety (HUET), emergency first aid, fire safety, and evacuation procedures.",
      image: "/OffshoreTrainingCourses/TBOSIET – Tropical Basic Offshore Induction and Emergency Training.jpg"
    },
    {
      title: "Training for Trainers and Assessors",
      description: "This course develops competence in teaching, assessing, and mentoring personnel. Participants learn instructional design, assessment methods, classroom and practical delivery, feedback techniques, and maintaining training standards.",
      image: "/OffshoreTrainingCourses/Training for Trainers and Assessors.webp"
    },
    {
      title: "WHT – Work at Height",
      description: "This course focuses on safe working practices at heights, including hazard identification, risk assessment, fall prevention, use of PPE, anchoring techniques, and emergency rescue procedures.",
      image: "/OffshoreTrainingCourses/WHT – Work at Height.jpg"
    },
    {
      title: "Work & Rescue from Height",
      description: "Advanced training in performing rescue operations at height, including rope access techniques, emergency retrieval, casualty handling, and team coordination during high-altitude incidents.",
      image: "/OffshoreTrainingCourses/Work & Rescue from Height.jpg"
    },
    {
      title: "Work at Height Competent Person",
      description: "Certifies participants as competent to supervise work at heights. Topics include fall protection systems, hazard identification, risk assessment, inspection of equipment, and ensuring compliance with safety regulations.",
      image: "/OffshoreTrainingCourses/Work at Height Competent Person.jpg"
    },
    {
      title: "Ship Crane Operator Course",
      description: "Training for safe operation of shipboard cranes, covering rigging, load handling, communication with deck personnel, lifting procedures, emergency response, and basic maintenance for operational efficiency.",
      image: "/OffshoreTrainingCourses/Ship Crane Operator Course.webp"
    },
    {
      title: "Bolt Torquing",
      description: "This course teaches proper bolt tightening techniques, including use of torque tools, calibration, joint integrity, safety precautions, and preventing mechanical failures in offshore or marine structures.",
      image: "/OffshoreTrainingCourses/Bolt Torquing.png"
    },
    {
      title: "Bolt Tensioning",
      description: "Provides practical knowledge on tensioning bolts using hydraulic or mechanical systems, including safety checks, procedural standards, equipment handling, and quality assurance during offshore operations.",
      image: "/OffshoreTrainingCourses/Bolt Tensioning.jpg"
    },
    {
      title: "Mooring and Unmooring",
      description: "Covers safe procedures for mooring, unmooring, and handling ropes and lines onboard vessels. Includes winch operation, risk assessment, communication, and emergency precautions during docking and departure.",
      image: "/OffshoreTrainingCourses/Mooring and Unmooring.jpg"
    },
    {
      title: "Risk Awareness",
      description: "This course teaches participants to identify and mitigate workplace risks, focusing on safety culture, hazard recognition, reporting, and implementing preventive measures to reduce incidents offshore and onboard ships.",
      image: "/OffshoreTrainingCourses/Risk Awareness.jpg"
    },
    {
      title: "Risk Human Factor",
      description: "Focuses on human factors affecting safety, including decision-making, fatigue, communication, error prevention, situational awareness, and behavior-based safety strategies in maritime and offshore environments.",
      image: "/OffshoreTrainingCourses/Risk Human Factor.webp"
    },
    {
      title: "HeliDeck Fire Fighter",
      description: "Trains personnel to respond to helideck fires, including fire prevention, use of extinguishers, foam and CO2 systems, emergency response procedures, and coordination with helideck emergency teams during helicopter operations.",
      image: "/OffshoreTrainingCourses/HeliDeck Fire Fighter.webp"
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

export default OffshoreTrainingCourses;