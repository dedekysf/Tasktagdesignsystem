export interface AssigneeConfig {
  name: string;
  initials: string;
  color: string;
  avatar: string | null;
}

export const ASSIGNEES: AssigneeConfig[] = [
  { name: 'Melissa Monroe', initials: 'MM', color: '#5B7C99', avatar: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjM4NzQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { name: 'Theresa Webb', initials: 'TW', color: '#C4A053', avatar: null },
  { name: 'Robert Fox', initials: 'RF', color: '#6B8E6F', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2NjM5OTc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { name: 'Jenny Wilson', initials: 'JW', color: '#CC7A50', avatar: null },
  { name: 'Wade Warren', initials: 'WW', color: '#9B6B8E', avatar: null },
  { name: 'Esther Howard', initials: 'EH', color: '#8B6F47', avatar: null },
];

export function getAssigneeConfig(name: string): AssigneeConfig {
  const assignee = ASSIGNEES.find(a => a.name === name);
  
  if (assignee) {
    return assignee;
  }
  
  // Fallback: generate initials and use default color
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  return {
    name,
    initials,
    color: '#999999',
    avatar: null,
  };
}
