import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageWrapper({ children }) {
  const [language, setLanguage] = useState('en');
  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguageContext() {
  return useContext(LanguageContext);
}
