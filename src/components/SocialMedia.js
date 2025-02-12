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
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Follow Us on Social Media</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Stay updated with our latest news, live sessions, and valuable content.
          Connect with us on social media for exclusive updates!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={`#${social.platform}`}
              className={`${social.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl transform hover:scale-110 transition-transform shadow-lg`}
            >
              <i className={`bi ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 