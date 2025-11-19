import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceType from "./pages/ServiceType";
import PriceSuggestion from "./pages/PriceSuggestion";
import Availability from "./pages/Availability";
import Offers from "./pages/Offers";
import DiscountBands from "./pages/DiscountBands";
import Confirmation from "./pages/Confirmation";
import VendorDashboard from "./pages/VendorDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:category" element={<ServiceType />} />
          <Route path="/price-suggestion" element={<PriceSuggestion />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/discount-bands" element={<DiscountBands />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
