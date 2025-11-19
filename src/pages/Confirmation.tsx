import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Clock, DollarSign, CheckCircle2 } from "lucide-react";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">
            Confirm Booking
          </h1>
        </div>

        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/30"></div>
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

            <div className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Total Price</span>
              </div>
              <span className="text-2xl font-bold text-primary">₹150</span>
            </div>

            <div className="flex gap-2 pt-2">
              <div className="w-8 h-8 rounded bg-muted"></div>
              <div className="w-8 h-8 rounded bg-muted"></div>
              <div className="w-8 h-8 rounded bg-muted"></div>
            </div>
          </div>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button className="w-full h-12 text-base" onClick={() => alert("Booking confirmed!")}>
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}
