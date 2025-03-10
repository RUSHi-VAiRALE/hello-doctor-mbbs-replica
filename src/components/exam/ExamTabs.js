const ExamTabs = ({ tabs, activeTab, setActiveTab }) => {
  if (!tabs || tabs.length === 0) return null

  return (
    <div className="sticky top-14 bg-white shadow-md z-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex overflow-x-auto no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-4 md:py-6 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
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

export default ExamTabs