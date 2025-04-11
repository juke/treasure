import Image from "next/image";
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
          <div className="relative w-[400px] sm:w-[500px] lg:w-[600px] aspect-[916/1400] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,50,50,0.4)] rounded-3xl cursor-pointer">
            <Image
              src="/cards/Card 1.png"
              alt="Virtual Companions"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Card 2 - Smolworld */}
          <div className="relative w-[400px] sm:w-[500px] lg:w-[600px] aspect-[916/1400] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(50,255,100,0.4)] rounded-3xl cursor-pointer">
            <Image
              src="/cards/Card 2.png"
              alt="Smolworld"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Card 3 - Canopy */}
          <div className="relative w-[400px] sm:w-[500px] lg:w-[600px] aspect-[916/1400] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(50,100,255,0.4)] rounded-3xl cursor-pointer">
            <Image
              src="/cards/Card 3.png"
              alt="Canopy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
}
