import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const pulseAnimation = "animate-[pulse_2s_ease-in-out_infinite]";
const glowAnimation = "shadow-[0_0_20px_rgba(142,182,155,0.6)]";

const massageTypes = [
  { id: 1, name: "Foot Massage", duration: "45 min", price: "₹250", recommended: true },
  { id: 2, name: "Oil Massage", duration: "60 min", price: "₹300", recommended: false },
  { id: 3, name: "Full Body", duration: "90 min", price: "₹500", recommended: false },
  { id: 4, name: "Thai Massage", duration: "60 min", price: "₹350", recommended: false },
];

const timeWindows = [
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 3 PM)",
  "Evening (3 PM - 6 PM)",
  "Night (6 PM - 9 PM)",
  "Custom Range",
];

export default function ServiceType() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleContinue = () => {
    if (selectedService && selectedTime) {
      navigate("/price-suggestion");
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">
            What are you looking for?
          </h1>
        </div>

        <div className="space-y-3">
          {massageTypes.map((type) => (
            <Card
              key={type.id}
              className={`overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                selectedService === type.id
                  ? "border-teal shadow-lg bg-mint"
                  : type.recommended
                  ? "border-success bg-light-mint animate-breathing-glow"
                  : "border-border hover:border-teal bg-card"
              }`}
              onClick={() => setSelectedService(type.id)}
            >
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg text-card-foreground">
                        {type.name}
                      </h3>
                      {type.recommended && (
                        <span className="text-xs bg-success text-white px-2 py-0.5 rounded-full font-medium">
                          Recommended for you
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {type.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Starting at</p>
                    <p className="text-xl font-bold text-primary-green">{type.price}</p>
                  </div>
                </div>

                {selectedService === type.id && (
                  <div className="space-y-3 animate-fade-in border-t border-border pt-4">
                    <label className="text-sm font-medium text-foreground">
                      When are you free?
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Button
                        variant={selectedTime === "today" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime("today")}
                        className={selectedTime === "today" ? "bg-primary-green text-primary-foreground" : ""}
                      >
                        Today
                      </Button>
                      <Button
                        variant={selectedTime === "tomorrow" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime("tomorrow")}
                        className={selectedTime === "tomorrow" ? "bg-primary-green text-primary-foreground" : ""}
                      >
                        Tomorrow
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Select time window</p>
                      <div className="flex flex-wrap gap-2">
                        {["12–3 PM", "3–6 PM", "6–9 PM"].map((time) => (
                          <Button
                            key={time}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button
          className="w-full h-12 text-base bg-primary-green hover:bg-deep-green text-primary-foreground"
          onClick={handleContinue}
          disabled={!selectedService || !selectedTime}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
