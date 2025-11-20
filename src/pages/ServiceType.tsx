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

const massageTypes = [
  { id: 1, name: "Foot Massage", duration: "45 min", price: "₹250" },
  { id: 2, name: "Oil Massage", duration: "60 min", price: "₹300" },
  { id: 3, name: "Full Body", duration: "90 min", price: "₹500" },
  { id: 4, name: "Thai Massage", duration: "60 min", price: "₹350" },
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
              className={`overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedService === type.id
                  ? "border-2 border-accent shadow-lg bg-accent/5"
                  : "border-2 border-transparent hover:border-border"
              }`}
              onClick={() => setSelectedService(type.id)}
            >
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-card-foreground">
                      {type.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {type.duration}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Starting at</p>
                    <p className="text-xl font-bold text-primary">{type.price}</p>
                  </div>
                </div>

                {selectedService === type.id && (
                  <div className="space-y-3 animate-fade-in border-t border-border pt-4">
                    <label className="text-sm font-medium text-foreground">
                      When are you free?
                    </label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="w-full bg-card">
                        <SelectValue placeholder="Choose your time window" />
                      </SelectTrigger>
                      <SelectContent className="bg-card">
                        {timeWindows.map((window) => (
                          <SelectItem key={window} value={window}>
                            {window}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button
          className="w-full h-12 text-base"
          onClick={handleContinue}
          disabled={!selectedService || !selectedTime}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
