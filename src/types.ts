export interface Command {
  id: string;
  category: string;
  subcategory?: string;
  title: string;
  command: string;
  description: string;
  parameters?: Parameter[];
  examples?: Example[];
  tags: string[];
  docUrl?: string;
  dangerLevel?: number; // 0: 安全, 1: 中等风险, 2: 高风险
} 