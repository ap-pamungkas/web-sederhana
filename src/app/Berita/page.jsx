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
  },
  {
    id: 2,
    title: "Wisata Baru di Pantai Air Mati",
    image: "https://dummyimage.com/600x400/00bcd4/ffffff&text=Pantai+Air+Mati",
    excerpt:
      "Dinas Pariwisata meresmikan spot wisata baru di Pantai Air Mati yang menghadirkan wahana foto Instagramable dan area camping ground...",
    fullText:
      "Dinas Pariwisata meresmikan spot wisata baru di Pantai Air Mati yang menghadirkan wahana foto Instagramable dan area camping ground. Fasilitas tambahan seperti kamar mandi umum, warung makan, dan penyewaan tenda juga tersedia untuk menunjang kenyamanan wisatawan.",
  },
  {
    id: 3,
    title: "Launching Aplikasi WisataKetapang",
    image: "https://dummyimage.com/600x400/f44336/ffffff&text=App+Wisata",
    excerpt:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner...",
    fullText:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner. Aplikasi ini juga menyediakan rute perjalanan, event kalender, dan fitur panduan berbasis GPS.",
  },
  {
    id: 4,
    title: "Launching Aplikasi WisataKetapang",
    image: "https://dummyimage.com/600x400/f44336/ffffff&text=App+Wisata",
    excerpt:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner...",
    fullText:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner. Aplikasi ini juga menyediakan rute perjalanan, event kalender, dan fitur panduan berbasis GPS.",
  },
  {
    id: 5,
    title: "Launching Aplikasi WisataKetapang",
    image: "https://dummyimage.com/600x400/f44336/ffffff&text=App+Wisata",
    excerpt:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner...",
    fullText:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner. Aplikasi ini juga menyediakan rute perjalanan, event kalender, dan fitur panduan berbasis GPS.",
  },
  {
    id: 6,
    title: "Launching Aplikasi WisataKetapang",
    image: "https://dummyimage.com/600x400/f44336/ffffff&text=App+Wisata",
    excerpt:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner...",
    fullText:
      "Pemerintah daerah meluncurkan aplikasi WisataKetapang untuk memudahkan wisatawan dalam mencari destinasi wisata, penginapan, dan kuliner. Aplikasi ini juga menyediakan rute perjalanan, event kalender, dan fitur panduan berbasis GPS.",
  },
];

const Berita = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleReadMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section
      id="berita"
      className="bg-gradient-to-b from-[#7ec8e3] via-[#f0faff] to-[#ffffff] text-gray-800 py-20 px-6 min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-[#005b75]">Berita Terbaru</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {beritaList.map((berita) => (
          <div
            key={berita.id}
            className="bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={berita.image}
              alt={berita.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#007c91]">{berita.title}</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              {expanded === berita.id ? berita.fullText : berita.excerpt}
            </p>
            <button
              onClick={() => toggleReadMore(berita.id)}
              className="mt-3 text-blue-600 hover:underline font-medium"
            >
              {expanded === berita.id ? "Tutup" : "Selengkapnya"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Berita;
