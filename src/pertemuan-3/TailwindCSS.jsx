export default function TailwindCSS() {
    return (
        // Menggunakan latar belakang cream yang sangat lembut (slate-50 atau orange-50)
        <div className="min-h-screen bg-[#FFFBF5] p-8 space-y-8 font-sans">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-extrabold text-[#D875C7] mb-6 drop-shadow-sm">
                    Belajar Tailwind CSS 4
                </h1>
                <button className="bg-[#FFC0D9] hover:bg-[#ffaccf] text-[#8b4367] 
                px-8 py-3 rounded-full font-bold shadow-md transition-all active:scale-95">
                    Explore Now
                </button>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
                <Spacing />
                <Typography />
                <div className="flex justify-center">
                    <BorderRadius />
                </div>
                <BackgroundColors />
                <FlexboxGrid />
                <ShadowEffects />
            </div>
        </div>
    );
}

function Spacing() {
    return (
        <div className="bg-white border-2 border-[#F9F5F6] shadow-sm p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-[#F875AA]">Card Estetik</h2>
            <p className="mt-3 text-[#A78295] leading-relaxed">
                Ini adalah contoh penggunaan spacing yang lega dengan nuansa pastel yang menenangkan.
            </p>
        </div>
    );
}

function Typography() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-black text-[#D875C7] tracking-tight">
                Tailwind Typography
            </h1>
            <p className="text-[#A78295] text-lg mt-3 italic">
                "Belajar Tailwind sangat menyenangkan dan cepat!"
            </p>
        </div>
    );
}

function BorderRadius() {
    return (
        <button className="border-2 border-[#F875AA] text-[#F875AA] hover:bg-[#F875AA] hover:text-white 
        px-10 py-3 rounded-full font-semibold transition-colors duration-300">
            Klik Saya
        </button>
    );
}

function BackgroundColors() {
    return (
        // Gradient menggunakan warna Pink Pastel ke Cream
        <div className="bg-gradient-to-r from-[#FFC0D9] to-[#FFD9C0] p-10 rounded-3xl shadow-inner text-[#8b4367]">
            <h3 className="text-2xl font-bold">Tailwind Colors</h3>
            <p className="mt-2 font-medium opacity-90 text-lg">
                Kombinasi warna pastel membuat UI terasa lebih lembut di mata.
            </p>
        </div>
    );
}

function FlexboxGrid() {
    return (
        <nav className="flex justify-between items-center bg-[#F9F5F6] p-5 rounded-2xl border border-[#FFC0D9]/30 shadow-sm">
            <h1 className="text-xl font-black text-[#F875AA]">MyStudio.</h1>
            <ul className="flex space-x-6">
                <li><a href="#" className="text-[#A78295] hover:text-[#F875AA] font-medium transition">Home</a></li>
                <li><a href="#" className="text-[#A78295] hover:text-[#F875AA] font-medium transition">About</a></li>
                <li><a href="#" className="text-[#A78295] hover:text-[#F875AA] font-medium transition">Contact</a></li>
            </ul>
        </nav>
    );
}

function ShadowEffects() {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-[0_10px_20px_rgba(248,117,170,0.1)] 
        hover:shadow-[0_20px_40px_rgba(248,117,170,0.2)] transition-all duration-500 cursor-pointer border border-[#F9F5F6]">
            <h3 className="text-2xl font-bold text-[#F875AA]">Soft Shadow</h3>
            <p className="text-[#A78295] mt-2">
                Sentuh kartu ini untuk melihat efek transisi bayangan yang halus.
            </p>
        </div>
    );
}