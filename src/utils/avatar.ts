// Avatar utility functions
import { getUserByEmail, getColorFromEmail as getUserColorFromEmail, getInitials as getUserInitials } from "../data/userData";

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

/**
 * Get avatar color - now uses userData for consistency
 * @param identifier - Can be email or name
 * @returns Color string (hex)
 */
export function getAvatarColor(identifier: string): string {
  // Try to find user by email first
  const user = getUserByEmail(identifier);
  if (user) {
    return user.color;
  }
  
  // Fallback: generate color from identifier
  return getUserColorFromEmail(identifier);
}