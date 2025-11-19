import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, TrendingDown } from "lucide-react";

const timeWindows = [
  { time: "12:00 PM - 3:00 PM", discount: 30, price: 210 },
  { time: "3:00 PM - 5:00 PM", discount: 50, price: 150, popular: true },
  { time: "5:00 PM - 6:00 PM", discount: 10, price: 270 },
];

export default function DiscountBands() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">
            Choose your time slot
          </h1>
        </div>

        <Card className="p-5 bg-accent/20">
          <div className="flex items-center space-x-2">
            <TrendingDown className="w-5 h-5 text-accent-foreground" />
            <p className="text-sm font-medium text-foreground">
              Save more with flexible timing!
            </p>
          </div>
        </Card>

        <div className="space-y-3">
          {timeWindows.map((window, index) => (
            <Card
              key={index}
              onClick={() => setSelected(index)}
              className={`p-5 cursor-pointer transition-all ${
                selected === index
                  ? "border-2 border-primary shadow-lg"
                  : "hover:border-primary"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="font-semibold text-lg text-card-foreground">
                      {window.time}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="secondary"
                      className="bg-success/20 text-success"
                    >
                      {window.discount}% OFF
                    </Badge>
                    {window.popular && (
                      <Badge className="bg-warning text-white">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground line-through">
                    ₹300
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    ₹{window.price}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button
          className="w-full h-12 text-base"
          onClick={() => navigate("/confirmation")}
        >
          Continue to Booking
        </Button>
      </div>
    </div>
  );
}
