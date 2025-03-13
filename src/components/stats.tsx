import CountUp from "react-countup";

const stats = [
  {
    num: 15000000,
    suffix: "+",
    text: "Shopping links reviewed daily",
  },
  {
    num: 1500000,
    suffix: "+",
    text: "ASINs the AI is trained to source for",
  },
  {
    num: 1900,
    suffix: "+",
    text: "Average Number of Leads per £1 spent",
  },
];

const Stats = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={10}
                  suffix={item.suffix}
                  className="text-4xl lg:text-5xl font-extrabold heading"
                />
                <p className="mt-2 text-lg max-w-[200px] text-[#010D3E] tracking-tight">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
