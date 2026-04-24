import { NavLink } from "react-router-dom";
import { FaPlus, FaHome, FaClipboardList, FaUsers, FaStar } from "react-icons/fa";

// 1. Konfigurasi menu yang terpusat agar mudah ditambah/diubah
const MENU_ITEMS = [
  { name: "Dashboard", icon: <FaHome />, path: "/" },
  { name: "Orders", icon: <FaClipboardList />, path: "/orders" },
  { name: "Customers", icon: <FaUsers />, path: "/customers" },
];

export default function Sidebar() {
  // 2. Fungsi style yang lebih bersih dan mudah dibaca
  const getMenuClass = ({ isActive }) =>
    `flex items-center gap-3 p-4 rounded-xl transition-all duration-200 font-bold ${
      isActive 
        ? "bg-yellow-200 text-pink-500 shadow-sm" 
        : "text-gray-500 hover:bg-pink-100 hover:text-pink-400"
    }`;

  return (
    <div className="flex h-screen w-80 flex-col bg-white p-8 border-r-4 border-pink-50 font-barlow">
      {/* Header Logo */}
      <div className="mb-12 text-center">
        <span className="font-poppins text-4xl font-black text-pink-400">
          Sedap<span className="text-yellow-400">.</span>
        </span>
        <div className="flex justify-center gap-1 mt-1 text-yellow-300 text-[8px]">
          {[...Array(3)].map((_, i) => <FaStar key={i} />)}
        </div>
      </div>

      {/* Navigasi Dinamis */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {MENU_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} end={item.path === "/"} className={getMenuClass}>
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer / Card Action */}
      <div className="mt-auto bg-yellow-100 p-6 rounded-[35px]">
        <p className="text-xs text-yellow-700 font-bold mb-3 text-center">
          Tambah Menu Baru?
        </p>
        <button className="bg-white text-pink-400 hover:bg-pink-50 w-full py-3 rounded-2xl shadow-sm font-black flex items-center justify-center gap-2 transition-all">
          <FaPlus /> ADD
        </button>
      </div>
    </div>
  );
}