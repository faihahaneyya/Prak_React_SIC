import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // JANGAN LUPA IMPORT INI
import PageHeader from "../components/PageHeader";
import productsData from "../data/product.json"; // Sesuaikan path JSON kamu

export default function Product() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="p-6 space-y-8"
    >
      <PageHeader title="Daftar Produk" breadcrumb="Home / Produk" />

      <div className="bg-white rounded-[40px] shadow-sm border border-pink-50 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-pink-50 text-pink-400 uppercase text-[10px] font-black tracking-widest">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Nama Produk</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Harga</th>
              <th className="px-6 py-4">Stok</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-medium">
            {productsData.map((item) => (
              <tr key={item.id} className="border-b border-pink-50 hover:bg-pink-50/30 transition-colors">
                <td className="px-6 py-4">{item.id}</td>
                
                {/* INI KODE DARI GAMBAR INSTRUKSI KAMU */}
                <td className="px-6 py-4">
                  <Link 
                    to={`/products/${item.id}`} 
                    className="text-emerald-400 hover:text-emerald-600 font-black"
                  >
                    {item.tittle}
                  </Link>
                </td>

                <td className="px-6 py-4 text-xs">{item.category}</td>
                <td className="px-6 py-4 text-pink-400">Rp {item.price.toLocaleString()}</td>
                <td className="px-6 py-4">{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}