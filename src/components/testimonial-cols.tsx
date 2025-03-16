import { testimonials } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TestimonialsCol = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={cn(
      "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
  >
    {props.testimonials.map(({ text, img, name, username }) => (
      <div className="card" key={name}>
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image
            src={img}
            alt={name}
            height={50}
            width={50}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TestimonialsCol;
