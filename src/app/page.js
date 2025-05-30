'use client';
import { useState } from "react";

import Header from '../components/Header/page';
import Footer from '../components/Footer/page';
import Beranda from './Beranda/page';
import Berita from './Berita/page';
import Galeri from './Galeri/page';
import Kontak from './Kontak/page';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header title="PesonaKetapang" setIsLoading={setIsLoading} />
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
        </div>
      )}
      <Beranda />
      <Berita />
      <Galeri />
      <Kontak />
      <Footer />
    </>
  );
}
