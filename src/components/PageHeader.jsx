import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const routeConfig = {
  "/": { title: "Dashboard", breadcrumb: "Dashboard / Overview" },
  "/orders": { title: "Order List", breadcrumb: "Dashboard / Orders" },
  "/customers": { title: "Customer Data", breadcrumb: "Dashboard / Customers" },
};

// props dideklarasikan di sini: { title, breadcrumb, children }
export default function PageHeader({ title, breadcrumb, children }) {
  const location = useLocation();
  
  // Menggunakan data dari props, jika tidak ada baru ambil dari routeConfig
  const config = routeConfig[location.pathname] || { 
    title: title || "Page Not Found", 
    breadcrumb: breadcrumb || "Dashboard / Error" 
  };

  return (
    <div className="relative p-6 bg-white border-b border-gray-100 overflow-hidden">
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

        {/* children diletakkan di sini sebagai pengganti tombol hardcoded */}
        <div className="flex items-center gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}