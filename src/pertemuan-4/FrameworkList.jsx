import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        // Menggunakan bg-slate-50 agar warna pastel kartunya lebih "pop"
        <div className="p-10 bg-[#fdf2f2] min-h-screen font-sans">
            
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h1 className="text-3xl font-light text-[#a6808c] tracking-[0.2em] uppercase">
                    Framework <span className="font-serif italic text-[#ccb7ae]">Collection</span>
                </h1>
                <div className="h-1 w-16 bg-[#eecfbb] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {frameworkData.map((item) => (
                    <div 
                        key={item.id} 
                        // Perpaduan warna pastel: bg-white dengan border sangat halus
                        className="relative group bg-white/70 backdrop-blur-sm p-8 rounded-[2rem] 
                                   border border-[#f8ecec] shadow-[0_8px_30px_rgb(238,207,187,0.2)]
                                   transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                                   hover:shadow-[0_20px_40px_rgb(238,207,187,0.4)] hover:-translate-y-2"
                    >
                        {/* Aksen bulatan pastel di pojok (dekoratif) */}
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
                                        <p className="mt-1 font-bold text-[#eecfbb]">{item.details.releaseYear}</p>
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
    )
}