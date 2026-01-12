// Types for Task Panel components

export interface ChecklistItemData {
  id: string;
  text: string;
  checked: boolean;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'Owner' | 'Assignee' | 'Viewer';
  avatarUrl?: string;
  initials?: string;
  color?: string;
  isPending?: boolean;
}

export interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatarUrl?: string;
  };
  action: string;
  timestamp: string;
  tags?: Array<{
    type: 'folder' | 'hash';
    label: string;
    color: string;
  }>;
}

export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadedBy: string;
  uploadedAt: string;
  url?: string;
  thumbnail?: string;
}
