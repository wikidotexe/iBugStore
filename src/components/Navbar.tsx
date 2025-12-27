"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-content">
        <div className="logo">
          <Image src="/logo/IbugStore.png" alt="iBugStore Logo" id="logo-img" width={50} height={50} style={{ maxHeight: "50px", width: "auto", borderRadius: "50%", backgroundColor: "white", padding: "4px" }} />
          <span>iBugStore</span>
        </div>
        
        {/* Desktop Nav */}
        <ul className="nav-links">
          <li><Link href="#home">Beranda</Link></li>
          <li><Link href="#products">Produk</Link></li>
          <li><Link href="#testimonials">Testimoni</Link></li>
          <li><Link href="#about">Tentang Kami</Link></li>
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button className="btn btn-primary desktop-cta">Beli Sekarang</button>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Menu">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav-overlay ${isMobileMenuOpen ? "open" : ""}`}>
          <Link href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>Beranda</Link>
          <Link href="#products" className="mobile-nav-link" onClick={closeMobileMenu}>Produk</Link>
          <Link href="#testimonials" className="mobile-nav-link" onClick={closeMobileMenu}>Testimoni</Link>
          <Link href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>Tentang Kami</Link>
          <button className="btn btn-primary" onClick={closeMobileMenu}>Beli Sekarang</button>
        </div>
      </div>
    </nav>
  );
}
