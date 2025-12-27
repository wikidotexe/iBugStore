"use client";
import { Search } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function FilterSection({ searchQuery, setSearchQuery, condition, setCondition, priceRange, setPriceRange, selectedModel, setSelectedModel }) {
  return (
    <ScrollAnimation as="section" className="filter-section">
      <div className="container">
        <div className="filter-card">
          <h3>Cari iPhone Favorit Anda</h3>
          <div className="filter-grid">
            <div className="filter-group">
              <label>Cari Model</label>
              <div className="search-input">
                <Search size={20} />
                <input type="text" placeholder="Contoh: iPhone 13 Pro" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
            </div>
            <div className="filter-group">
              <label>Kondisi</label>
              <select value={condition} onChange={(e) => setCondition(e.target.value)}>
                <option value="All">Semua Kondisi</option>
                <option value="Baru">Baru</option>
                <option value="Like New">Bekas (Like New)</option>
                <option value="Garansi Resmi">Garansi Resmi</option>
                <option value="Garansi Internasional">Garansi Internasional</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Rentang Harga (Max: {new Intl.NumberFormat("id-ID").format(priceRange)})</label>
              <input type="range" min="0" max="30000000" step="1000000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} />
              <div className="price-labels">
                <span>Rp 0</span>
                <span>Rp 30.000.000</span>
              </div>
            </div>
          </div>
          <div className="quick-filters">
            {["iPhone 15 Pro", "iPhone 14 Pro", "iPhone 13 Pro", "iPhone 12", "iPhone 11"].map((model) => (
              <button key={model} className={`btn-tag ${selectedModel === model ? "active" : ""}`} onClick={() => setSelectedModel(selectedModel === model ? "" : model)}>
                {model}
              </button>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
