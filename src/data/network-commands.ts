import { Command } from '../types';

export const networkCommands: Command[] = [
  // curl 命令
  {
    id: 'curl-get',
    category: 'Network',
    subcategory: 'HTTP',
    title: 'HTTP GET请求',
    command: 'curl [options] [URL]',
    description: '使用curl发送HTTP GET请求',
    parameters: [
      {
        name: '-X',
        description: '指定HTTP请求方法',
        required: false
      },
      {
        name: '-H',
        description: '添加HTTP请求头',
        required: false
      },
      {
        name: '-o',
        description: '将输出写入文件',
        required: false
      }
    ],
    examples: [
      {
        description: '发送简单GET请求',
        code: 'curl https://api.example.com/users'
      },
      {
        description: '带自定义请求头的GET请求',
        code: 'curl -H "Accept: application/json" https://api.example.com/users'
      },
      {
        description: '将响应保存到文件',
        code: 'curl -o response.json https://api.example.com/users'
      }
    ],
    tags: ['network', 'http', 'curl', 'api', 'request'],
    docUrl: 'https://curl.se/docs/manpage.html'
  },
  {
    id: 'curl-post',
    category: 'Network',
    subcategory: 'HTTP',
    title: 'HTTP POST请求',
    command: 'curl -X POST -d "[data]" [URL]',
    description: '使用curl发送HTTP POST请求',
    parameters: [
      {
        name: '-X POST',
        description: '指定POST方法',
        required: true
      },
      {
        name: '-d',
        description: '指定POST数据',
        required: true
      },
      {
        name: '-H',
        description: '添加HTTP请求头',
        required: false
      }
    ],
    examples: [
      {
        description: '发送基本POST请求',
        code: 'curl -X POST -d "name=John&age=30" https://api.example.com/users'
      },
      {
        description: '发送JSON数据的POST请求',
        code: 'curl -X POST -H "Content-Type: application/json" -d \'{"name":"John","age":30}\' https://api.example.com/users'
      }
    ],
    tags: ['network', 'http', 'curl', 'api', 'post'],
    docUrl: 'https://curl.se/docs/manpage.html'
  },
  
  // wget 命令
  {
    id: 'wget-download',
    category: 'Network',
    subcategory: 'File Transfer',
    title: '下载文件',
    command: 'wget [options] [URL]',
    description: '从指定URL下载文件',
    parameters: [
      {
        name: '-O',
        description: '指定输出文件名',
        required: false
      },
      {
        name: '-P',
        description: '指定下载目录',
        required: false
      },
      {
        name: '-c',
        description: '继续下载部分下载的文件',
        required: false
      }
    ],
    examples: [
      {
        description: '下载文件',
        code: 'wget https://example.com/file.zip'
      },
      {
        description: '指定输出文件名',
        code: 'wget -O custom-name.zip https://example.com/file.zip'
      },
      {
        description: '继续之前中断的下载',
        code: 'wget -c https://example.com/large-file.iso'
      }
    ],
    tags: ['network', 'download', 'wget', 'file'],
    docUrl: 'https://www.gnu.org/software/wget/manual/wget.html'
  },
  
  // ssh 命令
  {
    id: 'ssh-connect',
    category: 'Network',
    subcategory: 'Remote Access',
    title: 'SSH连接',
    command: 'ssh [user]@[host] -p [port]',
    description: '使用SSH连接到远程服务器',
    parameters: [
      {
        name: 'user',
        description: '远程服务器的用户名',
        required: true
      },
      {
        name: 'host',
        description: '远程服务器的主机名或IP地址',
        required: true
      },
      {
        name: '-p',
        description: '指定SSH端口',
        required: false
      },
      {
        name: '-i',
        description: '指定私钥文件',
        required: false
      }
    ],
    examples: [
      {
        description: '基本SSH连接',
        code: 'ssh user@example.com'
      },
      {
        description: '指定端口的SSH连接',
        code: 'ssh user@example.com -p 2222'
      },
      {
        description: '使用私钥文件连接',
        code: 'ssh -i ~/.ssh/mykey.pem user@example.com'
      }
    ],
    tags: ['network', 'ssh', 'remote', 'connection', 'linux'],
    docUrl: 'https://man.openbsd.org/ssh.1'
  },
  {
    id: 'ssh-keygen',
    category: 'Network',
    subcategory: 'Remote Access',
    title: '生成SSH密钥',
    command: 'ssh-keygen -t [type] -b [bits] -C "[comment]"',
    description: '生成SSH密钥对',
    parameters: [
      {
        name: '-t',
        description: '指定密钥类型（rsa, ed25519等）',
        required: false
      },
      {
        name: '-b',
        description: '指定密钥位数',
        required: false
      },
      {
        name: '-C',
        description: '添加注释',
        required: false
      }
    ],
    examples: [
      {
        description: '生成RSA密钥',
        code: 'ssh-keygen -t rsa -b 4096 -C "your_email@example.com"'
      },
      {
        description: '生成ED25519密钥（更新更安全的算法）',
        code: 'ssh-keygen -t ed25519 -C "your_email@example.com"'
      }
    ],
    tags: ['network', 'ssh', 'security', 'key'],
    docUrl: 'https://man.openbsd.org/ssh-keygen.1'
  },
  
  // ping 命令
  {
    id: 'ping-host',
    category: 'Network',
    subcategory: 'Diagnostics',
    title: 'Ping主机',
    command: 'ping [options] [host]',
    description: '测试到主机的网络连接',
    parameters: [
      {
        name: '-c',
        description: '指定发送的ICMP回显请求数',
        required: false
      },
      {
        name: '-i',
        description: '指定发送间隔（秒）',
        required: false
      }
    ],
    examples: [
      {
        description: '无限ping',
        code: 'ping google.com'
      },
      {
        description: '发送特定数量的请求',
        code: 'ping -c 5 google.com'
      }
    ],
    tags: ['network', 'ping', 'diagnostics', 'icmp'],
    docUrl: 'https://man7.org/linux/man-pages/man8/ping.8.html'
  },
  
  // nmap 命令
  {
    id: 'nmap-scan',
    category: 'Network',
    subcategory: 'Security',
    title: '端口扫描',
    command: 'nmap [options] [target]',
    description: '使用nmap扫描网络和端口',
    parameters: [
      {
        name: '-p',
        description: '指定要扫描的端口',
        required: false
      },
      {
        name: '-sV',
        description: '版本检测',
        required: false
      },
      {
        name: '-A',
        description: '启用操作系统检测、版本检测、脚本扫描和traceroute',
        required: false
      }
    ],
    examples: [
      {
        description: '扫描主机上常用端口',
        code: 'nmap example.com'
      },
      {
        description: '扫描特定端口',
        code: 'nmap -p 22,80,443 example.com'
      },
      {
        description: '详细扫描（操作系统、服务等）',
        code: 'nmap -A example.com'
      }
    ],
    tags: ['network', 'security', 'scan', 'port', 'nmap'],
    docUrl: 'https://nmap.org/book/man.html',
    dangerLevel: 1
  }
]; 