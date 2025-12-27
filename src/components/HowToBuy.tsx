"use client";
import { Smartphone, MessageSquare, Truck, CheckCircle, Check } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function HowToBuy() {
  return (
    <ScrollAnimation as="section" className="how-to-buy">
      <div className="container">
        <div className="section-header">
          <h2>Cara Mudah Membeli iPhone</h2>
          <p>Proses pemesanan yang aman dan nyaman hanya di iBugStore.</p>
        </div>
        <div className="steps-grid">
          <div className="step">
            <div className="step-icon">
              <Smartphone size={32} />
            </div>
            <h3>Pilih iPhone</h3>
            <p>Cari dan pilih iPhone impian Anda dari katalog kami.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <MessageSquare size={32} />
            </div>
            <h3>Hubungi Kami</h3>
            <p>Konsultasikan kebutuhan Anda melalui WhatsApp.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <Truck size={32} />
            </div>
            <h3>Terima Barang</h3>
            <p>Kurir akan mengirimkan barang atau COD di lokasi.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <CheckCircle size={32} />
            </div>
            <h3>Bayar & Cek</h3>
            <p>Lakukan pembayaran setelah Anda puas mengecek unit.</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
