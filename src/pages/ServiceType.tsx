import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";

const massageTypes = [
  { name: "Foot Massage", duration: "45 min", price: "₹250" },
  { name: "Oil Massage", duration: "60 min", price: "₹300" },
  { name: "Full Body", duration: "90 min", price: "₹500" },
  { name: "Thai Massage", duration: "60 min", price: "₹350" },
];

export default function ServiceType() {
  const navigate = useNavigate();
  const { category } = useParams();

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
            Choose your {category} type
          </h1>
        </div>

        <div className="space-y-3">
          {massageTypes.map((type) => (
            <Card
              key={type.name}
              onClick={() => navigate("/price-suggestion")}
              className="p-5 cursor-pointer hover:shadow-md transition-all hover:border-primary"
            >
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
            </Card>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card border-t border-border">
        <Button
          className="w-full h-12 text-base"
          onClick={() => navigate("/price-suggestion")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
