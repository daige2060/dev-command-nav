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
}

export default function CommandCard({ command }: CommandCardProps) {
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

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 ${
      command.dangerLevel ? 'border-l-4 border-red-500' : ''
    }`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{command.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {command.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {command.tags?.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 
                         text-blue-600 dark:text-blue-300 hover:bg-blue-200 
                         dark:hover:bg-blue-800 transition-colors duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => copyToClipboard(command.command)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-green-500" />
          ) : (
            <ClipboardIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="mt-4 font-mono">
        <SyntaxHighlighter
          language="bash"
          style={atomOneDark}
          customStyle={{
            padding: '1rem',
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
          }}
        >
          {command.command}
        </SyntaxHighlighter>
      </div>

      {command.parameters.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">参数说明：</h4>
          <ul className="space-y-1">
            {command.parameters.map((param) => (
              <li key={param.name} className="text-sm">
                <span className="font-mono text-blue-600 dark:text-blue-400">
                  {param.name}
                </span>
                {param.required && (
                  <span className="text-red-500 ml-1">*</span>
                )}
                <span className="ml-2">{param.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {command.examples.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">使用示例：</h4>
          {command.examples.map((example, index) => (
            <div key={index} className="mt-2">
              <p className="text-sm mb-1">{example.description}</p>
              <SyntaxHighlighter
                language="bash"
                style={atomOneDark}
                customStyle={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                }}
              >
                {example.code}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 