import { Command } from '../types'

interface CommandCardProps {
  command: Command
  onClick: () => void
}

export default function CommandCard({ command, onClick }: CommandCardProps) {
  const renderDangerBadge = () => {
    if (command.dangerLevel === undefined) return null;
    
    const badgeColor = command.dangerLevel === 0
      ? 'bg-green-100 text-green-800'
      : command.dangerLevel === 1
        ? 'bg-yellow-100 text-yellow-800'
        : 'bg-red-100 text-red-800';
        
    const badgeText = command.dangerLevel === 0
      ? '安全'
      : command.dangerLevel === 1
        ? '中等风险'
        : '高风险';
        
    return (
      <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${badgeColor}`}>
        {badgeText}
      </span>
    );
  };

  return (
    <div
      className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{command.title}</h3>
        <div className="flex items-center">
          {renderDangerBadge()}
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {command.category}
          </span>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{command.description}</p>
      <div className="bg-gray-100 p-2 rounded font-mono text-sm overflow-x-auto">
        {command.command}
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {command.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
} 