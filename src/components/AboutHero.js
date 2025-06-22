export default function AboutHero({ route, page }) {
  return (
    <div className="relative h-[200px]">
      <div className="absolute inset-0">
        {/* <img
          src=""
          alt="About Us Header"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ad4a16] via-[#8f3a17] to-[#312518] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-[42px] font-bold text-white uppercase tracking-wider mb-2">
              {page}
            </h1>
            <nav className="text-base md:text-lg font-medium">
              <a href="/" className="text-white transition-colors font-bold">
                {route}
              </a>
              <span className="text-white mx-2 font-bold">»</span>
              <span className="text-white">{page}</span>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
} 