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

interface SidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function Sidebar({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}: SidebarProps) {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">命令类别</h2>
      <ul>
        <li className="mb-1">
          <button
            className={`w-full text-left px-3 py-2 rounded ${
              selectedCategory === null
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => onSelectCategory(null)}
          >
            全部
          </button>
        </li>
        {categories.map((category) => (
          <li key={category} className="mb-1">
            <button
              className={`w-full text-left px-3 py-2 rounded ${
                selectedCategory === category
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 