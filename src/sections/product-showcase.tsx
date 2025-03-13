import Image from "next/image";
import { Fragment } from "react";

const ProductShowcase = () => {
  return (
    <Fragment>
      {/* Main platform */}
      <section className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-[540px] mx-auto">
            <div className="flex justify-center">
              <div className="tag">Clickbuy AI platform paid version</div>
            </div>
            <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] heading mt-5">
              Unlock the full power of AI-driven sourcing
            </h2>
            <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
              Get instant access to a cutting-edge sourcing platform designed to
              maximize your profits. Clickbuy&apos;s AI scans millions of
              products daily, analyzing price trends, demand, and competition to
              help you make smarter, data-driven purchasing decisions.
            </p>
          </div>
          <div className="relative">
            <Image
              src={"/clickbuy.png"}
              alt="Clickbuy Dashboard"
              width={2408}
              height={1542}
              className="mt-10"
            />
            <Image
              src={"/pyramid.png"}
              alt="Pyramid Image"
              width={262}
              height={262}
              className="hidden md:block absolute -right-36 -top-32"
            />
            <Image
              src={"/tube.png"}
              alt="Tube Image"
              width={262}
              height={262}
              className="hidden md:block absolute bottom-24 -left-36"
            />
          </div>
        </div>
      </section>

      {/* Chrome Extensions */}
      <section className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24">
        {/* Main platform */}
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-[600px] mx-auto">
            <div className="flex justify-center">
              <div className="tag">Clickbuy chrome extension free version</div>
            </div>
            <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] heading mt-5 ">
              Smart sourcing, right in your browser for free!
            </h2>
            <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
              Experience AI-powered product research without leaving your
              favorite marketplaces. The clickbuy chrome extension brings
              sourcing insights directly to your browser, helping you find great
              deals as you browse.
            </p>
          </div>
          <div className="relative">
            <Image
              src={"/chrome.png"}
              alt="Clickbuy Dashboard"
              width={2408}
              height={1542}
              className="mt-10"
            />
            <Image
              src={"/tube.png"}
              alt="Tube Image"
              width={262}
              height={262}
              className="hidden md:block absolute -right-36 -top-32"
            />
            <Image
              src={"/pyramid.png"}
              alt="Pyramid Image"
              width={262}
              height={262}
              className="hidden md:block absolute bottom-24 -left-36"
            />
          </div>
        </div>

        {/* Chrome Extensions */}
      </section>
    </Fragment>
  );
};

export default ProductShowcase;
