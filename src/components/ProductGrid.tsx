"use client";
import ProductCard from "./ProductCard";
import ScrollAnimation from "./ScrollAnimation";
import { Product } from "@/lib/data";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <ScrollAnimation as="section" className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Koleksi iPhone Terlengkap</h2>
          <p>Pilih iPhone idaman Anda dengan harga terbaik dan kualitas terjamin.</p>
        </div>
        <div className="product-grid" id="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
}
