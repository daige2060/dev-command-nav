import { Command } from '../types';

export const commands: Command[] = [
  // Git 命令
  {
    id: 'git-init',
    category: 'Git',
    subcategory: '仓库管理',
    title: '初始化仓库',
    command: 'git init',
    description: '初始化一个新的Git仓库',
    parameters: [],
    examples: [
      {
        description: '在当前目录初始化Git仓库',
        code: 'git init'
      }
    ],
    tags: ['git', 'init', 'repository']
  },
  {
    id: 'git-add',
    category: 'Git',
    subcategory: '文件操作',
    title: '添加文件到暂存区',
    command: 'git add [file]',
    description: '将工作区的修改添加到暂存区',
    parameters: [
      {
        name: 'file',
        description: '要添加的文件，可以使用 . 表示所有文件',
        required: true
      }
    ],
    examples: [
      {
        description: '添加所有修改的文件',
        code: 'git add .'
      },
      {
        description: '添加指定文件',
        code: 'git add README.md'
      }
    ],
    tags: ['git', 'add', 'stage']
  },
  {
    id: 'git-commit',
    category: 'Git',
    subcategory: '提交操作',
    title: '提交更改',
    command: 'git commit -m "[message]"',
    description: '将暂存区的修改提交到本地仓库',
    parameters: [
      {
        name: '-m',
        description: '提交信息',
        required: true
      },
      {
        name: '-a',
        description: '自动将所有已跟踪的文件暂存并提交',
        required: false
      }
    ],
    examples: [
      {
        description: '提交暂存的更改',
        code: 'git commit -m "feat: add new feature"'
      },
      {
        description: '自动暂存并提交所有更改',
        code: 'git commit -am "fix: bug fixes"'
      }
    ],
    tags: ['git', 'commit', 'version']
  },
  // Conda 命令
  {
    id: 'conda-create',
    category: 'Conda',
    subcategory: '环境管理',
    title: '创建新环境',
    command: 'conda create -n [env_name] python=[version]',
    description: '创建一个新的Conda环境',
    parameters: [
      {
        name: '-n',
        description: '环境名称',
        required: true
      },
      {
        name: 'python',
        description: 'Python版本',
        required: false
      }
    ],
    examples: [
      {
        description: '创建Python 3.8环境',
        code: 'conda create -n myenv python=3.8'
      }
    ],
    tags: ['conda', 'environment', 'python']
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
        description: '要激活的环境名称',
        required: true
      }
    ],
    examples: [
      {
        description: '激活名为myenv的环境',
        code: 'conda activate myenv'
      }
    ],
    tags: ['conda', 'activate', 'environment']
  },
  {
    id: 'conda-install',
    category: 'Conda',
    subcategory: '包管理',
    title: '安装包',
    command: 'conda install [package_name]',
    description: '在当前环境中安装包',
    parameters: [
      {
        name: 'package_name',
        description: '要安装的包名称',
        required: true
      },
      {
        name: '-c',
        description: '指定channel',
        required: false
      }
    ],
    examples: [
      {
        description: '安装numpy包',
        code: 'conda install numpy'
      },
      {
        description: '从conda-forge安装包',
        code: 'conda install -c conda-forge pandas'
      }
    ],
    tags: ['conda', 'install', 'package']
  },
  {
    id: 'git-branch',
    category: 'Git',
    subcategory: '分支管理',
    title: '创建并切换分支',
    command: 'git checkout -b <branch-name>',
    description: '创建一个新的分支并立即切换到该分支',
    parameters: [
      {
        name: '-b',
        description: '创建新分支标志',
        required: true
      },
      {
        name: 'branch-name',
        description: '新分支的名称',
        required: true
      }
    ],
    examples: [
      {
        description: '创建并切换到开发分支',
        code: 'git checkout -b feature/user-auth'
      }
    ],
    tags: ['git', 'branch', 'checkout']
  },
  {
    id: 'docker-ps',
    category: 'Docker',
    title: '查看运行中的容器',
    command: 'docker ps',
    description: '列出所有正在运行的容器',
    parameters: [
      {
        name: '-a',
        description: '显示所有容器（包括未运行的）',
        required: false
      }
    ],
    examples: [
      {
        description: '查看所有容器（包括停止的）',
        code: 'docker ps -a'
      }
    ],
    tags: ['docker', 'container', 'process']
  },
  {
    id: 'git-status',
    category: 'Git',
    subcategory: '状态查看',
    title: '查看仓库状态',
    command: 'git status',
    description: '查看工作区和暂存区的状态',
    parameters: [
      {
        name: '-s',
        description: '以简短格式显示状态',
        required: false
      }
    ],
    examples: [
      {
        description: '查看详细状态',
        code: 'git status'
      },
      {
        description: '查看简短状态',
        code: 'git status -s'
      }
    ],
    tags: ['git', 'status', 'state']
  },
  {
    id: 'git-pull',
    category: 'Git',
    subcategory: '远程操作',
    title: '拉取远程更新',
    command: 'git pull [remote] [branch]',
    description: '从远程仓库获取最新代码并合并',
    parameters: [
      {
        name: 'remote',
        description: '远程仓库名称，默认为origin',
        required: false
      },
      {
        name: 'branch',
        description: '远程分支名称',
        required: false
      }
    ],
    examples: [
      {
        description: '拉取当前分支的远程更新',
        code: 'git pull'
      },
      {
        description: '拉取指定分支的更新',
        code: 'git pull origin master'
      }
    ],
    tags: ['git', 'pull', 'remote', 'fetch']
  },
  {
    id: 'git-push',
    category: 'Git',
    subcategory: '远程操作',
    title: '推送到远程',
    command: 'git push [remote] [branch]',
    description: '将本地更改推送到远程仓库',
    parameters: [
      {
        name: 'remote',
        description: '远程仓库名称，默认为origin',
        required: false
      },
      {
        name: 'branch',
        description: '分支名称',
        required: false
      },
      {
        name: '-u',
        description: '设置上游分支',
        required: false
      }
    ],
    examples: [
      {
        description: '推送到当前分支的远程',
        code: 'git push'
      },
      {
        description: '首次推送并设置上游分支',
        code: 'git push -u origin master'
      }
    ],
    tags: ['git', 'push', 'remote']
  },
  {
    id: 'git-stash',
    category: 'Git',
    subcategory: '暂存操作',
    title: '暂存工作区',
    command: 'git stash',
    description: '临时保存工作区的修改',
    parameters: [
      {
        name: 'save',
        description: '添加备注信息',
        required: false
      },
      {
        name: 'pop',
        description: '恢复最近的stash并删除',
        required: false
      },
      {
        name: 'list',
        description: '查看所有stash',
        required: false
      }
    ],
    examples: [
      {
        description: '保存当前工作区',
        code: 'git stash save "work in progress"'
      },
      {
        description: '恢复最近的stash',
        code: 'git stash pop'
      }
    ],
    tags: ['git', 'stash', 'save']
  },
  {
    id: 'conda-list',
    category: 'Conda',
    subcategory: '环境管理',
    title: '列出环境',
    command: 'conda env list',
    description: '列出所有Conda环境',
    parameters: [],
    examples: [
      {
        description: '查看所有环境',
        code: 'conda env list'
      }
    ],
    tags: ['conda', 'environment', 'list']
  },
  {
    id: 'conda-remove',
    category: 'Conda',
    subcategory: '包管理',
    title: '删除包',
    command: 'conda remove [package_name]',
    description: '从当前环境中删除包',
    parameters: [
      {
        name: 'package_name',
        description: '要删除的包名称',
        required: true
      },
      {
        name: '--name',
        description: '指定环境名称',
        required: false
      }
    ],
    examples: [
      {
        description: '删除当前环境中的包',
        code: 'conda remove numpy'
      },
      {
        description: '从指定环境中删除包',
        code: 'conda remove --name myenv numpy'
      }
    ],
    tags: ['conda', 'remove', 'uninstall']
  },
  {
    id: 'conda-update',
    category: 'Conda',
    subcategory: '包管理',
    title: '更新包',
    command: 'conda update [package_name]',
    description: '更新指定的包',
    parameters: [
      {
        name: 'package_name',
        description: '要更新的包名称',
        required: true
      },
      {
        name: '--all',
        description: '更新所有包',
        required: false
      }
    ],
    examples: [
      {
        description: '更新特定包',
        code: 'conda update numpy'
      },
      {
        description: '更新所有包',
        code: 'conda update --all'
      }
    ],
    tags: ['conda', 'update', 'upgrade']
  },
  {
    id: 'git-log',
    category: 'Git',
    subcategory: '历史查看',
    title: '查看提交历史',
    command: 'git log',
    description: '查看提交历史记录',
    parameters: [
      {
        name: '--oneline',
        description: '以简短格式显示',
        required: false
      },
      {
        name: '-p',
        description: '显示每次提交的差异',
        required: false
      },
      {
        name: '--graph',
        description: '以图形方式显示分支',
        required: false
      }
    ],
    examples: [
      {
        description: '查看简短历史',
        code: 'git log --oneline'
      },
      {
        description: '查看分支图形',
        code: 'git log --oneline --graph'
      }
    ],
    tags: ['git', 'log', 'history']
  },
  {
    id: 'git-reset',
    category: 'Git',
    subcategory: '版本回退',
    title: '版本回退',
    command: 'git reset [--soft|--mixed|--hard] [commit]',
    description: '将当前分支回退到指定版本',
    parameters: [
      {
        name: '--soft',
        description: '保留工作区和暂存区的修改',
        required: false
      },
      {
        name: '--mixed',
        description: '保留工作区的修改',
        required: false
      },
      {
        name: '--hard',
        description: '清除所有修改',
        required: false
      }
    ],
    examples: [
      {
        description: '软回退一个版本',
        code: 'git reset --soft HEAD^'
      },
      {
        description: '硬回退到指定提交',
        code: 'git reset --hard abc123'
      }
    ],
    tags: ['git', 'reset', 'rollback'],
    dangerLevel: 2
  },
  {
    id: 'docker-run',
    category: 'Docker',
    title: '运行容器',
    command: 'docker run [options] IMAGE [COMMAND] [ARG...]',
    description: '创建并启动一个新的容器',
    parameters: [
      {
        name: '-d',
        description: '在后台运行容器',
        required: false
      },
      {
        name: '-p',
        description: '端口映射 <主机端口>:<容器端口>',
        required: false
      }
    ],
    examples: [
      {
        description: '后台运行Nginx并映射端口',
        code: 'docker run -d -p 8080:80 nginx'
      }
    ],
    tags: ['docker', 'container', 'run']
  },
  // Windows CMD 命令
  {
    id: 'cmd-dir',
    category: 'CMD',
    subcategory: '文件操作',
    title: '列出目录内容',
    command: 'dir [路径] [/选项]',
    description: '显示指定目录中的文件和子目录列表',
    parameters: [
      {
        name: '/A',
        description: '显示具有指定属性的文件',
        required: false
      },
      {
        name: '/B',
        description: '使用纯文本格式（无标题信息或摘要）',
        required: false
      },
      {
        name: '/S',
        description: '显示指定目录及所有子目录中的文件',
        required: false
      }
    ],
    examples: [
      {
        description: '显示当前目录的内容',
        code: 'dir'
      },
      {
        description: '显示包括隐藏文件的所有文件',
        code: 'dir /A'
      },
      {
        description: '递归显示所有子目录的内容',
        code: 'dir /S'
      }
    ],
    tags: ['cmd', 'windows', 'directory', 'list', 'files']
  },
  {
    id: 'cmd-cd',
    category: 'CMD',
    subcategory: '导航',
    title: '更改目录',
    command: 'cd [路径]',
    description: '显示当前目录名或将其更改为指定目录',
    parameters: [
      {
        name: '路径',
        description: '指定要切换到的目录路径',
        required: false
      }
    ],
    examples: [
      {
        description: '切换到C盘根目录',
        code: 'cd C:\\'
      },
      {
        description: '切换到上级目录',
        code: 'cd ..'
      },
      {
        description: '显示当前目录',
        code: 'cd'
      }
    ],
    tags: ['cmd', 'windows', 'change', 'directory', 'navigation']
  },
  {
    id: 'cmd-mkdir',
    category: 'CMD',
    subcategory: '文件操作',
    title: '创建目录',
    command: 'mkdir [目录名] 或 md [目录名]',
    description: '创建一个新目录',
    parameters: [
      {
        name: '目录名',
        description: '要创建的目录名称',
        required: true
      }
    ],
    examples: [
      {
        description: '创建一个名为"test"的目录',
        code: 'mkdir test'
      },
      {
        description: '创建多级目录',
        code: 'mkdir "C:\\Users\\Username\\Documents\\Projects\\NewProject"'
      }
    ],
    tags: ['cmd', 'windows', 'make', 'directory', 'folder', 'create']
  },
  {
    id: 'cmd-copy',
    category: 'CMD',
    subcategory: '文件操作',
    title: '复制文件',
    command: 'copy [源] [目标]',
    description: '将一个或多个文件复制到另一个位置',
    parameters: [
      {
        name: '源',
        description: '指定要复制的文件',
        required: true
      },
      {
        name: '目标',
        description: '指定新文件的目录和/或文件名',
        required: true
      }
    ],
    examples: [
      {
        description: '复制单个文件',
        code: 'copy C:\\test.txt D:\\backup\\'
      },
      {
        description: '复制并重命名',
        code: 'copy test.txt test_backup.txt'
      },
      {
        description: '复制多个文件',
        code: 'copy *.txt D:\\backup\\'
      }
    ],
    tags: ['cmd', 'windows', 'copy', 'file']
  },
  {
    id: 'cmd-del',
    category: 'CMD',
    subcategory: '文件操作',
    title: '删除文件',
    command: 'del [文件名]',
    description: '删除一个或多个文件',
    parameters: [
      {
        name: '文件名',
        description: '指定要删除的文件',
        required: true
      },
      {
        name: '/F',
        description: '强制删除只读文件',
        required: false
      },
      {
        name: '/Q',
        description: '安静模式，不要询问是否确认',
        required: false
      }
    ],
    examples: [
      {
        description: '删除单个文件',
        code: 'del test.txt'
      },
      {
        description: '删除所有txt文件',
        code: 'del *.txt'
      },
      {
        description: '强制删除且不询问',
        code: 'del /F /Q important.doc'
      }
    ],
    tags: ['cmd', 'windows', 'delete', 'remove', 'file'],
    dangerLevel: 1
  },
  {
    id: 'cmd-rmdir',
    category: 'CMD',
    subcategory: '文件操作',
    title: '删除目录',
    command: 'rmdir [目录名] 或 rd [目录名]',
    description: '删除一个目录',
    parameters: [
      {
        name: '目录名',
        description: '要删除的目录',
        required: true
      },
      {
        name: '/S',
        description: '删除目录及其所有子目录和文件',
        required: false
      },
      {
        name: '/Q',
        description: '安静模式，删除时不询问',
        required: false
      }
    ],
    examples: [
      {
        description: '删除空目录',
        code: 'rmdir empty_folder'
      },
      {
        description: '递归删除目录及其内容',
        code: 'rmdir /S /Q project_folder'
      }
    ],
    tags: ['cmd', 'windows', 'remove', 'directory', 'folder', 'delete'],
    dangerLevel: 2
  },
  {
    id: 'cmd-ipconfig',
    category: 'CMD',
    subcategory: '网络',
    title: '查看网络配置',
    command: 'ipconfig [/all]',
    description: '显示所有当前的TCP/IP网络配置值',
    parameters: [
      {
        name: '/all',
        description: '显示完整配置信息',
        required: false
      },
      {
        name: '/release',
        description: '释放指定适配器的IPv4地址',
        required: false
      },
      {
        name: '/renew',
        description: '更新指定适配器的IPv4地址',
        required: false
      }
    ],
    examples: [
      {
        description: '显示基本网络配置',
        code: 'ipconfig'
      },
      {
        description: '显示详细网络配置',
        code: 'ipconfig /all'
      },
      {
        description: '更新IP地址',
        code: 'ipconfig /renew'
      }
    ],
    tags: ['cmd', 'windows', 'network', 'ip', 'config']
  },
  {
    id: 'cmd-ping',
    category: 'CMD',
    subcategory: '网络',
    title: '测试网络连接',
    command: 'ping [选项] [目标]',
    description: '测试与另一台计算机的连接',
    parameters: [
      {
        name: '-t',
        description: '持续不断地测试，直到手动停止',
        required: false
      },
      {
        name: '-n count',
        description: '要发送的回显请求数',
        required: false
      }
    ],
    examples: [
      {
        description: '测试谷歌DNS连接',
        code: 'ping 8.8.8.8'
      },
      {
        description: '测试网站连接',
        code: 'ping www.example.com'
      },
      {
        description: '发送5次请求',
        code: 'ping -n 5 192.168.1.1'
      }
    ],
    tags: ['cmd', 'windows', 'network', 'ping', 'test']
  },
  {
    id: 'cmd-netstat',
    category: 'CMD',
    subcategory: '网络',
    title: '显示网络状态',
    command: 'netstat [选项]',
    description: '显示协议统计信息和当前的TCP/IP网络连接',
    parameters: [
      {
        name: '-a',
        description: '显示所有连接和侦听端口',
        required: false
      },
      {
        name: '-n',
        description: '以数字形式显示地址和端口',
        required: false
      },
      {
        name: '-o',
        description: '显示与每个连接相关的进程ID',
        required: false
      }
    ],
    examples: [
      {
        description: '显示所有网络连接',
        code: 'netstat -a'
      },
      {
        description: '显示带进程ID的连接',
        code: 'netstat -ano'
      }
    ],
    tags: ['cmd', 'windows', 'network', 'stats', 'connection']
  },
  {
    id: 'cmd-tasklist',
    category: 'CMD',
    subcategory: '系统管理',
    title: '显示进程列表',
    command: 'tasklist [选项]',
    description: '显示当前在本地或远程计算机上运行的进程列表',
    parameters: [
      {
        name: '/FI',
        description: '应用筛选器以选择一组任务',
        required: false
      },
      {
        name: '/V',
        description: '显示详细任务信息',
        required: false
      }
    ],
    examples: [
      {
        description: '显示所有运行的进程',
        code: 'tasklist'
      },
      {
        description: '按名称过滤进程',
        code: 'tasklist /FI "IMAGENAME eq chrome.exe"'
      }
    ],
    tags: ['cmd', 'windows', 'process', 'task', 'list']
  },
  {
    id: 'cmd-taskkill',
    category: 'CMD',
    subcategory: '系统管理',
    title: '终止进程',
    command: 'taskkill [选项] [进程标识]',
    description: '终止一个或多个任务或进程',
    parameters: [
      {
        name: '/PID',
        description: '指定要终止的进程的PID',
        required: false
      },
      {
        name: '/IM',
        description: '指定要终止的进程的映像名称',
        required: false
      },
      {
        name: '/F',
        description: '强制终止进程',
        required: false
      }
    ],
    examples: [
      {
        description: '按名称终止进程',
        code: 'taskkill /IM notepad.exe'
      },
      {
        description: '强制终止进程ID为1234的进程',
        code: 'taskkill /F /PID 1234'
      }
    ],
    tags: ['cmd', 'windows', 'kill', 'process', 'terminate'],
    dangerLevel: 1
  },
  {
    id: 'cmd-systeminfo',
    category: 'CMD',
    subcategory: '系统管理',
    title: '显示系统信息',
    command: 'systeminfo',
    description: '显示本地或远程计算机的详细配置信息',
    parameters: [],
    examples: [
      {
        description: '查看本机系统信息',
        code: 'systeminfo'
      }
    ],
    tags: ['cmd', 'windows', 'system', 'info', 'hardware']
  },
  // PowerShell 命令
  {
    id: 'ps-get-command',
    category: 'PowerShell',
    subcategory: '基础命令',
    title: '查看可用命令',
    command: 'Get-Command [cmdlet名称]',
    description: '获取所有命令或特定命令的信息',
    parameters: [
      {
        name: '-Name',
        description: '指定要查找的命令名称，支持通配符',
        required: false
      },
      {
        name: '-Module',
        description: '获取指定模块的命令',
        required: false
      }
    ],
    examples: [
      {
        description: '获取所有命令',
        code: 'Get-Command'
      },
      {
        description: '获取包含"Process"的命令',
        code: 'Get-Command -Name *Process*'
      }
    ],
    tags: ['powershell', 'commands', 'help']
  },
  {
    id: 'ps-get-help',
    category: 'PowerShell',
    subcategory: '帮助',
    title: '获取命令帮助',
    command: 'Get-Help [cmdlet名称]',
    description: '显示PowerShell命令的帮助信息',
    parameters: [
      {
        name: '-Examples',
        description: '显示命令的示例',
        required: false
      },
      {
        name: '-Full',
        description: '显示完整帮助信息',
        required: false
      },
      {
        name: '-Online',
        description: '在浏览器中打开在线帮助',
        required: false
      }
    ],
    examples: [
      {
        description: '查看Get-Process命令的帮助',
        code: 'Get-Help Get-Process'
      },
      {
        description: '查看Get-Process命令的示例',
        code: 'Get-Help Get-Process -Examples'
      }
    ],
    tags: ['powershell', 'help', 'documentation']
  },
  {
    id: 'ps-get-process',
    category: 'PowerShell',
    subcategory: '进程管理',
    title: '查看进程',
    command: 'Get-Process [进程名]',
    description: '获取在本地计算机上运行的进程',
    parameters: [
      {
        name: '-Name',
        description: '指定要获取的进程名称',
        required: false
      },
      {
        name: '-Id',
        description: '指定要获取的进程ID',
        required: false
      }
    ],
    examples: [
      {
        description: '获取所有正在运行的进程',
        code: 'Get-Process'
      },
      {
        description: '获取所有chrome进程',
        code: 'Get-Process -Name chrome'
      }
    ],
    tags: ['powershell', 'process', 'system']
  },
  {
    id: 'ps-stop-process',
    category: 'PowerShell',
    subcategory: '进程管理',
    title: '停止进程',
    command: 'Stop-Process [选项]',
    description: '停止一个或多个正在运行的进程',
    parameters: [
      {
        name: '-Name',
        description: '指定要停止的进程名称',
        required: false
      },
      {
        name: '-Id',
        description: '指定要停止的进程ID',
        required: false
      },
      {
        name: '-Force',
        description: '强制停止进程',
        required: false
      }
    ],
    examples: [
      {
        description: '停止名为notepad的进程',
        code: 'Stop-Process -Name notepad'
      },
      {
        description: '强制停止进程ID为1234的进程',
        code: 'Stop-Process -Id 1234 -Force'
      }
    ],
    tags: ['powershell', 'process', 'kill', 'stop'],
    dangerLevel: 1
  },
  {
    id: 'ps-get-content',
    category: 'PowerShell',
    subcategory: '文件操作',
    title: '读取文件内容',
    command: 'Get-Content [文件路径]',
    description: '获取指定位置的文件内容',
    parameters: [
      {
        name: '-Path',
        description: '指定文件的路径',
        required: true
      },
      {
        name: '-TotalCount',
        description: '仅获取指定数量的行',
        required: false
      }
    ],
    examples: [
      {
        description: '读取文件全部内容',
        code: 'Get-Content -Path C:\\logs\\app.log'
      },
      {
        description: '读取文件前10行',
        code: 'Get-Content -Path C:\\logs\\app.log -TotalCount 10'
      }
    ],
    tags: ['powershell', 'file', 'read', 'content']
  },
  
  // Linux Shell 命令
  {
    id: 'linux-ls',
    category: 'Linux',
    subcategory: '文件操作',
    title: '列出目录内容',
    command: 'ls [选项] [目录]',
    description: '列出指定目录中的文件和子目录',
    parameters: [
      {
        name: '-l',
        description: '使用长列表格式',
        required: false
      },
      {
        name: '-a',
        description: '显示所有文件，包括隐藏文件',
        required: false
      },
      {
        name: '-h',
        description: '人性化显示文件大小',
        required: false
      }
    ],
    examples: [
      {
        description: '列出当前目录内容',
        code: 'ls'
      },
      {
        description: '显示详细信息和隐藏文件',
        code: 'ls -la'
      },
      {
        description: '显示文件大小人性化格式',
        code: 'ls -lh'
      }
    ],
    tags: ['linux', 'shell', 'directory', 'list', 'files']
  },
  {
    id: 'linux-cd',
    category: 'Linux',
    subcategory: '导航',
    title: '更改目录',
    command: 'cd [目录]',
    description: '更改当前工作目录',
    parameters: [
      {
        name: '目录',
        description: '要切换到的目录路径',
        required: false
      }
    ],
    examples: [
      {
        description: '切换到用户主目录',
        code: 'cd ~'
      },
      {
        description: '切换到上级目录',
        code: 'cd ..'
      },
      {
        description: '切换到根目录',
        code: 'cd /'
      }
    ],
    tags: ['linux', 'shell', 'directory', 'navigation', 'change']
  },
  {
    id: 'linux-grep',
    category: 'Linux',
    subcategory: '文本处理',
    title: '搜索文本',
    command: 'grep [选项] 模式 [文件...]',
    description: '在文件中搜索指定的模式',
    parameters: [
      {
        name: '-i',
        description: '忽略大小写',
        required: false
      },
      {
        name: '-r',
        description: '递归搜索目录',
        required: false
      },
      {
        name: '-n',
        description: '显示匹配行的行号',
        required: false
      }
    ],
    examples: [
      {
        description: '在文件中搜索字符串',
        code: 'grep "error" logfile.txt'
      },
      {
        description: '递归搜索目录中所有文件',
        code: 'grep -r "TODO" ~/projects/'
      },
      {
        description: '忽略大小写搜索',
        code: 'grep -i "warning" *.log'
      }
    ],
    tags: ['linux', 'shell', 'search', 'text', 'filter']
  },
  {
    id: 'linux-find',
    category: 'Linux',
    subcategory: '文件查找',
    title: '查找文件',
    command: 'find [路径] [表达式]',
    description: '在目录层次结构中搜索文件',
    parameters: [
      {
        name: '-name',
        description: '按名称查找文件',
        required: false
      },
      {
        name: '-type',
        description: '按类型查找(f:文件,d:目录)',
        required: false
      },
      {
        name: '-mtime',
        description: '按修改时间查找',
        required: false
      }
    ],
    examples: [
      {
        description: '查找特定名称的文件',
        code: 'find /home -name "*.txt"'
      },
      {
        description: '查找过去7天修改的文件',
        code: 'find /var/log -type f -mtime -7'
      },
      {
        description: '查找所有目录',
        code: 'find . -type d'
      }
    ],
    tags: ['linux', 'shell', 'find', 'search', 'file']
  },
  {
    id: 'linux-chmod',
    category: 'Linux',
    subcategory: '权限管理',
    title: '更改文件权限',
    command: 'chmod [选项] 模式 文件',
    description: '更改文件的访问权限',
    parameters: [
      {
        name: '-R',
        description: '递归更改文件和目录',
        required: false
      },
      {
        name: '模式',
        description: '权限模式，如755, u+x等',
        required: true
      }
    ],
    examples: [
      {
        description: '添加执行权限',
        code: 'chmod +x script.sh'
      },
      {
        description: '设置精确权限',
        code: 'chmod 755 myfile'
      },
      {
        description: '递归更改目录权限',
        code: 'chmod -R 644 myfolder/'
      }
    ],
    tags: ['linux', 'shell', 'permission', 'security', 'chmod']
  },
  
  // NPM 命令
  {
    id: 'npm-init',
    category: 'NPM',
    subcategory: '项目管理',
    title: '初始化项目',
    command: 'npm init [选项]',
    description: '创建一个package.json文件',
    parameters: [
      {
        name: '-y',
        description: '使用默认值创建，跳过提问',
        required: false
      }
    ],
    examples: [
      {
        description: '交互式创建package.json',
        code: 'npm init'
      },
      {
        description: '使用默认值创建',
        code: 'npm init -y'
      }
    ],
    tags: ['npm', 'javascript', 'node', 'init', 'project']
  },
  {
    id: 'npm-install',
    category: 'NPM',
    subcategory: '包管理',
    title: '安装包',
    command: 'npm install [包名]',
    description: '安装一个包及其依赖',
    parameters: [
      {
        name: '包名',
        description: '要安装的包名称',
        required: false
      },
      {
        name: '--save',
        description: '将包添加到dependencies',
        required: false
      },
      {
        name: '--save-dev',
        description: '将包添加到devDependencies',
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
        code: 'npm install express'
      },
      {
        description: '安装开发依赖',
        code: 'npm install --save-dev jest'
      },
      {
        description: '全局安装包',
        code: 'npm install -g nodemon'
      }
    ],
    tags: ['npm', 'javascript', 'node', 'install', 'package']
  },
  {
    id: 'npm-uninstall',
    category: 'NPM',
    subcategory: '包管理',
    title: '卸载包',
    command: 'npm uninstall [包名]',
    description: '删除已安装的包',
    parameters: [
      {
        name: '包名',
        description: '要卸载的包名称',
        required: true
      },
      {
        name: '--save',
        description: '同时从dependencies中移除',
        required: false
      },
      {
        name: '-g',
        description: '卸载全局包',
        required: false
      }
    ],
    examples: [
      {
        description: '卸载本地包',
        code: 'npm uninstall express'
      },
      {
        description: '卸载全局包',
        code: 'npm uninstall -g create-react-app'
      }
    ],
    tags: ['npm', 'javascript', 'node', 'uninstall', 'remove', 'package']
  },
  {
    id: 'npm-run',
    category: 'NPM',
    subcategory: '脚本运行',
    title: '运行脚本',
    command: 'npm run [脚本名]',
    description: '执行package.json中定义的脚本',
    parameters: [
      {
        name: '脚本名',
        description: 'package.json中scripts对象中定义的脚本名',
        required: true
      }
    ],
    examples: [
      {
        description: '运行start脚本',
        code: 'npm run start'
      },
      {
        description: '运行测试脚本',
        code: 'npm run test'
      },
      {
        description: '运行构建脚本',
        code: 'npm run build'
      }
    ],
    tags: ['npm', 'javascript', 'node', 'script', 'run']
  },
  {
    id: 'npm-update',
    category: 'NPM',
    subcategory: '包管理',
    title: '更新包',
    command: 'npm update [包名]',
    description: '更新已安装的包',
    parameters: [
      {
        name: '包名',
        description: '要更新的包名称',
        required: false
      },
      {
        name: '-g',
        description: '更新全局包',
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
        code: 'npm update express'
      },
      {
        description: '更新全局包',
        code: 'npm update -g npm'
      }
    ],
    tags: ['npm', 'javascript', 'node', 'update', 'package']
  }
]; 