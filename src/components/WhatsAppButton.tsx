import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const predefinedMessages: Record<string, string> = {
    appointment:
      "Hi! I would like to book a dental consultation appointment. Please let me know your availability.",
    emergency:
      "Hi! I have a dental emergency and need immediate assistance. Please help me.",
    inquiry:
      "Hi! I have some questions about your dental services. Could you please provide more information?",
  };

  const handleClick = async (type: string) => {
    try {
      const res = await fetch("http://localhost:7071/api/get-whatsapp-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website Visitor",
          phone: "N/A",
          consultationType: type,
        }),
      });

      const data = await res.json();
      if (data?.url) {
        window.open(data.url, "_blank");
      } else {
        alert("Unable to open WhatsApp chat.");
      }
    } catch (error) {
      console.error("WhatsApp link error:", error);
      alert("Failed to open WhatsApp. Try again later.");
    }
    setIsOpen(false);
  };

  // Close on outside click
  useEffect(() => {
    const closeIfClickedOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeIfClickedOutside);
    return () => document.removeEventListener("mousedown", closeIfClickedOutside);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end space-y-2"
      ref={containerRef}
    >
      {isOpen && (
        <div className="bg-white shadow-lg border rounded-lg py-2 w-56 space-y-1">
          <button
            onClick={() => handleClick("appointment")}
            className="w-full px-4 py-2 text-left hover:bg-green-100 text-sm text-gray-800"
          >
            📅 Book Appointment
          </button>
          <button
            onClick={() => handleClick("emergency")}
            className="w-full px-4 py-2 text-left hover:bg-red-100 text-sm text-gray-800"
          >
            🚨 Emergency
          </button>
          <button
            onClick={() => handleClick("inquiry")}
            className="w-full px-4 py-2 text-left hover:bg-blue-100 text-sm text-gray-800"
          >
            💬 General Inquiry
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`h-14 w-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 ${
          isOpen ? "bg-gray-600" : "bg-green-500"
        } hover:scale-110`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
