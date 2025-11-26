
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MaritimeTrainingCourses = () => {
  const maritimeCourses = [
    {
      title: "ADVANCED TANKER CARGO OPERATIONS VLCC",
      description: "This course provides senior deck officers and experienced tanker crew with advanced knowledge of cargo handling systems on Very Large Crude Carriers (VLCCs). It covers high-capacity pumping systems, inert gas operations, tank preparation, crude oil washing, line displacement, and emergency handling procedures. Trainees learn to plan, monitor, and execute VLCC cargo operations safely while complying with IMO, ISGOTT, and company requirements. Practical simulator exercises build confidence in dealing with high-risk scenarios and operational challenges.",
      image: "/placeholder.svg"
    },
    {
      title: "ADVANCED TRAINING FOR CHEMICAL TANKER CARGO OPERATIONS",
      description: "This advanced course equips officers and engineers with in-depth skills required for handling hazardous and noxious cargoes (HNS) carried on chemical tankers. Topics include cargo characteristics, MARPOL Annex II requirements, tank coating compatibility, cargo segregation, closed-loading operations, nitrogen padding, heating systems, and pollution-prevention measures. The program focuses on safe loading, unloading, tank cleaning, emergency response, and chemical spill control. Simulator-based sessions help trainees manage real-time chemical cargo scenarios with precision.",
      image: "/placeholder.svg"
    },
    {
      title: "ADVANCED TRAINING FOR LIQUEFIED GAS TANKER CARGO OPERATIONS",
      description: "This course provides advanced-level knowledge for officers working on LPG, LNG, and other liquefied gas carriers. It covers cargo containment systems, reliquefaction plants, gas compressor operations, cargo cooling cycles, pressure/temperature control, and emergency shutdown systems. Trainees learn about cargo boil-off management, gas hazard control, inerting/drying, and procedures for loading, discharging, gassing-up, and warming-up tanks. Emphasis is given to safety during high-risk cargo operations and compliance with SIGTTO standards.",
      image: "/placeholder.svg"
    },
    {
      title: "ADVANCED TRAINING FOR OIL TANKER CARGO OPERATIONS",
      description: "This course offers advanced knowledge of crude and product tanker operations for deck officers and engineers. It includes cargo planning, tank preparation, inert gas system management, crude oil washing, line clearing, heating, and contamination prevention. Trainees learn to conduct loading and discharging operations safely, manage emergencies such as oil spills and overpressure, and implement MARPOL/ISGOTT procedures. Practical simulator sessions enhance decision-making skills and operational efficiency on oil tankers.",
      image: "/placeholder.svg"
    },
    {
      title: "BALLAST WATER MANAGEMENT",
      description: "This course provides officers and crew with complete knowledge of ballast water handling, treatment systems, and IMO regulations (BWM Convention). It covers ballast water exchange methods, sediment control, invasive species risks, and environmental protection requirements. Trainees learn the operational use of treatment plants, record book entries, system troubleshooting, and emergency ballast operations. The program ensures compliance with international standards and safe vessel stability management.",
      image: "/placeholder.svg"
    },
    {
      title: "BASIC TRAINING FOR LIQUEFIED GAS TANKER CARGO OPERATIONS",
      description: "This entry-level course introduces seafarers to the fundamental principles of working on LPG, LNG, and other liquefied gas carriers. It explains gas properties, cargo hazards, containment systems, emergency shutdown devices, compressors, and safety equipment. Trainees learn the basics of loading, discharging, inerting, gassing-up, and venting operations. The course focuses on safety procedures, PPE, and emergency response, preparing participants for safe operations on gas tankers as per STCW requirements.",
      image: "/placeholder.svg"
    },
    {
      title: "BASIC TRAINING FOR OIL AND CHEMICAL TANKER CARGO OPERATIONS",
      description: "This STCW-mandated training gives seafarers a foundation in handling petroleum products and chemical cargoes. It covers tank layouts, cargo hazards, fire/explosion risks, inert gas systems, tank cleaning basics, and pollution-prevention measures. Trainees are introduced to loading and discharging procedures, safety equipment use, and emergency response actions. The course equips beginners with essential knowledge to work safely on oil and chemical tankers at the operational level.",
      image: "/placeholder.svg"
    },
    {
      title: "BRIDGE RESOURCES MANAGEMENT \"MANAGEMENT LEVEL\"",
      description: "This advanced BRM course is designed for chief officers, captains, and senior navigators. It focuses on leadership, decision-making, situational awareness, communication, stress management, and error-prevention techniques. Trainees learn how to manage bridge teams during complex operations such as pilotage, restricted-visibility navigation, heavy traffic, and emergencies. Realistic simulator exercises help officers strengthen management-level competencies and ensure safe navigation through effective resource utilization.",
      image: "/placeholder.svg"
    },
    {
      title: "BRIDGE TEAMWORK",
      description: "This course builds teamwork, communication, and coordination skills among navigational watchkeepers. It emphasizes shared situational awareness, task distribution, assertive communication, and watch handover practices. Trainees participate in simulator sessions involving coastal navigation, collision avoidance, and emergency scenarios. The course enhances the overall effectiveness of the bridge team, reducing human error and improving navigational safety.",
      image: "/placeholder.svg"
    },
    {
      title: "BRM (Bridge Resource Management)",
      description: "This course focuses on developing effective navigation watchkeeping practices through improved situational awareness, communication, workload management, and decision-making. It trains officers to utilize all available bridge resources, including electronic navigation systems, team coordination, and standard operating procedures. Simulator exercises replicate real-world scenarios such as collision avoidance, restricted visibility, and emergency situations, helping participants minimize human error and enhance navigational safety.",
      image: "/placeholder.svg"
    },
    {
      title: "BTM (Bridge Team Management)",
      description: "The BTM course strengthens teamwork and coordination among bridge personnel during routine and critical operations. Participants learn essential skills such as information sharing, assertive communication, leadership, and task delegation. The course emphasizes teamwork under stress, proper monitoring of bridge activities, and adherence to COLREG procedures. Simulator sessions enable trainees to practice team-based navigation and improve collective decision-making for safer ship handling.",
      image: "/placeholder.svg"
    },
    {
      title: "BTM-R (Bridge Team Management - Refresher)",
      description: "This refresher course is designed for officers who have previously completed BTM training and require updated knowledge as per company or regulatory requirements. It revisits key concepts of teamwork, situational awareness, stress management, and bridge communication. Trainees practice updated procedures and sharpen their skills through short, focused simulator exercises covering modern navigation challenges. The course ensures continued competence and compliance with current best practices.",
      image: "/placeholder.svg"
    },
    {
      title: "BTRM IMO Model IMO/MC 1.22",
      description: "This course follows the IMO Model Course 1.22 (Bridge Teamwork / Resource Management) and provides structured training for officers at the operational and management levels. It covers human factors, workload distribution, communication barriers, leadership, and effective use of bridge equipment. Using realistic simulator scenarios, participants learn to execute safe navigation, respond to emergencies, and prevent accidents caused by human error. The course aligns fully with STCW requirements and international maritime standards.",
      image: "/placeholder.svg"
    },
    {
      title: "Bulk Carrier Cargo Handling / Bulk Carrier Operation, Safety & Inspection",
      description: "This course provides comprehensive knowledge of bulk carrier operations, including cargo properties, loading plans, trimming, ballast sequencing, and structural stress management. It also covers the IMSBC Code, hold preparation, fumigation, moisture content limits (TML/MC), and hazards like liquefaction. Trainees learn safe loading/discharging procedures, stability management, and inspection techniques to meet port state and vetting standards. The course emphasizes safety, pollution prevention, and accident avoidance.",
      image: "/placeholder.svg"
    },
    {
      title: "CARRY OUT FIRE-FIGHTING OPERATIONS - IN BASIC TRAINING FOR OIL, CHEMICAL & LIQUEFIED GAS TANKER CARGO OPERATIONS",
      description: "This course trains seafarers to conduct fire-fighting operations specifically related to oil, chemical, and gas tanker hazards. It covers fire behavior, fixed and portable extinguishing systems, foam application, dry chemical systems, and personal protective equipment. Trainees practice emergency response, boundary cooling, search and rescue, and coordination with onboard fire teams. The training ensures compliance with STCW requirements and prepares crew for tanker-specific fire scenarios.",
      image: "/placeholder.svg"
    },
    {
      title: "Chemical Safety and Oil Spill Prevention",
      description: "This program provides essential knowledge of handling hazardous chemicals and preventing accidental spills in marine environments. Topics include chemical properties, reaction hazards, PPE selection, spill containment, use of absorbents, and response procedures under MARPOL Annex II and OPA guidelines. Trainees learn safe storage, transfer, and emergency measures to mitigate risks. The course enhances preparedness for onboard chemical handling and pollution-control operations.",
      image: "/placeholder.svg"
    },
    {
      title: "CRUDE OIL WASHING (COW) COURSE",
      description: "This course trains officers in the safe and efficient execution of crude oil washing operations on oil tankers. It covers COW planning, tank washing sequences, IG system coordination, valve line-up, and contamination prevention according to ISGOTT. Simulator-based sessions reinforce practical knowledge and safe decision-making during COW operations.",
      image: "/placeholder.svg"
    },
    {
      title: "DANGEROUS CARGO HANDLING",
      description: "This course covers the safe handling of dangerous goods as per the IMDG Code. It includes cargo classification, segregation, packaging, marking, documentation, stowage, and emergency response. Trainees learn to identify hazards, manage chemical reactions, and apply proper handling methods during loading, discharging, and transport. The training enhances awareness of risks and ensures compliance with international shipping regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "EFFICIENT DECK HAND (EDH)",
      description: "The EDH course is designed for ratings aspiring to become able seafarers. It covers deck seamanship, rope and wire handling, mooring operations, anchor work, cargo support duties, shipboard safety, and emergency procedures. Trainees develop practical skills through hands-on sessions and learn safe working practices in accordance with maritime industry standards.",
      image: "/placeholder.svg"
    },
    {
      title: "FURUNO FMD 3100/3200/3300",
      description: "This type-specific training covers operation, features, and safety use of the Furuno FMD-3100/3200/3300 ECDIS systems. Trainees learn route planning, route monitoring, chart management, alarm handling, sensor integration, and watchkeeping procedures. The course builds confidence in using ECDIS for safe navigation and ensures compliance with IMO ECDIS training requirements.",
      image: "/placeholder.svg"
    },
    {
      title: "HAZARDOUS CONTAINER FAMILIARIZATION COURSE",
      description: "This course introduces participants to the safe handling and stowage of hazardous containers as per IMDG Code requirements. Topics include classification, segregation requirements, placards/labels, documentation, reefer container hazards, and inspection procedures. Trainees learn best practices to prevent accidents, chemical leaks, and cargo reactions during maritime container transport.",
      image: "/placeholder.svg"
    },
    {
      title: "HAZMAT (Hazardous Materials Handling)",
      description: "This training focuses on the safe handling, storage, and transportation of hazardous materials. It covers material identification, SDS interpretation, PPE, spill control, emergency response, and environmental protection regulations. The course prepares seafarers to work safely with hazardous substances and respond effectively to onboard HAZMAT incidents.",
      image: "/placeholder.svg"
    },
    {
      title: "ICE NAVIGATION TRAINING",
      description: "This course provides essential knowledge for navigating ships in polar and ice-infested waters. It covers ice types, icebreaker assistance, ship limitations, voyage planning, maneuvering in pack ice, and cold-weather hazards. Trainees learn to manage machinery risks, lookout procedures, communication with ice authorities, and emergency operations. The course enhances safety and awareness for Arctic and Antarctic navigation.",
      image: "/placeholder.svg"
    },
    {
      title: "LARGE SHIP HANDLING",
      description: "This course provides advanced knowledge and practical simulator training for handling large vessels such as VLCCs, ULCCs, cruise ships, and large bulk carriers. It covers hydrodynamic effects, squat, bank suction, interaction with other vessels, turning characteristics, and low-speed maneuvering. Trainees practice berthing/unberthing, anchoring, emergency maneuvers, and operations in confined waters. The course enhances confidence and decision-making required for maneuvering large-tonnage ships safely.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO & BALLAST HANDLING SIMULATOR (LCHS-OIL & CHEMICAL)",
      description: "This simulator-based course trains officers in operating liquid cargo and ballast systems on oil and chemical tankers. Trainees learn cargo planning, pump operation, valve sequencing, tank cleaning, heating, IG system use, and contamination control. The course also covers ballast management, stress monitoring, and emergency procedures. Realistic simulations enable participants to practice loading, discharging, stripping, and line-clearing operations in a controlled environment.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING CHEMICAL SIMULATOR COURSE",
      description: "Focused on chemical tanker operations, this simulator course provides hands-on experience in managing hazardous and noxious cargoes. Topics include cargo segregation, nitrogen padding, heating systems, closed-cycle loading, and emergency response. Trainees perform cargo transfers, tank cleaning, and line-up operations using advanced simulator software. The course strengthens practical decision-making and ensures compliance with MARPOL and STCW requirements.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING OIL SIMULATOR COURSE",
      description: "This course delivers simulator-based training for handling crude and petroleum products on oil tankers. It covers cargo preparation, loading, discharging, crude oil washing, inert gas operations, and tank heating. Trainees practice real-time operations such as valve line-up, pump troubleshooting, and managing alarms. The course improves operational safety, efficiency, and understanding of tanker cargo systems.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING SIMULATOR FOR GAS TANKER",
      description: "This simulator program provides practical training for LPG and LNG tanker cargo operations. Trainees learn gas processing, compressor operation, reliquefaction plant control, cooling cycles, inerting, gassing-up, and loading/discharging procedures. Simulations recreate critical scenarios like vapor return issues, emergency shutdowns, and boil-off management. The course helps officers gain confidence in operating sophisticated gas-handling systems safely.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING SIMULATOR FOR LNG TANKER",
      description: "This specialized simulator course focuses on the highly technical operation of LNG cargo containment and processing systems. It includes LNG loading/discharging, cargo cooling, BOG (Boil-Off Gas) management, reliquefaction, vapor handling, and emergency procedures. Participants practice LNG-specific scenarios such as gassing-up, cooldown, and maintaining cryogenic conditions. The training prepares officers for safe and efficient LNG tanker operations in compliance with SIGTTO guidelines.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING SIMULATOR FOR LPG TANKER",
      description: "This course provides simulator-based training for LPG cargo operations, including propane, butane, and mixed gas handling. It covers pressure-controlled systems, cargo compressors, condensers, heating/cooling cycles, tank preparation, and vapor balancing. Trainees conduct loading/discharging operations, troubleshoot system faults, and manage emergency shutdown events. The course equips officers with practical skills needed for safe LPG tanker operations.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING CHEMICAL SIMULATOR - Refresher COURSE",
      description: "This refresher course is designed for officers who have previously completed chemical tanker simulator training and need updated operational knowledge. It revisits key skills such as cargo segregation, nitrogen padding, line-up procedures, tank cleaning, heating operations, and emergency response. Short simulator sessions help participants refresh their decision-making and stay current with modern chemical tanker practices and safety standards.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING OIL SIMULATOR - Refresher COURSE",
      description: "This course updates officers on the latest practices in crude and product tanker cargo handling. It refreshes skills in loading/discharging operations, crude oil washing, inert gas management, valve sequencing, and pump operation. Refresher simulator exercises allow trainees to handle real-time operational scenarios and improve their response to alarms, faults, and emergency situations. Ideal for officers returning to oil tankers or required to renew competency.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING SIMULATOR FOR GAS TANKER - Refresher COURSE",
      description: "This refresher training focuses on LPG/LNG gas tanker operations, revisiting critical skills in cooling cycles, compressor operation, reliquefaction systems, gassing-up, inerting, and emergency shutdown procedures. Participants practice handling abnormal conditions, vapor return issues, and boil-off scenarios using realistic simulator modules. The course ensures officers remain competent and up to date with advanced gas-handling techniques.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING SIMULATOR FOR LNG TANKER - Refresher COURSE",
      description: "This specialized refresher course revises LNG tanker cargo operations, including cryogenic handling, BOG management, loading/discharging sequences, cooldown operations, and vapor handling. Simulator exercises allow trainees to practice LNG-specific emergencies and system malfunctions. The course helps officers maintain proficiency in operating complex LNG cargo systems in accordance with current SIGTTO and industry guidelines.",
      image: "/placeholder.svg"
    },
    {
      title: "LIQUID CARGO HANDLING SIMULATOR FOR LPG TANKER - Refresher COURSE",
      description: "This course updates officers on safe handling of LPG cargoes such as propane, butane, and mixed gases. It refreshes knowledge on pressure-controlled systems, compressor and condenser operations, heating/cooling cycles, and tank preparation. Simulator scenarios include troubleshooting, alarm management, vapor balancing, and emergency procedures. The training ensures continued competency for officers working on LPG carriers.",
      image: "/placeholder.svg"
    },
    {
      title: "MARINE ENVIRONMENTAL AWARENESS",
      description: "This course raises awareness of environmental protection requirements in maritime operations. It covers marine pollution prevention, oil, sewage, garbage, and air emissions, along with MARPOL regulations and best practices. Trainees learn how shipboard operations affect the marine ecosystem and the measures required to minimize environmental impact. The course prepares seafarers to operate responsibly and comply with international environmental standards.",
      image: "/placeholder.svg"
    },
    {
      title: "Maritime English",
      description: "This course develops essential English language skills for seafarers, focusing on effective communication onboard, in ports, and during emergencies. Topics include standard maritime vocabulary, bridge and engine room communication, reports, radio procedures, and understanding IMO documentation. Trainees gain confidence in speaking, reading, and writing in English, improving safety, teamwork, and operational efficiency.",
      image: "/placeholder.svg"
    },
    {
      title: "MARPOL Implementation",
      description: "This course trains seafarers and officers on the practical implementation of MARPOL regulations. It covers pollution prevention, operational procedures, record-keeping, monitoring, and emergency measures for oil, chemicals, sewage, garbage, and air emissions. Trainees learn how to comply with MARPOL Annexes I–VI and integrate environmental management into daily shipboard operations, reducing the risk of regulatory violations.",
      image: "/placeholder.svg"
    },
    {
      title: "MARPOL IMO MODEL IMO/MC 1.38 (Implementation)",
      description: "Following the IMO Model Course 1.38, this program provides structured training on MARPOL compliance and environmental responsibilities. Participants learn the legal framework, environmental protection measures, operational procedures, and documentation requirements. The course uses case studies and practical exercises to ensure trainees can implement MARPOL standards effectively and safely on all types of vessels.",
      image: "/placeholder.svg"
    },
    {
      title: "OIL TANKER FAMILIARISATION",
      description: "This course introduces seafarers to oil tanker operations and safety procedures. Topics include tanker types, cargo handling systems, tank layouts, safety equipment, inert gas systems, fire prevention, and pollution control measures. Trainees gain foundational knowledge to operate safely on oil tankers and understand tanker-specific risks, regulations, and operational protocols.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SAFETY, CARGO SAFETY AND HULL INTEGRITY TRAINING",
      description: "This course provides crew and officers with essential knowledge of passenger ship safety, cargo handling, and hull integrity management. It covers emergency preparedness, fire prevention, structural safety, stability monitoring, and safe cargo operations. Trainees learn to identify hazards, implement safety protocols, and respond effectively to onboard emergencies, ensuring passenger safety and vessel integrity.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SHIP CRISIS MANAGEMENT AND HUMAN BEHAVIOUR TRAINING",
      description: "This program trains ship officers and crew in crisis management and human behavior during emergencies. It covers risk assessment, decision-making, leadership, communication, and passenger psychology. Trainees learn to manage panic, crowd control, evacuation procedures, and coordinated response, enhancing onboard safety during incidents such as fires, collisions, or medical emergencies.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SHIP CROWD AND CRISIS MANAGEMENT AND HUMAN BEHAVIOUR TRAINING",
      description: "This course combines crowd management with crisis response on passenger ships. Participants study crowd dynamics, behavioral patterns under stress, emergency planning, and evacuation strategies. Realistic scenarios and role-playing exercises improve decision-making, leadership, and communication skills, ensuring the crew can maintain order and safety during critical situations.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SHIP CROWD MANAGEMENT TRAINING",
      description: "This training focuses specifically on managing passenger crowds during normal and emergency operations. It covers monitoring passenger movement, controlling congestion, effective communication, and safe evacuation. Trainees develop skills to prevent panic, ensure orderly assembly, and coordinate with onboard teams during emergencies.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SHIP FAMILIARIZATION",
      description: "This introductory course familiarizes crew with passenger ship layouts, operations, and safety systems. Topics include lifesaving appliances, firefighting equipment, navigation areas, and emergency procedures. Trainees gain awareness of onboard hazards and the responsibilities required to maintain passenger safety during routine and emergency operations.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SHIP FAMILIARIZATION (CROWD/CRISIS MANAGEMENT) - OPERATIONAL LEVEL",
      description: "This operational-level course builds on basic familiarization by emphasizing crowd control and crisis response. Trainees learn evacuation procedures, emergency coordination, passenger behavior management, and communication strategies. The course equips crew to handle operational emergencies confidently while ensuring passenger safety.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SHIP FAMILIARIZATION CROWD & CRISIS MANAGEMENT",
      description: "This course equips crew with knowledge and practical skills in managing passenger crowds and handling crises on board. It covers crowd monitoring, passenger behavior, emergency communication, evacuation procedures, and coordination with onboard teams. Trainees learn to maintain order, ensure safety, and respond efficiently during incidents such as fires, medical emergencies, or security threats.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SHIP FAMILIARIZATION CROWD MANAGEMENT & CRISIS MANAGEMENT",
      description: "This course reinforces operational skills in passenger crowd control and crisis handling. Participants study crowd dynamics, risk assessment, and human behavior during emergencies. Training includes drills, scenario-based exercises, and coordination strategies to ensure safe and efficient evacuation and emergency response on passenger vessels.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SHIP SAFETY & CROWD MANAGEMENT",
      description: "Focused on overall passenger ship safety and crowd supervision, this course teaches crew to manage onboard hazards, monitor passenger movement, and implement safety protocols. Trainees gain practical skills in evacuation planning, emergency drills, and effective communication to prevent accidents and ensure passenger security.",
      image: "/placeholder.svg"
    },
    {
      title: "PASSENGER SHIP SAFETY AND CRISIS MANAGEMENT",
      description: "This course prepares crew to handle emergencies and maintain safety on passenger ships. Topics include emergency planning, crisis leadership, firefighting coordination, medical emergencies, and crowd management. Trainees practice decision-making, teamwork, and emergency response strategies to minimize risks and ensure passenger welfare.",
      image: "/placeholder.svg"
    },
    {
      title: "PORT FACILITY SECURITY OFFICER",
      description: "This course trains personnel in port security management, aligning with the ISPS Code. Participants learn threat assessment, access control, surveillance, security procedures, and emergency response planning. Trainees gain the knowledge and authority to implement effective security measures at port facilities and coordinate with ship security officers.",
      image: "/placeholder.svg"
    },
    {
      title: "RANSCO Simulator Course (Management Level)",
      description: "This advanced simulator course trains senior officers and managers in operational planning, resource management, and emergency decision-making. Using realistic RANSCO simulators, trainees practice complex operational scenarios, crew coordination, and risk assessment. The course enhances leadership, team management, and safety oversight skills for effective shipboard and offshore operations.",
      image: "/placeholder.svg"
    },
    {
      title: "RIGGER / SLINGER / BANKSMAN COURSE",
      description: "This course provides practical training for personnel involved in rigging, slinging, and signaling loads on ships and offshore installations. Trainees learn safe lifting operations, load calculation, use of slings and shackles, hand signals, and communication between crane operators and deck crew. Emphasis is placed on safety, accident prevention, and compliance with maritime lifting regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "RIGGER / SLINGER / SCAFFOLDING COURSE",
      description: "This program combines rigging, slinging, and basic scaffolding skills for ship and offshore operations. Trainees gain hands-on experience in erecting, inspecting, and dismantling scaffolds, as well as safe load handling techniques. The course emphasizes safety, teamwork, and compliance with maritime and offshore industry standards for lifting and scaffolding operations.",
      image: "/placeholder.svg"
    },
    {
      title: "Rigging & Scaffolding Basic Level 2",
      description: "This course provides fundamental knowledge and hands-on training in rigging and scaffolding operations. Trainees learn safe erection, inspection, and dismantling of scaffolds, proper use of slings, shackles, and lifting gear, and basic load handling techniques. The course emphasizes workplace safety, hazard identification, and compliance with maritime and offshore standards.",
      image: "/placeholder.svg"
    },
    {
      title: "RIGGING & SLINGING / RIGGING & LIFTING",
      description: "This program trains personnel in advanced rigging, slinging, and lifting operations. It covers load calculations, crane signaling, selection of lifting equipment, safe attachment methods, and operational planning. Trainees gain practical skills to execute complex lifts safely, minimize risks, and comply with international safety regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "ROLL-ON / ROLL-OFF SHIP (ROROSC)",
      description: "This course introduces seafarers to Ro-Ro ship operations, including cargo stowage, securing, and ramp management. Trainees learn safe vehicle loading/unloading procedures, stability considerations, and emergency protocols. The program ensures crew can manage Ro-Ro cargo efficiently and comply with SOLAS and STCW requirements.",
      image: "/placeholder.svg"
    },
    {
      title: "RORO PSF",
      description: "This course provides training on Ro-Ro port facility operations, focusing on safety, cargo handling, and coordination with vessel teams. Topics include ramp management, vehicle securing, emergency response, and port-specific safety procedures. Trainees gain practical skills to maintain operational efficiency and passenger or cargo safety during Ro-Ro operations.",
      image: "/placeholder.svg"
    },
    {
      title: "RSS (Rigging & Scaffolding Supervisor)",
      description: "This advanced course is designed for supervisors responsible for rigging and scaffolding operations. It covers planning, risk assessment, inspection, load management, and team leadership. Trainees learn to oversee safe operations, ensure compliance with standards, and effectively manage personnel during complex lifting and scaffolding tasks.",
      image: "/placeholder.svg"
    },
    {
      title: "SAFETY TRAINING FOR PASSENGER SERVICE PERSONNEL",
      description: "This course provides essential safety knowledge for crew working with passengers. It covers emergency procedures, crowd management, fire safety, lifesaving appliances, and onboard hazard awareness. Trainees learn to respond quickly and efficiently during emergencies, ensuring passenger safety and compliance with STCW requirements.",
      image: "/placeholder.svg"
    },
    {
      title: "SATS (SECURITY AWARENESS TRAINING FOR ALL SEAFARERS)",
      description: "This course provides basic maritime security awareness for all seafarers. It covers the ISPS Code, shipboard security measures, threat identification, reporting procedures, and personal responsibility. Trainees gain awareness of potential security risks and learn preventive actions to enhance shipboard safety.",
      image: "/placeholder.svg"
    },
    {
      title: "SBT (SCAFFOLDING BASIC TRAINING)",
      description: "This course introduces basic scaffolding skills and safety for shipboard and offshore operations. Trainees learn scaffold assembly, inspection, dismantling, and safe work practices. Emphasis is placed on hazard identification, proper use of equipment, and compliance with maritime and offshore safety standards.",
      image: "/placeholder.svg"
    },
    {
      title: "SCAFFOLDING INSPECTOR",
      description: "This advanced course trains personnel to inspect scaffolds and ensure compliance with safety standards. Topics include scaffold design, load assessment, inspection procedures, risk mitigation, and documentation. Trainees gain the skills to identify defects, enforce safety protocols, and supervise scaffold operations effectively.",
      image: "/placeholder.svg"
    },
    {
      title: "SECURITY TRAINING FOR SEAFARERS (WITH DESIGNATED SECURITY DUTIES)",
      description: "This course is designed for seafarers assigned designated security duties onboard. It covers threat assessment, access control, patrol procedures, reporting, and emergency response. Trainees learn to implement ship security plans and comply with ISPS Code requirements, enhancing overall maritime security.",
      image: "/placeholder.svg"
    },
    {
      title: "SHIP FAMILIARIZATION",
      description: "This course introduces seafarers to basic shipboard operations, layout, and safety systems. Trainees learn about navigation equipment, machinery spaces, lifesaving appliances, firefighting systems, and general ship routines. The program ensures crew are familiar with vessel operations and can operate safely and efficiently on board.",
      image: "/placeholder.svg"
    },
    {
      title: "SHIP HANDLING SIMULATOR AND BRIDGE TEAMWORK",
      description: "This simulator-based course provides hands-on experience in ship handling and bridge team coordination. Trainees practice maneuvering, berthing, unberthing, collision avoidance, and emergency procedures. Emphasis is placed on teamwork, communication, and decision-making to improve safety and operational efficiency on the bridge.",
      image: "/placeholder.svg"
    },
    {
      title: "SHIP MANEUVERING SIMULATOR",
      description: "This course offers practical training in ship maneuvering under various conditions using simulators. Trainees learn the effects of wind, current, and shallow water, and practice handling ships in restricted waters, turning basins, and emergency scenarios. The course enhances confidence, situational awareness, and safe maneuvering skills.",
      image: "/placeholder.svg"
    },
    {
      title: "SHIP SAFETY OFFICER",
      description: "This program trains officers to implement and maintain ship safety management systems. Topics include risk assessment, accident prevention, safety audits, firefighting coordination, emergency drills, and compliance with STCW and ISM Code. Trainees gain the skills to oversee safe operations and ensure regulatory compliance on board.",
      image: "/placeholder.svg"
    },
    {
      title: "SHIP SECURITY OFFICER",
      description: "This course prepares officers to manage and enforce ship security as per the ISPS Code. Trainees learn threat assessment, access control, security patrols, emergency response, and documentation. The course equips participants to safeguard ships, crew, cargo, and passengers against security threats.",
      image: "/placeholder.svg"
    },
    {
      title: "SHIPBOARD SAFETY OFFICER",
      description: "This course trains officers to oversee shipboard safety operations in compliance with STCW and ISM Code requirements. Topics include risk assessment, safety audits, emergency preparedness, firefighting coordination, and accident prevention. Trainees gain the skills to maintain a safe working environment and ensure the well-being of crew and passengers.",
      image: "/placeholder.svg"
    },
    {
      title: "SHIPBOARD SAFETY OFFICER (SSO 880C)",
      description: "This program provides specialized training aligned with the SSO 880C standard, focusing on advanced safety management, compliance verification, and operational risk control. Officers learn to implement safety policies, conduct drills, monitor hazardous areas, and maintain documentation, ensuring effective safety oversight on board.",
      image: "/placeholder.svg"
    },
    {
      title: "SIRE 2.0 TRAINING COURSE",
      description: "This course prepares officers and crew for Ship Inspection Report Programme (SIRE 2.0) inspections conducted by oil majors. It covers inspection criteria, best practices for vessel operations, safety compliance, cargo handling, and documentation. Trainees learn how to meet inspection standards and maintain operational readiness to pass vetting assessments.",
      image: "/placeholder.svg"
    },
    {
      title: "Steering Test",
      description: "This practical course evaluates and trains officers in manual and automatic ship steering under various conditions. Trainees practice helm control, response to rudder orders, emergency maneuvers, and navigation under challenging environments. The course ensures officers can safely and effectively steer vessels as required.",
      image: "/placeholder.svg"
    },
    {
      title: "WARTSILA NAVI - SAILOR 4000",
      description: "This course provides training on the Wärtsilä NAVI-Sailor 4000 communication and navigation system. Trainees learn operation of GMDSS, digital communication, navigation alerts, distress signaling, and monitoring systems. The course enhances competence in shipboard communication and emergency coordination.",
      image: "/placeholder.svg"
    },
    {
      title: "WINCH OPERATOR",
      description: "This program trains personnel in safe winch operation for cargo handling, mooring, and deck operations. Trainees learn equipment handling, load control, signaling, and preventive maintenance. Safety practices and accident prevention are emphasized throughout.",
      image: "/placeholder.svg"
    },
    {
      title: "MLC ( Maritime Labor Convention)",
      description: "This course provides awareness of the MLC 2006 regulations, covering seafarers’ rights, working conditions, onboard welfare, health, and safety. Trainees understand labor standards, complaint procedures, and compliance requirements to ensure fair and safe working conditions.",
      image: "/placeholder.svg"
    },
    {
      title: "Integrated Safety training for rating",
      description: "This course equips ratings with essential safety knowledge for shipboard operations. It includes firefighting, lifesaving, personal safety, emergency drills, and pollution prevention. Trainees gain practical skills to work safely and respond effectively to onboard emergencies.",
      image: "/placeholder.svg"
    },
    {
      title: "Crew safety",
      description: "This program focuses on general safety awareness for all crew members. Topics include personal protective equipment (PPE), hazard identification, safe deck operations, and emergency procedures. Trainees are prepared to maintain safety standards in all shipboard activities.",
      image: "/placeholder.svg"
    },
    {
      title: "Container Familarization",
      description: "This course provides basic knowledge of container types, handling, stowage, and securing methods. Trainees learn safe loading/unloading practices, weight distribution, lashing, and hazard awareness. The program ensures crew can handle containerized cargo efficiently and safely.",
      image: "/placeholder.svg"
    },
    {
      title: "Commercial Knowledge for maritime industry",
      description: "This course introduces trainees to maritime commerce and operational procedures. Topics include charter parties, freight calculation, cargo documentation, port operations, and shipping contracts. The training helps crew understand the commercial aspects of shipping and their impact on vessel operations.",
      image: "/placeholder.svg"
    },
    {
      title: "Port State Control and Oil Major Inspection (PSC-OM)",
      description: "This program trains officers and crew in port state control procedures and oil major inspections. Topics include documentation, compliance checks, ISM/ISPS verification, safety standards, and inspection readiness. Trainees learn best practices to pass inspections efficiently.",
      image: "/placeholder.svg"
    },
    {
      title: "Leadership training",
      description: "This course develops leadership and team management skills for shipboard personnel. It covers communication, decision-making, conflict resolution, and situational awareness. Trainees learn to lead teams effectively, especially during emergencies or high-pressure operations.",
      image: "/placeholder.svg"
    },
    {
      title: "Furuno FEA Bulk carrier safety course",
      description: "This course provides training on Furuno Electronic Chart and Navigation systems for bulk carriers. Trainees learn voyage planning, navigational monitoring, alarm handling, and collision avoidance. Emphasis is placed on safe navigation and compliance with IMO regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "Danelec",
      description: "This course provides training on Danelec Voyage Data Recorders (VDR). Trainees learn system operation, data recording, retrieval, and playback for accident investigation and safety monitoring. The course ensures officers can manage VDRs effectively for compliance and safety purposes.",
      image: "/placeholder.svg"
    },
    {
      title: "Bulk carrier safety course",
      description: "This course focuses on safety procedures specific to bulk carrier operations. It covers cargo handling, trimming, ballast management, hazard recognition, and emergency drills. Trainees gain practical skills to maintain vessel safety, prevent accidents, and comply with international standards.",
      image: "/placeholder.svg"
    },
    {
      title: "SCAFFOLD ERECTOR",
      description: "This course trains personnel in the safe erection of scaffolds on ships and offshore installations. Trainees learn proper scaffold assembly, load handling, bracing techniques, hazard identification, and compliance with safety standards. Practical sessions ensure hands-on proficiency and accident prevention.",
      image: "/placeholder.svg"
    },
    {
      title: "SCAFFOLD INSPECTOR",
      description: "This advanced course trains individuals to inspect scaffolding structures for safety and compliance. Topics include load assessment, defect identification, regulatory requirements, and documentation. Trainees gain the skills to ensure scaffold integrity and supervise safe operations.",
      image: "/placeholder.svg"
    },
    {
      title: "COMPLEX RIGGING AND LIFTING",
      description: "This program provides advanced training in rigging, slinging, and lifting of complex loads. Trainees learn load calculation, crane coordination, signaling, risk assessment, and safe execution of heavy lifts. The course emphasizes compliance with maritime and offshore lifting regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "RADIO OPERATOR",
      description: "This course prepares trainees to operate shipboard radio and communication equipment. Topics include VHF/HF radio operation, GMDSS procedures, distress signaling, message handling, and communication protocols. Trainees gain practical skills essential for safe and effective ship communication.",
      image: "/placeholder.svg"
    },
    {
      title: "COXSWAIN",
      description: "This course trains personnel to operate small craft and rescue boats. Trainees learn boat handling, navigation, emergency response, towing operations, and crew management. The program enhances operational safety and efficiency during rescue and deck operations.",
      image: "/placeholder.svg"
    },
    {
      title: "Advanced first aid",
      description: "This course provides comprehensive first aid training for shipboard personnel. Topics include CPR, trauma care, medical emergencies, injury management, and use of onboard medical equipment. Trainees gain skills to provide immediate care and support passenger and crew safety.",
      image: "/placeholder.svg"
    },
    {
      title: "Maritime Mental health Awareness",
      description: "This course raises awareness of mental health challenges in the maritime environment. Topics include stress management, fatigue, isolation effects, counseling strategies, and promoting well-being onboard. Trainees learn to support colleagues, recognize warning signs, and maintain a healthy working environment.",
      image: "/placeholder.svg"
    },
    {
      title: "Abrasive Wheel Safety Course",
      description: "This course provides training on the safe use of abrasive wheels and grinding equipment onboard ships. Trainees learn hazard identification, proper handling, personal protective equipment (PPE), inspection, and maintenance. Emphasis is on accident prevention and compliance with safety standards.",
      image: "/placeholder.svg"
    },
    {
      title: "BASIC MARITIME WELDING COURSE",
      description: "This program trains personnel in fundamental welding techniques for shipboard applications. Topics include arc welding, gas welding, joint preparation, safety practices, and quality checks. Trainees gain hands-on skills for repair, maintenance, and construction tasks onboard.",
      image: "/placeholder.svg"
    },
    {
      title: "EEMA (Electrical Equipments for Hazardous Area)",
      description: "This course provides knowledge on safe handling and operation of electrical equipment in hazardous areas such as oil and chemical tankers. Topics include equipment classification, installation standards, safety protocols, and maintenance procedures. Trainees learn to prevent electrical hazards and ensure compliance with safety regulations.",
      image: "/placeholder.svg"
    },
    {
      title: "Electro Technical Rating Course",
      description: "This course prepares trainees to serve as Electro-Technical Ratings (ETR) onboard ships. Topics include electrical systems, maintenance, troubleshooting, repair, and safety procedures. Trainees gain practical skills to support shipboard electrical operations efficiently and safely.",
      image: "/placeholder.svg"
    },
    {
      title: "Engine Room Management Simulator Course",
      description: "This simulator-based course trains officers in engine room operations, management, and problem-solving. Trainees practice routine and emergency scenarios, monitor machinery, coordinate team tasks, and manage resources. The course enhances operational efficiency, safety, and decision-making.",
      image: "/placeholder.svg"
    },
    {
      title: "Engine room team Management",
      description: "This course focuses on team coordination and leadership in engine room operations. Trainees learn task allocation, communication, problem-solving, and emergency handling. Emphasis is placed on efficiency, safety, and smooth engine room operations.",
      image: "/placeholder.svg"
    },
    {
      title: "Engine Room Resource Management",
      description: "This course teaches officers to manage engine room resources effectively. Topics include personnel management, equipment monitoring, maintenance scheduling, and emergency preparedness. Trainees develop skills to optimize operations and ensure safe engine room management.",
      image: "/placeholder.svg"
    },
    {
      title: "ENGINE ROOM SIMULATOR",
      description: "This simulator-based course provides hands-on training in engine room operations. Trainees practice monitoring machinery, troubleshooting faults, responding to alarms, and managing emergency situations. The course enhances practical skills for real-life engine room operations.",
      image: "/placeholder.svg"
    },
    {
      title: "ENGINE ROOM SIMULATOR (MANAGEMENT LEVEL)",
      description: "This advanced course trains senior officers in engine room management and decision-making. Trainees use simulators to handle complex machinery scenarios, resource planning, and emergency situations. The program strengthens leadership, problem-solving, and operational oversight.",
      image: "/placeholder.svg"
    },
    {
      title: "ENGINE ROOM SIMULATOR AND TEAM MANAGEMENT",
      description: "This course combines practical engine room simulator training with team management skills. Trainees handle machinery operations while coordinating crew tasks, ensuring safety, and optimizing engine room performance. Emphasis is on teamwork, leadership, and operational efficiency.",
      image: "/placeholder.svg"
    },
    {
      title: "FRAMO PUMPMAN TRAINING",
      description: "This program trains personnel in operation and maintenance of Framo cargo pumps. Trainees learn pump setup, troubleshooting, maintenance routines, and safety procedures. The course ensures efficient cargo handling operations and reduces risk of equipment failure.",
      image: "/placeholder.svg"
    },
    {
      title: "HIGH VOLTAGE INSTALLATION",
      description: "This course provides training on installation, maintenance, and safety procedures for high-voltage systems on ships. Trainees learn electrical hazards, insulation techniques, switchgear operations, and emergency procedures to ensure safe handling of high-voltage equipment.",
      image: "/placeholder.svg"
    },
    {
      title: "HIGH VOLTAGE INSTALLATION - MANAGEMENT LEVEL",
      description: "This advanced course focuses on managing high-voltage systems and teams. Trainees gain skills in planning, supervision, troubleshooting, safety audits, and compliance with international standards. It prepares senior officers to oversee electrical operations safely and efficiently.",
      image: "/placeholder.svg"
    },
    {
      title: "HIGH VOLTAGE INSTALLATION - OPERATIONAL LEVEL",
      description: "This operational-level program trains officers in practical operation and maintenance of high-voltage systems. Topics include system monitoring, fault detection, safety protocols, and preventive maintenance. Trainees develop hands-on skills for daily shipboard electrical operations.",
      image: "/placeholder.svg"
    },
    {
      title: "HVILV (High Voltage/Low Voltage) - Include Practical",
      description: "This course covers both high and low voltage electrical systems with practical exercises. Trainees learn installation, maintenance, troubleshooting, and safety procedures across different voltage levels. Practical sessions ensure competence in real-world shipboard electrical operations.",
      image: "/placeholder.svg"
    },
    {
      title: "LOCK OUT TAG OUT (LOTO)",
      description: "This course teaches LOTO procedures to prevent accidental energization of electrical and mechanical systems. Trainees learn identification of energy sources, isolation procedures, tagging, and safety verification to ensure maintenance personnel safety.",
      image: "/placeholder.svg"
    },
    {
      title: "MARINE ELECTRICIAN COURSE",
      description: "This program trains personnel in shipboard electrical systems, maintenance, and troubleshooting. Trainees learn circuits, switchgear, motors, safety procedures, and documentation. The course prepares electricians to maintain safe and efficient shipboard operations.",
      image: "/placeholder.svg"
    },
    {
      title: "MARINE FITTER COURSE",
      description: "This course provides training in mechanical assembly, maintenance, and repair of shipboard machinery. Trainees learn fitting techniques, alignment, welding, pipework, and preventive maintenance, ensuring reliable mechanical operations on board.",
      image: "/placeholder.svg"
    },
    {
      title: "MARINE WELDER COURSE",
      description: "This program trains personnel in shipboard welding techniques. Trainees learn arc welding, gas welding, joint preparation, and repair of structural components. Safety practices and quality standards are emphasized throughout the course.",
      image: "/placeholder.svg"
    },
    {
      title: "PUMPMAN SKILL ENHANCEMENT TRAINING (PSET)",
      description: "This advanced course upgrades skills of pumpmen operating cargo and ballast pumps. Trainees learn troubleshooting, preventive maintenance, operational efficiency, and safety practices to handle complex pumping systems onboard.",
      image: "/placeholder.svg"
    },
    {
      title: "PUMPMAN TRAINING COURSE",
      description: "This course provides fundamental training for pumpmen responsible for cargo and ballast systems. Topics include pump operation, safety procedures, maintenance, troubleshooting, and emergency response. Trainees gain practical skills to manage shipboard pumping operations effectively.",
      image: "/placeholder.svg"
    },
    {
      title: "RADIATION PROTECTION SUPERVISOR",
      description: "This course trains supervisors in radiation safety and protection on board vessels carrying radioactive materials. Trainees learn monitoring, shielding, emergency procedures, regulatory compliance, and crew safety measures to minimize radiation risks.",
      image: "/placeholder.svg"
    },
    {
      title: "Sand Blasting Training",
      description: "This program provides practical training in sand blasting techniques for ship maintenance and surface preparation. Trainees learn equipment handling, protective gear usage, hazard identification, and environmental safety to ensure efficient and safe operations.",
      image: "/placeholder.svg"
    },
    {
      title: "SHIP ENERGY COURSE",
      description: "This course covers energy management and efficiency on board ships. Topics include fuel consumption optimization, power generation, propulsion systems, energy-saving technologies, and environmental compliance. Trainees learn to reduce operational costs and environmental impact.",
      image: "/placeholder.svg"
    },
    {
      title: "SOPV (SAFETY OPERATION FOR PRESSURE VESSEL)",
      description: "This program trains personnel in safe operation, inspection, and maintenance of pressure vessels on board. Trainees learn hazard identification, operational procedures, regulatory compliance, and emergency response to ensure safe handling of pressurized systems.",
      image: "/placeholder.svg"
    },
    {
      title: "TTC (Trade Test Certificate)",
      description: "This course prepares candidates for the Trade Test Certificate assessment, validating practical skills in their specific maritime trade. Trainees demonstrate competence in operational tasks, safety practices, and technical knowledge required for certification.",
      image: "/placeholder.svg"
    },
    {
      title: "WELDING OPERATOR COURSE",
      description: "This program provides advanced training for welding operators on ships and offshore platforms. Topics include welding techniques, quality control, safety procedures, and inspection. Trainees gain practical skills for high-quality and safe welding operations.",
      image: "/placeholder.svg"
    },
    {
      title: "RT FLEX Engine Course",
      description: "This course provides training on RT-FLEX electronically controlled engines, covering operation, monitoring, troubleshooting, and maintenance. Trainees gain hands-on experience with modern marine propulsion systems and learn to optimize performance and reliability.",
      image: "/placeholder.svg"
    },
    {
      title: "ME-B/C Operation, Trouble Shooting and Analysis",
      description: "This course focuses on marine engine (main engine – B/C type) operations, troubleshooting, and performance analysis. Trainees learn fault diagnosis, corrective measures, maintenance planning, and efficiency optimization to ensure safe and reliable engine operations.",
      image: "/placeholder.svg"
    },
    {
      title: "Electrical Training for Marine Engineers (ETME)",
      description: "This course equips marine engineers with practical knowledge of shipboard electrical systems. Topics include motors, generators, circuits, fault analysis, and preventive maintenance. Trainees develop skills to maintain and troubleshoot electrical machinery safely and efficiently.",
      image: "/placeholder.svg"
    },
    {
      title: "ME Engine",
      description: "This program provides training in main engine operations on board ships. Trainees learn engine start-up, monitoring, maintenance, troubleshooting, and emergency response procedures. The course ensures safe and efficient engine management by marine engineers.",
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