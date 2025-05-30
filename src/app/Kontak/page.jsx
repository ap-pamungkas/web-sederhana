'use client';

const Kontak = () => {
  return (
    <section
      id="kontak"
      className="bg-gradient-to-b from-[#e0f7fa] via-[#f1f8e9] to-white text-gray-800 py-20 px-6 min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center text-[#006064] mb-8">
        Hubungi Kami
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Info Kontak */}
        <div className="space-y-6">
          <p className="text-lg">
            Jika Anda memiliki pertanyaan seputar pariwisata di Ketapang, silakan hubungi kami melalui form di samping atau informasi di bawah ini:
          </p>
          <div>
            <h4 className="font-semibold text-[#00796b] mb-1">Alamat</h4>
            <p>Jl. Merdeka No. 123, Ketapang, Kalimantan Barat</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#00796b] mb-1">Email</h4>
            <p>info@ketapangpesona.id</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#00796b] mb-1">Telepon</h4>
            <p>+62 812-3456-7890</p>
          </div>
        </div>

        {/* Form Kontak */}
        <form className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Nama
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#00796b]"
              placeholder="Nama lengkap"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#00796b]"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Pesan
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#00796b]"
              placeholder="Tulis pesan Anda di sini..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#00796b] text-white px-4 py-2 rounded-lg hover:bg-[#004d40] transition-all"
          >
            Kirim
          </button>
        </form>
      </div>
    </section>
  );
};

export default Kontak;
