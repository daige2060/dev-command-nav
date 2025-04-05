import { useStore } from '../store'

// 确保categories的id与命令的category大小写匹配
const categories = [
  { id: 'Git', name: 'Git', count: 0 },
  { id: 'Docker', name: 'Docker', count: 0 },
  { id: 'Linux', name: 'Linux', count: 0 },
  { id: 'PowerShell', name: 'PowerShell', count: 0 },
  { id: 'CMD', name: 'CMD', count: 0 },
  { id: 'Shell', name: 'Shell', count: 0 },
  { id: 'Conda', name: 'Conda', count: 0 },
  { id: 'NPM', name: 'NPM', count: 0 },
]

export default function Sidebar() {
  const { commands, selectedCategory, setSelectedCategory } = useStore()

  // 计算每个分类的命令数量
  const categoryCounts = categories.map(category => ({
    ...category,
    count: commands.filter(cmd => cmd.category === category.id).length
  }))

  const handleCategoryClick = (categoryId: string | null) => {
    console.log('Clicked category:', categoryId)
    setSelectedCategory(categoryId)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-4">分类</h2>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => handleCategoryClick(null)}
            className={`w-full text-left px-3 py-2 rounded-lg ${
              selectedCategory === null
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            全部命令
            <span className="float-right text-sm text-gray-500 dark:text-gray-400">
              {commands.length}
            </span>
          </button>
        </li>
        {categoryCounts.map((category) => (
          category.count > 0 && (
            <li key={category.id}>
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`w-full text-left px-3 py-2 rounded-lg ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
                <span className="float-right text-sm text-gray-500 dark:text-gray-400">
                  {category.count}
                </span>
              </button>
            </li>
          )
        ))}
      </ul>
    </div>
  )
} 