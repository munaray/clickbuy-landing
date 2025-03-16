import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { pricingTiers } from "@/constant";

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="max-w-[600px] mx-auto">
          <h1 className="text-center text-3xl md:text-[54px] md:leading-[60px] heading">
            Pricing
          </h1>
          <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Get started for free with the clickbuy chrome extension for instant
            product insights, or upgrade to our AI-powered platform for full
            access to exclusive sourcing tools, advanced analytics, and the best
            deals across UK and US marketplaces.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              yearlyPrice,
              inverse,
              features,
              link,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${title === "Yearly" ? yearlyPrice : monthlyPrice}
                  </span>
                  <span>{title === "Yearly" ? "/year" : "/month"}</span>
                </div>
                <Button
                  className={twMerge(
                    "w-full mt-[30px]",
                    inverse === true && "bg-white text-black hover:bg-white/70"
                  )}
                >
                  <Link href={link}>{buttonText}</Link>
                </Button>
                <ul className="flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      <Check className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
