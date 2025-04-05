import { Command } from '../types';

export const powershellCommands: Command[] = [
  {
    id: 'ps-get-childitem',
    category: 'PowerShell',
    subcategory: '文件操作',
    title: '列出目录内容',
    command: 'Get-ChildItem [path] [options]',
    description: '获取指定位置中的项目和子项目',
    parameters: [
      {
        name: 'path',
        description: '要列出内容的位置',
        required: false
      },
      {
        name: '-Recurse',
        description: '递归获取子项目',
        required: false
      },
      {
        name: '-Filter',
        description: '指定筛选条件',
        required: false
      }
    ],
    examples: [
      {
        description: '列出当前目录内容',
        code: 'Get-ChildItem'
      },
      {
        description: '使用别名（类似于ls/dir）',
        code: 'ls'
      },
      {
        description: '递归列出所有内容',
        code: 'Get-ChildItem -Recurse'
      },
      {
        description: '列出特定类型的文件',
        code: 'Get-ChildItem -Filter *.txt'
      }
    ],
    tags: ['powershell', 'directory', 'file', 'list', 'ls', 'dir', '目录'],
    docUrl: 'https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem'
  },
  {
    id: 'ps-set-location',
    category: 'PowerShell',
    subcategory: '文件操作',
    title: '更改目录',
    command: 'Set-Location [path]',
    description: '设置当前工作位置',
    parameters: [
      {
        name: 'path',
        description: '指定新的工作位置',
        required: true
      }
    ],
    examples: [
      {
        description: '切换到特定目录',
        code: 'Set-Location C:\\Users\\Username\\Documents'
      },
      {
        description: '使用别名cd',
        code: 'cd C:\\Users\\Username\\Documents'
      },
      {
        description: '切换到上级目录',
        code: 'cd ..'
      }
    ],
    tags: ['powershell', 'directory', 'navigate', 'cd', '目录'],
    docUrl: 'https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-location'
  },
  {
    id: 'ps-copy-item',
    category: 'PowerShell',
    subcategory: '文件操作',
    title: '复制文件或目录',
    command: 'Copy-Item [source] [destination] [options]',
    description: '将项从一个位置复制到另一个位置',
    parameters: [
      {
        name: 'source',
        description: '要复制的项的路径',
        required: true
      },
      {
        name: 'destination',
        description: '项复制的位置',
        required: true
      },
      {
        name: '-Recurse',
        description: '递归复制',
        required: false
      }
    ],
    examples: [
      {
        description: '复制文件',
        code: 'Copy-Item C:\\file.txt D:\\Backup\\'
      },
      {
        description: '复制并重命名',
        code: 'Copy-Item C:\\file.txt D:\\Backup\\newname.txt'
      },
      {
        description: '递归复制目录',
        code: 'Copy-Item C:\\SourceFolder -Destination D:\\DestFolder -Recurse'
      }
    ],
    tags: ['powershell', 'file', 'copy', 'directory', '复制'],
    docUrl: 'https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/copy-item'
  },
  {
    id: 'ps-remove-item',
    category: 'PowerShell',
    subcategory: '文件操作',
    title: '删除文件或目录',
    command: 'Remove-Item [path] [options]',
    description: '删除文件、目录或注册表项',
    parameters: [
      {
        name: 'path',
        description: '要删除的项的路径',
        required: true
      },
      {
        name: '-Recurse',
        description: '递归删除',
        required: false
      },
      {
        name: '-Force',
        description: '强制删除',
        required: false
      }
    ],
    examples: [
      {
        description: '删除文件',
        code: 'Remove-Item file.txt'
      },
      {
        description: '使用别名del或rm',
        code: 'rm file.txt'
      },
      {
        description: '递归删除目录',
        code: 'Remove-Item folder -Recurse'
      },
      {
        description: '强制删除',
        code: 'Remove-Item file.txt -Force'
      }
    ],
    tags: ['powershell', 'file', 'delete', 'remove', 'directory', '删除'],
    docUrl: 'https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/remove-item'
  },
  {
    id: 'ps-new-item',
    category: 'PowerShell',
    subcategory: '文件操作',
    title: '创建文件或目录',
    command: 'New-Item [path] [options]',
    description: '创建新项目，如文件、目录',
    parameters: [
      {
        name: 'path',
        description: '要创建的项的路径',
        required: true
      },
      {
        name: '-ItemType',
        description: '要创建的项的类型',
        required: false
      },
      {
        name: '-Value',
        description: '新项的内容',
        required: false
      }
    ],
    examples: [
      {
        description: '创建目录',
        code: 'New-Item -Path "C:\\NewFolder" -ItemType Directory'
      },
      {
        description: '创建空文件',
        code: 'New-Item -Path "C:\\file.txt" -ItemType File'
      },
      {
        description: '创建带内容的文件',
        code: 'New-Item -Path "C:\\file.txt" -ItemType File -Value "文件内容"'
      }
    ],
    tags: ['powershell', 'file', 'create', 'directory', 'new', '创建'],
    docUrl: 'https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/new-item'
  }
]; 