import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Certificates Verification", path: "/certificates" },
    { name: "Value Added Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-primary-foreground font-bold text-xl md:text-2xl">
              Angel Maritime Academy
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className="text-primary-foreground hover:bg-maritime-navy-light hover:text-primary-foreground"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            
            {/* Search Icon */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-primary-foreground hover:bg-maritime-navy-light hover:text-primary-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-maritime-navy-light"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary border-maritime-navy-light">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-primary-foreground hover:bg-maritime-navy-light hover:text-primary-foreground"
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fade-in">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md mx-auto bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
