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
    if (diff > 100) return { text: "Low match likelihood", color: "warning" };
    if (diff > 0) return { text: "Fair match likelihood", color: "warning" };
    if (diff > -50) return { text: "Good match likelihood", color: "success" };
    return { text: "High match likelihood", color: "success" };
  };

  const likelihood = getMatchLikelihood();
  const isAboveRecommended = price > recommendedPrice;

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
          className={`p-6 transition-all duration-500 ${
            isAboveRecommended
              ? "bg-warning/10 border-warning/30"
              : "bg-success/10 border-success/30"
          }`}
        >
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles
              className={`w-5 h-5 ${
                isAboveRecommended ? "text-warning" : "text-success"
              }`}
            />
            <p className="text-sm font-medium text-foreground">
              {price === recommendedPrice ? "Recommended Price" : "Your Bid"}
            </p>
          </div>
          <p
            className={`text-4xl font-bold mb-1 transition-colors duration-500 ${
              isAboveRecommended ? "text-warning" : "text-success"
            }`}
          >
            ₹{price}
          </p>
          <div className="flex items-center space-x-2 mt-3">
            {isAboveRecommended ? (
              <TrendingUp className="w-4 h-4 text-warning" />
            ) : (
              <TrendingDown className="w-4 h-4 text-success" />
            )}
            <p
              className={`text-xs transition-colors duration-500 ${
                likelihood.color === "warning" ? "text-warning" : "text-success"
              }`}
            >
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
            className="w-full h-12 text-base"
            onClick={() => navigate("/offers")}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
