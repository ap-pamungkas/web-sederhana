"use client";

const Beranda = () => {
  return (
    <section
      id="beranda"
      className="bg-gradient-to-br from-sky-400 via-blue-300 to-yellow-200 pt-20 text-[#1f2937] p-6 md:p-12 h-[100vh] flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
          <span className="text-white">Ketapang</span>
          <span className="text-orange-500">Pesona</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
          Kota Ketapang di Kalimantan Barat, Indonesia, menawarkan keindahan
          alam seperti hutan tropis, sungai yang memesona, dan pantai yang menawan.
          Taman Nasional Gunung Palung menjadi destinasi utama untuk eksplorasi alam
          dan ekowisata. Nikmati budaya lokal, river cruise, hingga pantai yang
          tenang namun memikat. Pariwisata di sini juga menekankan konservasi dan
          pelestarian lingkungan.
        </p>
        <a
          href="#galeri"
          className="inline-block mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md"
        >
          Jelajahi Sekarang
        </a>
      </div>
    </section>
  );
};

export default Beranda;
