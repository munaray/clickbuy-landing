"use client";

import Stats from "@/components/stats";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import ProductShowcase from "@/sections/product-showcase";
import Categories from "@/sections/categories";
import Pricing from "@/sections/pricing";
import CoFounders from "@/sections/co-fonders";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <ProductShowcase />
      <Categories />
      <Pricing />
      <CoFounders />
      <Testimonials />
      <FAQ />
    </main>
  );
}
