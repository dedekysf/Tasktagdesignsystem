import { CircleCheckBig } from 'lucide-react';

interface SuccessTooltipProps {
  message: string;
}

export function SuccessTooltip({ message }: SuccessTooltipProps) {
  return (
    <div 
      style={{
        backgroundColor: 'var(--white)',
        border: '1px solid var(--grey-03)',
        borderRadius: 'var(--radius-4)',
        padding: 'var(--spacing-8) var(--spacing-12)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-8)',
        boxShadow: '0px 5px 25px 0px rgba(0, 0, 0, 0.05)'
      }}
    >
      <CircleCheckBig 
        size={16}
        color="var(--secondary-green)"
        strokeWidth={2}
      />
      <p 
        style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '14px', 
          lineHeight: '16px',
          margin: 0
        }}
      >
        {message}
      </p>
    </div>
  );
}
