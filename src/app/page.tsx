import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <div className="flex items-center">
                <img src="/favicon.ico" alt="Treasure Logo" className="h-10 w-10" />
              </div>
            </Link>
            <nav className="hidden md:flex space-x-1">
              <Link href="/app" className="px-3 py-2 text-sm font-semibold uppercase">
                APP <span className="text-xs text-red-500">▼</span>
              </Link>
              <Link href="/marketplace" className="px-3 py-2 text-sm font-semibold uppercase">
                MARKETPLACE <span className="text-xs text-red-500">▼</span>
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://twitter.com">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Link>
            <Link href="https://instagram.com">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </Link>
            <Link href="https://twitch.tv">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.149 0L.537 4.119v16.836h5.731V24h3.224l3.045-3.045h4.657l6.269-6.269V0H2.149zm19.164 13.612l-3.582 3.582H12l-3.045 3.045v-3.045H4.119V2.149h17.194v11.463zm-3.582-7.343v6.262h-2.149V6.269h2.149zm-5.731 0v6.262H9.851V6.269H12z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-black text-white">
        {/* Header Section */}
        <div className="container mx-auto max-w-[1440px] py-16 px-4">
          <p className="text-base font-mono font-bold tracking-wider mb-2 flex items-center">
            <span className="text-red-500 mr-2 text-xs">◆</span> BUILD, PLAY & EVOLVE WITH $MAGIC
          </p>
          <h1 className="text-[#FFFDF7] text-5xl md:text-7xl font-bold leading-none uppercase mb-16">
            WE&apos;RE EMBARKING<br /> ON A NEW ADVENTURE
          </h1>

          {/* Cards Section - Using a grid layout for better responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Virtual Companions */}
            <div className="rounded-3xl overflow-hidden border border-white/30 bg-black relative">
              {/* Card Content */}
              <div className="pt-6 px-6 pb-4">
                {/* Top section with hero images - Precisely arranged 2-3-2 layout */}
                <div className="grid grid-cols-3 gap-2 mb-8">
                  <div className="flex flex-col gap-2">
                    <img 
                      src="/cards/1/hero/hero-1.png" 
                      alt="Hero 1" 
                      className="rounded-md shadow-lg w-full"
                    />
                    <img 
                      src="/cards/1/hero/hero-2.png" 
                      alt="Hero 2" 
                      className="rounded-md shadow-lg w-full" 
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <img 
                      src="/cards/1/hero/hero-3.png" 
                      alt="Hero 3" 
                      className="rounded-md shadow-lg w-full" 
                    />
                    <img 
                      src="/cards/1/hero/hero-4.png" 
                      alt="Hero 4" 
                      className="rounded-md shadow-lg w-full" 
                    />
                    <img 
                      src="/cards/1/hero/hero-5.png" 
                      alt="Hero 5" 
                      className="rounded-md shadow-lg w-full" 
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <img 
                      src="/cards/1/hero/hero-6.png" 
                      alt="Hero 6" 
                      className="rounded-md shadow-lg w-full" 
                    />
                    <img 
                      src="/cards/1/hero/hero-7.png" 
                      alt="Hero 7" 
                      className="rounded-md shadow-lg w-full" 
                    />
                  </div>
                </div>
              </div>

              {/* Title Section */}
              <div className="px-6 pt-4 pb-6">
                <div className="text-xs font-mono tracking-wider opacity-80 mb-1">// TREASURE AI</div>
                <div className="flex items-end justify-between">
                  <h2 className="text-[#FFFDF7] text-4xl md:text-5xl font-bold uppercase leading-none">
                    VIRTUAL<br />COMPANIONS
                  </h2>
                  <img src="/cards/1/logomark.svg" alt="Virtual Companions Logo" className="h-6 w-auto" />
                </div>
              </div>
              
              {/* Bottom Section - Development Phase */}
              <div className="h-12 border-t border-white/30 flex items-center justify-center">
                <span className="uppercase font-mono text-white/90 text-xs font-bold tracking-wider">Development Phase</span>
              </div>
            </div>

            {/* Card 2 - Smolworld */}
            <div className="rounded-3xl overflow-hidden border border-white/30 bg-black relative">
              {/* Card Content */}
              <div className="p-6">
                <div className="mb-8">
                  <img 
                    src="/cards/2/hero.png" 
                    alt="Smolworld Hero" 
                    className="rounded-md shadow-lg w-full" 
                  />
                </div>
              </div>

              {/* Title Section */}
              <div className="px-6 pt-4 pb-6">
                <div className="text-xs font-mono tracking-wider opacity-80 mb-1">// SMOLVERSE</div>
                <div className="flex items-end justify-between">
                  <h2 className="text-[#FFFDF7] text-4xl md:text-5xl font-bold uppercase leading-none">
                    SMOLWORLD
                  </h2>
                  <img src="/cards/2/logomark.svg" alt="Smolworld Logo" className="h-5 w-auto" />
                </div>
              </div>
              
              {/* Bottom Section - Development Phase */}
              <div className="h-12 border-t border-white/30 flex items-center justify-center">
                <span className="uppercase font-mono text-white/90 text-xs font-bold tracking-wider">Development Phase</span>
              </div>
            </div>

            {/* Card 3 - Canopy */}
            <div className="rounded-3xl overflow-hidden border border-white/30 bg-black relative">
              {/* Card Content */}
              <div className="p-6">
                <div className="mb-8">
                  <img 
                    src="/cards/3/hero.png" 
                    alt="Canopy Hero" 
                    className="rounded-md shadow-lg w-full" 
                  />
                </div>
              </div>

              {/* Title Section */}
              <div className="px-6 pt-4 pb-6">
                <div className="text-xs font-mono tracking-wider opacity-80 mb-1">// BRIDGEWORLD</div>
                <div className="flex items-end justify-between">
                  <h2 className="text-[#FFFDF7] text-4xl md:text-5xl font-bold uppercase leading-none">
                    CANOPY
                  </h2>
                  <img src="/cards/3/logomark.svg" alt="Canopy Logo" className="h-6 w-auto" />
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="h-12 border-t border-white/30 flex items-center justify-center">
                <span className="uppercase font-mono text-white/90 text-xs font-bold tracking-wider">Early Production</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
