import Image from 'next/image'
import appDownload from '../../public/ClatiansAppDesign.webp'
export default function AppDownload() {
  return (
    <section className="bg-[#fdf6f4] py-4 sm:py-5 md:py-6">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {/* Left: App Image */}
          <div className="w-full lg:w-5/12 flex items-center justify-center">
            <div className="relative w-[280px] h-[354px] sm:w-[300px] sm:h-[380px] md:w-[350px] md:h-[443px] lg:w-[400px] lg:h-[506px] pt-[100px]">
              <Image
                src={appDownload}
                alt="Mobile App"
                width={500}
                height={633}  
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-2.5 md:mb-3">
              Download For Hassle-Free<br />
              End-To-End <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent">Learning</span>
            </h2>
            
            <p className="text-gray-600 mb-2.5 sm:mb-3 md:mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
              Access all your study materials, attend live classes,<br className="hidden md:block" />
              and track your progress with our easy-to-use mobile app.<br className="hidden md:block" />
              Available for both iOS and Android devices.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.clatians&pcampaignid=web_share" target="_blank" className="transform hover:scale-105 transition-transform">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto"
                />
              </a>
              <a href="#" className="transform hover:scale-105 transition-transform">
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={53}
                  className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 