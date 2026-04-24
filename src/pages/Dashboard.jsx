import { motion } from "framer-motion";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaUtensils, FaChartBar } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  // Variabel animasi untuk kontainer utama
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Variabel animasi untuk kartu statistik
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150 } }
  };

  const stats = [
    { label: "Orders", val: "75", icon: <FaShoppingCart />, color: "bg-pink-400" },
    { label: "Delivered", val: "175", icon: <FaTruck />, color: "bg-yellow-400" },
    { label: "Canceled", val: "40", icon: <FaBan />, color: "bg-red-400" },
    { label: "Revenue", val: "128jt", icon: <FaDollarSign />, color: "bg-teal-400" },
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 p-6"
    >
      <PageHeader title="Dashboard" breadcrumb="Home / Dashboard" />
      
      {/* Grid Stats dengan Animasi */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
            className="bg-white p-6 rounded-[40px] shadow-sm border border-pink-50 flex flex-col items-center justify-center gap-2 cursor-pointer"
          >
            <div className={`${item.color} w-16 h-16 rounded-3xl flex items-center justify-center text-white text-2xl mb-2 shadow-lg`}>
              {item.icon}
            </div>
            <h3 className="text-3xl font-black text-gray-700">{item.val}</h3>
            <p className="text-pink-300 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Daily Sweet Progress */}
        <motion.div 
          variants={cardVariants}
          className="bg-white p-10 rounded-[50px] shadow-sm border border-pink-50"
        >
          <h3 className="font-black text-pink-400 text-xl flex items-center gap-3 mb-10">
            <div className="bg-yellow-400 p-2 rounded-xl text-white"><FaChartBar /></div> 
            Daily Sweet Progress
          </h3>
          <div className="flex items-end justify-between h-48 px-4 gap-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <motion.div 
                  initial={{ height: 0 }} 
                  whileInView={{ height: [0, 100 + i * 20] }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  className="bg-pink-300 w-10 rounded-2xl" 
                />
                <span className="text-[10px] font-bold text-pink-300 uppercase">{day}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Treats dengan Efek Fade-in */}
        <motion.div 
          variants={cardVariants}
          className="bg-white p-10 rounded-[50px] shadow-sm border border-yellow-50"
        >
          <h3 className="font-black text-pink-400 text-xl flex items-center gap-3 mb-8">
            <div className="bg-yellow-400 p-2 rounded-xl text-white"><FaUtensils /></div>
            Recent Treats
          </h3>
          <div className="space-y-4">
            {[{name: "Chloe", item: "Strawberry Mochi", tag: "SWEET"}, {name: "Ron", item: "Lemon Tea", tag: "FRESH"}].map((t, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-3xl"
              >
                <div>
                  <p className="font-black text-gray-700">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.item}</p>
                </div>
                <span className="bg-white text-pink-400 px-4 py-1 rounded-full text-[10px] font-black border border-pink-100">{t.tag}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}