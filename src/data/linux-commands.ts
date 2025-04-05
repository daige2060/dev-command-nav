import { Command } from '../types';

export const linuxCommands: Command[] = [
  {
    id: 'linux-ls',
    category: 'Linux',
    subcategory: '文件操作',
    title: '列出目录内容',
    command: 'ls [options] [path]',
    description: '列出目录中的文件和子目录',
    parameters: [
      {
        name: '-l',
        description: '使用长格式列出',
        required: false
      },
      {
        name: '-a',
        description: '显示所有文件，包括隐藏文件',
        required: false
      },
      {
        name: '-h',
        description: '以人类可读格式显示文件大小',
        required: false
      }
    ],
    examples: [
      {
        description: '列出当前目录内容',
        code: 'ls'
      },
      {
        description: '长格式列出，显示权限、所有者等',
        code: 'ls -l'
      },
      {
        description: '显示所有文件，包括隐藏文件',
        code: 'ls -a'
      },
      {
        description: '组合使用选项',
        code: 'ls -lah'
      }
    ],
    tags: ['linux', 'directory', 'file', 'list', 'ls', '目录'],
    docUrl: 'https://man7.org/linux/man-pages/man1/ls.1.html'
  },
  {
    id: 'linux-cd',
    category: 'Linux',
    subcategory: '文件操作',
    title: '更改目录',
    command: 'cd [directory]',
    description: '更改当前工作目录',
    parameters: [
      {
        name: 'directory',
        description: '目标目录路径',
        required: false
      }
    ],
    examples: [
      {
        description: '切换到主目录',
        code: 'cd'
      },
      {
        description: '切换到特定目录',
        code: 'cd /usr/local/bin'
      },
      {
        description: '切换到上级目录',
        code: 'cd ..'
      },
      {
        description: '切换到上次访问的目录',
        code: 'cd -'
      }
    ],
    tags: ['linux', 'directory', 'navigate', 'cd', '目录'],
    docUrl: 'https://man7.org/linux/man-pages/man1/cd.1p.html'
  },
  {
    id: 'linux-cp',
    category: 'Linux',
    subcategory: '文件操作',
    title: '复制文件或目录',
    command: 'cp [options] [source] [destination]',
    description: '将文件或目录从源位置复制到目标位置',
    parameters: [
      {
        name: '-r',
        description: '递归复制目录',
        required: false
      },
      {
        name: '-i',
        description: '覆盖前提示确认',
        required: false
      },
      {
        name: '-v',
        description: '显示详细操作',
        required: false
      }
    ],
    examples: [
      {
        description: '复制文件',
        code: 'cp file.txt /backup/'
      },
      {
        description: '复制目录及其内容',
        code: 'cp -r directory/ /backup/'
      },
      {
        description: '复制并提示确认覆盖',
        code: 'cp -i file.txt /backup/'
      }
    ],
    tags: ['linux', 'file', 'copy', 'directory', 'cp', '复制'],
    docUrl: 'https://man7.org/linux/man-pages/man1/cp.1.html'
  },
  {
    id: 'linux-rm',
    category: 'Linux',
    subcategory: '文件操作',
    title: '删除文件或目录',
    command: 'rm [options] [file/directory]',
    description: '删除文件或目录',
    parameters: [
      {
        name: '-r',
        description: '递归删除目录及其内容',
        required: false
      },
      {
        name: '-f',
        description: '强制删除，不提示确认',
        required: false
      },
      {
        name: '-i',
        description: '删除前提示确认',
        required: false
      }
    ],
    examples: [
      {
        description: '删除文件',
        code: 'rm file.txt'
      },
      {
        description: '递归删除目录',
        code: 'rm -r directory/'
      },
      {
        description: '强制递归删除',
        code: 'rm -rf directory/'
      }
    ],
    tags: ['linux', 'file', 'delete', 'remove', 'directory', 'rm', '删除'],
    docUrl: 'https://man7.org/linux/man-pages/man1/rm.1.html'
  },
  {
    id: 'linux-mkdir',
    category: 'Linux',
    subcategory: '文件操作',
    title: '创建目录',
    command: 'mkdir [options] [directory]',
    description: '创建新目录',
    parameters: [
      {
        name: '-p',
        description: '创建路径中所有不存在的目录',
        required: false
      },
      {
        name: '-v',
        description: '显示详细信息',
        required: false
      }
    ],
    examples: [
      {
        description: '创建单个目录',
        code: 'mkdir directory'
      },
      {
        description: '创建多级目录',
        code: 'mkdir -p parent/child/grandchild'
      }
    ],
    tags: ['linux', 'directory', 'create', 'mkdir', '目录', '创建'],
    docUrl: 'https://man7.org/linux/man-pages/man1/mkdir.1.html'
  }
]; 