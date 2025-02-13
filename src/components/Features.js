export default function Features() {
  const features = [
    {
      icon: "bi-camera-video-fill",
      title: "Daily Live",
      description: "Interactive classes"
    },
    {
      icon: "bi-journal-text",
      title: "10 Million +",
      description: "Tests, sample papers & notes"
    },
    {
      icon: "bi-chat-dots-fill",
      title: "24 x 7",
      description: "Doubt solving sessions"
    },
    {
      icon: "bi-building",
      title: "100 +",
      description: "Offline centres"
    }
  ]

  return (
    <section className="bg-[#E7EDFF] py-16">
      <div className="container mx-auto w-full px-4 bg-[#E7EDFF]">
      <div className="grid bg-[#E7EDFF] grid-cols-2 md:grid-cols-4 gap-4 container mx-auto px-4 w-[100%] lg:w-[84%]">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300 min-h-[180px]"
        >
          <i className={`bi ${feature.icon} text-4xl text-blue-600 mb-4`}></i>
          <h5 className="text-lg font-bold mb-2">{feature.title}</h5>
          <p className="text-gray-600 text-center text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
    </div>
    </section>
  )
} 