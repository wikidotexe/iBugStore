"use client";
import { Product } from "@/lib/data";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="product-card">
      {product.discount && <span className="badge badge-accent">{product.discount}</span>}
      <div className="product-image">
        {/* Using standard img tag as configured in next export or for simplicity with local files outside standard optimization for now, or could use Next Image */}
        <Image src={`/images/${product.image}`} alt={product.name} width={300} height={300} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="specs">{product.specs}</p>
        <div className="rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-val">{product.rating}</span>
          <span className="reviews">({product.reviews} ulasan)</span>
        </div>
        <div className="price-box">
          <span className="current-price">{formatPrice(product.price)}</span>
          <span className="regular-price">{formatPrice(product.regularPrice)}</span>
        </div>
        <button className="btn btn-primary w-full">Beli Sekarang</button>
      </div>
    </div>
  );
}
