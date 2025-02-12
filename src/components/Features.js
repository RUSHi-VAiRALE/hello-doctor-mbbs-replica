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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto px-4 mt-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300"
        >
          <i className={`bi ${feature.icon} text-4xl text-blue-600 mb-3`}></i>
          <h5 className="text-lg font-bold mb-1">{feature.title}</h5>
          <p className="text-gray-600 text-center text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  )
} 