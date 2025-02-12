import Image from 'next/image'

export default function AppDownload() {
  return (
    <section className="bg-[#fdf6f4] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: App Image */}
          <div className="lg:w-1/2">
            <Image
              src="/images/appp.png"
              alt="Mobile App"
              width={500}
              height={600}
              className="w-full h-auto max-w-lg mx-auto"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Download For Hassle-Free<br />
              End-To-End <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent">Learning</span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              Access all your study materials, attend live classes, and track your progress
              with our easy-to-use mobile app. Available for both iOS and Android devices.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#" className="transform hover:scale-105 transition-transform">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-14 w-auto"
                />
              </a>
              <a href="#" className="transform hover:scale-105 transition-transform">
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={53}
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 