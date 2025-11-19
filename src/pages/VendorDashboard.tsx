import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, TrendingUp, User } from "lucide-react";

const incomingBids = [
  {
    id: 1,
    customer: "John D.",
    service: "Oil Massage - Full Body",
    offeredPrice: 280,
    estimatedMargin: 120,
    timeWindow: "2:00 PM - 6:00 PM",
    duration: "60 min",
  },
  {
    id: 2,
    customer: "Sarah M.",
    service: "Foot Massage",
    offeredPrice: 200,
    estimatedMargin: 90,
    timeWindow: "4:00 PM - 7:00 PM",
    duration: "45 min",
  },
  {
    id: 3,
    customer: "Mike R.",
    service: "Thai Massage",
    offeredPrice: 350,
    estimatedMargin: 180,
    timeWindow: "12:00 PM - 3:00 PM",
    duration: "60 min",
  },
];

export default function VendorDashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Incoming Requests
          </h1>
          <p className="text-muted-foreground mt-1">
            Review and respond to customer bids
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Today</p>
            <p className="text-2xl font-bold text-foreground mt-1">12</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-warning mt-1">3</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-muted-foreground">Revenue</p>
            <p className="text-2xl font-bold text-success mt-1">₹2.4k</p>
          </Card>
        </div>

        <div className="space-y-3">
          {incomingBids.map((bid) => (
            <Card key={bid.id} className="p-5">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold text-card-foreground">
                        {bid.customer}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {bid.service}
                    </p>
                  </div>
                  <Badge variant="secondary">{bid.duration}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Time Window</p>
                      <p className="text-sm font-medium text-card-foreground">
                        {bid.timeWindow}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Offered Price</p>
                      <p className="text-sm font-medium text-primary">
                        ₹{bid.offeredPrice}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-3 bg-success/10 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">
                    Est. margin: ₹{bid.estimatedMargin}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">Accept</Button>
                  <Button variant="outline" className="flex-1">
                    Counter Offer
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
