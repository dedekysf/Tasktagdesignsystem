import { LoaderCircle } from 'lucide-react';

export function LoadMoreSpinner() {
  return (
    <div className="flex items-center justify-center py-4">
      <LoaderCircle className="w-4 h-4 text-muted-foreground animate-spin" strokeWidth={2} />
    </div>
  );
}
