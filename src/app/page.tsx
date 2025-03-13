"use client";

import Stats from "@/components/stats";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import ProductShowcase from "@/sections/product-showcase";
import Categories from "@/sections/categories";
import Pricing from "@/sections/pricing";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <ProductShowcase />
      <Categories />
      <Pricing />
    </main>
  );
}
