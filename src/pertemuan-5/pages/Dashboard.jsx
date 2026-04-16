import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaUtensils, FaChartBar } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  const stats = [
    { label: "Orders", val: "75", icon: <FaShoppingCart />, color: "bg-pink-200" },
    { label: "Delivered", val: "175", icon: <FaTruck />, color: "bg-yellow-200" },
    { label: "Canceled", val: "40", icon: <FaBan />, color: "bg-red-200" },
    { label: "Revenue", val: "128jt", icon: <FaDollarSign />, color: "bg-orange-200" },
  ];

  const chartData = [
    { day: "Mon", val: "60%", col: "bg-pink-200" },
    { day: "Tue", val: "80%", col: "bg-yellow-200" },
    { day: "Wed", val: "40%", col: "bg-pink-200" },
    { day: "Thu", val: "90%", col: "bg-yellow-200" },
    { day: "Fri", val: "70%", col: "bg-pink-200" },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <PageHeader />
      
      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {stats.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-[35px] shadow-sm border-b-4 border-pink-50 hover:-translate-y-1 transition-transform">
            <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl mb-4`}>
              {item.icon}
            </div>
            <p className="text-pink-200 text-xs font-black uppercase tracking-widest">{item.label}</p>
            <h3 className="text-2xl font-black text-gray-700">{item.val}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* IMPROVISASI BARU: DAILY PROGRESS CHART */}
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-pink-50">
          <h3 className="font-black text-pink-400 text-xl flex items-center gap-2 mb-8">
            <FaChartBar className="text-yellow-400" /> Daily Sweet Progress
          </h3>
          <div className="flex items-end justify-between h-40 px-4">
            {chartData.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-2 w-full">
                <div className={`${d.col} w-8 rounded-t-xl transition-all duration-1000`} style={{ height: d.val }}></div>
                <span className="text-[10px] font-bold text-pink-300">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TABLE RECENT TREATS */}
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-yellow-50">
          <h3 className="font-black text-pink-400 text-xl flex items-center gap-2 mb-6">
            <FaUtensils className="text-yellow-400" /> Recent Treats
          </h3>
          <table className="w-full text-sm font-bold text-gray-600">
             <tbody>
               <tr className="border-b border-pink-50">
                 <td className="py-3">Ahmad Dhani</td>
                 <td className="py-3 text-pink-300">Strawberry...</td>
                 <td className="py-3 text-right"><span className="bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-[9px]">SWEET</span></td>
               </tr>
               <tr>
                 <td className="py-3">Siti Badriah</td>
                 <td className="py-3 text-yellow-500">Lemon Tea...</td>
                 <td className="py-3 text-right"><span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-[9px]">FRESH</span></td>
               </tr>
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}