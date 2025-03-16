import TestimonialsCol from "@/components/testimonial-cols";
import { testimonials } from "@/constant";

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-white pt-24">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-[600px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Trusted by smart sellers worldwide</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] heading mt-5">
            What our users are saying
          </h2>
          <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            From intuitive design to powerful AI-driven features, clickBuy has
            become an essential tool for smart buyers and sellers worldwide.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <TestimonialsCol testimonials={firstCol} />
          <TestimonialsCol
            testimonials={secondCol}
            className="hidden md:flex"
          />
          <TestimonialsCol testimonials={thirdCol} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
