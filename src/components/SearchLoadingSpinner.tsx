import React from 'react';
import { Loader2 } from 'lucide-react';

export function SearchLoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-6">
      <Loader2 className="w-6 h-6 text-[var(--text-secondary)] animate-spin" />
    </div>
  );
}
