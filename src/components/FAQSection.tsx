
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long do dental implants last?",
    answer: "With proper care and maintenance, dental implants can last a lifetime. The success rate for dental implants is over 98%, and many patients enjoy their implants for 25+ years. Regular dental checkups and good oral hygiene are key to long-term success."
  },
  {
    question: "Is the dental implant procedure painful?",
    answer: "Most patients report minimal discomfort during and after the procedure. We use local anesthesia during the surgery, and many patients compare the experience to having a tooth extracted. Post-operative pain is typically managed effectively with over-the-counter pain medications."
  },
  {
    question: "How much do dental implants cost in Canada?",
    answer: "The cost varies depending on the type and complexity of treatment. Single implants typically range from $3,000-$5,000, while All-on-4 treatments range from $20,000-$30,000 per arch. We offer flexible financing options and work with most insurance providers."
  },
  {
    question: "How long does the implant process take?",
    answer: "The timeline varies by case. Single implants typically take 3-6 months from placement to final crown. All-on-4 treatments can often be completed in one day with immediate temporary teeth. We provide detailed timelines during your consultation."
  },
  {
    question: "Am I a candidate for dental implants?",
    answer: "Most healthy adults are candidates for dental implants. Key factors include adequate bone density, healthy gums, and good overall health. Age is not typically a limiting factor. We'll evaluate your specific situation during your free consultation."
  },
  {
    question: "What is the success rate of dental implants?",
    answer: "Dental implants have a success rate of over 98%. Factors that contribute to success include proper case selection, surgical technique, implant quality, and patient compliance with post-operative care and maintenance."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer several financing options including monthly payment plans, healthcare credit lines, and work with most insurance providers. Many plans cover a portion of implant treatment. We'll help you find the best payment option for your situation."
  },
  {
    question: "What happens if an implant fails?",
    answer: "While rare (less than 2% failure rate), if an implant fails, we offer warranty protection and will work to resolve the issue. This may include replacement of the implant or alternative treatment options, depending on the specific circumstances."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about dental implants and our treatment process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6">
                Our team is here to help you understand your options and make the best decision for your oral health.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Your Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
