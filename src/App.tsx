import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CommandList from "./components/CommandList";
import TagFilter from "./components/TagFilter";
import { commands } from "./data/commands";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 提取所有唯一的类别
  const categories = Array.from(new Set(commands.map(cmd => cmd.category)));

  // 根据选中的类别过滤命令
  const filteredByCategory = selectedCategory
    ? commands.filter(cmd => cmd.category === selectedCategory)
    : commands;

  // 提取所有唯一的标签
  const availableTags = Array.from(
    new Set(
      filteredByCategory.flatMap(cmd => cmd.tags)
    )
  ).sort();

  // 根据选中的标签过滤命令
  const filteredCommands = selectedTags.length > 0
    ? filteredByCategory.filter(cmd => 
        selectedTags.some(tag => cmd.tags.includes(tag))
      )
    : filteredByCategory;

  // 处理类别选择
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedTags([]);
  };

  // 处理标签选择
  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // 清除所有选中的标签
  const clearTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
    </div>
  );
} 