import { useStore } from '../store'

export default function TagFilter() {
  const { commands, selectedTag, setSelectedTag } = useStore()

  // 收集所有唯一的标签
  const allTags = Array.from(
    new Set(commands.flatMap((command) => command.tags || []))
  ).sort()

  console.log('All available tags:', allTags)
  
  const handleTagClick = (tag: string) => {
    console.log('Clicked tag:', tag)
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-4">
      <h2 className="text-lg font-semibold mb-4">标签筛选</h2>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 
              ${
                selectedTag === tag
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
      {selectedTag && (
        <div className="mt-3 text-sm text-blue-600 dark:text-blue-400">
          当前过滤: <span className="font-semibold">{selectedTag}</span>
          <button 
            onClick={() => setSelectedTag(null)}
            className="ml-2 text-xs bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            清除
          </button>
        </div>
      )}
    </div>
  )
} 