"use client";
import ScrollAnimation from "./ScrollAnimation";
import { Testimonial } from "@/lib/data";
import Image from "next/image";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <ScrollAnimation as="section" className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Apa Kata Pelanggan Kami</h2>
          <p>Ulasan nyata dari pelanggan yang sudah berpengalaman beli iPhone di iBugStore.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-header">
                <Image src={item.avatar} alt={item.name} className="avatar" width={100} height={100} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
              <p>&quot;{item.text}&quot;</p>
            </div>
          ))}
        </div>
        <div className="stats-overview">
          <div className="rating-badge">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <strong>4.8</strong>
            <span>rating rata-rata dari 2,847+ Pelanggan</span>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <strong>98%</strong>
              <span>Puas di Facebook</span>
            </div>
            <div className="stat-item">
              <strong>2,847+</strong>
              <span>Produk Terjual</span>
            </div>
            <div className="stat-item">
              <strong>5,000+</strong>
              <span>Testimoni sukses</span>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
