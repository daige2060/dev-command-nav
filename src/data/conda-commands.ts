import { Command } from '../types';

export const condaCommands: Command[] = [
  {
    id: 'conda-create',
    category: 'Conda',
    subcategory: '环境管理',
    title: '创建环境',
    command: 'conda create -n [env_name] [package_names]',
    description: '创建一个新的Conda环境',
    parameters: [
      {
        name: '-n',
        description: '指定环境名称',
        required: true
      },
      {
        name: 'package_names',
        description: '要安装的包列表',
        required: false
      }
    ],
    examples: [
      {
        description: '创建一个空环境',
        code: 'conda create -n myenv'
      },
      {
        description: '创建并安装特定Python版本',
        code: 'conda create -n myenv python=3.9'
      },
      {
        description: '创建环境并安装多个包',
        code: 'conda create -n myenv python=3.9 numpy pandas'
      }
    ],
    tags: ['conda', 'environment', '环境', '创建'],
    docUrl: 'https://docs.conda.io/projects/conda/en/latest/commands/create.html'
  },
  {
    id: 'conda-activate',
    category: 'Conda',
    subcategory: '环境管理',
    title: '激活环境',
    command: 'conda activate [env_name]',
    description: '激活指定的Conda环境',
    parameters: [
      {
        name: 'env_name',
        description: '环境名称',
        required: true
      }
    ],
    examples: [
      {
        description: '激活环境',
        code: 'conda activate myenv'
      }
    ],
    tags: ['conda', 'environment', 'activate', '激活'],
    docUrl: 'https://docs.conda.io/projects/conda/en/latest/commands/activate.html'
  },
  {
    id: 'conda-deactivate',
    category: 'Conda',
    subcategory: '环境管理',
    title: '退出当前环境',
    command: 'conda deactivate',
    description: '退出当前激活的Conda环境',
    parameters: [],
    examples: [
      {
        description: '退出当前环境',
        code: 'conda deactivate'
      }
    ],
    tags: ['conda', 'environment', 'deactivate', '退出'],
    docUrl: 'https://docs.conda.io/projects/conda/en/latest/commands/deactivate.html'
  },
  {
    id: 'conda-install',
    category: 'Conda',
    subcategory: '包管理',
    title: '安装包',
    command: 'conda install [package_names]',
    description: '在当前环境中安装包',
    parameters: [
      {
        name: 'package_names',
        description: '要安装的包列表',
        required: true
      },
      {
        name: '-c',
        description: '指定通道',
        required: false
      }
    ],
    examples: [
      {
        description: '安装单个包',
        code: 'conda install numpy'
      },
      {
        description: '安装多个包',
        code: 'conda install numpy pandas matplotlib'
      },
      {
        description: '从特定通道安装',
        code: 'conda install -c conda-forge package_name'
      }
    ],
    tags: ['conda', 'package', 'install', '安装'],
    docUrl: 'https://docs.conda.io/projects/conda/en/latest/commands/install.html'
  },
  {
    id: 'conda-list',
    category: 'Conda',
    subcategory: '包管理',
    title: '列出已安装包',
    command: 'conda list',
    description: '列出当前环境中所有已安装的包',
    parameters: [],
    examples: [
      {
        description: '列出所有包',
        code: 'conda list'
      },
      {
        description: '列出特定包',
        code: 'conda list numpy'
      }
    ],
    tags: ['conda', 'package', 'list', '列表'],
    docUrl: 'https://docs.conda.io/projects/conda/en/latest/commands/list.html'
  }
]; 