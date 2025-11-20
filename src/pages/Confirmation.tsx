import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Confirmation() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!showConfetti) {
      setShowConfetti(true);
      const duration = 2000;
      const end = Date.now() + duration;

      const colors = ["#10844B", "#8EB69B", "#DAF1DE", "#E2F6EA"];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [showConfetti]);

  return (
    <div className="min-h-screen bg-light-mint flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-md mx-auto w-full">
        <div className="text-center space-y-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto animate-scale-in">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">You're booked!</h1>
            <p className="text-muted-foreground">Get ready to relax</p>
          </div>
        </div>

        <Card className="w-full p-5 space-y-4 bg-card border-2 border-success/20 shadow-lg">
          <div className="space-y-3">
            <div>
              <h2 className="text-xl font-bold text-card-foreground">Serenity Spa</h2>
              <p className="text-sm text-muted-foreground flex items-center mt-1">
                <span className="mr-1">★★★★☆</span> 4.8
              </p>
            </div>

            <div className="flex items-start space-x-3 py-2 border-t border-border">
              <div className="w-8 h-8 rounded-full bg-light-mint flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-primary-green" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground">Foot Massage • 45 min</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 py-2 border-t border-border">
              <div className="w-8 h-8 rounded-full bg-light-mint flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-primary-green" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground">Tomorrow, Dec 20</p>
                <p className="text-sm text-muted-foreground">2:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 py-2 border-t border-border">
              <div className="w-8 h-8 rounded-full bg-light-mint flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary-green" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">123 Wellness Street</p>
                <p className="text-xs text-muted-foreground">1.2 km away</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/30 mt-4">
              <span className="font-medium text-foreground">Total</span>
              <span className="text-xl font-bold text-success">₹280</span>
            </div>
          </div>
        </Card>

        <div className="w-full space-y-3 mt-6">
          <Button
            className="w-full bg-primary-green hover:bg-deep-green text-primary-foreground font-medium h-12"
            onClick={() => navigate("/vendor-dashboard")}
          >
            View Booking
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="w-full border-primary-green text-primary-green hover:bg-mint"
              onClick={() => alert("Add to Calendar")}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Add to Calendar
            </Button>
            <Button
              variant="outline"
              className="w-full border-primary-green text-primary-green hover:bg-mint"
              onClick={() => alert("Get Directions")}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
