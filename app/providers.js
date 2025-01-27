'use client'

// store
import { MainProvider } from '@/store/MainProvider';

export function Providers({ children }) {
  return (
    <MainProvider
    >
      {children}
    </MainProvider>
  );
}