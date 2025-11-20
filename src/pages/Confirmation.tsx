import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Confirmation() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24 relative overflow-hidden">
      {showConfetti && (
        <>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-[fall_3s_ease-in-out_forwards]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: "-10px",
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                <Sparkles
                  className="text-success"
                  style={{
                    width: `${Math.random() * 10 + 15}px`,
                    height: `${Math.random() * 10 + 15}px`,
                  }}
                />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes fall {
              to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
              }
            }
          `}</style>
        </>
      )}

      <div className="p-6 space-y-6 relative z-10">
        <div className="text-center py-8 space-y-4">
          <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto animate-scale-in">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
          <h1 className="text-3xl font-bold text-foreground animate-fade-in">
            You're booked!
          </h1>
          <p className="text-muted-foreground animate-fade-in">
            Get ready to relax
          </p>
        </div>

        <Card className="overflow-hidden animate-fade-in">
          <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/30 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-card-foreground">
                Serenity Spa
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Professional massage therapy
              </p>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">
                    Oil Massage - Full Body
                  </p>
                  <p className="text-sm text-muted-foreground">60 minutes</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">
                    Tomorrow, 3:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Dec 20, 2024 • 3:00 PM - 4:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">
                    1.2 km away
                  </p>
                  <p className="text-sm text-muted-foreground">
                    123 Wellness Street, Downtown
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg border border-success/30">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-success" />
                <span className="font-medium text-foreground">Total Price</span>
              </div>
              <span className="text-2xl font-bold text-success">₹280</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button
          className="w-full h-12 text-base"
          onClick={() => navigate("/home")}
        >
          View Booking
        </Button>
      </div>
    </div>
  );
}
