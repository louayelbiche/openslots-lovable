import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function PriceSuggestion() {
  const navigate = useNavigate();
  const [price, setPrice] = useState(300);

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

        <Card className="p-6 bg-accent border-accent-foreground/20">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-5 h-5 text-accent-foreground" />
            <p className="text-sm font-medium text-accent-foreground">
              Recommended Price
            </p>
          </div>
          <p className="text-4xl font-bold text-accent-foreground mb-1">
            ₹{price}
          </p>
          <p className="text-xs text-accent-foreground/70">
            Based on demand & local averages
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
            onClick={() => navigate("/availability")}
          >
            Use suggested price
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 text-base"
            onClick={() => navigate("/availability")}
          >
            Bid your own price
          </Button>
        </div>
      </div>
    </div>
  );
}
