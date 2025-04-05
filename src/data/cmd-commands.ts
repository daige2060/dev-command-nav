import { Command } from '../types';

export const cmdCommands: Command[] = [
  {
    id: 'cmd-dir',
    category: 'CMD',
    subcategory: '文件操作',
    title: '列出目录内容',
    command: 'dir [path] [options]',
    description: '显示指定目录中的文件和子目录列表',
    parameters: [
      {
        name: 'path',
        description: '要列出内容的目录路径',
        required: false
      },
      {
        name: '/a',
        description: '显示具有指定属性的文件',
        required: false
      },
      {
        name: '/b',
        description: '使用裸格式（无标题信息或摘要）',
        required: false
      }
    ],
    examples: [
      {
        description: '列出当前目录内容',
        code: 'dir'
      },
      {
        description: '列出特定目录内容',
        code: 'dir C:\\Windows'
      },
      {
        description: '仅显示目录名（不含文件）',
        code: 'dir /ad'
      }
    ],
    tags: ['cmd', 'directory', 'file', 'list', '目录'],
    docUrl: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/dir'
  },
  {
    id: 'cmd-cd',
    category: 'CMD',
    subcategory: '文件操作',
    title: '更改目录',
    command: 'cd [path]',
    description: '更改当前工作目录',
    parameters: [
      {
        name: 'path',
        description: '目标目录路径',
        required: false
      }
    ],
    examples: [
      {
        description: '切换到特定目录',
        code: 'cd C:\\Users\\Username\\Documents'
      },
      {
        description: '切换到上一级目录',
        code: 'cd ..'
      },
      {
        description: '切换到根目录',
        code: 'cd \\'
      }
    ],
    tags: ['cmd', 'directory', 'navigate', 'change directory', '目录'],
    docUrl: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd'
  },
  {
    id: 'cmd-copy',
    category: 'CMD',
    subcategory: '文件操作',
    title: '复制文件',
    command: 'copy [source] [destination]',
    description: '将一个或多个文件复制到另一个位置',
    parameters: [
      {
        name: 'source',
        description: '要复制的文件',
        required: true
      },
      {
        name: 'destination',
        description: '目标位置',
        required: true
      }
    ],
    examples: [
      {
        description: '复制单个文件',
        code: 'copy file.txt D:\\Backup\\'
      },
      {
        description: '复制并重命名',
        code: 'copy file.txt D:\\Backup\\newname.txt'
      },
      {
        description: '合并多个文件',
        code: 'copy file1.txt+file2.txt combined.txt'
      }
    ],
    tags: ['cmd', 'file', 'copy', '复制'],
    docUrl: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/copy'
  },
  {
    id: 'cmd-del',
    category: 'CMD',
    subcategory: '文件操作',
    title: '删除文件',
    command: 'del [filename]',
    description: '删除一个或多个文件',
    parameters: [
      {
        name: 'filename',
        description: '要删除的文件名或通配符',
        required: true
      },
      {
        name: '/p',
        description: '删除每个文件前提示确认',
        required: false
      },
      {
        name: '/f',
        description: '强制删除只读文件',
        required: false
      }
    ],
    examples: [
      {
        description: '删除单个文件',
        code: 'del file.txt'
      },
      {
        description: '删除目录中的所有文件',
        code: 'del folder\\*.*'
      },
      {
        description: '删除并提示确认',
        code: 'del /p file.txt'
      }
    ],
    tags: ['cmd', 'file', 'delete', 'remove', '删除'],
    docUrl: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/del'
  },
  {
    id: 'cmd-mkdir',
    category: 'CMD',
    subcategory: '文件操作',
    title: '创建目录',
    command: 'mkdir [path]',
    description: '创建目录或子目录',
    parameters: [
      {
        name: 'path',
        description: '要创建的目录的路径和名称',
        required: true
      }
    ],
    examples: [
      {
        description: '创建目录',
        code: 'mkdir NewFolder'
      },
      {
        description: '创建带路径的目录',
        code: 'mkdir C:\\Users\\Username\\NewFolder'
      },
      {
        description: '创建多层目录',
        code: 'mkdir folder1\\folder2\\folder3'
      }
    ],
    tags: ['cmd', 'directory', 'create', 'make directory', '目录', '创建'],
    docUrl: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mkdir'
  }
]; 