import { createContext, useContext, useState } from 'react';
import { SupportedLang } from '../types/SupportedLang';

type LangContextType = {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
};

const LangContext = createContext<LangContextType | null>(null);

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<SupportedLang>('en'); // default
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within LangProvider');
  return context;
};
