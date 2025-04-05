import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CommandList from './components/CommandList'
import TagFilter from './components/TagFilter'
import { useStore } from './store'

function App() {
  const darkMode = useStore((state) => state.darkMode)
  const categories = useStore((state) => state.categories)
  const selectedCategory = useStore((state) => state.selectedCategory)
  const handleCategorySelect = useStore((state) => state.handleCategorySelect)
  const availableTags = useStore((state) => state.availableTags)
  const selectedTags = useStore((state) => state.selectedTags)
  const handleTagSelect = useStore((state) => state.handleTagSelect)
  const clearTags = useStore((state) => state.clearTags)
  const filteredCommands = useStore((state) => state.filteredCommands)
  const searchTerm = useStore((state) => state.searchTerm)
  const setSearchTerm = useStore((state) => state.setSearchTerm)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex">
        <Sidebar 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleCategorySelect} 
        />
        <div className="flex-1 ml-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">命令导航</h1>
            <p className="text-gray-600">
              快速查找和使用常用命令，包括Git、Conda、CMD、PowerShell、Linux、NPM、数据库和网络工具等。
            </p>
          </div>
          
          <TagFilter 
            tags={availableTags} 
            selectedTags={selectedTags} 
            onTagSelect={handleTagSelect} 
            onClearTags={clearTags}
          />
          
          <CommandList 
            commands={filteredCommands} 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          />
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  )
}

export default App 