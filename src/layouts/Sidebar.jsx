import { Link, NavLink } from "react-router-dom";
import {
  FaPlus,
  FaHome,
  FaClipboardList,
  FaUsers,
  FaStar,
} from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/", active: true },
    {
      name: "Orders",
      icon: <FaClipboardList />,
      path: "/orders",
      active: false,
    },
    { name: "Customers", icon: <FaUsers />, path: "/customers", active: false },
  ];

      const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-pink bg-yellow-200 font-extrabold" : 
            "text-gray-600 hover:text-yellow hover:bg-pink-200 hover:font-extrabold"
        }`

  return (
    <div className="flex h-screen w-80 flex-col bg-white p-8 border-r-4 border-pink-50 font-barlow">
      <div className="mb-12 text-center">
        <span className="font-poppins text-4xl font-black text-pink-400 drop-shadow-sm">
          Sedap<span className="text-yellow-400">.</span>
        </span>
        <div className="flex justify-center gap-1 mt-1 text-yellow-300 text-[8px]">
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink to={item.path} className={menuClass}>
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto bg-yellow-100 p-6 rounded-[35px] relative overflow-hidden">
        <div className="relative z-10 text-center">
          <p className="text-xs text-yellow-700 font-bold mb-3">
            Tambah Menu Baru?
          </p>
          <button className="bg-white text-pink-400 hover:text-pink-500 w-full py-3 rounded-2xl shadow-sm font-black flex items-center justify-center gap-2 transition-all">
            <FaPlus /> ADD
          </button>
        </div>
      </div>
    </div>
  );
}
