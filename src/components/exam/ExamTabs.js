export default function ExamTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="sticky top-0 bg-white shadow-md z-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-red-700 text-red-700'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 