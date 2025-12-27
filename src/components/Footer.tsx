"use client";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import Image from "next/image";

export default function Footer() {
  return (
    <ScrollAnimation as="footer" className="footer" id="about">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <Image src="/logo/IbugStore.png" alt="iBugStore Logo" width={50} height={50} style={{ maxHeight: "50px", width: "auto", borderRadius: "50%", backgroundColor: "white", padding: "4px" }} />
              <span>iBugStore</span>
            </div>
            <p>iBugStore adalah tempat terpercaya untuk jual beli iPhone berkualitas dengan layanan terbaik sejak 2025.</p>
            <div className="social-links">
              <a href="#">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/ibug.storee">
                <Instagram size={20} />
              </a>
              <a href="#">
                <Twitter size={20} />
              </a>
              <a href="#">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Produk</h4>
            <ul>
              <li>
                <a href="#">iPhone 15 Series</a>
              </li>
              <li>
                <a href="#">iPhone 14 Series</a>
              </li>
              <li>
                <a href="#">iPhone 13 Series</a>
              </li>
              <li>
                <a href="#">iPhone 12 Series</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Layanan</h4>
            <ul>
              <li>
                <a href="https://www.beacukai.go.id/imei">Cek Imei Resmi</a>
              </li>
              <li>
                <a href="#">Klaim Garansi</a>
              </li>
              <li>
                <a href="#">Tukar Tambah</a>
              </li>
              <li>
                <a href="#">Bantuan Service</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Hubungi Kami</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p>
                <MapPin size={18} /> Jl. Teratai Housing 1, Kota Bekasi
              </p>
              <p>
                <Mail size={18} /> info@ibugstore.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 iBugStore. All rights reserved.</p>
        </div>
      </div>
    </ScrollAnimation>
  );
}
