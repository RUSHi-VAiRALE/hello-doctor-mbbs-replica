export default function CourseTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'freeContent', label: 'Free Content' },
    { id: 'details', label: 'Details' }
  ]

  return (
    <div className="flex space-x-4 bg-white">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-3 py-4 border-b-2 font-semibold transition-colors ${
            activeTab === tab.id
              ? 'border-red-700 text-red-700'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
} 