import { Command } from '../types';

export const databaseCommands: Command[] = [
  // MySQL 命令
  {
    id: 'mysql-login',
    category: 'Database',
    subcategory: 'MySQL',
    title: '连接到MySQL服务器',
    command: 'mysql -u [username] -p[password] -h [host] -P [port] [database]',
    description: '连接到MySQL数据库服务器',
    parameters: [
      {
        name: '-u',
        description: '用户名',
        required: true
      },
      {
        name: '-p',
        description: '密码（不推荐直接在命令行中写入密码）',
        required: false
      },
      {
        name: '-h',
        description: '主机名或IP地址',
        required: false
      },
      {
        name: '-P',
        description: '端口号',
        required: false
      }
    ],
    examples: [
      {
        description: '连接到本地MySQL服务器',
        code: 'mysql -u root -p'
      },
      {
        description: '连接到特定数据库',
        code: 'mysql -u root -p mydatabase'
      }
    ],
    tags: ['database', 'mysql', 'connection', 'login'],
    docUrl: 'https://dev.mysql.com/doc/refman/8.0/en/connecting.html'
  },
  {
    id: 'mysql-show-databases',
    category: 'Database',
    subcategory: 'MySQL',
    title: '显示所有数据库',
    command: 'SHOW DATABASES;',
    description: '列出MySQL服务器上的所有数据库',
    parameters: [],
    examples: [
      {
        description: '列出所有数据库',
        code: 'SHOW DATABASES;'
      }
    ],
    tags: ['database', 'mysql', 'list', 'show'],
    docUrl: 'https://dev.mysql.com/doc/refman/8.0/en/show-databases.html'
  },
  {
    id: 'mysql-create-database',
    category: 'Database',
    subcategory: 'MySQL',
    title: '创建数据库',
    command: 'CREATE DATABASE [database_name];',
    description: '创建一个新的MySQL数据库',
    parameters: [
      {
        name: 'database_name',
        description: '新数据库的名称',
        required: true
      }
    ],
    examples: [
      {
        description: '创建名为"myproject"的数据库',
        code: 'CREATE DATABASE myproject;'
      },
      {
        description: '创建使用UTF-8编码的数据库',
        code: 'CREATE DATABASE myproject CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;'
      }
    ],
    tags: ['database', 'mysql', 'create', 'setup'],
    docUrl: 'https://dev.mysql.com/doc/refman/8.0/en/create-database.html'
  },
  
  // PostgreSQL 命令
  {
    id: 'psql-login',
    category: 'Database',
    subcategory: 'PostgreSQL',
    title: '连接到PostgreSQL',
    command: 'psql -U [username] -d [database] -h [host] -p [port]',
    description: '连接到PostgreSQL数据库服务器',
    parameters: [
      {
        name: '-U',
        description: '用户名',
        required: true
      },
      {
        name: '-d',
        description: '数据库名',
        required: true
      },
      {
        name: '-h',
        description: '主机名或IP地址',
        required: false
      },
      {
        name: '-p',
        description: '端口号',
        required: false
      }
    ],
    examples: [
      {
        description: '连接到本地PostgreSQL服务器上的特定数据库',
        code: 'psql -U postgres -d mydatabase'
      }
    ],
    tags: ['database', 'postgresql', 'connection', 'login'],
    docUrl: 'https://www.postgresql.org/docs/current/app-psql.html'
  },
  {
    id: 'psql-list-databases',
    category: 'Database',
    subcategory: 'PostgreSQL',
    title: '列出所有数据库',
    command: '\\l',
    description: '在PostgreSQL中列出所有可用的数据库',
    parameters: [],
    examples: [
      {
        description: '在psql中列出所有数据库',
        code: '\\l'
      }
    ],
    tags: ['database', 'postgresql', 'list', 'show'],
    docUrl: 'https://www.postgresql.org/docs/current/app-psql.html'
  },
  
  // MongoDB 命令
  {
    id: 'mongo-connect',
    category: 'Database',
    subcategory: 'MongoDB',
    title: '连接到MongoDB',
    command: 'mongo [connection-string]',
    description: '连接到MongoDB服务器或集群',
    parameters: [
      {
        name: 'connection-string',
        description: 'MongoDB连接字符串',
        required: false
      }
    ],
    examples: [
      {
        description: '连接到本地MongoDB服务器',
        code: 'mongo'
      },
      {
        description: '连接到特定数据库',
        code: 'mongo mongodb://localhost:27017/mydatabase'
      }
    ],
    tags: ['database', 'mongodb', 'connection', 'nosql'],
    docUrl: 'https://docs.mongodb.com/manual/reference/program/mongo/'
  },
  {
    id: 'mongo-show-dbs',
    category: 'Database',
    subcategory: 'MongoDB',
    title: '显示所有数据库',
    command: 'show dbs',
    description: '列出MongoDB服务器上的所有数据库',
    parameters: [],
    examples: [
      {
        description: '列出所有数据库',
        code: 'show dbs'
      }
    ],
    tags: ['database', 'mongodb', 'list', 'show'],
    docUrl: 'https://docs.mongodb.com/manual/reference/method/db.adminCommand/'
  },
  
  // Redis 命令
  {
    id: 'redis-cli',
    category: 'Database',
    subcategory: 'Redis',
    title: '启动Redis命令行',
    command: 'redis-cli -h [host] -p [port] -a [password]',
    description: '连接到Redis服务器并启动交互式命令行',
    parameters: [
      {
        name: '-h',
        description: '主机名或IP地址',
        required: false
      },
      {
        name: '-p',
        description: '端口号',
        required: false
      },
      {
        name: '-a',
        description: '密码（如果需要认证）',
        required: false
      }
    ],
    examples: [
      {
        description: '连接到本地Redis服务器',
        code: 'redis-cli'
      },
      {
        description: '连接到特定主机和端口的Redis',
        code: 'redis-cli -h 192.168.1.100 -p 6380'
      }
    ],
    tags: ['database', 'redis', 'cache', 'connection'],
    docUrl: 'https://redis.io/topics/rediscli'
  },
  {
    id: 'redis-set',
    category: 'Database',
    subcategory: 'Redis',
    title: '设置键值对',
    command: 'SET [key] [value]',
    description: '在Redis中设置一个键值对',
    parameters: [
      {
        name: 'key',
        description: '键名',
        required: true
      },
      {
        name: 'value',
        description: '值',
        required: true
      }
    ],
    examples: [
      {
        description: '设置简单的键值对',
        code: 'SET username john'
      },
      {
        description: '设置带过期时间的键值对（10秒）',
        code: 'SET logintoken abc123 EX 10'
      }
    ],
    tags: ['database', 'redis', 'set', 'key-value'],
    docUrl: 'https://redis.io/commands/set'
  }
]; 