/**
 * TaskTag Design System v3 - Usage Examples
 * 
 * Real-world examples showing how to use components from the design system.
 * Copy and adapt these patterns for your own applications.
 */

import { useState } from 'react';
import { Button, TextInput, Checkbox, RadioButton, Avatar, Textarea } from '../components';
import { Colors, Spacing, Radius, Typography } from './tokens';

/**
 * Example 1: Login Form
 * Demonstrates form inputs with validation states
 */
export function LoginFormExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div style={{
      backgroundColor: Colors.white,
      padding: Spacing.s32,
      borderRadius: Radius.r8,
      maxWidth: '400px'
    }}>
      <h2 style={{ marginBottom: Spacing.s24 }}>Sign In</h2>
      
      <div style={{ marginBottom: Spacing.s16 }}>
        <TextInput
          placeholder="Email address"
          value={email}
          onChange={setEmail}
          error={error}
        />
      </div>
      
      <div style={{ marginBottom: Spacing.s16 }}>
        <TextInput
          placeholder="Password"
          value={password}
          onChange={setPassword}
          error={error}
        />
      </div>
      
      <div style={{ marginBottom: Spacing.s24 }}>
        <Checkbox
          label="Remember me"
          checked={rememberMe}
          onChange={setRememberMe}
        />
      </div>
      
      <Button variant="primary" size="large">
        Sign In
      </Button>
    </div>
  );
}

/**
 * Example 2: User Profile Card
 * Shows avatar with text content
 */
export function UserProfileExample() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: Spacing.s16,
      padding: Spacing.s20,
      backgroundColor: Colors.surface,
      borderRadius: Radius.r8,
      border: `1px solid ${Colors.border}`
    }}>
      <Avatar type="initials" initials="JD" size="large" />
      
      <div>
        <h3 style={{ marginBottom: Spacing.s4 }}>John Doe</h3>
        <p className={Typography.web.secondaryBody} style={{ color: Colors.textSecondary }}>
          Product Designer
        </p>
      </div>
    </div>
  );
}

/**
 * Example 3: Settings Panel
 * Demonstrates radio buttons for single selection
 */
export function SettingsPanelExample() {
  const [theme, setTheme] = useState('light');

  return (
    <div style={{
      padding: Spacing.s24,
      backgroundColor: Colors.white,
      borderRadius: Radius.r8
    }}>
      <h3 style={{ marginBottom: Spacing.s16 }}>Theme Settings</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: Spacing.s12 }}>
        <RadioButton
          name="theme"
          value="light"
          label="Light Mode"
          checked={theme === 'light'}
          onChange={setTheme}
        />
        <RadioButton
          name="theme"
          value="dark"
          label="Dark Mode"
          checked={theme === 'dark'}
          onChange={setTheme}
        />
        <RadioButton
          name="theme"
          value="auto"
          label="Auto (System)"
          checked={theme === 'auto'}
          onChange={setTheme}
        />
      </div>
    </div>
  );
}

/**
 * Example 4: Feedback Form
 * Shows textarea with character count
 */
export function FeedbackFormExample() {
  const [feedback, setFeedback] = useState('');
  const maxLength = 500;

  return (
    <div style={{
      padding: Spacing.s32,
      backgroundColor: Colors.surface,
      borderRadius: Radius.r8
    }}>
      <h3 style={{ marginBottom: Spacing.s8 }}>Share Your Feedback</h3>
      <p className={Typography.web.secondaryBody} style={{ 
        color: Colors.textSecondary,
        marginBottom: Spacing.s16 
      }}>
        Help us improve by sharing your thoughts
      </p>
      
      <Textarea
        placeholder="What's on your mind?"
        value={feedback}
        onChange={setFeedback}
        rows={6}
      />
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: Spacing.s16 
      }}>
        <span className={Typography.web.metadataPrimary} style={{ color: Colors.textSecondary }}>
          {feedback.length} / {maxLength}
        </span>
        <Button variant="primary">Submit</Button>
      </div>
    </div>
  );
}

/**
 * Example 5: Action Buttons Group
 * Shows different button variants in a row
 */
export function ActionButtonsExample() {
  return (
    <div style={{ 
      display: 'flex', 
      gap: Spacing.s12,
      flexWrap: 'wrap' 
    }}>
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="outlined">More Options</Button>
      <Button variant="text">Reset</Button>
    </div>
  );
}

/**
 * Example 6: Task List Item
 * Complex component combining multiple design system elements
 */
export function TaskListItemExample() {
  const [completed, setCompleted] = useState(false);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: Spacing.s16,
      padding: Spacing.s16,
      backgroundColor: Colors.white,
      borderRadius: Radius.r8,
      border: `1px solid ${Colors.border}`
    }}>
      <Checkbox
        variant="circular"
        checked={completed}
        onChange={setCompleted}
      />
      
      <div style={{ flex: 1 }}>
        <h4 style={{ 
          marginBottom: Spacing.s4,
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? Colors.textSecondary : Colors.textPrimary
        }}>
          Complete design system documentation
        </h4>
        <p className={Typography.web.metadataPrimary} style={{ color: Colors.textSecondary }}>
          Due today • High priority
        </p>
      </div>
      
      <Avatar type="initials" initials="JD" size="small" />
    </div>
  );
}

/**
 * Example 7: Input with Label
 * Proper form field structure
 */
export function FormFieldExample() {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);

  return (
    <div style={{ marginBottom: Spacing.s20 }}>
      <label 
        style={{ 
          display: 'block',
          marginBottom: Spacing.s8,
          color: Colors.textPrimary
        }}
      >
        Email Address
      </label>
      
      <TextInput
        placeholder="you@example.com"
        value={value}
        onChange={(val) => {
          setValue(val);
          setHasError(!val.includes('@'));
        }}
        error={hasError}
      />
      
      {hasError && (
        <p 
          className={Typography.web.metadataPrimary}
          style={{ 
            color: Colors.redStatus,
            marginTop: Spacing.s4 
          }}
        >
          Please enter a valid email address
        </p>
      )}
    </div>
  );
}
