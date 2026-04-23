import { useState } from "react";
import { FaBell, FaSearch, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State baru

  return (
    <div className="flex justify-between items-center p-4 bg-white/80 backdrop-blur-md rounded-3xl mb-6 shadow-sm border border-pink-100 relative">
      {/* Search Bar  */}
      <div className="relative w-full max-w-md">
        <input
          onClick={() => setIsSearchOpen(true)}
          type="text"
          placeholder="Cari menu favoritmu..."
          className="bg-yellow-50 border-none p-3 pl-12 w-full rounded-2xl outline-none cursor-pointer"
          readOnly
        />
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="p-3 bg-pink-100 text-pink-500 rounded-2xl"><FaBell /></div>
        
        {/* PROFILE SECTION DENGAN POP-UP */}
        <div className="relative border-l-2 border-pink-50 pl-4">
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-all"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="text-right">
              <p className="text-sm font-bold text-gray-700">Zhefanya</p>
              <p className="text-[10px] text-pink-400 font-bold">Sweet Admin</p>
            </div>
            <img src="img/rapunzel.jpg" className="w-12 h-12 rounded-2xl border-2 border-pink-200" alt="profile" />
          </div>

          {/* IMPROVISASI: POP-UP PROFILE */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-white rounded-2xl shadow-xl border border-pink-50 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="p-4 hover:bg-pink-50 cursor-pointer flex items-center gap-3 text-gray-600 text-sm font-bold transition-colors">
                <FaUser className="text-pink-300" /> My Profile
              </div>
              <div className="p-4 hover:bg-red-50 cursor-pointer flex items-center gap-3 text-red-400 text-sm font-bold border-t border-gray-50 transition-colors">
                <FaSignOutAlt /> Log Out
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* MODAL SEARCH  */}
      {isSearchOpen && (
      
        <div className="fixed inset-0 bg-pink-200/40 backdrop-blur-md z-50 flex justify-center items-start pt-20">
           <div className="bg-white w-full max-w-2xl p-8 rounded-[40px] shadow-2xl border-4 border-yellow-100">
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-bold text-pink-400 flex items-center gap-2 underline decoration-yellow-300">Quick Find</h2>
               <button onClick={() => setIsSearchOpen(false)} className="text-pink-300"><FaTimes /></button>
             </div>
             <input autoFocus type="text" placeholder="Ketik di sini..." className="w-full text-2xl p-4 border-b-2 border-pink-200 outline-none text-pink-400" />
           </div>
        </div>
      )}
    </div>
  );
}