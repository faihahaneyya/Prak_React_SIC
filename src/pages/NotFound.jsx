import { FaRegSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Menggunakan komponen header yang sudah Anda miliki */}
      <PageHeader />

      {/* Konten 404 yang konsisten dengan tema Sedap */}
      <div className="bg-white p-12 rounded-[2rem] border border-pink-50 shadow-sm flex flex-col items-center justify-center text-center">
        
        {/* Icon dengan background lembut */}
        <div className="bg-yellow-50 text-yellow-400 p-6 rounded-full mb-6">
          <FaRegSadTear className="text-6xl" />
        </div>

        {/* Pesan Utama */}
        <h2 className="text-4xl font-black text-pink-400 mb-2">404</h2>
        <p className="text-xl font-bold text-gray-700 mb-4">
          Halaman tidak ditemukan
        </p>
        <p className="text-gray-400 max-w-sm mb-8">
          Sepertinya menu yang Anda cari tidak tersedia di dapur kami. Mari kembali ke dashboard.
        </p>

        {/* Tombol Navigasi */}
        <Link
          to="/"
          className="bg-pink-300 hover:bg-pink-400 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-pink-100"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}