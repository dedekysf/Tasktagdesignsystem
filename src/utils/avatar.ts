// Avatar utility functions

export function getInitials(name: string): string {
  if (!name) return "";
  
  const parts = name.trim().split(/\s+/);
  
  if (parts.length === 1) {
    // Single name: take first two characters
    return parts[0].substring(0, 2).toUpperCase();
  } else {
    // Multiple names: take first char of first and last name
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
}

export function getAvatarColor(name: string): string {
  // Using pastel foundation colors from design system
  const colors = [
    "var(--light-peach)",
    "var(--light-purple)",
    "var(--light-lavender)",
    "var(--light-lavender-blue)",
    "var(--light-mint)",
    "var(--light-sky)",
    "var(--light-pink)",
    "var(--light-cream)",
  ];
  
  // Simple hash function based on name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}