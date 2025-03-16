import { AnimatedFounders } from "@/components/ui/animated-fonders";
import { founders } from "@/constant";

const CoFounders = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] heading">
            Meet the visionaries behind ClickBuy
          </h2>
          <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Driven by innovation, our founders combine expertise in AI,
            e-commerce, and data analytics to revolutionize product sourcing
            making it smarter, faster, and more profitable for you.
          </p>
        </div>

        <AnimatedFounders founders={founders} />
      </div>
    </section>
  );
};

export default CoFounders;
