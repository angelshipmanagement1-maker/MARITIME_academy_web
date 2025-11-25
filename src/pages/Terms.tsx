import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Terms = () => {
  const sections = [
    {
      title: "Privacy Policy",
      content: "We value your privacy and are committed to protecting your personal information.",
      subsections: [
        {
          title: "Data Collection & Usage",
          content: "The information collected (such as name, contact details, documents, course history, assessment details, etc.) is used strictly for internal audit, training, certification, and institute operational purposes only. We do not sell, share, or transfer your data to any third party without your consent."
        },
        {
          title: "Data Protection",
          content: "Your data is stored securely in our internal system with restricted access. We follow standard security practices to prevent unauthorized access, data leakage, or misuse."
        },
        {
          title: "Data Sharing",
          content: "Data may be shared only if legally required by Government authorities, Courts, or official audits."
        },
        {
          title: "Data Retention",
          content: "Personal data is retained only for as long as required for record-keeping, audit compliance, or certification verification."
        },
        {
          title: "User Rights",
          content: "You have the right to request correction of your data. You may request deletion of data that is no longer required by the institute for audit or legal purposes."
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      content: "",
      subsections: [
        {
          title: "Course Delivery",
          content: "All courses, study material, certificates, and related documentation are delivered digitally—no physical shipping charges apply."
        },
        {
          title: "Physical Document Delivery (If Requested)",
          content: "If you require physical copies by courier/post, delivery charges will apply as per standard market rates. Airway bill, receipt, and tracking details will be provided for transparency."
        },
        {
          title: "Delivery Timeline",
          content: "Digital deliveries are made instantly after processing. Physical deliveries depend on courier service availability."
        },
        {
          title: "Address Responsibility",
          content: "The customer must ensure correct delivery address. Incorrect address may lead to delays or extra charges."
        }
      ]
    },
    {
      title: "Cancellation & Refund Policy",
      content: "",
      subsections: [
        {
          title: "No Refund After Course Issuance",
          content: "Once the course is issued, uploaded to the server, or student access is provided, the course cannot be cancelled and no refund will be issued."
        },
        {
          title: "Refund Eligibility",
          content: "Refund is possible only under the below conditions: The course was not provided, Teaching/training was not conducted, Batch has not been scheduled, Institute fails to allocate faculty or start the session."
        },
        {
          title: "Non-Refundable Situations",
          content: "Refund will not be provided if: Teaching/training has already started. Student/client cancels the course on their own decision after scheduling. The student is absent, late, or fails to attend the batch. Assignments/assessments are partially completed."
        },
        {
          title: "Postponement Rules",
          content: "If a student requests rescheduling, additional charges may apply as per institute policy."
        }
      ]
    },
    {
      title: "Terms & Conditions",
      content: "",
      subsections: [
        {
          title: "Course Booking Requirements",
          content: "Course booking is confirmed only after payment and submission of required documents."
        },
        {
          title: "Batch Scheduling",
          content: "Batch will be scheduled within 24 hours (excluding Sundays and public holidays). Students will receive the schedule via email/WhatsApp."
        },
        {
          title: "Attendance Policy",
          content: "Students must attend the course at the scheduled time. Requests for postponing/rescheduling may incur extra charges."
        },
        {
          title: "Course Completion Requirements",
          content: "Feedback and assessment/exam submission is mandatory to receive the certificate."
        },
        {
          title: "Post-Course Claims",
          content: "Any correction or issue regarding certificate or documentation must be reported within 48 hours. After the 48-hour window, additional charges may apply."
        },
        {
          title: "Use of Institute Material",
          content: "All study materials, videos, and teaching resources are property of the institute. Copying, sharing, or distributing without permission is prohibited."
        },
        {
          title: "Code of Conduct",
          content: "Students must behave professionally during online/offline sessions. Misconduct may lead to suspension without refund."
        },
        {
          title: "Technical Requirements",
          content: "For online courses, the student is responsible for having stable internet and a working device."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-primary">
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Terms and Conditions
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Please read our terms and conditions carefully
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {sections.map((section, index) => (
            <Card key={index} className="border-maritime-teal mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">{section.title}</h2>
                {section.content && (
                  <p className="text-foreground mb-6 leading-relaxed">{section.content}</p>
                )}
                {section.subsections && section.subsections.length > 0 && (
                  <Accordion type="single" collapsible className="space-y-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <AccordionItem key={subIndex} value={`item-${index}-${subIndex}`} className="border border-maritime-teal rounded-lg px-6">
                        <AccordionTrigger className="text-lg font-semibold text-primary">
                          {subsection.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {subsection.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Terms;