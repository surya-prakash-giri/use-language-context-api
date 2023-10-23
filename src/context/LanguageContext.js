import React, {createContext, useState, useContext} from 'react'
import languages from '../model/Language';
//Create a context
const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    
    const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
    const toggleLanguage = () => {
      const currentIndex = languages.indexOf(currentLanguage);
      const nextIndex = (currentIndex + 1) % languages.length;
      setCurrentLanguage(languages[nextIndex]);
    };

    return (
      <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    return useContext(LanguageContext);
}
