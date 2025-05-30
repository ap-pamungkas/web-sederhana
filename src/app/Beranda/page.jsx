"use client";

const Beranda = () => {
  const handleScrollToGaleri = (e) => {
    e.preventDefault();
    const element = document.querySelector('#galeri');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="beranda"
      className="bg-gradient-to-br from-sky-400 via-blue-300 to-yellow-200 pt-24 text-[#1f2937] p-6 md:p-12 h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg animate-fade-in">
          <span className="text-white drop-shadow-md">Ketapang</span>
          <span className="text-orange-500 drop-shadow-md">Pesona</span>
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          Kota Ketapang di Kalimantan Barat, Indonesia, menawarkan keindahan
          alam seperti hutan tropis, sungai yang memesona, dan pantai yang menawan.
          Taman Nasional Gunung Palung menjadi destinasi utama untuk eksplorasi alam
          dan ekowisata. Nikmati budaya lokal, river cruise, hingga pantai yang
          tenang namun memikat. Pariwisata di sini juga menekankan konservasi dan
          pelestarian lingkungan.
        </p>
        <button
          onClick={handleScrollToGaleri}
          className="inline-block mt-8 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-bounce-subtle"
        >
          Jelajahi Sekarang
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.8s ease-out 0.3s both;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Beranda;