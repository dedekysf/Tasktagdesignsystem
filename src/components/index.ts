/**
 * TaskTag Design System v3 - Component Library
 * 
 * Central export file for all reusable components and types.
 * Import components individually or as a group.
 * 
 * Usage Examples:
 * - import { Button, TextInput, RadioButton } from './components';
 * - import { Avatar, Checkbox } from './components';
 * - import type { ButtonVariant, AvatarSize } from './components';
 */

// Interactive Components
export { Avatar } from './AvatarComponent';
export { AvatarGroup } from './AvatarGroup';
export { Button } from './Button';
export { Checkbox } from './Checkbox';
export { RadioButton } from './RadioButton';
export { TextInput } from './TextInput';
export { Textarea } from './Textarea';
export { Dropdown } from './Dropdown';
export { Datepicker } from './Datepicker';
export { Modal } from './Modal';
export { Tooltip } from './Tooltip';

// Layout & Navigation Components
export { Sidebar } from './Sidebar';
export { SidebarDropdown } from './SidebarDropdown';
export { SidebarMenuItem } from './SidebarMenuItem';
export { SectionHeader } from './SectionHeader';

// Foundation Display Components
export { ColorItem } from './ColorItem';
export { ColorSwatch } from './ColorSwatch';
export { TypographyItem } from './TypographyItem';
export { TypographyExample } from './TypographyExample';
export { RadiusItem } from './RadiusItem';
export { RadiusExample } from './RadiusExample';
export { ElevationItem } from './ElevationItem';
export { ElevationExample } from './ElevationExample';
export { SpacingItem } from './SpacingItem';
export { LogoItem } from './LogoItem';
export { CodeExample } from './CodeExample';

// TypeScript Types - Re-export all types for easy importing
export type {
  ButtonVariant,
  ButtonSize,
  ButtonShape,
  ButtonStyle,
  ButtonIconPosition,
  ButtonState,
  AvatarSize,
  AvatarType,
  CheckboxVariant,
  DropdownOption
} from './types';