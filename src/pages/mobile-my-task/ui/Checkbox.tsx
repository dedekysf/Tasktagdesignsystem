import { Check } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
      className={`size-5 rounded border flex items-center justify-center transition-colors ${
        checked 
          ? 'bg-foreground border-foreground' 
          : 'bg-transparent border-grey-4'
      }`}
    >
      {checked && <Check className="w-3.5 h-3.5 text-background" strokeWidth={3} />}
    </button>
  );
}
