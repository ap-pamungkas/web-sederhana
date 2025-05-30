'use client';
import React from 'react';

const galeriData = [
  {
    id: 1,
    title: "Festival Budaya Ketapang",
    date: "12 Mei 2025",
    image: "https://dummyimage.com/400x300/397e46/ffffff&text=Festival",
  },
  {
    id: 2,
    title: "Wisata Sungai Pawan",
    date: "28 April 2025",
    image: "https://dummyimage.com/400x300/00bcd4/ffffff&text=Sungai+Pawan",
  },
  {
    id: 3,
    title: "Ekowisata Gunung Palung",
    date: "15 April 2025",
    image: "https://dummyimage.com/400x300/f44336/ffffff&text=Gunung+Palung",
  },
  {
    id: 4,
    title: "Pantai Air Mati",
    date: "02 April 2025",
    image: "https://dummyimage.com/400x300/4caf50/ffffff&text=Pantai+Air+Mati",
  },
  {
    id: 5,
    title: "Senja di Ketapang",
    date: "25 Maret 2025",
    image: "https://dummyimage.com/400x300/3f51b5/ffffff&text=Senja+Ketapang",
  },
  {
    id: 6,
    title: "Kuliner Pasar Malam",
    date: "18 Maret 2025",
    image: "https://dummyimage.com/400x300/ff9800/ffffff&text=Kuliner+Malam",
  },
  {
    id: 7,
    title: "Lomba Perahu Tradisional",
    date: "10 Maret 2025",
    image: "https://dummyimage.com/400x300/9c27b0/ffffff&text=Perahu+Tradisional",
  },
  {
    id: 8,
    title: "Tari Daerah di Panggung Utama",
    date: "01 Maret 2025",
    image: "https://dummyimage.com/400x300/009688/ffffff&text=Tari+Daerah",
  },
];

const Galeri = () => {
  return (
    <section
      id="galeri"
      className="bg-gradient-to-b from-[#7ec8e3] via-[#f0faff] to-[#ffffff] text-gray-800 py-20 px-6 min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-[#005b75]">Galeri Kegiatan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galeriData.map((item) => (
          <div
            key={item.id}
            className="bg-white/60 backdrop-blur-md rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#007c91] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeri;
