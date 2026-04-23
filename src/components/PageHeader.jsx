import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const routeConfig = {
  "/": { title: "Dashboard", breadcrumb: "Dashboard / Overview" },
  "/orders": { title: "Order List", breadcrumb: "Dashboard / Orders" },
  "/customers": { title: "Customer Data", breadcrumb: "Dashboard / Customers" },
};

export default function PageHeader({ title, customBreadcrumb }) {
  const location = useLocation();
  const config = routeConfig[location.pathname] || { 
    title: title || "Page Not Found", 
    breadcrumb: customBreadcrumb || "Dashboard / Error" 
  };

  return (
    <div className="relative p-6 bg-white border-b border-gray-100 overflow-hidden">
      {/* 1. Efek "Border Glow" yang berjalan pelan di bawah header */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-pink-400"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <div className="flex items-center justify-between">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            // 2. Variasi gerak: Muncul dari bawah dengan sedikit blur (Efek "Pop-up")
            initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl font-black text-gray-900">{config.title}</h1>
            <nav className="flex items-center text-sm font-semibold text-gray-400 mt-2">
              {config.breadcrumb}
            </nav>
          </motion.div>
        </AnimatePresence>

        {/* 3. Efek Tombol: Breathing Animation (Sedikit berdenyut pelan) */}
        <motion.button 
          animate={{ 
            boxShadow: ["0px 0px 0px rgba(244, 114, 182, 0)", "0px 0px 20px rgba(244, 114, 182, 0.4)", "0px 0px 0px rgba(244, 114, 182, 0)"] 
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="bg-pink-400 text-white px-6 py-3 rounded-2xl font-bold hover:bg-pink-500 transition-colors"
        >
          + Add New
        </motion.button>
      </div>
    </div>
  );
}