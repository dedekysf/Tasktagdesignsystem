import { Loader2 } from 'lucide-react';

export function SearchLoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="w-6 h-6 text-muted-foreground animate-spin" strokeWidth={2} />
    </div>
  );
}
