import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CommandList from './components/CommandList'
import TagFilter from './components/TagFilter'
import { useStore } from './store'

function App() {
  const darkMode = useStore((state) => state.darkMode)

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
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          <aside className="w-64 flex-shrink-0">
            <Sidebar />
          </aside>
          <main className="flex-1">
            <TagFilter />
            <CommandList />
          </main>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  )
}

export default App 