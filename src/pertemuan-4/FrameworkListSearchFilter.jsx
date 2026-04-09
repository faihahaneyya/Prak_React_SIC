import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedTag, setSelectedTag] = useState("");

/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm) ||
      framework.details.releaseYear.toString().includes(_searchTerm);
      
    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-10 bg-[#fdf2f2] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-light text-[#a6808c] tracking-[0.2em] uppercase">
          Framework{" "}
          <span className="font-serif italic text-[#ccb7ae]">Collection</span>
        </h1>
        <div className="h-1 w-16 bg-[#eecfbb] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* --- BAGIAN SEARCH & FILTER YANG SUDAH DICANTIKKAN --- */}
      <div className="max-w-4xl mx-auto mb-16 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <span className="absolute inset-y-0 left-4 flex items-center text-[#ccb7ae]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
          onChange={handleChange}
            type="text"
            name="searchTerm"
            placeholder="Search magic tools..."
            className="w-full pl-12 pr-4 py-4 bg-white/50 backdrop-blur-md border border-[#f8ecec] rounded-2xl 
                                   text-[#8b7e74] placeholder-[#ccb7ae] outline-none shadow-sm
                                   focus:ring-2 focus:ring-[#eecfbb] focus:bg-white transition-all duration-300"
          />
        </div>

        <div className="relative">
          <select
          onChange={handleChange}
            name="selectedTag"
            className="appearance-none w-full md:w-48 px-6 py-4 bg-white/50 backdrop-blur-md border border-[#f8ecec] rounded-2xl 
                                   text-[#8b7e74] outline-none shadow-sm cursor-pointer
                                   focus:ring-2 focus:ring-[#eecfbb] focus:bg-white transition-all duration-300"
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          {/* Icon Panah Custom untuk Select */}
          <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#ccb7ae]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>
      {/* --- AKHIR BAGIAN SEARCH & FILTER --- */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredFrameworks .map((item) => (
          <div
            key={item.id}
            className="relative group bg-white/70 backdrop-blur-sm p-8 rounded-[2rem] 
                                   border border-[#f8ecec] shadow-[0_8px_30px_rgb(238,207,187,0.2)]
                                   transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                                   hover:shadow-[0_20px_40px_rgb(238,207,187,0.4)] hover:-translate-y-2"
          >
            <div className="absolute top-4 right-4 w-12 h-12 bg-[#fbe4d8] rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative flex flex-col h-full">
              <h2 className="text-xl font-semibold text-[#8b7e74] group-hover:text-[#a6808c] transition-colors">
                {item.name}
              </h2>
              <p className="mt-4 text-[#9a8c98] leading-relaxed text-sm font-light flex-grow">
                {item.description}
              </p>
              <div className="mt-8 pt-6 border-t border-[#fdf2f2]">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] uppercase tracking-widest text-[#bda79e]">
                    <p>{item.details.developer}</p>
                    <p className="mt-1 font-bold text-[#eecfbb]">
                      {item.details.releaseYear}
                    </p>
                  </div>
                  <a
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-medium text-[#a6808c] border-b border-[#eecfbb] pb-1
                                                   hover:text-[#8b7e74] hover:border-[#8b7e74] transition-all"
                  >
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
