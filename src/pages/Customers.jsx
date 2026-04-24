import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";
import { FaEnvelope, FaPhone, FaCrown, FaUser, FaUserPlus, FaSave, FaTimes } from "react-icons/fa";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);
  const [customers, setCustomers] = useState(customersData);
  const [newCust, setNewCust] = useState({ name: "", email: "", phone: "", Loyalty: "Bronze" });

  const handleSave = () => {
    setCustomers([{ ...newCust, id: `C-${customers.length + 1}` }, ...customers]);
    setShowForm(false);
    setNewCust({ name: "", email: "", phone: "", Loyalty: "Bronze" });
  };

  return (
    <div className="space-y-8 p-6">
      <PageHeader title="Customer Directory" breadcrumb="Dashboard / Customers">
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 text-white rounded-full text-sm font-bold hover:bg-gray-700 transition"
        >
          {showForm ? <FaTimes /> : <FaUserPlus />}
        </button>
      </PageHeader>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-5" // Hanya berikan padding luar agar bingkai putih terlihat rapi
          >
            {/* Wadah Formulir Utama */}
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 shadow-inner">
              {/* Grid 2 Kolom untuk Input, sesuai gambar referensi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">

                {/* Input Name - Pill Shaped */}
                <input
                  type="text"
                  placeholder="Name"
                  className="px-6 py-3 border border-gray-900 rounded-full text-sm font-medium focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none"
                  onChange={(e) => setNewCust({ ...newCust, name: e.target.value })}
                />

                {/* Input Email - Pill Shaped */}
                <input
                  type="email"
                  placeholder="Email"
                  className="px-6 py-3 border border-gray-900 rounded-full text-sm font-medium focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none"
                  onChange={(e) => setNewCust({ ...newCust, email: e.target.value })}
                />

                {/* Input Phone - Pill Shaped */}
                <input
                  type="tel"
                  placeholder="Phone"
                  className="px-6 py-3 border border-gray-900 rounded-full text-sm font-medium focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none"
                  onChange={(e) => setNewCust({ ...newCust, phone: e.target.value })}
                />

                {/* Dropdown Loyalty - Pill Shaped */}
                <div className="relative">
                  <select
                    className="w-full px-6 py-3 border border-gray-900 rounded-full text-sm font-bold bg-white appearance-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none"
                    onChange={(e) => setNewCust({ ...newCust, Loyalty: e.target.value })}
                  >
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                  </select>
                  {/* Ikon Dropdown Manual agar terlihat elegan */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

              </div>

              {/* Tombol Simpan - Sesuai gambar reference */}
              <div className="flex justify-start">
                <button
                  onClick={() => {
                    if (!newCust.name || !newCust.email) return alert("Please fill name & email");
                    setCustomers([{ ...newCust, id: `C-${customers.length + 1}` }, ...customers]);
                    setShowForm(false);
                    setNewCust({ name: "", email: "", phone: "", Loyalty: "Bronze" });
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 text-white rounded-full text-sm font-bold hover:bg-gray-700 transition"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.707 10.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L5.586 11H3a1 1 0 110-2h2.586L4.293 7.707a1 1 0 011.414-1.414l3 3zM15 11h2.586l-1.293-1.293a1 1 0 111.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L17.586 13H15a1 1 0 110-2z" /></svg>
                  Save Customer
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {customers.map((c) => (
          <div key={c.id} className="bg-white p-6 rounded-[35px] border border-pink-50 shadow-sm">
            <h3 className="font-black text-gray-700">{c.name}</h3>
            <p className="text-xs text-pink-300 font-bold uppercase">ID: {c.id}</p>
            <div className="mt-4 text-sm text-gray-500"><FaEnvelope className="inline mr-2 text-pink-200" />{c.email}</div>
            <div className="text-sm text-gray-500"><FaPhone className="inline mr-2 text-pink-200" />{c.phone}</div>
            <div className="mt-4 px-4 py-1 rounded-full text-[10px] font-black uppercase bg-pink-50 text-pink-700 w-max">{c.Loyalty}</div>
          </div>
        ))}
      </div>
    </div>
  );
}