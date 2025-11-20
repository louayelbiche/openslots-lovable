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

const vendors = [
  {
    id: 1,
    name: "Serenity Spa",
    rating: 4.8,
    distance: "1.2 km",
    bestPrice: 280,
    label: "Best Offer",
    times: [
      { slot: "2:00 PM", price: 280 },
      { slot: "3:30 PM", price: 300 },
      { slot: "5:00 PM", price: 320 },
    ],
  },
  {
    id: 2,
    name: "Wellness Hub",
    rating: 4.9,
    distance: "0.8 km",
    bestPrice: 300,
    label: "Highest Rated",
    times: [
      { slot: "1:00 PM", price: 300 },
      { slot: "4:00 PM", price: 310 },
    ],
  },
  {
    id: 3,
    name: "Tranquil Touch",
    rating: 4.6,
    distance: "0.5 km",
    bestPrice: 350,
    label: "Shortest Distance",
    times: [
      { slot: "12:00 PM", price: 350 },
      { slot: "2:30 PM", price: 360 },
      { slot: "6:00 PM", price: 340 },
    ],
  },
];

export default function Offers() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("price");
  const [selectedSlots, setSelectedSlots] = useState<{ [key: number]: string }>(
    { 1: "2:00 PM" }
  );

  return (
    <div className="min-h-screen bg-background pb-6">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Live Offers</h1>
            <Badge
              variant="secondary"
              className="mt-1 animate-pulse bg-success/20 text-success border-success/30"
            >
              <span className="w-2 h-2 rounded-full bg-success mr-2 animate-ping"></span>
              Offers coming in...
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
              className="whitespace-nowrap"
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="space-y-3">
          {vendors.map((vendor, index) => (
            <Card
              key={vendor.id}
              className={`p-5 cursor-pointer transition-all relative overflow-hidden ${
                index === 0
                  ? "border-2 border-success animate-pulse shadow-lg shadow-success/20"
                  : "hover:shadow-lg"
              }`}
            >
              <Badge
                className={`absolute top-3 right-3 ${
                  index === 0
                    ? "bg-success text-white"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {vendor.label}
              </Badge>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
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
                        {vendor.distance}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">
                      Best price
                    </p>
                    <p className="text-2xl font-bold text-primary">
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
                    value={selectedSlots[vendor.id] || vendor.times[0].slot}
                    onValueChange={(value) =>
                      setSelectedSlots({ ...selectedSlots, [vendor.id]: value })
                    }
                  >
                    <SelectTrigger className="w-full bg-card">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card">
                      {vendor.times.map((time) => (
                        <SelectItem key={time.slot} value={time.slot}>
                          <div className="flex justify-between w-full">
                            <span>{time.slot}</span>
                            <span className="ml-4 font-semibold">
                              ₹{time.price}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full"
                  onClick={() => navigate("/confirmation")}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
