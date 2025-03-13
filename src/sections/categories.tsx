"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ViewIcon } from "lucide-react";
import Link from "next/link";

type ProductItem = {
  title: string;
  image: string;
  aiScore: number;
  roi: string;
  supplierPrice: string;
  buyBox: string;
  profit: string;
  tags: string[];
  projectLink: string;
};

const Categories: React.FC = () => {
  // Hardcoded product data
  const [products] = useState<ProductItem[]>([
    // Electronics (6 products)
    {
      title: "Wireless Earbuds",
      image: "/pyramid.png",
      aiScore: 92,
      roi: "25%",
      supplierPrice: "$15",
      buyBox: "$50",
      profit: "$35",
      tags: ["Electronics"],
      projectLink: "#",
    },
    {
      title: "Smart Home Camera",
      image: "/pyramid.png",
      aiScore: 88,
      roi: "30%",
      supplierPrice: "$25",
      buyBox: "$80",
      profit: "$55",
      tags: ["Electronics"],
      projectLink: "#",
    },
    {
      title: "Wireless Keyboard",
      image: "/pyramid.png",
      aiScore: 95,
      roi: "40%",
      supplierPrice: "$18",
      buyBox: "$70",
      profit: "$52",
      tags: ["Electronics"],
      projectLink: "#",
    },
    {
      title: "Bluetooth Speaker",
      image: "/pyramid.png",
      aiScore: 90,
      roi: "35%",
      supplierPrice: "$20",
      buyBox: "$60",
      profit: "$40",
      tags: ["Electronics"],
      projectLink: "#",
    },
    {
      title: "Smartwatch",
      image: "/pyramid.png",
      aiScore: 85,
      roi: "20%",
      supplierPrice: "$50",
      buyBox: "$150",
      profit: "$100",
      tags: ["Electronics"],
      projectLink: "#",
    },
    {
      title: "Noise-Canceling Headphones",
      image: "/pyramid.png",
      aiScore: 89,
      roi: "28%",
      supplierPrice: "$30",
      buyBox: "$120",
      profit: "$90",
      tags: ["Electronics"],
      projectLink: "#",
    },
    // Toys & Games (6 products)
    {
      title: "Remote Control Car",
      image: "/pyramid.png",
      aiScore: 78,
      roi: "15%",
      supplierPrice: "$12",
      buyBox: "$40",
      profit: "$28",
      tags: ["Toys & Games"],
      projectLink: "#",
    },
    {
      title: "LEGO Set",
      image: "/pyramid.png",
      aiScore: 82,
      roi: "18%",
      supplierPrice: "$20",
      buyBox: "$60",
      profit: "$40",
      tags: ["Toys & Games"],
      projectLink: "#",
    },
    {
      title: "Board Game",
      image: "/pyramid.png",
      aiScore: 75,
      roi: "12%",
      supplierPrice: "$10",
      buyBox: "$30",
      profit: "$20",
      tags: ["Toys & Games"],
      projectLink: "#",
    },
    {
      title: "Drone",
      image: "/pyramid.png",
      aiScore: 80,
      roi: "20%",
      supplierPrice: "$50",
      buyBox: "$150",
      profit: "$100",
      tags: ["Toys & Games"],
      projectLink: "#",
    },
    {
      title: "Puzzle Set",
      image: "/pyramid.png",
      aiScore: 70,
      roi: "10%",
      supplierPrice: "$8",
      buyBox: "$25",
      profit: "$17",
      tags: ["Toys & Games"],
      projectLink: "#",
    },
    {
      title: "Action Figure",
      image: "/pyramid.png",
      aiScore: 77,
      roi: "14%",
      supplierPrice: "$15",
      buyBox: "$45",
      profit: "$30",
      tags: ["Toys & Games"],
      projectLink: "#",
    },
    // Add more categories (Home & Kitchen, Stationery & Offices) as needed...
  ]);

  const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>(
    products.filter((product) => product.tags.includes("Electronics"))
  );
  const [activeFilter, setActiveFilter] = useState<string>("Electronics");

  // Handle filter logic
  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setFilteredProducts(
      products.filter((product) => product.tags.includes(item))
    );
  };

  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-[600px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Top product categories</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] heading mt-5">
            Find profitable products in every niche
          </h2>
          <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            ClickBuy&apos;s AI-powered sourcing helps you discover high-demand,
            high-profit products across key categories. From trending
            electronics to essential home goods, we make finding the best deals
            effortless.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 my-10 px-4">
          {[
            "Electronics",
            "Toys & Games",
            "Home & Kitchen",
            "Stationery & Offices",
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg transition-colors text-sm sm:text-base cursor-pointer ${
                activeFilter === item
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts
            .slice(
              0,
              activeFilter === "Electronics"
                ? 6
                : activeFilter === "Toys & Games"
                ? 6
                : 6
            ) // Adjust slice for each category
            .map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Image */}
                <div className="relative group">
                  <Image
                    src={product.image}
                    alt={product.title}
                    height={200}
                    width={200}
                    className="w-full h-48 object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity flex justify-center items-center">
                    <Link
                      href={product.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-500 flex gap-1"
                    >
                      <ViewIcon />
                      View Product
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="text-xl font-bold mb-2">{product.title}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <p className="text-gray-600">
                        <span className="font-semibold">AI Score:</span>{" "}
                        {product.aiScore}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">ROI:</span>{" "}
                        {product.roi}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Buy Box:</span>{" "}
                        {product.buyBox}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-gray-600">
                        <span className="font-semibold">Supplier Price:</span>{" "}
                        {product.supplierPrice}
                      </p>

                      <p className="text-gray-600">
                        <span className="font-semibold">Profit:</span>{" "}
                        {product.profit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
