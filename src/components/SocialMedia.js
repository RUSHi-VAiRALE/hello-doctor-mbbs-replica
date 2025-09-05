export default function SocialMedia() {
  const socialLinks = [
    {
      platform: 'https://www.facebook.com/hellodoctor',
      icon: 'bi-facebook',
      color: 'from-blue-600 to-blue-700',
      name: 'Facebook'
    },
    {
      platform: 'https://www.instagram.com/hellodoctor/',
      icon: 'bi-instagram',
      color: 'from-pink-500 to-purple-600',
      name: 'Instagram'
    },
    {
      platform: 'https://www.youtube.com/@hellodoctor',
      icon: 'bi-youtube',
      color: 'from-red-500 to-red-600',
      name: 'YouTube'
    },
    {
      platform: 'https://t.me/hellodoctor',
      icon: 'bi-telegram',
      color: 'from-blue-400 to-blue-500',
      name: 'Telegram'
    },
    {
      platform: '',
      icon: 'bi-google',
      color: 'from-red-500 to-orange-500',
      name: 'Google'
    },
    {
      platform: 'https://www.linkedin.com/in/hellodoctor/',
      icon: 'bi-linkedin',
      color: 'from-blue-600 to-blue-700',
      name: 'LinkedIn'
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-teal-100 to-green-100 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 via-green-200/30 to-teal-200/30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="bi bi-share-fill mr-2"></i>
            CONNECT WITH US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-800 to-green-800 bg-clip-text text-transparent">
            Follow Us on Social Media
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay updated with our latest news, live sessions, and valuable content. Connect with us on social media for exclusive updates and educational resources!
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.platform}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-6 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <i className={`bi ${social.icon} text-white text-xl`}></i>
                </div>

                {/* Platform Name */}
                <span className="text-gray-600 text-sm font-medium group-hover:text-teal-700 transition-colors duration-300">
                  {social.name}
                </span>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400/50 rounded-2xl transition-all duration-300"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-gray-800 mb-2">50K+</div>
            <div className="text-gray-600 text-sm">Followers</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-gray-800 mb-2">1M+</div>
            <div className="text-gray-600 text-sm">Video Views</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-6">
            <div className="text-3xl font-bold text-gray-800 mb-2">Daily</div>
            <div className="text-gray-600 text-sm">Updates</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Stay Connected</h3>
          <p className="text-gray-600 mb-6">
            Join our community and never miss important updates, live sessions, and exclusive content!
          </p>
          <button className="bg-gradient-to-r from-teal-500 via-green-500 to-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <i className="bi bi-bell-fill mr-2"></i>
            Get Notifications
          </button>
        </div>
      </div>
    </section>
  )
} 