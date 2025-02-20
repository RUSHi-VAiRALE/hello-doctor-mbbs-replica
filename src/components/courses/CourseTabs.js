export default function CourseTabs({ activeTab, setActiveTab }) {
  const tabs = ['Features', 'About', 'Schedule', 'Teachers', 'Free Content','Details']

  return (
    <div className="border-b border-gray-200 mb-8 overflow-x-auto">
      <nav className="flex space-x-2 sm:space-x-8 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm ${
              activeTab === tab.toLowerCase()
                ? 'border-red-700 text-red-700'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  )
} 