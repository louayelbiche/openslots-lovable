import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Clock, DollarSign, User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const timeSlots = [
  { slot: "2:00 PM", price: 280 },
  { slot: "3:30 PM", price: 300 },
  { slot: "5:00 PM", price: 320 },
];

export default function BookingSummary() {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(timeSlots[0].slot);
  const selectedSlot = timeSlots.find(t => t.slot === selectedTime) || timeSlots[0];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Booking Summary</h1>
        </div>

        <Card className="p-6 space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-card-foreground">
              Serenity Spa
            </h2>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-sm text-muted-foreground">★★★★☆</span>
              <span className="text-sm text-muted-foreground">4.8</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-light-mint flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-primary-green" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-card-foreground">Service</p>
                <p className="text-sm text-muted-foreground">Foot Massage • 45 minutes</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-light-mint flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary-green" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-card-foreground mb-2">Time Slot</p>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="w-full bg-card border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border z-50">
                    {timeSlots.map((time) => (
                      <SelectItem key={time.slot} value={time.slot}>
                        <div className="flex justify-between w-full">
                          <span>{time.slot}</span>
                          <span className="ml-4 font-semibold">₹{time.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">Tomorrow, Dec 20, 2024</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-full bg-light-mint flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-green" />
              </div>
              <div>
                <p className="font-medium text-card-foreground">Location</p>
                <p className="text-sm text-muted-foreground">123 Wellness Street, Downtown</p>
                <p className="text-xs text-muted-foreground">1.2 km away</p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/30">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-success" />
              <span className="font-medium text-foreground">Total Price</span>
            </div>
            <span className="text-2xl font-bold text-success">₹{selectedSlot.price}</span>
          </div>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button
          className="w-full h-12 text-base bg-primary-green hover:bg-deep-green text-primary-foreground"
          onClick={() => navigate("/confirmation")}
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}
