import React, { createContext, useContext, useState, useEffect } from 'react';

type TextSize = 'small' | 'medium' | 'large';

interface TextSizeContextType {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

export function TextSizeProvider({ children }: { children: React.ReactNode }) {
  const [textSize, setTextSize] = useState<TextSize>('medium');

  useEffect(() => {
    const root = document.documentElement;
    switch (textSize) {
      case 'small':
        root.style.setProperty('--font-size', '14px');
        break;
      case 'medium':
        root.style.setProperty('--font-size', '16px');
        break;
      case 'large':
        root.style.setProperty('--font-size', '18px');
        break;
    }
  }, [textSize]);

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </TextSizeContext.Provider>
  );
}

export function useTextSize() {
  const context = useContext(TextSizeContext);
  if (context === undefined) {
    throw new Error('useTextSize must be used within a TextSizeProvider');
  }
  return context;
}
