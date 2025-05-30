"use client";

import { useState } from "react";

const beritaList = [
  {
    id: 1,
    title: "Pembukaan Festival Budaya Ketapang 2025",
    image: "https://dummyimage.com/600x400/397e46/ffffff&text=Festival+Budaya",
    excerpt:
      "Festival Budaya Ketapang kembali hadir dengan berbagai pertunjukan seni tradisional, kuliner khas daerah, dan pameran kerajinan lokal...",
    fullText:
      "Festival Budaya Ketapang kembali hadir dengan berbagai pertunjukan seni tradisional, kuliner khas daerah, dan pameran kerajinan lokal. Acara ini diselenggarakan di Taman Kota Ketapang dan berlangsung selama 3 hari. Pengunjung dapat menikmati parade budaya dari berbagai suku serta mengikuti lomba permainan tradisional.",
    date: "28 Mei 2025",
    category: "Festival"
  },
  {
    id: 2,
    title: "Wisata Baru di Pantai Air Mati",
    image: "https://dummyimage.com/600x400/00bcd4/ffffff&text=Pantai+Air+Mati",
    excerpt:
      "Dinas Pariwisata meresmikan spot wisata baru di Pantai Air Mati yang menghadirkan wahana foto Instagramable dan area camping ground...",
    fullText:
      "Dinas Pariwisata meresmikan spot wisata baru di Pantai Air Mati yang menghadirkan wahana foto Instagramable dan area camping ground. Fasilitas tambahan seperti kamar mandi umum, warung makan, dan penyewaan tenda juga tersedia untuk menunjang kenyamanan wisatawan.",
    date: "25 Mei 2025",
    category: "Wisata"
  },
  {
    id: 3,
    title: "Launching Aplikasi WisataKetapang",
    image: "https://dummyimage.com/600x400/f44336/ffffff&text=App+Wisata",
    excerpt:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner...",
    fullText:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner. Aplikasi ini juga menyediakan rute perjalanan, event kalender, dan fitur panduan berbasis GPS.",
    date: "20 Mei 2025",
    category: "Teknologi"
  },
  {
    id: 4,
    title: "Konservasi Hutan Taman Nasional Gunung Palung",
    image: "https://dummyimage.com/600x400/4caf50/ffffff&text=Konservasi+Hutan",
    excerpt:
      "Program konservasi terbaru di Taman Nasional Gunung Palung fokus pada perlindungan habitat orangutan dan ekosistem hutan hujan tropis...",
    fullText:
      "Program konservasi terbaru di Taman Nasional Gunung Palung fokus pada perlindungan habitat orangutan dan ekosistem hutan hujan tropis. Kerjasama dengan komunitas lokal dan peneliti internasional menghasilkan inovasi dalam pelestarian biodiversitas yang berkelanjutan.",
    date: "18 Mei 2025",
    category: "Konservasi"
  },
  {
    id: 5,
    title: "Festival Kuliner Nusantara Ketapang",
    image: "https://dummyimage.com/600x400/ff9800/ffffff&text=Festival+Kuliner",
    excerpt:
      "Event kuliner terbesar tahun ini menghadirkan lebih dari 100 UMKM lokal dengan berbagai hidangan khas Kalimantan Barat...",
    fullText:
      "Event kuliner terbesar tahun ini menghadirkan lebih dari 100 UMKM lokal dengan berbagai hidangan khas Kalimantan Barat. Pengunjung dapat mencicipi makanan tradisional seperti bubur pedas, tempoyak, dan berbagai olahan ikan sungai yang unik dan lezat.",
    date: "15 Mei 2025",
    category: "Kuliner"
  },
  {
    id: 6,
    title: "Pembangunan Dermaga Wisata Sungai Pawan",
    image: "https://dummyimage.com/600x400/9c27b0/ffffff&text=Dermaga+Wisata",
    excerpt:
      "Proyek pembangunan dermaga wisata di Sungai Pawan akan menjadi gerbang utama wisata river cruise dan transportasi air...",
    fullText:
      "Proyek pembangunan dermaga wisata di Sungai Pawan akan menjadi gerbang utama wisata river cruise dan transportasi air. Fasilitas modern dengan desain ramah lingkungan ini diharapkan dapat meningkatkan kunjungan wisatawan dan ekonomi masyarakat sekitar.",
    date: "12 Mei 2025",
    category: "Infrastruktur"
  },
];

const Berita = () => {
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("Semua");

  const categories = ["Semua", "Festival", "Wisata", "Teknologi", "Konservasi", "Kuliner", "Infrastruktur"];

  const toggleReadMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const filteredBerita = filter === "Semua" 
    ? beritaList 
    : beritaList.filter(berita => berita.category === filter);

  const getCategoryColor = (category) => {
    const colors = {
      Festival: "bg-green-100 text-green-800",
      Wisata: "bg-blue-100 text-blue-800",
      Teknologi: "bg-red-100 text-red-800",
      Konservasi: "bg-emerald-100 text-emerald-800",
      Kuliner: "bg-orange-100 text-orange-800",
      Infrastruktur: "bg-purple-100 text-purple-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section
      id="berita"
      className="bg-gradient-to-b from-[#7ec8e3] via-[#f0faff] to-[#ffffff] text-gray-800 py-24 sm:pt-70 px-6 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#005b75]">
          Berita Terbaru
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ikuti perkembangan terkini seputar pariwisata, budaya, dan pembangunan di Ketapang
        </p>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-[#005b75] text-white shadow-lg"
                  : "bg-white/70 text-gray-700 hover:bg-white hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredBerita.map((berita) => (
            <article
              key={berita.id}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={berita.image}
                  alt={berita.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(berita.category)}`}>
                    {berita.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {berita.date}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#007c91] leading-tight">
                  {berita.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {expanded === berita.id ? berita.fullText : berita.excerpt}
                </p>
                <button
                  onClick={() => toggleReadMore(berita.id)}
                  className="inline-flex items-center text-[#005b75] hover:text-[#007c91] font-semibold transition-colors duration-300 group/btn"
                >
                  {expanded === berita.id ? "Tutup" : "Baca Selengkapnya"}
                  <svg 
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${expanded === berita.id ? 'rotate-180' : 'group-hover/btn:translate-x-1'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {expanded === berita.id ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    )}
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button (Optional) */}
        {filteredBerita.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada berita untuk kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Berita;