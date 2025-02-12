import Image from 'next/image'

export default function Events() {
  const events = [
    {
      date: { day: '01', month: 'Oct' },
      time: '08:00 AM - 10:00 AM',
      title: 'Engaging Students in Real-World Problems Finding',
      location: 'United States',
      image: 'https://placehold.co/400x300'
    },
    // Add more events...
  ]

  return (
    <section className="bg-[#e7edff] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Upcoming Events
          </span>
          <h2 className="text-3xl font-bold">Upcoming Events & Webinars</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 bg-white px-4 py-2 rounded-br-xl">
                  <div className="text-center">
                    <h5 className="text-xl font-bold text-gray-800">{event.date.day}</h5>
                    <small className="text-gray-600">{event.date.month}</small>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <i className="bi bi-clock text-orange-500 mr-2"></i>
                  <span className="text-sm text-gray-600">{event.time}</span>
                </div>

                <h5 className="font-bold text-lg mb-3">{event.title}</h5>

                <div className="flex items-center mb-4">
                  <i className="bi bi-geo-alt text-orange-500 mr-2"></i>
                  <span className="text-sm text-gray-600">{event.location}</span>
                </div>

                <button className="w-full py-2 border-2 border-gray-800 text-gray-800 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 