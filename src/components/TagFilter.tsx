interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onClearTags: () => void;
}

export default function TagFilter({
  tags,
  selectedTags,
  onTagSelect,
  onClearTags,
}: TagFilterProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">标签筛选</h2>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearTags}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            清除筛选
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              selectedTags.includes(tag)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
} 