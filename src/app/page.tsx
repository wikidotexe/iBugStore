"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterSection from "@/components/FilterSection";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import HowToBuy from "@/components/HowToBuy";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { products, testimonials } from "@/lib/data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [condition, setCondition] = useState("All");
  const [priceRange, setPriceRange] = useState(30000000);
  const [selectedModel, setSelectedModel] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModel = selectedModel ? product.name.includes(selectedModel) : true;
    const matchesCondition = condition === "All" || product.status === condition;
    const matchesPrice = product.price <= priceRange;

    return matchesSearch && matchesModel && matchesCondition && matchesPrice;
  });

  return (
    <main>
      <Navbar />
      <Hero />
      <FilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        condition={condition}
        setCondition={setCondition}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
      />
      <ProductGrid products={filteredProducts} />
      <Testimonials testimonials={testimonials} />
      <HowToBuy />
      <CTABanner />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}
