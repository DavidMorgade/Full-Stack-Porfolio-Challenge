// Theming
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyle';
import { darkTheme, lightTheme } from './components/GlobalStyles/Theme';
// Hooks
import { useState } from 'react';
// UI
import ContactSection from './components/UI/contactsection/ContactSection';
import Footer from './components/UI/footer/Footer';
import Main from './components/UI/main/Main';
// Custom hook
import { useDarkMode } from './hooks/useDarkMode';
// Components
import LoadingSpinner from './components/Spinners/LoadingSpinner';
import Failed from './components/FormResults/Failed';
import Success from './components/FormResults/Success';
// Lang Context
import { LanguageWrapper } from './context/useLangContext';

function App() {
  // Toggler between light and dark styled components
  const [theme, themeToggler] = useDarkMode();
  // Translator to the switchers
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // Set loadingSpinner while fetching the server
  const [formLoading, setFormLoading] = useState(false);
  // Sets a different screen depending if the form was a success or not
  const [responseMessage, setResponseMessage] = useState('');
  const [formFailed, setFormFailed] = useState(false);
  const [formSent, setFormSent] = useState(false);

  return (
    <LanguageWrapper>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Main theme={theme} toggleTheme={themeToggler} />
        {/* Conditional renders form section depending on the form State */}
        {formLoading ? (
          <LoadingSpinner />
        ) : formFailed && formSent ? (
          <Failed setFormSent={setFormSent} message={responseMessage} />
        ) : !formFailed && formSent ? (
          <Success message={responseMessage} />
        ) : (
          <ContactSection
            setFormSent={setFormSent}
            setFormFailed={setFormFailed}
            setResponseMessage={setResponseMessage}
            formLoading={setFormLoading}
          />
        )}
        <Footer theme={theme} />
      </ThemeProvider>
    </LanguageWrapper>
  );
}

export default App;
