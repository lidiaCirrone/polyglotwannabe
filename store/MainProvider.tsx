'use client';

import { getLanguage, Language } from '@/utils/globalVariables';
import React, { createContext, useContext, useMemo, useState } from 'react';

type State = {
  language: Language,
  showModal: boolean
}

type MainContextType = {
  state: State;
  updateLanguage: (name: string) => void;
  updateShowModal: (visibility: boolean) => void;
};

const initialState = {
  language: getLanguage("english"),
  showModal: false
}

const MainContext = createContext<MainContextType | undefined>(undefined);

export function MainProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialState)

  const updateLanguage = (slug: string) => setState(prevState => ({ ...prevState, language: getLanguage(slug) }))

  const updateShowModal = (visibility: boolean) => (setState(prevState =>
    ({ ...prevState, showModal: visibility })
  ))

  const value = useMemo(
    () => ({
      state,
      updateLanguage,
      updateShowModal
    }),
    [state]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export function useMainContext() {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error('useMainContext must be used within a MainProvider');
  }
  return context;
}