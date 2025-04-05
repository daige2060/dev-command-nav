export interface Command {
  id: string;
  category: string;
  subcategory?: string;
  title: string;
  command: string;
  description: string;
  parameters: Parameter[];
  examples: Example[];
  alias?: string[];
  dangerLevel?: number; // 0-3, 3为最危险
  tags?: string[];
}

export interface Parameter {
  name: string;
  description: string;
  required?: boolean;
}

export interface Example {
  description: string;
  code: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  subcategories?: Category[];
} 