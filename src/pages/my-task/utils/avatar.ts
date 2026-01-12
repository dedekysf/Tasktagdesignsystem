// Avatar utility functions

export function getInitials(name: string): string {
  if (!name) return "";
  
  const parts = name.trim().split(" ");
  
  if (parts.length === 1) {
    // Single name: take first two characters
    return parts[0].substring(0, 2).toUpperCase();
  } else {
    // Multiple names: take first char of first and last name
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
}

export function getAvatarColor(name: string): string {
  const colors = [
    "#7B61FF",
    "#FF4444", 
    "#138EFF",
    "#18A87D",
    "#FBBD42",
    "#A85796",
    "#CC7351",
    "#E6B566",
    "#1572A1",
    "#655D8A"
  ];
  
  // Simple hash function based on name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}
