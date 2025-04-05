import { Command } from '../types';
import { gitCommands } from './git-commands';
import { condaCommands } from './conda-commands';
import { cmdCommands } from './cmd-commands';
import { powershellCommands } from './powershell-commands';
import { linuxCommands } from './linux-commands';
import { npmCommands } from './npm-commands';
import { databaseCommands } from './database-commands';
import { networkCommands } from './network-commands';

// 合并所有命令
export const commands: Command[] = [
  ...gitCommands,
  ...condaCommands,
  ...cmdCommands,
  ...powershellCommands,
  ...linuxCommands,
  ...npmCommands,
  ...databaseCommands,
  ...networkCommands
]; 