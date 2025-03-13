import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-8 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="px-4 md:px-0 container mx-auto">
        <div className="md:flex items-center">
          <div className="md:w-[478px] lg:w-[600px]">
            <div className="tag">Clickbuy V2.0 is here</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl heading mt-6">
              AI-powered sourcing for smarter buying
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 lg:w-[500px]">
              Skip the manual research. ClickBuy&apos;s AI finds top deals
              instantly, so you can source smarter and profit faster
            </p>
            <div className="flex gap-2 items-center mt-[30px]">
              <Button>
                <Link href={"#"}>Get for free</Link>
              </Button>
              <Button
                variant={"transparent"}
                className="bg-transparent text-black hover:bg-white/80"
              >
                <Link href={"#"} className="flex items-center gap-1">
                  <span>Learn more</span> <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 md:relative">
            <Image
              src={"/robot.png"}
              alt="Robot Image"
              height={1500}
              width={1500}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:-left-0"
            />
            <Image
              src={"/cylinder.png"}
              alt="Mini AI Image"
              height={220}
              width={220}
              className="hidden md:flex -top-8 -left-32 md:absolute"
            />
            <Image
              src={"/noodle.png"}
              alt="Noddle Image"
              height={220}
              width={220}
              className="hidden lg:flex top-[524px] left-[448px] lg:absolute rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
