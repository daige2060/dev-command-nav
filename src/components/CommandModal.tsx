import { Command } from '../types';

interface CommandModalProps {
  command: Command;
  onClose: () => void;
}

export default function CommandModal({ command, onClose }: CommandModalProps) {
  // 复制命令到剪贴板
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('命令已复制到剪贴板');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* 模态框头部 */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">{command.title}</h2>
            <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {command.category}
            </span>
            {command.subcategory && (
              <span className="ml-2 bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {command.subcategory}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 模态框内容 */}
        <div className="p-4">
          <p className="text-gray-700 mb-4">{command.description}</p>

          {/* 命令 */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-md font-semibold">命令</h3>
              <button
                onClick={() => copyToClipboard(command.command)}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                复制
              </button>
            </div>
            <div className="bg-gray-100 p-3 rounded font-mono text-sm overflow-x-auto">
              {command.command}
            </div>
          </div>

          {/* 参数 */}
          {command.parameters && command.parameters.length > 0 && (
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">参数</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">参数</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">描述</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">必填</th>
                    </tr>
                  </thead>
                  <tbody>
                    {command.parameters.map((param, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-2 font-mono text-sm">{param.name}</td>
                        <td className="px-4 py-2 text-sm">{param.description}</td>
                        <td className="px-4 py-2 text-sm">
                          {param.required ? (
                            <span className="text-red-500">是</span>
                          ) : (
                            <span className="text-gray-500">否</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 示例 */}
          {command.examples && command.examples.length > 0 && (
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">示例</h3>
              {command.examples.map((example, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm text-gray-600">{example.description}</p>
                    <button
                      onClick={() => copyToClipboard(example.code)}
                      className="text-sm text-blue-500 hover:text-blue-700"
                    >
                      复制
                    </button>
                  </div>
                  <div className="bg-gray-100 p-2 rounded font-mono text-sm overflow-x-auto">
                    {example.code}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 标签 */}
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2">标签</h3>
            <div className="flex flex-wrap gap-2">
              {command.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 文档链接 */}
          {command.docUrl && (
            <div>
              <h3 className="text-md font-semibold mb-2">官方文档</h3>
              <a
                href={command.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 break-all"
              >
                {command.docUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 