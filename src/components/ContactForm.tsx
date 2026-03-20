import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// EmailJS configuration - set these in your .env file
// VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      // Note: In production, you should use environment variables for these credentials
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current || "",
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <Card className="border-maritime-teal">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for contacting us. We will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setSubmitStatus("idle")}
              className="bg-maritime-teal hover:bg-maritime-teal-light"
            >
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-maritime-teal">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Send className="h-5 w-5 text-maritime-gold" />
          <span>Send Us a Message</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "border-destructive" : "border-input"}
            />
            {errors.name && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone <span className="text-destructive">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? "border-destructive" : "border-input"}
            />
            {errors.phone && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? "border-destructive" : "border-input"}
            />
            {errors.email && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={errors.message ? "border-destructive" : "border-input"}
            />
            {errors.message && (
              <p className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="p-3 rounded-md bg-destructive/10 border border-destructive">
              <p className="text-sm text-destructive flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Failed to send message. Please try again or contact us directly.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-maritime-teal hover:bg-maritime-teal-light"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
