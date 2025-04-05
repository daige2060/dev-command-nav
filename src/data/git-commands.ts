import { Command } from '../types';

export const gitCommands: Command[] = [
  {
    id: 'git-init',
    category: 'Git',
    subcategory: '基础',
    title: '初始化Git仓库',
    command: 'git init',
    description: '在当前目录中初始化一个新的Git仓库',
    parameters: [],
    examples: [
      {
        description: '初始化一个新的Git仓库',
        code: 'git init'
      },
      {
        description: '在指定目录下初始化Git仓库',
        code: 'git init [directory]'
      }
    ],
    tags: ['git', 'init', 'repository', '初始化'],
    docUrl: 'https://git-scm.com/docs/git-init'
  },
  {
    id: 'git-clone',
    category: 'Git',
    subcategory: '基础',
    title: '克隆仓库',
    command: 'git clone [repository_url]',
    description: '克隆一个远程仓库到本地',
    parameters: [
      {
        name: 'repository_url',
        description: '远程仓库URL',
        required: true
      },
      {
        name: '--depth',
        description: '创建浅克隆，只包含指定数量的提交历史',
        required: false
      }
    ],
    examples: [
      {
        description: '克隆远程仓库',
        code: 'git clone https://github.com/username/repository.git'
      },
      {
        description: '克隆特定分支',
        code: 'git clone -b branch_name https://github.com/username/repository.git'
      }
    ],
    tags: ['git', 'clone', 'repository', '克隆'],
    docUrl: 'https://git-scm.com/docs/git-clone'
  },
  {
    id: 'git-add',
    category: 'Git',
    subcategory: '基础',
    title: '添加文件',
    command: 'git add [file_pattern]',
    description: '将文件添加到暂存区',
    parameters: [
      {
        name: 'file_pattern',
        description: '文件或目录路径，也可以使用通配符',
        required: true
      }
    ],
    examples: [
      {
        description: '添加单个文件',
        code: 'git add filename.txt'
      },
      {
        description: '添加所有文件',
        code: 'git add .'
      }
    ],
    tags: ['git', 'add', 'stage', '暂存'],
    docUrl: 'https://git-scm.com/docs/git-add'
  },
  {
    id: 'git-commit',
    category: 'Git',
    subcategory: '基础',
    title: '提交更改',
    command: 'git commit -m "[message]"',
    description: '将暂存区中的更改提交到本地仓库',
    parameters: [
      {
        name: '-m',
        description: '提交消息',
        required: true
      },
      {
        name: '--amend',
        description: '修改最近的提交',
        required: false
      }
    ],
    examples: [
      {
        description: '提交更改',
        code: 'git commit -m "Add new feature"'
      },
      {
        description: '修改最近的提交',
        code: 'git commit --amend -m "Updated commit message"'
      }
    ],
    tags: ['git', 'commit', '提交'],
    docUrl: 'https://git-scm.com/docs/git-commit'
  },
  {
    id: 'git-push',
    category: 'Git',
    subcategory: '远程操作',
    title: '推送更改',
    command: 'git push [remote] [branch]',
    description: '将本地分支的更改推送到远程仓库',
    parameters: [
      {
        name: 'remote',
        description: '远程仓库名称',
        required: false
      },
      {
        name: 'branch',
        description: '分支名称',
        required: false
      }
    ],
    examples: [
      {
        description: '推送到默认远程仓库和分支',
        code: 'git push'
      },
      {
        description: '推送到指定远程仓库和分支',
        code: 'git push origin main'
      }
    ],
    tags: ['git', 'push', 'remote', '推送'],
    docUrl: 'https://git-scm.com/docs/git-push'
  },
  {
    id: 'git-pull',
    category: 'Git',
    subcategory: '远程操作',
    title: '拉取更改',
    command: 'git pull [remote] [branch]',
    description: '拉取远程分支的更改并合并到当前分支',
    parameters: [
      {
        name: 'remote',
        description: '远程仓库名称',
        required: false
      },
      {
        name: 'branch',
        description: '分支名称',
        required: false
      }
    ],
    examples: [
      {
        description: '从默认远程仓库拉取更改',
        code: 'git pull'
      },
      {
        description: '从指定远程仓库和分支拉取更改',
        code: 'git pull origin main'
      }
    ],
    tags: ['git', 'pull', 'remote', '拉取'],
    docUrl: 'https://git-scm.com/docs/git-pull'
  }
]; 