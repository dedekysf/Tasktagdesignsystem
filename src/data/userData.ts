/**
 * Central User Data Source
 * 
 * This file contains all user/member data used across the application.
 * All pages should import from this file to ensure consistent avatar colors and data.
 * 
 * Colors used are from the design system's pastel color foundations.
 */

export interface User {
  id: string;
  name: string;
  email: string;
  initials: string;
  color: string; // Pastel color from foundations
  avatarUrl?: string; // Optional image URL
  role?: 'Owner' | 'Assignee' | 'Viewer';
}

// Pastel colors from design system foundations
const PASTEL_COLORS = [
  '#1572a1', // pastel-blue
  '#655d8a', // pastel-purple
  '#a85796', // pastel-magenta
  '#cc7351', // pastel-orange
  '#e6b566', // pastel-yellow
  '#18a87d', // secondary-green
  '#7b61ff', // purple
  '#c072cd', // light-magenta
  '#fc7f5b', // orange
  '#138eff', // blue
];

/**
 * Master list of all users in the system (15 users - all with avatar images)
 */
export const ALL_USERS: User[] = [
  {
    id: 'user-001',
    name: 'Melissa Smith',
    email: 'melissa.smith@tasktag.com',
    initials: 'MS',
    color: PASTEL_COLORS[0], // pastel-blue
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-002',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@tasktag.com',
    initials: 'SJ',
    color: PASTEL_COLORS[1], // pastel-purple
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-003',
    name: 'Michael Chen',
    email: 'michael.chen@tasktag.com',
    initials: 'MC',
    color: PASTEL_COLORS[2], // pastel-magenta
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-004',
    name: 'Emma Wilson',
    email: 'emma.wilson@tasktag.com',
    initials: 'EW',
    color: PASTEL_COLORS[3], // pastel-orange
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-005',
    name: 'James Rodriguez',
    email: 'james.rodriguez@tasktag.com',
    initials: 'JR',
    color: PASTEL_COLORS[4], // pastel-yellow
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-006',
    name: 'Olivia Martinez',
    email: 'olivia.martinez@tasktag.com',
    initials: 'OM',
    color: PASTEL_COLORS[5], // secondary-green
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    role: 'Viewer'
  },
  {
    id: 'user-007',
    name: 'Daniel Kim',
    email: 'daniel.kim@tasktag.com',
    initials: 'DK',
    color: PASTEL_COLORS[6], // purple
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-008',
    name: 'Sophia Anderson',
    email: 'sophia.anderson@tasktag.com',
    initials: 'SA',
    color: PASTEL_COLORS[7], // light-magenta
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-009',
    name: 'Alexander Lee',
    email: 'alexander.lee@tasktag.com',
    initials: 'AL',
    color: PASTEL_COLORS[8], // orange
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-010',
    name: 'Isabella Thompson',
    email: 'isabella.thompson@tasktag.com',
    initials: 'IT',
    color: PASTEL_COLORS[9], // blue
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop',
    role: 'Viewer'
  },
  {
    id: 'user-011',
    name: 'Mason Gabriel',
    email: 'mason.gabriel@tasktag.com',
    initials: 'MG',
    color: PASTEL_COLORS[0], // pastel-blue
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-012',
    name: 'Ava Taylor',
    email: 'ava.taylor@tasktag.com',
    initials: 'AT',
    color: PASTEL_COLORS[1], // pastel-purple
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-013',
    name: 'Ethan Moore',
    email: 'ethan.moore@tasktag.com',
    initials: 'EM',
    color: PASTEL_COLORS[2], // pastel-magenta
    avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop',
    role: 'Assignee'
  },
  {
    id: 'user-014',
    name: 'Mia Jackson',
    email: 'mia.jackson@tasktag.com',
    initials: 'MJ',
    color: PASTEL_COLORS[3], // pastel-orange
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    role: 'Viewer'
  },
  {
    id: 'user-015',
    name: 'Noah White',
    email: 'noah.white@tasktag.com',
    initials: 'NW',
    color: PASTEL_COLORS[4], // pastel-yellow
    avatarUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop',
    role: 'Assignee'
  }
];

/**
 * Task Panel Owner - Melissa Monroe (separate from ALL_USERS)
 * This user is the owner and should not appear in assignee selection modals
 */
export const TASK_PANEL_OWNER: User = {
  id: 'owner-001',
  name: 'Melissa Monroe',
  email: 'melissa.monroe@tasktag.com',
  initials: 'MM',
  color: PASTEL_COLORS[0], // pastel-blue
  avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
  role: 'Owner'
};

/**
 * Helper function to get user by email
 * This ensures consistent data across the app
 */
export function getUserByEmail(email: string): User | undefined {
  return ALL_USERS.find(user => user.email.toLowerCase() === email.toLowerCase());
}

/**
 * Helper function to get user by ID
 */
export function getUserById(id: string): User | undefined {
  return ALL_USERS.find(user => user.id === id);
}

/**
 * Helper function to get multiple users by their IDs
 */
export function getUsersByIds(ids: string[]): User[] {
  return ids.map(id => getUserById(id)).filter((user): user is User => user !== undefined);
}

/**
 * Helper function to get a random subset of users
 * Useful for mock data
 */
export function getRandomUsers(count: number): User[] {
  const shuffled = [...ALL_USERS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Helper function to search users by name or email
 */
export function searchUsers(query: string): User[] {
  const lowerQuery = query.toLowerCase();
  return ALL_USERS.filter(user => 
    user.name.toLowerCase().includes(lowerQuery) || 
    user.email.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get a consistent color for a user based on their email
 * This is used when we need to generate a user that's not in our master list (e.g., email invites)
 */
export function getColorFromEmail(email: string): string {
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    hash = email.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % PASTEL_COLORS.length;
  return PASTEL_COLORS[index];
}

/**
 * Generate initials from a name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}