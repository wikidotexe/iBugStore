"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-content">
        <div className="logo">
          <Image src="/logo/IbugStore.png" alt="iBugStore Logo" id="logo-img" width={50} height={50} style={{ maxHeight: "50px", width: "auto", borderRadius: "50%", backgroundColor: "white", padding: "4px" }} />
          <span>iBugStore</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="#home">Beranda</Link>
          </li>
          <li>
            <Link href="#products">Produk</Link>
          </li>
          <li>
            <Link href="#testimonials">Testimoni</Link>
          </li>
          <li>
            <Link href="#about">Tentang Kami</Link>
          </li>
        </ul>
        <button className="btn btn-primary">Beli Sekarang</button>
      </div>
    </nav>
  );
}
