import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Sparkles, TrendingUp, TrendingDown } from "lucide-react";

export default function PriceSuggestion() {
  const navigate = useNavigate();
  const recommendedPrice = 300;
  const [price, setPrice] = useState(recommendedPrice);

  const getMatchLikelihood = () => {
    const diff = price - recommendedPrice;
    if (Math.abs(diff) < 25) return { 
      text: "High match likelihood", 
      bgColor: "bg-high-match", 
      borderColor: "border-success", 
      textColor: "text-deep-green",
      cardBg: "bg-high-match"
    };
    if (diff > 50) return { 
      text: "Very high match likelihood", 
      bgColor: "bg-very-high-match", 
      borderColor: "border-very-high-match", 
      textColor: "text-white",
      cardBg: "bg-very-high-match"
    };
    if (diff > 0) return { 
      text: "High match likelihood", 
      bgColor: "bg-high-match", 
      borderColor: "border-success", 
      textColor: "text-deep-green",
      cardBg: "bg-high-match"
    };
    if (diff > -50) return { 
      text: "Low match likelihood", 
      bgColor: "bg-low-match-light", 
      borderColor: "border-low-match", 
      textColor: "text-low-match",
      cardBg: "bg-low-match-light"
    };
    return { 
      text: "Very low match likelihood", 
      bgColor: "bg-very-low-match-light", 
      borderColor: "border-very-low-match", 
      textColor: "text-very-low-match",
      cardBg: "bg-very-low-match-light"
    };
  };

  const likelihood = getMatchLikelihood();

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Set your price</h1>
        </div>

        <Card
          className={`p-6 transition-all duration-500 ${likelihood.borderColor} ${likelihood.cardBg} ${
            likelihood.text === "Very low match likelihood" ? "border-[3px]" : "border-2"
          }`}
        >
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className={`w-5 h-5 ${likelihood.textColor}`} />
            <p className="text-sm font-medium text-foreground">
              {price === recommendedPrice ? "Recommended Price" : "Your Bid"}
            </p>
          </div>
          <p className={`text-4xl font-bold mb-1 transition-colors duration-500 ${likelihood.textColor}`}>
            ₹{price}
          </p>
          <div className="flex items-center space-x-2 mt-3">
            <TrendingUp className={`w-4 h-4 ${likelihood.textColor}`} />
            <p className={`text-xs transition-colors duration-500 ${likelihood.textColor}`}>
              {likelihood.text}
            </p>
          </div>
        </Card>

        <Card className="p-5 bg-muted/20">
          <p className="text-xs text-muted-foreground text-center">
            Price based on demand & local averages
          </p>
        </Card>

        <div className="space-y-4">
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Adjust your offer
            </label>
            <Slider
              value={[price]}
              onValueChange={(value) => setPrice(value[0])}
              min={100}
              max={1000}
              step={50}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>₹100</span>
              <span>₹1000</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Or enter custom amount
            </label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value) || 0)}
              className="text-lg"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <Button
            className="w-full h-12 text-base bg-primary-green hover:bg-deep-green text-primary-foreground"
            onClick={() => navigate("/offers")}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
