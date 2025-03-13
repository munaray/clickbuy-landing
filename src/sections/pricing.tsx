import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    link: "/",
    popular: false,
    inverse: false,
    features: [
      "AI-powered product insights",
      "Instant sourcing results",
      "Limited access to marketplace data",
      "Basic competitor analysis",
      "Email support",
    ],
  },
  {
    title: "Monthly",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    link: "/",
    popular: true,
    inverse: true,
    features: [
      "Full AI-driven sourcing",
      "Real-time deal scanning",
      "Advanced marketplace analytics",
      "Priority email & chat support",
      "Access to exclusive product trends",
      "Export sourcing data",
      "Early access to new features",
    ],
  },
  {
    title: "Yearly",
    yearlyPrice: 108,
    buttonText: "Sign up now",
    link: "/",
    popular: false,
    inverse: false,
    features: [
      "Full AI-powered sourcing access",
      "Exclusive marketplace trends & insights",
      "Dedicated account manager",
      "Custom product filters & alerts",
      "Historical price tracking",
      "Bulk data export & API access",
      "Advanced security & encryption",
      "Automated supplier recommendations",
      "Multi-marketplace integration",
      "Premium 24/7 support",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24">
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
                  "p-10 rounded-3xl border max-w-xs w-full border-[#f1f1f1] shadow-[0_7px_14px_#EAEAEA]",
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
