import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consultationType: "general"
  });

  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_70z33xs",         // replace with your EmailJS service ID
        "template_8xdfgoa",        // replace with your EmailJS template ID
        formRef.current,
        "pUcFA7AkH0UTRLSxi"          // replace with your EmailJS public key
      );

      toast({
        title: "Consultation Request Sent!",
        description: "We'll contact you within 24 hours to schedule your consultation.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consultationType: "general"
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Something went wrong.",
        description: "Please try again or contact us by phone.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">Book Your Consultation</CardTitle>
        <p className="text-gray-600">Fill out the form below and we'll contact you within 24 hours.</p>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
              Consultation Type
            </label>
            <select
              id="consultationType"
              name="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="general">General Consultation</option>
              <option value="single-tooth">Single Tooth Implant</option>
              <option value="all-on-4">All-on-4 Treatment</option>
              <option value="full-mouth">Full Mouth Reconstruction</option>
              <option value="dentures">Implant Supported Dentures</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your dental concerns or questions..."
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6" aria-label="Send Consultation Request">
            <Send className="w-5 h-5 mr-2" />
            Send Consultation Request
          </Button>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to be contacted by our team regarding your consultation request.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
