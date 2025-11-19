import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Clock } from "lucide-react";

const vendors = [
  {
    id: 1,
    name: "Serenity Spa",
    rating: 4.8,
    distance: "1.2 km",
    price: 280,
    times: ["2:00 PM", "3:30 PM", "5:00 PM"],
  },
  {
    id: 2,
    name: "Wellness Hub",
    rating: 4.6,
    distance: "0.8 km",
    price: 300,
    times: ["1:00 PM", "4:00 PM"],
    counterOffer: true,
  },
  {
    id: 3,
    name: "Tranquil Touch",
    rating: 4.9,
    distance: "2.1 km",
    price: 350,
    times: ["12:00 PM", "2:30 PM", "6:00 PM"],
  },
];

export default function Offers() {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("price");

  return (
    <div className="min-h-screen bg-background pb-6">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Live Offers</h1>
            <Badge variant="secondary" className="mt-1 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-success mr-2"></span>
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
          {vendors.map((vendor) => (
            <Card
              key={vendor.id}
              className="p-5 cursor-pointer hover:shadow-lg transition-all relative"
              onClick={() => navigate("/discount-bands")}
            >
              {vendor.counterOffer && (
                <Badge className="absolute top-3 right-3 bg-warning text-white">
                  Counter Offer!
                </Badge>
              )}

              <div className="space-y-3">
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
                <div className="text-right space-y-2">
                  <p className="text-2xl font-bold text-primary">
                    ₹{vendor.price}
                  </p>
                  <Button size="sm" className="w-full">
                    Book
                  </Button>
                </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    {vendor.times.map((time) => (
                      <Badge key={time} variant="secondary" className="text-xs">
                        {time}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
