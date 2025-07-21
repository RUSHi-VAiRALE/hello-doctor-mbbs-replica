export default function SocialMedia() {
  const socialLinks = [
    {
      platform: 'https://www.facebook.com/IEECLATians',
      icon: 'bi-facebook',
      color: 'from-blue-600 to-blue-700',
      name: 'Facebook'
    },
    {
      platform: 'https://www.instagram.com/clatians/',
      icon: 'bi-instagram',
      color: 'from-pink-500 to-purple-600',
      name: 'Instagram'
    },
    {
      platform: 'https://www.youtube.com/@CLATians',
      icon: 'bi-youtube',
      color: 'from-red-500 to-red-600',
      name: 'YouTube'
    },
    {
      platform: 'https://t.me/CLATians',
      icon: 'bi-telegram',
      color: 'from-blue-400 to-blue-500',
      name: 'Telegram'
    },
    {
      platform: 'https://g.co/kgs/3NcAYmD',
      icon: 'bi-google',
      color: 'from-red-500 to-orange-500',
      name: 'Google'
    },
    {
      platform: 'https://twitter.com/CLATians',
      icon: 'bi-twitter-x',
      color: 'from-gray-800 to-black',
      name: 'Twitter'
    },
    {
      platform: 'https://www.linkedin.com/in/clatians/',
      icon: 'bi-linkedin',
      color: 'from-blue-600 to-blue-700',
      name: 'LinkedIn'
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="bi bi-share-fill mr-2"></i>
            CONNECT WITH US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Follow Us on Social Media
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay updated with our latest news, live sessions, and valuable content. Connect with us on social media for exclusive updates and educational resources!
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={social.platform}
              href={social.platform}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-32 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <i className={`bi ${social.icon} text-white text-xl`}></i>
                </div>

                {/* Platform Name */}
                <span className="text-blue-100 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {social.name}
                </span>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-blue-100 text-sm">Followers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">1M+</div>
            <div className="text-blue-100 text-sm">Video Views</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-white mb-2">Daily</div>
            <div className="text-blue-100 text-sm">Updates</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Stay Connected</h3>
          <p className="text-blue-100 mb-6">
            Join our community and never miss important updates, live sessions, and exclusive content!
          </p>
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <i className="bi bi-bell-fill mr-2"></i>
            Get Notifications
          </button>
        </div>
      </div>
    </section>
  )
} 