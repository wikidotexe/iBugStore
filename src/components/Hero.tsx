"use client";
import { ShieldCheck, Truck, Star } from "lucide-react";

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="animate-up">
          iPhone Impian Anda
          <br />
          Harga Terjangkau
        </h1>
        <p className="animate-up" style={{ animationDelay: "0.1s" }}>
          Jual beli iPhone bekas dan baru dengan garansi terpercaya.
          <br />
          Pembayaran Cash on Delivery untuk keamanan transaksi Anda.
        </p>
        <div className="hero-actions animate-up" style={{ animationDelay: "0.2s" }}>
          <button className="btn btn-solid">Lihat Koleksi</button>
          <button className="btn btn-outline">Konsultasi</button>
        </div>
        <div className="hero-features animate-up" style={{ animationDelay: "0.3s" }}>
          <div className="feature">
            <ShieldCheck size={24} />
            <div>
              <strong>Garansi Resmi</strong>
              <span>Barang asli & terjamin</span>
            </div>
          </div>
          <div className="feature">
            <Truck size={24} />
            <div>
              <strong>Cash on Delivery</strong>
              <span>Bayar di tempat saat tiba</span>
            </div>
          </div>
          <div className="feature">
            <Star size={24} />
            <div>
              <strong>Terpercaya</strong>
              <span>Ribuan ulasan positif</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
