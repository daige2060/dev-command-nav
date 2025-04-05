import { render, screen, fireEvent } from '@testing-library/react';
import CommandCard from './CommandCard';

describe('CommandCard', () => {
  const mockCommand = {
    id: 'test-command',
    category: 'Test',
    title: 'Test Command',
    command: 'test --command',
    description: 'This is a test command',
    tags: ['test', 'example'],
  };
  
  const mockOnClick = jest.fn();
  
  it('renders command information correctly', () => {
    render(<CommandCard command={mockCommand} onClick={mockOnClick} />);
    
    // 验证标题、描述和命令文本是否正确渲染
    expect(screen.getByText('Test Command')).toBeInTheDocument();
    expect(screen.getByText('This is a test command')).toBeInTheDocument();
    expect(screen.getByText('test --command')).toBeInTheDocument();
    
    // 验证标签是否存在
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('example')).toBeInTheDocument();
    
    // 验证类别徽章是否存在
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    render(<CommandCard command={mockCommand} onClick={mockOnClick} />);
    
    // 点击卡片并验证onClick函数是否被调用
    fireEvent.click(screen.getByText('Test Command'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
}); 