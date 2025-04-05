import { useState } from 'react';
import { Command } from '../types';
import CommandCard from './CommandCard';
import CommandModal from './CommandModal';

interface CommandListProps {
  commands: Command[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function CommandList({ 
  commands, 
  searchTerm, 
  setSearchTerm 
}: CommandListProps) {
  const [selectedCommand, setSelectedCommand] = useState<Command | null>(null);

  // 根据搜索词过滤命令
  const filteredCommands = searchTerm
    ? commands.filter(cmd => 
        cmd.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : commands;

  // 打开命令详情模态框
  const openCommandDetails = (command: Command) => {
    setSelectedCommand(command);
  };

  // 关闭命令详情模态框
  const closeCommandDetails = () => {
    setSelectedCommand(null);
  };

  return (
    <div>
      {/* 搜索框 */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="搜索命令..."
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 命令列表 */}
      {filteredCommands.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCommands.map((command) => (
            <CommandCard
              key={command.id}
              command={command}
              onClick={() => openCommandDetails(command)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">未找到匹配的命令</p>
        </div>
      )}

      {/* 命令详情模态框 */}
      {selectedCommand && (
        <CommandModal
          command={selectedCommand}
          onClose={closeCommandDetails}
        />
      )}
    </div>
  );
} 