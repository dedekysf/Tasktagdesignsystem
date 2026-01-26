// Using colors from design system foundation
const AVATAR_COLORS = [
  '#1572a1', // --pastel-blue
  '#655d8a', // --pastel-purple
  '#a85796', // --pastel-magenta
  '#cc7351', // --pastel-orange
  '#e6b566', // --pastel-yellow
  '#138eff', // --blue
  '#7b61ff', // --purple
  '#c072cd', // --light-magenta
  '#a620b2', // --dark-magenta
  '#fc7f5b', // --orange
];

export function getAvatarProps(name: string) {
  const initials = name
    .split(' ')
    .map(n => n.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  // Generate consistent color based on name
  const charCodeSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const colorIndex = charCodeSum % AVATAR_COLORS.length;
  
  return {
    initials,
    backgroundColor: AVATAR_COLORS[colorIndex]
  };
}