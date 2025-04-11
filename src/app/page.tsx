import Header from "@/components/header";
import * as motion from "motion/react-client"
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
            
            {/* Hero Images Grid */}
            <div className="absolute top-8 left-0 right-0 px-8">
              <div className="flex justify-between items-center gap-8">
                {/* Left column - 2 images */}
                <div className="flex flex-col gap-4 self-center">
                  <motion.img 
                    src="/cards/1/hero/hero-1.png" 
                    alt="Hero 1" 
                    className="w-full rounded-lg shadow-md object-cover" 
                    style={{ imageRendering: "crisp-edges" }}
                    initial={{ y: 0 }}
                    animate={{ 
                      y: [0, -5, 0],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                  <motion.img 
                    src="/cards/1/hero/hero-2.png" 
                    alt="Hero 2" 
                    className="w-full rounded-lg shadow-md object-cover" 
                    style={{ imageRendering: "crisp-edges" }}
                    initial={{ y: 0 }}
                    animate={{ 
                      y: [0, 6, 0],
                      transition: {
                        duration: 4.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }
                    }}
                  />
                </div>
                
                {/* Middle column - 3 images */}
                <div className="flex flex-col gap-4">
                  <motion.img 
                    src="/cards/1/hero/hero-3.png" 
                    alt="Hero 3" 
                    className="w-full rounded-lg shadow-md object-cover" 
                    style={{ imageRendering: "crisp-edges" }}
                    initial={{ y: 0 }}
                    animate={{ 
                      y: [0, -7, 0],
                      transition: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }
                    }}
                  />
                  <motion.img 
                    src="/cards/1/hero/hero-4.png" 
                    alt="Hero 4" 
                    className="w-full rounded-lg shadow-md object-cover" 
                    style={{ imageRendering: "crisp-edges" }}
                    initial={{ y: 0 }}
                    animate={{ 
                      y: [0, 5, 0],
                      transition: {
                        duration: 4.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.7
                      }
                    }}
                  />
                  <motion.img 
                    src="/cards/1/hero/hero-5.png" 
                    alt="Hero 5" 
                    className="w-full rounded-lg shadow-md object-cover" 
                    style={{ imageRendering: "crisp-edges" }}
                    initial={{ y: 0 }}
                    animate={{ 
                      y: [0, -6, 0],
                      transition: {
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }
                    }}
                  />
                </div>
                
                {/* Right column - 2 images */}
                <div className="flex flex-col gap-4 self-center">
                  <motion.img 
                    src="/cards/1/hero/hero-6.png" 
                    alt="Hero 6" 
                    className="w-full rounded-lg shadow-md object-cover" 
                    style={{ imageRendering: "crisp-edges" }}
                    initial={{ y: 0 }}
                    animate={{ 
                      y: [0, 7, 0],
                      transition: {
                        duration: 5.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2
                      }
                    }}
                  />
                  <motion.img 
                    src="/cards/1/hero/hero-7.png" 
                    alt="Hero 7" 
                    className="w-full rounded-lg shadow-md object-cover" 
                    style={{ imageRendering: "crisp-edges" }}
                    initial={{ y: 0 }}
                    animate={{ 
                      y: [0, -5, 0],
                      transition: {
                        duration: 4.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-[61px] left-0 right-0 h-[130px] flex flex-col justify-end px-9 pb-12">
              <div className="text-xs font-mono tracking-widest opacity-80">// TREASURE AI</div>
              <div className="flex items-end justify-between mt-2">
                <h2 className="text-4xl font-black tracking-wider leading-none">VIRTUAL<br />COMPANIONS</h2>
                <img src="/cards/1/logomark.svg" alt="Virtual Companions Logo" className="h-6 w-auto mb-2" />
              </div>
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
            <div className="absolute bottom-[61px] left-0 right-0 h-[130px] flex flex-col justify-end px-9 pb-12">
              <div className="text-xs font-mono tracking-widest opacity-80">// SMOLVERSE</div>
              <div className="flex items-end justify-between mt-2">
                <h2 className="text-4xl font-black tracking-wider leading-none">SMOLWORLD</h2>
                <img src="/cards/2/logomark.svg" alt="Smol World Logo" className="h-4.5 w-auto mb-2" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[61px] border-t border-white flex items-center justify-center">
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
            <div className="absolute bottom-[61px] left-0 right-0 h-[130px] flex flex-col justify-end px-9 pb-12">
              <div className="text-xs font-mono tracking-widest opacity-80">// BRIDGEWORLD</div>
              <div className="flex items-end justify-between mt-2">
                <h2 className="text-4xl font-black tracking-wider leading-none">CANOPY</h2>
                <img src="/cards/3/logomark.svg" alt="Canopy Logo" className="h-6 w-auto mb-2" />
              </div>
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
