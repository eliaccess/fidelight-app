/**
 *
 * Fidelight
 *
 */

import React from 'react';
import { Provider } from 'react-redux';

import LanguageProvider from './app/containers/LanguageProvider';
import AppContainer from './app/containers/App';
import { ToastProvider, ToastProps } from './app/theme/Toast';
import { translationMessages } from './app/i18n';
import configureStore from './app/configureStore';
import Dimensions from './app/theme/Dimensions';
import { ThemeProvider } from './app/theme/ThemeManager';

const initialState = {};
const store = configureStore(initialState);

const toastTheme = {
  position: 'bottom',
  bottomOffset: Dimensions.bottomSpacing + 32,
  topOffset: Dimensions.headerHeight - 32,
  type: 'success',
} as ToastProps;

function App() {
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <ToastProvider defaultTheme={toastTheme}>
          <ThemeProvider>
            <AppContainer />
          </ThemeProvider>
        </ToastProvider>
      </LanguageProvider>
    </Provider>
  );
}

export default App;
