import { Command } from '../types';

export const npmCommands: Command[] = [
  {
    id: 'npm-init',
    category: 'NPM',
    subcategory: '项目初始化',
    title: '初始化项目',
    command: 'npm init [options]',
    description: '创建package.json文件，初始化NPM项目',
    parameters: [
      {
        name: '-y',
        description: '跳过问答环节，使用默认值',
        required: false
      }
    ],
    examples: [
      {
        description: '交互式初始化',
        code: 'npm init'
      },
      {
        description: '使用默认值快速初始化',
        code: 'npm init -y'
      }
    ],
    tags: ['npm', 'init', 'package.json', '初始化'],
    docUrl: 'https://docs.npmjs.com/cli/v8/commands/npm-init'
  },
  {
    id: 'npm-install',
    category: 'NPM',
    subcategory: '包管理',
    title: '安装依赖',
    command: 'npm install [package] [options]',
    description: '安装包及其依赖',
    parameters: [
      {
        name: 'package',
        description: '要安装的包名称',
        required: false
      },
      {
        name: '--save',
        description: '安装并添加到dependencies（NPM 5+默认行为）',
        required: false
      },
      {
        name: '--save-dev',
        description: '安装并添加到devDependencies',
        required: false
      },
      {
        name: '-g',
        description: '全局安装',
        required: false
      }
    ],
    examples: [
      {
        description: '安装项目所有依赖',
        code: 'npm install'
      },
      {
        description: '安装特定包',
        code: 'npm install react'
      },
      {
        description: '安装开发依赖',
        code: 'npm install --save-dev typescript'
      },
      {
        description: '全局安装',
        code: 'npm install -g create-react-app'
      }
    ],
    tags: ['npm', 'install', 'package', '安装', '依赖'],
    docUrl: 'https://docs.npmjs.com/cli/v8/commands/npm-install'
  },
  {
    id: 'npm-uninstall',
    category: 'NPM',
    subcategory: '包管理',
    title: '卸载依赖',
    command: 'npm uninstall [package] [options]',
    description: '卸载包',
    parameters: [
      {
        name: 'package',
        description: '要卸载的包名称',
        required: true
      },
      {
        name: '--save',
        description: '同时从dependencies移除',
        required: false
      },
      {
        name: '--save-dev',
        description: '同时从devDependencies移除',
        required: false
      },
      {
        name: '-g',
        description: '全局卸载',
        required: false
      }
    ],
    examples: [
      {
        description: '卸载包',
        code: 'npm uninstall lodash'
      },
      {
        description: '卸载开发依赖',
        code: 'npm uninstall --save-dev eslint'
      },
      {
        description: '全局卸载',
        code: 'npm uninstall -g create-react-app'
      }
    ],
    tags: ['npm', 'uninstall', 'remove', 'package', '卸载', '删除'],
    docUrl: 'https://docs.npmjs.com/cli/v8/commands/npm-uninstall'
  },
  {
    id: 'npm-run',
    category: 'NPM',
    subcategory: '脚本运行',
    title: '运行脚本',
    command: 'npm run [script]',
    description: '运行package.json中的scripts',
    parameters: [
      {
        name: 'script',
        description: '要运行的脚本名称',
        required: true
      }
    ],
    examples: [
      {
        description: '运行开发服务器',
        code: 'npm run dev'
      },
      {
        description: '构建项目',
        code: 'npm run build'
      },
      {
        description: '运行测试',
        code: 'npm run test'
      }
    ],
    tags: ['npm', 'run', 'script', '运行', '脚本'],
    docUrl: 'https://docs.npmjs.com/cli/v8/commands/npm-run-script'
  },
  {
    id: 'npm-update',
    category: 'NPM',
    subcategory: '包管理',
    title: '更新依赖',
    command: 'npm update [package] [options]',
    description: '更新包到最新版本',
    parameters: [
      {
        name: 'package',
        description: '要更新的包名称',
        required: false
      },
      {
        name: '-g',
        description: '更新全局安装的包',
        required: false
      }
    ],
    examples: [
      {
        description: '更新所有依赖',
        code: 'npm update'
      },
      {
        description: '更新特定包',
        code: 'npm update react react-dom'
      },
      {
        description: '更新全局包',
        code: 'npm update -g'
      }
    ],
    tags: ['npm', 'update', 'upgrade', 'package', '更新'],
    docUrl: 'https://docs.npmjs.com/cli/v8/commands/npm-update'
  }
]; 