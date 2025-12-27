"use client"

import { Check } from "lucide-react";
import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function CTABanner() {
  return (
    <ScrollAnimation as="section" className="container">
      <div className="cta-banner">
        <div className="cta-content">
          <h3>Siap Membeli iPhone Impian Anda?</h3>
          <p>Dapatkan penawaran terbaik dan unit berkualitas tinggi sekarang juga.</p>
          <ul>
            <li>
              <Check size={20} /> Produk 100% Original & Terjamin
            </li>
            <li>
              <Check size={20} /> Garansi Panjang & Terpercaya
            </li>
            <li>
              <Check size={20} /> Bisa Bayar di Tempat (COD)
            </li>
          </ul>
          <div className="cta-buttons">
            <button className="btn btn-outline-white">Hubungi Admin</button>
            <button className="btn btn-solid-white">Cek Produk Lain</button>
          </div>
        </div>
        <div className="cta-image">
          <Image src="/images/cta-banner.png" alt="Customer Support" width={400} height={300} unoptimized />
        </div>
      </div>
    </ScrollAnimation>
  );
}
