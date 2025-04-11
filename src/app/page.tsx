import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen text-white px-4 py-24 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="container mx-auto mb-16 pt-12">
          <p className="text-sm font-semibold tracking-wider mb-6">NEW SITE COMING SOON</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-12 max-w-4xl">
            WE&apos;RE EMBARKING<br className="hidden sm:block" /> ON A NEW ADVENTURE
          </h1>
        </div>

        {/* Cards Section - Using a grid with appropriate spacing */}
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-8 lg:gap-12">
          {/* Card 1 - Virtual Companions */}
          <div 
            className="relative w-[400px] sm:w-[500px] lg:w-[600px] aspect-[916/1400] rounded-3xl cursor-pointer border border-white/70 overflow-hidden"
            style={{ boxShadow: "inset 0 0 50px 20px rgba(255, 255, 255, 0.25)" }}
          >
            <div 
              className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/cards/1/bg.png')" }}
            />
            <div className="absolute bottom-[61px] left-0 right-0 h-[130px]  flex flex-col p-4">
              <div className="text-xs font-mono tracking-widest opacity-80">// TREASURE AI</div>
              <h2 className="text-3xl font-extrabold tracking-tighter mt-2 mb-8">VIRTUAL COMPANIONS</h2>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[61px] border-t border-white flex items-center justify-center">
              <span className="uppercase text-white/90 text-xs font-bold">Development Phase</span>
            </div>
          </div>

          {/* Card 2 - Smolworld */}
          <div 
            className="relative w-[400px] sm:w-[500px] lg:w-[600px] aspect-[916/1400] rounded-3xl cursor-pointer border border-white/70 overflow-hidden"
            style={{ boxShadow: "inset 0 0 50px 20px rgba(255, 255, 255, 0.25)" }}
          >
            <div 
              className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/cards/2/bg.png')" }}
            />
            <div className="absolute bottom-[61px] left-0 right-0 h-[130px]  flex flex-col p-4">
              <div className="text-xs font-mono tracking-widest opacity-80">// SMOLVERSE</div>
              <h2 className="text-3xl font-extrabold tracking-tighter mt-2 mb-8">SMOL WORLD</h2>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[61px] border-t border-white flex items-center justify-center mt-32">
              <span className="uppercase text-white/90 text-xs font-bold">Development Phase</span>
            </div>
          </div>

          {/* Card 3 - Canopy */}
          <div 
            className="relative w-[400px] sm:w-[500px] lg:w-[600px] aspect-[916/1400] rounded-3xl cursor-pointer border border-white/70 overflow-hidden"
            style={{ boxShadow: "inset 0 0 50px 20px rgba(255, 255, 255, 0.25)" }}
          >
            <div 
              className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/cards/3/bg.png')" }}
            />
            <div className="absolute bottom-[61px] left-0 right-0 h-[130px]  flex flex-col p-4">
              <div className="text-xs font-mono tracking-widest opacity-80">// BRIDGEWORLD</div>
              <h2 className="text-3xl font-extrabold tracking-tighter mt-2 mb-8">CANOPY</h2>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[61px] border-t border-white flex items-center justify-center">
              <span className="uppercase text-white/90 text-xs font-bold">Development Phase</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
