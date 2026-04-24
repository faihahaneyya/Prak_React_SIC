import { useState } from "react"; // Tambahkan useState
import { motion, AnimatePresence } from "framer-motion"; // Tambahkan AnimatePresence
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";
import { FaPlus, FaTimes, FaSave } from "react-icons/fa"; // Tambahkan FaSave

export default function Orders() {
  // --- MULAI PENAMBAHAN STATE BARU ---
  const [showForm, setShowForm] = useState(false); // State untuk kontrol form
  const [orders, setOrders] = useState(ordersData); // State untuk daftar order (agar bisa ditambah secara lokal)
  const [newOrder, setNewOrder] = useState({ name: "", price: "", status: "Pending", date: new Date().toISOString().split('T')[0] }); // State untuk data input form
  // --- SELESAI PENAMBAHAN STATE BARU ---

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-600";
      case "Completed": return "bg-green-100 text-teal-700";
      case "Cancelled": return "bg-pink-100 text-pink-400";
      default: return "bg-gray-100 text-gray-500";
    }
  };

  // --- MULAI FUNGSI SIMPAN BARU ---
  const handleSaveOrder = () => {
    if (!newOrder.name || !newOrder.price) return alert("Please fill Customer Name and Price.");
    // Buat objek order baru dengan ID dinamis
    const orderToSave = { ...newOrder, id: `ORD-${orders.length + 1}`, price: Number(newOrder.price) };
    setOrders([orderToSave, ...orders]); // Tambahkan ke awal daftar
    setShowForm(false); // Tutup form
    setNewOrder({ name: "", price: "", status: "Pending", date: new Date().toISOString().split('T')[0] }); // Reset form
  };
  // --- SELESAI FUNGSI SIMPAN BARU ---

  return (
    <div className="space-y-6 p-6">
      {/* UPDATE PageHeader dengan Tombol Kontrol */}
      <PageHeader title="Order List" breadcrumb="Dashboard / Orders">
        <button 
          onClick={() => setShowForm(!showForm)} 
          className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 text-white rounded-full text-sm font-bold hover:bg-gray-700 transition"
        >
          {showForm ? <FaTimes /> : <FaPlus />} {showForm ? "Cancel" : "Add Order"}
        </button>
      </PageHeader>

      {/* --- MULAI PENAMBAHAN BAGIAN FORM "ADD NEW ORDER" --- */}
      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }}
            className="p-1" // Hanya padding kecil
          >
            {/* Wadah Formulir Utama */}
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-inner">
              {/* Grid 2 Kolom untuk Input, sesuai gambar referensi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                
                {/* Input Customer Name - Pill Shaped */}
                <input 
                  type="text" 
                  placeholder="Customer Name" 
                  value={newOrder.name}
                  className="px-6 py-3 border border-gray-900 rounded-full text-sm font-medium focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none" 
                  onChange={(e) => setNewOrder({...newOrder, name: e.target.value})} 
                />
                
                {/* Input Price - Pill Shaped */}
                <input 
                  type="number" 
                  placeholder="Price (Rp)" 
                  value={newOrder.price}
                  className="px-6 py-3 border border-gray-900 rounded-full text-sm font-medium focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none" 
                  onChange={(e) => setNewOrder({...newOrder, price: e.target.value})} 
                />
                
                {/* Dropdown Status - Pill Shaped */}
                <div className="relative">
                  <select 
                    value={newOrder.status}
                    className="w-full px-6 py-3 border border-gray-900 rounded-full text-sm font-bold bg-white appearance-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none" 
                    onChange={(e) => setNewOrder({...newOrder, status: e.target.value})}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                  {/* Ikon Dropdown Manual agar terlihat elegan */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                {/* Input Date - Pill Shaped (Otomatis hari ini, bisa diubah) */}
                <input 
                  type="date" 
                  value={newOrder.date}
                  className="px-6 py-3 border border-gray-900 rounded-full text-sm font-medium focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none" 
                  onChange={(e) => setNewOrder({...newOrder, date: e.target.value})} 
                />

              </div>

              {/* Tombol Simpan - Sesuai gambar reference */}
              <div className="flex justify-start">
                <button 
                  onClick={handleSaveOrder} 
                  className="flex items-center gap-2 px-6 py-3 bg-[#FF69B4] text-white rounded-xl text-sm font-black hover:bg-[#FF1493] transition-colors shadow"
                >
                  <FaSave /> Save Order
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- SELESAI PENAMBAHAN BAGIAN FORM "ADD NEW ORDER" --- */}


      {/* BAGIAN TABEL DATA ORDER (TIDAK BERUBAH, hanya memanggil state 'orders') */}
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-pink-50 max-h-[600px] overflow-y-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-pink-300 border-b border-pink-50 sticky top-0 bg-white sticky-header"> {/* Tambahkan class sticky-header untuk fix sticky di overflow */}
              <th className="pb-5 font-black uppercase text-xs">ID</th>
              <th className="pb-5 font-black uppercase text-xs">Customer</th>
              <th className="pb-5 font-black uppercase text-xs">Status</th>
              <th className="pb-5 font-black uppercase text-xs">Price</th>
              <th className="pb-5 font-black uppercase text-xs">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* PENTING: Ubah 'ordersData' menjadi state 'orders' */}
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-yellow-50 transition-colors">
                <td className="py-5 font-bold text-gray-700">{order.id}</td>
                <td className="py-5 text-gray-600 font-medium">{order.name}</td>
                <td className="py-5">
                   <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${getStatusColor(order.status)}`}>
                     {order.status}
                   </span>
                </td>
                <td className="py-5 font-bold text-pink-400">Rp{order.price.toLocaleString()}</td>
                <td className="py-5 text-gray-400 font-medium">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}