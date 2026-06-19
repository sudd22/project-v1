import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#", hasChevron: true },
  { label: "Reviews", href: "#" },
  { label: "Contact us", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 md:px-28 py-4">
      {/* Left: logo + links */}
      <div className="flex items-center gap-12 md:gap-20">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src="/logo.svg" alt="Neuralyn logo" className="h-7 w-7" />
          <span className="text-xl font-bold tracking-tight">Neuralyn</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              {link.hasChevron && <ChevronDown className="h-4 w-4" />}
            </a>
          ))}
        </div>
      </div>

      {/* Right: sign in */}
      <Button className="rounded-lg text-sm font-semibold" size="default">
        Sign In
      </Button>
    </nav>
  );
}
