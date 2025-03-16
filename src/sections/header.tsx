import { Button } from "@/components/ui/button";
import { ArrowRight, MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-xs z-1000">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:flex">
          AI-Driven Sourcing. Maximum Profits. Zero Hassle.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container px-4 md:px-0 mx-auto">
          <div className="flex items-center justify-between mx-auto">
            <p>Clickbuy</p>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href={"#"}>Discover</Link>
              <Link href={"#"}>Categories</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Testimonial</Link>
              <Button className="tracking-tight">
                <Link href={"#"}>Get started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
