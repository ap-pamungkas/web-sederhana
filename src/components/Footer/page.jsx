"use client";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#00796b] via-[#4db6ac] to-[#b2dfdb] text-white py-6 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm md:text-base font-light">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Pesona Ketapang</span>. Semua hak dilindungi.
        </p>
        <p className="text-xs mt-2 text-white/80">
          Temukan keindahan alam, budaya, dan ekowisata terbaik di Ketapang, Kalimantan Barat.
        </p>

        <p className="text-xs mt-4 text-white/70 italic mb-3">
          Developed by Agustinus Putra
        </p>

        <div className="flex justify-center space-x-6 text-white/90">
          <a
            href="https://github.com/ap-pamungkas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            {/* Simple GitHub SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.02.004 2.047.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.813 1.1.813 2.22 0 1.606-.015 2.898-.015 3.293 0 .322.217.695.825.576C20.565 21.796 24 17.303 24 12c0-6.628-5.372-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/_ap_pemungkas30?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            {/* Simple Instagram SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2C5.679 2 4 3.68 4 5.75v12.5C4 20.32 5.68 22 7.75 22h8.5c2.07 0 3.75-1.68 3.75-3.75V5.75C20 3.68 18.32 2 16.25 2h-8.5zm8.5 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
