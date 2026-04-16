import { FaPlus, FaHome, FaClipboardList, FaUsers, FaStar } from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, active: true },
    { name: "Orders", icon: <FaClipboardList />, active: false },
    { name: "Customers", icon: <FaUsers />, active: false },
  ];

  return (
    <div className="flex min-h-screen w-80 flex-col bg-white p-8 border-r-4 border-pink-50 font-barlow">
      <div className="mb-12 text-center">
        <span className="font-poppins text-4xl font-black text-pink-400 drop-shadow-sm">
          Sedap<span className="text-yellow-400">.</span>
        </span>
        <div className="flex justify-center gap-1 mt-1 text-yellow-300 text-[8px]"><FaStar /><FaStar /><FaStar /></div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <div className={`flex items-center space-x-4 p-4 rounded-3xl cursor-pointer transition-all font-bold ${item.active ? 'bg-pink-300 text-white shadow-lg shadow-pink-100' : 'text-pink-200 hover:bg-yellow-50 hover:text-yellow-500'}`}>
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto bg-yellow-100 p-6 rounded-[35px] relative overflow-hidden">
        <div className="relative z-10 text-center">
          <p className="text-xs text-yellow-700 font-bold mb-3">Tambah Menu Baru?</p>
          <button className="bg-white text-pink-400 hover:text-pink-500 w-full py-3 rounded-2xl shadow-sm font-black flex items-center justify-center gap-2 transition-all">
            <FaPlus /> ADD
          </button>
        </div>
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/40 rounded-full"></div>
      </div>
    </div>
  );
}