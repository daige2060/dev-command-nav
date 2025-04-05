import { useStore } from '../store'
import CommandCard from './CommandCard'

export default function CommandList() {
  const { commands, searchTerm, selectedCategory, selectedTag } = useStore()

  const filteredCommands = commands.filter((command) => {
    const matchesSearch = searchTerm
      ? command.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      : true

    const matchesCategory = selectedCategory
      ? command.category.toLowerCase() === selectedCategory.toLowerCase()
      : true

    const matchesTag = selectedTag
      ? command.tags?.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      : true

    return matchesSearch && matchesCategory && matchesTag
  })

  console.log('Selected tag:', selectedTag)
  console.log('Filtered commands:', filteredCommands)

  return (
    <div className="space-y-4">
      {filteredCommands.length === 0 ? (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          没有找到匹配的命令
        </div>
      ) : (
        filteredCommands.map((command) => (
          <CommandCard key={command.id} command={command} />
        ))
      )}
    </div>
  )
} 