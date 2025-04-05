import { Command } from '../types';

export const databaseCommands: Command[] = [
  // MySQL命令
  {
    id: 'mysql-connect',
    category: 'Database',
    subcategory: 'MySQL',
    title: 'MySQL连接',
    command: 'mysql -u [username] -p -h [host]',
    description: '连接到MySQL服务器',
    parameters: [
      {
        name: '-u',
        description: '用户名',
        required: true
      },
      {
        name: '-p',
        description: '提示输入密码',
        required: false
      },
      {
        name: '-h',
        description: '主机名或IP地址',
        required: false
      }
    ],
    examples: [
      {
        description: '本地连接',
        code: 'mysql -u root -p'
      },
      {
        description: '连接远程服务器',
        code: 'mysql -u username -p -h 192.168.1.100'
      }
    ],
    tags: ['database', 'mysql', 'connect', '数据库'],
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
        description: '显示所有数据库',
        code: 'SHOW DATABASES;'
      }
    ],
    tags: ['database', 'mysql', 'show', '数据库'],
    docUrl: 'https://dev.mysql.com/doc/refman/8.0/en/show-databases.html'
  },
  
  // PostgreSQL命令
  {
    id: 'pg-connect',
    category: 'Database',
    subcategory: 'PostgreSQL',
    title: 'PostgreSQL连接',
    command: 'psql -U [username] -d [database] -h [host]',
    description: '连接到PostgreSQL数据库',
    parameters: [
      {
        name: '-U',
        description: '用户名',
        required: true
      },
      {
        name: '-d',
        description: '数据库名称',
        required: true
      },
      {
        name: '-h',
        description: '主机名或IP地址',
        required: false
      }
    ],
    examples: [
      {
        description: '本地连接',
        code: 'psql -U postgres -d mydatabase'
      },
      {
        description: '连接远程服务器',
        code: 'psql -U username -d mydatabase -h 192.168.1.100'
      }
    ],
    tags: ['database', 'postgresql', 'connect', 'psql', '数据库'],
    docUrl: 'https://www.postgresql.org/docs/current/app-psql.html'
  },
  {
    id: 'pg-list-databases',
    category: 'Database',
    subcategory: 'PostgreSQL',
    title: '列出所有数据库',
    command: '\\l',
    description: '在psql中列出所有可用的数据库',
    parameters: [],
    examples: [
      {
        description: '在psql交互终端中列出数据库',
        code: '\\l'
      }
    ],
    tags: ['database', 'postgresql', 'list', 'psql', '数据库'],
    docUrl: 'https://www.postgresql.org/docs/current/app-psql.html#APP-PSQL-META-COMMANDS'
  },
  
  // MongoDB命令
  {
    id: 'mongo-connect',
    category: 'Database',
    subcategory: 'MongoDB',
    title: 'MongoDB连接',
    command: 'mongosh "mongodb://[username]:[password]@[host]:[port]/[database]"',
    description: '使用MongoDB Shell连接到MongoDB数据库',
    parameters: [
      {
        name: 'username',
        description: '用户名',
        required: false
      },
      {
        name: 'password',
        description: '密码',
        required: false
      },
      {
        name: 'host',
        description: '主机名或IP',
        required: true
      },
      {
        name: 'port',
        description: '端口号',
        required: false
      },
      {
        name: 'database',
        description: '数据库名称',
        required: false
      }
    ],
    examples: [
      {
        description: '本地连接',
        code: 'mongosh'
      },
      {
        description: '带认证的连接',
        code: 'mongosh "mongodb://username:password@localhost:27017/mydb"'
      }
    ],
    tags: ['database', 'mongodb', 'connect', 'mongosh', '数据库'],
    docUrl: 'https://docs.mongodb.com/mongodb-shell/'
  },
  {
    id: 'mongo-show-dbs',
    category: 'Database',
    subcategory: 'MongoDB',
    title: '显示所有数据库',
    command: 'show dbs',
    description: '在MongoDB Shell中显示所有数据库',
    parameters: [],
    examples: [
      {
        description: '列出所有数据库',
        code: 'show dbs'
      }
    ],
    tags: ['database', 'mongodb', 'show', 'list', '数据库'],
    docUrl: 'https://docs.mongodb.com/mongodb-shell/reference/methods/#database-methods'
  }
]; 