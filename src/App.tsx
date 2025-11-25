import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import Courses from "./pages/Courses";
import MaritimeTrainingCourses from "./pages/MaritimeTrainingCourses";
import OffshoreTrainingCourses from "./pages/OffshoreTrainingCourses";
import MaritimeCateringCourses from "./pages/MaritimeCateringCourses";
import EcdisCourses from "./pages/EcdisCourses";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/MARITIME_academy_web/">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/maritime" element={<MaritimeTrainingCourses />} />
            <Route path="/courses/offshore" element={<OffshoreTrainingCourses />} />
            <Route path="/courses/catering" element={<MaritimeCateringCourses />} />
            <Route path="/courses/ecdis" element={<EcdisCourses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
