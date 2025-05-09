import Header from "@/components/header";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen text-white px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="container mx-auto max-w-[1440px] mb-12 sm:mb-16 pt-8 sm:pt-12">
          <p className="text-base sm:text-lg font-mono font-bold tracking-wider mb-2 sm:mb-3 flex items-center">
            <span className="text-red-500 mr-2 text-xs">◆</span> BUILD, PLAY & EVOLVE WITH $MAGIC
          </p>
          <h1 className="text-[#FFFDF7] text-4xl sm:text-5xl md:text-[50px] lg:text-[62px]  font-[829] leading-none uppercase font-['Whyte'] leading-trim-both text-edge-cap mb-8 sm:mb-12 max-w-4xl">
            WE&apos;RE EMBARKING<br className="hidden sm:block" /> ON A NEW ADVENTURE
          </h1>
        </div>

        {/* Cards Section - Using a grid layout for better responsiveness */}
        <div className="container mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 lg:gap-6 xl:gap-8">
          {/* Card 1 - Virtual Companions */}
          <Dialog>
            <DialogTrigger asChild>
              <div 
                className="w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[340px] pt-8 md:max-w-none mx-auto rounded-3xl cursor-pointer border border-white/60 overflow-hidden flex flex-col bg-black/30 relative group transition-all duration-700 hover:border-[#A239FF]"
                style={{ 
                  boxShadow: "inset 0 0 20px 10px rgba(0, 0, 0, 0.5), inset 0 0 3px 2px rgba(255, 255, 255, 0.4), 0 0 8px 2px rgba(255, 255, 255, 0.25)",
                  backgroundImage: "repeating-linear-gradient(180deg, rgba(50, 50, 50, 0.03) 0px, rgba(50, 50, 50, 0.03) 1px, transparent 1px, transparent 2px)"
                }}
              >
                {/* Glow overlay - White in default state, purple on hover */}
                <div className="absolute inset-0 opacity-45 transition-all duration-700 pointer-events-none" 
                    style={{ 
                      boxShadow: "inset 0 0 50px 25px rgba(255, 255, 255, 0.3), 0 0 15px 5px rgba(255, 255, 255, 0.2)" 
                    }}>
                </div>
                
                {/* Hover-only purple glow that replaces the white glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" 
                    style={{ 
                      boxShadow: "inset 0 0 50px 25px rgba(162, 57, 255, 0.45), 0 0 15px 3px rgba(162, 57, 255, 0.4)" 
                    }}>
                </div>
                
                {/* Purple gradient at top on hover */}
                <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-[#A239FF]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 w-full h-full opacity-5">
                  <Image 
                    src="/cards/1/bg.png" 
                    alt="Background pattern" 
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                
                {/* Top section with hero images - Precisely arranged 2-3-2 layout */}
                <div className="flex-1 p-3 xs:p-4 sm:p-6 md:p-4 lg:p-6 sm:pt-10 relative h-[280px] flex items-center justify-center">
                  <div className="flex justify-between items-center gap-1 xs:gap-2 sm:gap-3 md:gap-2 lg:gap-4">
                    {/* Left column - 2 images, centered vertically */}
                    <div className="flex flex-col justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-4 lg:gap-6">
                      <Image 
                        src="/cards/1/hero/hero-1.png" 
                        alt="Hero 1" 
                        className="w-full rounded-lg shadow-md object-cover float-animation-1 transition-all duration-300" 
                        style={{ imageRendering: "crisp-edges" }}
                        width={100}
                        height={100}
                      />
                      <Image 
                        src="/cards/1/hero/hero-2.png" 
                        alt="Hero 2" 
                        className="w-full rounded-lg shadow-md object-cover float-animation-2 transition-all duration-300" 
                        style={{ imageRendering: "crisp-edges" }}
                        width={100}
                        height={100}
                      />
                    </div>
                    
                    {/* Middle column - 3 images */}
                    <div className="flex flex-col gap-3 xs:gap-4 sm:gap-6 md:gap-4 lg:gap-6">
                      <Image 
                        src="/cards/1/hero/hero-3.png" 
                        alt="Hero 3" 
                        className="w-full rounded-lg shadow-md object-cover float-animation-3 transition-all duration-300" 
                        style={{ imageRendering: "crisp-edges" }}
                        width={100}
                        height={100}
                      />
                      <Image 
                        src="/cards/1/hero/hero-4.png" 
                        alt="Hero 4" 
                        className="w-full rounded-lg shadow-md object-cover float-animation-4 transition-all duration-300" 
                        style={{ imageRendering: "crisp-edges" }}
                        width={100}
                        height={100}
                      />
                      <Image 
                        src="/cards/1/hero/hero-5.png" 
                        alt="Hero 5" 
                        className="w-full rounded-lg shadow-md object-cover float-animation-5 transition-all duration-300" 
                        style={{ imageRendering: "crisp-edges" }}
                        width={100}
                        height={100}
                      />
                    </div>
                    
                    {/* Right column - 2 images, centered vertically */}
                    <div className="flex flex-col justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-4 lg:gap-6">
                      <Image 
                        src="/cards/1/hero/hero-6.png" 
                        alt="Hero 6" 
                        className="w-full rounded-lg shadow-md object-cover float-animation-6 transition-all duration-300" 
                        style={{ imageRendering: "crisp-edges" }}
                        width={100}
                        height={100}
                      />
                      <Image 
                        src="/cards/1/hero/hero-7.png" 
                        alt="Hero 7" 
                        className="w-full rounded-lg shadow-md object-cover float-animation-7 transition-all duration-300" 
                        style={{ imageRendering: "crisp-edges" }}
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Text Section with project info */}
                <div className="mt-8 px-4 sm:px-6 md:px-6 lg:px-9 pb-4 sm:pb-6 md:pb-10 lg:pb-8">
                  <div className="text-[10px] xs:text-[10px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-xs font-mono tracking-wider opacity-80">{"// TREASURE AI"}</div>
                  <div className="flex items-end justify-between mt-2 sm:mt-2 md:mt-1">
                    <h2 className="text-[#FFFDF7] text-[32px] xs:text-[34px] sm:text-[36px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-[829] leading-[0.95] uppercase tracking-tight min-h-[70px] md:min-h-[70px] max-w-[80%]">VIRTUAL<br />COMPANIONS</h2>
                    <Image src="/cards/1/logomark.svg" alt="Virtual Companions Logo" className="h-5 xs:h-5 sm:h-5 md:h-5 lg:h-5.5 xl:h-6 w-auto mb-0.5 sm:mb-1 lg:mb-2" width={24} height={24} />
                  </div>
                </div>
                
                {/* Bottom Section - Development Phase */}
                <div className="h-[50px] sm:h-[50px] md:h-[50px] lg:h-[55px] border-t border-white/60 flex items-center justify-center mt-0 group-hover:border-[#A239FF] transition-colors duration-700">
                  <span className="uppercase font-mono text-white/90 text-[10px] xs:text-[10px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-xs font-bold tracking-wider">Development Phase</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-black/90 border border-white/20 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl ">VIRTUAL COMPANIONS</DialogTitle>
                <DialogDescription className="text-white/70">
                  More information about Virtual Companions coming soon.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Card 2 - Smolworld */}
          <Dialog>
            <DialogTrigger asChild>
              <div 
                className="w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[340px] pt-8 md:max-w-none mx-auto rounded-3xl cursor-pointer border border-white/60 overflow-hidden flex flex-col bg-black/30 relative group transition-all duration-700 hover:border-[#A239FF]"
                style={{ 
                  boxShadow: "inset 0 0 20px 10px rgba(0, 0, 0, 0.5), inset 0 0 3px 2px rgba(255, 255, 255, 0.4), 0 0 8px 2px rgba(255, 255, 255, 0.25)",
                  backgroundImage: "repeating-linear-gradient(180deg, rgba(50, 50, 50, 0.03) 0px, rgba(50, 50, 50, 0.03) 1px, transparent 1px, transparent 2px)"
                }}
              >
                {/* Glow overlay - White in default state, purple on hover */}
                <div className="absolute inset-0 opacity-45 transition-all duration-700 pointer-events-none" 
                    style={{ 
                      boxShadow: "inset 0 0 50px 25px rgba(255, 255, 255, 0.3), 0 0 15px 5px rgba(255, 255, 255, 0.2)" 
                    }}>
                </div>
                
                {/* Hover-only purple glow that replaces the white glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" 
                    style={{ 
                      boxShadow: "inset 0 0 50px 25px rgba(162, 57, 255, 0.45), 0 0 15px 3px rgba(162, 57, 255, 0.4)" 
                    }}>
                </div>
                
                {/* Purple gradient at top on hover */}
                <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-[#A239FF]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 w-full h-full opacity-5">
                  <Image 
                    src="/cards/2/bg.png" 
                    alt="Background pattern" 
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                
                {/* Hero image */}
                <div className="flex-1 p-3 xs:p-4 sm:p-6 md:p-4 lg:p-6 sm:pt-10 relative h-[280px] flex items-center justify-center">
                  <Image 
                    src="/cards/2/hero.png" 
                    alt="Smolworld Hero" 
                    className="w-full rounded-lg object-cover transition-all duration-500 group-hover:animate-[wiggle_0.5s_ease-in-out]" 
                    style={{ imageRendering: "crisp-edges" }}
                    width={500}
                    height={280}
                  />
                </div>
                
                {/* Text Section with project info */}
                <div className="mt-8 px-4 sm:px-6 md:px-6 lg:px-9 pb-4 sm:pb-6 md:pb-10 lg:pb-8">
                  <div className="text-[10px] xs:text-[10px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-xs font-mono tracking-wider opacity-80">{"// SMOLVERSE"}</div>
                  <div className="flex items-end justify-between mt-2 sm:mt-2 md:mt-1">
                    <h2 className="text-[#FFFDF7] text-[32px] xs:text-[34px] sm:text-[36px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-[829] leading-[0.95] uppercase tracking-tight min-h-[40px] md:min-h-[40px]">SMOLWORLD</h2>
                    <Image src="/cards/2/logomark.svg" alt="Smol World Logo" className="h-4 xs:h-4 sm:h-4 md:h-4 lg:h-4.5 xl:h-5 w-auto mb-0.5 sm:mb-1 lg:mb-2" width={20} height={20} />
                  </div>
                </div>
                
                {/* Bottom Section - Development Phase */}
                <div className="h-[50px] sm:h-[50px] md:h-[50px] lg:h-[55px] border-t border-white/60 flex items-center justify-center mt-0 group-hover:border-[#A239FF] transition-colors duration-700">
                  <span className="uppercase font-mono text-white/90 text-[10px] xs:text-[10px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-xs font-bold tracking-wider">Development Phase</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-black/90 border border-white/20 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl ">SMOLWORLD</DialogTitle>
                <DialogDescription className="text-white/70">
                  More information about Smolworld coming soon.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Card 3 - Canopy */}
          <Dialog>
            <DialogTrigger asChild>
              <div 
                className="w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[340px] pt-8 md:max-w-none mx-auto rounded-3xl cursor-pointer border border-white/60 overflow-hidden flex flex-col bg-black/30 relative group transition-all duration-700 hover:border-[#A239FF]"
                style={{ 
                  boxShadow: "inset 0 0 20px 10px rgba(0, 0, 0, 0.5), inset 0 0 3px 2px rgba(255, 255, 255, 0.4), 0 0 8px 2px rgba(255, 255, 255, 0.25)",
                  backgroundImage: "repeating-linear-gradient(180deg, rgba(50, 50, 50, 0.03) 0px, rgba(50, 50, 50, 0.03) 1px, transparent 1px, transparent 2px)"
                }}
              >
                {/* Glow overlay - White in default state, purple on hover */}
                <div className="absolute inset-0 opacity-45 transition-all duration-700 pointer-events-none" 
                    style={{ 
                      boxShadow: "inset 0 0 50px 25px rgba(255, 255, 255, 0.3), 0 0 15px 5px rgba(255, 255, 255, 0.2)" 
                    }}>
                </div>
                
                {/* Hover-only purple glow that replaces the white glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" 
                    style={{ 
                      boxShadow: "inset 0 0 50px 25px rgba(162, 57, 255, 0.45), 0 0 15px 3px rgba(162, 57, 255, 0.4)" 
                    }}>
                </div>
                
                {/* Purple gradient at top on hover */}
                <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-[#A239FF]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 w-full h-full opacity-5">
                  <Image 
                    src="/cards/3/bg.png" 
                    alt="Background pattern" 
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                
                {/* Hero image with zoom effect on hover */}
                <div className="flex-1 py-3 xs:py-4 sm:py-6 md:py-4 lg:py-6 sm:pt-10 px-0 relative h-[280px] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                    <Image 
                      src="/cards/3/hero.png" 
                      alt="Canopy Hero" 
                      className="w-full rounded-lg object-cover" 
                      style={{ imageRendering: "crisp-edges" }}
                      width={500}
                      height={280}
                    />
                  </div>
                </div>
                
                {/* Text Section with project info */}
                <div className="mt-8 px-4 sm:px-6 md:px-6 lg:px-9 pb-4 sm:pb-6 md:pb-10 lg:pb-8">
                  <div className="text-[10px] xs:text-[10px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-xs font-mono tracking-wider opacity-80">{"// BRIDGEWORLD"}</div>
                  <div className="flex items-end justify-between mt-2 sm:mt-2 md:mt-1">
                    <h2 className="text-[#FFFDF7] text-[32px] xs:text-[34px] sm:text-[36px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-[829] leading-[0.95] uppercase tracking-tight min-h-[40px] md:min-h-[40px] group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">CANOPY</h2>
                    <Image src="/cards/3/logomark.svg" alt="Canopy Logo" className="h-5 xs:h-5 sm:h-5 md:h-5 lg:h-5.5 xl:h-6 w-auto mb-0.5 sm:mb-1 lg:mb-2" width={24} height={24} />
                  </div>
                </div>
                
                {/* Bottom Section - Development Phase */}
                <div className="h-[50px] sm:h-[50px] md:h-[50px] lg:h-[55px] border-t border-white/60 flex items-center justify-center mt-0 group-hover:border-[#A239FF] transition-colors duration-700">
                  <span className="uppercase font-mono text-white/90 text-[10px] xs:text-[10px] sm:text-[10px] md:text-[10px] lg:text-[11px] xl:text-xs font-bold tracking-wider">Development Phase</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-black/90 border border-white/20 text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl ">CANOPY</DialogTitle>
                <DialogDescription className="text-white/70">
                  More information about Canopy coming soon.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </>
  );
}
