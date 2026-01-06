import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeExampleProps {
  code: string;
  title?: string;
}

export function CodeExample({ code, title }: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback to execCommand method
        fallbackCopyToClipboard(code);
      }
    } catch (err) {
      // If Clipboard API fails, use fallback
      fallbackCopyToClipboard(code);
    }
  };

  const fallbackCopyToClipboard = (text: string) => {
    // Create a temporary textarea element
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Make it invisible
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      // Execute copy command
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Fallback: Failed to copy code:', err);
    }
    
    // Remove the temporary element
    document.body.removeChild(textArea);
  };

  return (
    <div 
      className="relative rounded-lg overflow-hidden"
      style={{ 
        backgroundColor: 'var(--grey-01)',
        border: '1px solid var(--grey-03)'
      }}
    >
      {title && (
        <div 
          className="px-4 py-2"
          style={{ 
            backgroundColor: 'var(--grey-02)',
            borderBottom: '1px solid var(--grey-03)'
          }}
        >
          <p style={{ color: 'var(--text-secondary)' }}>{title}</p>
        </div>
      )}
      
      <div className="relative">
        <pre 
          className="p-4 overflow-x-auto text-web-secondary-body"
          style={{ 
            color: 'var(--text-primary)',
            margin: 0
          }}
        >
          <code>{code}</code>
        </pre>
        
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded transition-all duration-200"
          style={{
            backgroundColor: copied ? 'var(--secondary-green)' : 'var(--grey-03)',
            border: '1px solid var(--grey-04)'
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.currentTarget.style.backgroundColor = 'var(--grey-04)';
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.currentTarget.style.backgroundColor = 'var(--grey-03)';
            }
          }}
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <Check size={16} style={{ color: 'var(--white)' }} />
          ) : (
            <Copy size={16} style={{ color: 'var(--text-primary)' }} />
          )}
        </button>
      </div>
    </div>
  );
}