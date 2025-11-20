import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Sparkles, Hand, Scissors, UserCircle } from "lucide-react";

const pulseAnimation = "animate-[pulse_2s_ease-in-out_infinite]";
const glowAnimation = "shadow-[0_0_20px_rgba(142,182,155,0.6)]";

const categories = [
  { name: "Massage", icon: Hand, path: "/service/massage" },
  { name: "Nails", icon: Sparkles, path: "/service/nails" },
  { name: "Yoga", icon: UserCircle, path: "/service/yoga" },
  { name: "Chiropractor", icon: Scissors, path: "/service/chiropractor" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-foreground">
          What do you need today?
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => {
            const isRecommended = category.name === "Massage";
            return (
              <Card
                key={category.name}
                onClick={() => navigate(category.path)}
                className={`p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 ${
                  isRecommended
                    ? "border-teal animate-pulse-border bg-light-mint"
                    : "hover:border-primary bg-card"
                }`}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    isRecommended ? "bg-success" : "bg-accent"
                  }`}>
                    <category.icon className={`w-8 h-8 ${
                      isRecommended ? "text-white" : "text-accent-foreground"
                    }`} />
                  </div>
                  <span className="text-lg font-semibold text-card-foreground">
                    {category.name}
                  </span>
                  {isRecommended && (
                    <span className="text-xs text-success font-medium">Recommended for you</span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex justify-around items-center h-16">
          {["Home", "Explore", "Bookings", "Profile"].map((item) => (
            <button
              key={item}
              className="flex flex-col items-center justify-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <div className="w-6 h-6"></div>
              <span className="text-xs">{item}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
