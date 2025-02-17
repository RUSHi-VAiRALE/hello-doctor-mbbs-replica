export default function SocialMedia() {
  const socialLinks = [
    { platform: 'facebook', icon: 'bi-facebook', color: 'bg-[#1877F2]' },
    { platform: 'instagram', icon: 'bi-instagram', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' },
    { platform: 'youtube', icon: 'bi-youtube', color: 'bg-[#FF0000]' },
    { platform: 'telegram', icon: 'bi-telegram', color: 'bg-[#0088CC]' },
    { platform: 'google', icon: 'bi-google', color: 'bg-[#DB4437]' }
  ]

  return (
    <section className="bg-[#e7edff] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Follow Us on Social Media</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Stay updated with our latest news, live sessions, and valuable content.
          Connect with us on social media for exclusive updates!
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={`#${social.platform}`}
              className={`${social.color} w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white text-lg md:text-2xl transform hover:scale-110 transition-transform shadow-lg`}
            >
              <i className={`bi ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 