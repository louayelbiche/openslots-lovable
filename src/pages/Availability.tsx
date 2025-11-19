import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock } from "lucide-react";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

export default function Availability() {
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">
            When are you free?
          </h1>
        </div>

        <Card className="p-5">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <p className="font-medium text-foreground">Select time window</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Start time</label>
              <select
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full h-12 rounded-lg border border-input bg-background px-4 text-foreground"
              >
                <option value="">Select start time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">End time</label>
              <select
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full h-12 rounded-lg border border-input bg-background px-4 text-foreground"
              >
                <option value="">Select end time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-accent/30">
          <p className="text-sm text-foreground">
            💡 <span className="font-medium">Pro tip:</span> Wider time windows
            get more vendor responses!
          </p>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button
          className="w-full h-12 text-base"
          onClick={() => navigate("/offers")}
          disabled={!startTime || !endTime}
        >
          Find Offers
        </Button>
      </div>
    </div>
  );
}
