/**
 *
 * FideLight App
 *
 */

import React from 'react';

import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

// import { initPerformance } from './app/platform/performance';
// import { initCrashlytics } from './app/platform/crashlytics';
// import { initAnalytics } from './app/platform/analytics';

import LanguageProvider from './app/containers/LanguageProvider';
import AppContainer from './app/containers/App';
import { translationMessages } from './app/i18n';
import configureStore from './app/configureStore';

const initialState = {};
const store = configureStore(initialState);
enableScreens();

// setTimeout(() => {
//   initAnalytics();
//   initCrashlytics();
//   initPerformance();
// }, 2000);

function App() {
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <AppContainer />
      </LanguageProvider>
    </Provider>
  );
}

export default App;
