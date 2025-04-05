import { useState } from 'react'
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Command } from '../types'
import { useStore } from '../store'

SyntaxHighlighter.registerLanguage('bash', bash)

interface CommandCardProps {
  command: Command
  onClick: () => void
}

export default function CommandCard({ command, onClick }: CommandCardProps) {
  const [copied, setCopied] = useState(false)
  const { setSelectedTag } = useStore()

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast.success('命令已复制到剪贴板')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('复制失败')
    }
  }

  const handleTagClick = (tag: string) => {
    console.log('Command card - clicked tag:', tag)
    setSelectedTag(tag)
  }

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