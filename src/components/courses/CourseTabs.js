export default function CourseTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'download', label: 'Free Content' },
    { id: 'details', label: 'Details' }
  ]

  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex min-w-max bg-white px-2 sm:px-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-4 border-b-2 font-semibold whitespace-nowrap text-sm sm:text-base transition-colors ${
              activeTab === tab.id
                ? 'border-red-700 text-red-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
} 