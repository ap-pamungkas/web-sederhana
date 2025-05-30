'use client';
import React, { useState } from 'react';

const galeriData = [
  {
    id: 1,
    title: "Festival Budaya Ketapang",
    date: "12 Mei 2025",
    image: "https://dummyimage.com/800x600/397e46/ffffff&text=Festival",
    category: "Festival",
    description: "Pertunjukan seni budaya tradisional yang memukau dari berbagai daerah di Ketapang"
  },
  {
    id: 2,
    title: "Wisata Sungai Pawan",
    date: "28 April 2025",
    image: "https://dummyimage.com/800x600/00bcd4/ffffff&text=Sungai+Pawan",
    category: "Wisata Alam",
    description: "Keindahan sungai Pawan dengan pemandangan hutan tropis yang menyejukkan mata"
  },
  {
    id: 3,
    title: "Ekowisata Gunung Palung",
    date: "15 April 2025",
    image: "https://dummyimage.com/800x600/f44336/ffffff&text=Gunung+Palung",
    category: "Wisata Alam",
    description: "Taman Nasional Gunung Palung dengan keanekaragaman hayati yang luar biasa"
  },
  {
    id: 4,
    title: "Pantai Air Mati",
    date: "02 April 2025",
    image: "https://dummyimage.com/800x600/4caf50/ffffff&text=Pantai+Air+Mati",
    category: "Pantai",
    description: "Pantai eksotis dengan pasir putih dan air laut yang jernih"
  },
  {
    id: 5,
    title: "Senja di Ketapang",
    date: "25 Maret 2025",
    image: "https://dummyimage.com/800x600/3f51b5/ffffff&text=Senja+Ketapang",
    category: "Landscape",
    description: "Momen golden hour yang menawan di langit Ketapang"
  },
  {
    id: 6,
    title: "Kuliner Pasar Malam",
    date: "18 Maret 2025",
    image: "https://dummyimage.com/800x600/ff9800/ffffff&text=Kuliner+Malam",
    category: "Kuliner",
    description: "Berbagai hidangan lezat khas Ketapang di pasar malam yang ramai"
  },
  {
    id: 7,
    title: "Lomba Perahu Tradisional",
    date: "10 Maret 2025",
    image: "https://dummyimage.com/800x600/9c27b0/ffffff&text=Perahu+Tradisional",
    category: "Festival",
    description: "Kompetisi perahu tradisional yang menegangkan di Sungai Pawan"
  },
  {
    id: 8,
    title: "Tari Daerah di Panggung Utama",
    date: "01 Maret 2025",
    image: "https://dummyimage.com/800x600/009688/ffffff&text=Tari+Daerah",
    category: "Festival",
    description: "Penampilan tari tradisional yang memukau dari seniman lokal"
  },
  {
    id: 9,
    title: "Sunrise di Bukit Kelam",
    date: "20 Februari 2025",
    image: "https://dummyimage.com/800x600/795548/ffffff&text=Bukit+Kelam",
    category: "Landscape",
    description: "Pemandangan matahari terbit dari puncak Bukit Kelam yang spektakuler"
  },
  {
    id: 10,
    title: "Pasar Tradisional Ketapang",
    date: "15 Februari 2025",
    image: "https://dummyimage.com/800x600/607d8b/ffffff&text=Pasar+Tradisional",
    category: "Kuliner",
    description: "Suasana pasar tradisional dengan berbagai produk lokal yang unik"
  },
  {
    id: 11,
    title: "Hutan Mangrove",
    date: "08 Februari 2025",
    image: "https://dummyimage.com/800x600/4caf50/ffffff&text=Mangrove",
    category: "Wisata Alam",
    description: "Ekosistem mangrove yang indah dan penting untuk kelestarian lingkungan"
  },
  {
    id: 12,
    title: "Kerajinan Anyaman Pandan",
    date: "01 Februari 2025",
    image: "https://dummyimage.com/800x600/8bc34a/ffffff&text=Kerajinan+Pandan",
    category: "Kerajinan",
    description: "Seni kerajinan tradisional anyaman pandan yang indah dan fungsional"
  }
];

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("Semua");

  const categories = ["Semua", "Festival", "Wisata Alam", "Pantai", "Landscape", "Kuliner", "Kerajinan"];

  const filteredGaleri = filter === "Semua" 
    ? galeriData 
    : galeriData.filter(item => item.category === filter);

  const getCategoryColor = (category) => {
    const colors = {
      Festival: "bg-green-500",
      "Wisata Alam": "bg-blue-500",
      Pantai: "bg-cyan-500",
      Landscape: "bg-purple-500",
      Kuliner: "bg-orange-500",
      Kerajinan: "bg-emerald-500"
    };
    return colors[category] || "bg-gray-500";
  };

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="galeri"
      className="bg-gradient-to-b from-[#7ec8e3] via-[#f0faff] to-[#ffffff] text-gray-800 py-20 sm:py-70 px-6 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#005b75]">
          Galeri Kegiatan
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Dokumentasi visual keindahan alam, budaya, dan kegiatan menarik di Ketapang
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGaleri.map((item) => (
            <div
              key={item.id}
              className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#007c91] mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.date}</p>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredGaleri.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada foto untuk kategori ini.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain"
            />
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getCategoryColor(selectedImage.category)}`}>
                  {selectedImage.category}
                </span>
                <span className="text-sm text-gray-500">{selectedImage.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#005b75] mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Galeri;