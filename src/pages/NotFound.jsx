import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { FaExclamationTriangle, FaRegSadTear } from "react-icons/fa";

export default function NotFound() {
  const { code } = useParams();
  const errorMap = {
    "400": { title: "Bad Request", desc: "Permintaan tidak valid." },
    "401": { title: "Unauthorized", desc: "Anda tidak memiliki akses." },
    "403": { title: "Forbidden", desc: "Akses dilarang." }
  };
  const err = errorMap[code] || { title: "Halaman Tidak Ditemukan", desc: "Menu tidak tersedia di dapur kami." };

  return (
    <div className="space-y-6">
      <PageHeader title={`Error ${code || "404"}`} />
      <div className="bg-white p-12 rounded-[2rem] flex flex-col items-center text-center">
        <div className="text-yellow-400 text-6xl mb-6">
          {code ? <FaExclamationTriangle /> : <FaRegSadTear />}
        </div>
        <h2 className="text-4xl font-black text-pink-400">{code || "404"}</h2>
        <p className="text-xl font-bold text-gray-700 my-4">{err.title}</p>
        <p className="text-gray-400 mb-8">{err.desc}</p>
        <Link to="/" className="bg-pink-300 text-white px-8 py-3 rounded-2xl font-bold">Kembali ke Dashboard</Link>
      </div>
    </div>
  );
}