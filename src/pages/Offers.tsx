import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const pulseAnimation = "animate-[pulse_2s_ease-in-out_infinite]";
const glowAnimation = "shadow-[0_0_25px_rgba(142,182,155,0.7)]";

const vendors = [
  {
    id: 1,
    name: "Serenity Spa",
    rating: 4.8,
    distance: 1.2,
    bestPrice: 280,
    label: "Best Offer",
    times: [
      { slot: "2:00 PM", price: 280, bestOffer: true },
      { slot: "3:30 PM", price: 300, bestOffer: false },
      { slot: "5:00 PM", price: 320, bestOffer: false },
    ],
  },
  {
    id: 2,
    name: "Wellness Hub",
    rating: 4.9,
    distance: 0.8,
    bestPrice: 300,
    label: "Highest Rated",
    times: [
      { slot: "1:00 PM", price: 300, bestOffer: true },
      { slot: "4:00 PM", price: 310, bestOffer: false },
    ],
  },
  {
    id: 3,
    name: "Tranquil Touch",
    rating: 4.6,
    distance: 0.5,
    bestPrice: 350,
    label: "Shortest Distance",
    times: [
      { slot: "12:00 PM", price: 350, bestOffer: false },
      { slot: "2:30 PM", price: 360, bestOffer: false },
      { slot: "6:00 PM", price: 340, bestOffer: true },
    ],
  },
];

export default function Offers() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("price");
  const [selectedSlots, setSelectedSlots] = useState<{ [key: number]: string }>(
    { 1: "2:00 PM" }
  );

  const getSortedVendors = () => {
    const sorted = [...vendors];
    if (sortBy === "price") {
      return sorted.sort((a, b) => a.bestPrice - b.bestPrice);
    } else if (sortBy === "rating") {
      return sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "distance") {
      return sorted.sort((a, b) => a.distance - b.distance);
    }
    return sorted;
  };

  const sortedVendors = getSortedVendors();
  
  // Find the global best offer (lowest price across all vendors)
  const globalBestOffer = sortedVendors.reduce((best, vendor) => 
    vendor.bestPrice < best.bestPrice ? vendor : best
  , sortedVendors[0]);

  return (
    <div className="min-h-screen bg-light-mint pb-6">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Live Offers</h1>
            <Badge
              variant="secondary"
              className="mt-1 bg-success-light text-success border-success/30"
            >
              <span className="w-2 h-2 rounded-full bg-success mr-2 animate-ping"></span>
              <span className="animate-pulse">Offers coming in</span>
              <span className="inline-flex ml-1">
                <span className="animate-[bounce_1s_ease-in-out_infinite]">.</span>
                <span className="animate-[bounce_1s_ease-in-out_infinite_0.2s]">.</span>
                <span className="animate-[bounce_1s_ease-in-out_infinite_0.4s]">.</span>
              </span>
            </Badge>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {["Price", "Rating", "Distance"].map((filter) => (
            <Button
              key={filter}
              variant={sortBy === filter.toLowerCase() ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy(filter.toLowerCase())}
              className={`whitespace-nowrap transition-all font-medium ${
                sortBy === filter.toLowerCase()
                  ? "bg-primary-green text-primary-foreground hover:bg-deep-green shadow-md"
                  : "bg-card text-foreground border-border hover:bg-mint"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="space-y-3">
          {sortedVendors.map((vendor) => {
            const isBestOffer = vendor.id === globalBestOffer.id;
            const bestSlotForVendor = vendor.times.reduce((best, time) => 
              time.price < best.price ? time : best
            , vendor.times[0]);
            
            return (
              <Card
                key={vendor.id}
                className={`p-5 transition-all relative overflow-hidden border-2 ${
                  isBestOffer
                    ? "border-success animate-gentle-blink bg-success-light shadow-lg"
                    : "border-border hover:border-teal bg-card"
                }`}
              >
                <Badge
                  className={`absolute top-3 right-3 font-medium ${
                    isBestOffer
                      ? "bg-success text-white shadow-md"
                      : vendor.label === "Highest Rated"
                      ? "bg-info/10 text-info border border-info/30"
                      : "bg-mint text-primary-green border border-teal"
                  }`}
                >
                  {vendor.label}
                </Badge>

                <div className="space-y-4">
                  <div className="flex justify-between items-start pr-24">
                    <div>
                      <h3 className="font-semibold text-lg text-card-foreground">
                        {vendor.name}
                      </h3>
                      <div className="flex items-center space-x-3 mt-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-warning fill-warning mr-1" />
                          {vendor.rating}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {vendor.distance} km
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">
                        From
                      </p>
                      <p className="text-2xl font-bold text-success">
                        ₹{vendor.bestPrice}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Choose your time slot
                    </label>
                    <Select
                      value={selectedSlots[vendor.id] || bestSlotForVendor.slot}
                      onValueChange={(value) =>
                        setSelectedSlots({ ...selectedSlots, [vendor.id]: value })
                      }
                    >
                      <SelectTrigger className="w-full bg-card border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50">
                        {vendor.times.map((time) => (
                          <SelectItem key={time.slot} value={time.slot}>
                            <div className="flex justify-between w-full items-center gap-4">
                              <span>{time.slot}</span>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-success">
                                  ₹{time.price}
                                </span>
                                {isBestOffer && time.slot === bestSlotForVendor.slot && (
                                  <span className="text-xs bg-success text-white px-2 py-0.5 rounded-full">
                                    Best Offer
                                  </span>
                                )}
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    className="w-full bg-primary-green hover:bg-deep-green text-primary-foreground font-medium"
                    onClick={() => navigate("/booking-summary")}
                  >
                    Book Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
